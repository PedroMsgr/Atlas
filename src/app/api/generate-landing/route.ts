/**
 * API Route para generación dinámica de landing TSX a partir de datos de configuración.
 * - Recibe un token unitario por POST y consulta la API GraphQL para obtener la configuración.
 * - Genera un archivo page.tsx con la landing personalizada usando la función generateLandingTSX.
 * - Intenta guardar el archivo en la ruta del proyecto, y si falla por permisos, lo guarda en /tmp.
 * - Devuelve JSON con éxito o error detallado.
 *
 * Seguridad y manejo de errores:
 * - Valida la presencia del token.
 * - Maneja errores de consulta GraphQL, generación de TSX y escritura de archivos.
 * - Soporta fallback para entornos de solo lectura (ej: Vercel).
 */

import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { createApolloClient } from "@/lib/apollo-client";
import { generateLandingTSX } from "@/lib/landing-generator";
import { LANDING_DATA_QUERY } from "@/graphql/queries/config.queries";

export async function POST(req: NextRequest) {
  try {
    const { token } = (await req.json()) as { token?: string };
    if (!token) {
      return NextResponse.json(
        { error: 'Falta el campo "token" en el body' },
        { status: 400 }
      );
    }

    // 1) Creamos cliente Apollo
    const apollo = createApolloClient();
    console.log("[generate-landing] Apollo client creado");

    // 2) Traemos la data con la query LANDING_DATA_QUERY
    let data, errors;
    try {
      const result = await apollo.query<{ landingData: any }>({
        query: LANDING_DATA_QUERY,
        variables: { token },
      });
      data = result.data;
      errors = result.errors;
      // console.log(
      //   "[generate-landing] Data recibida de GraphQL",
      //   JSON.stringify(data)
      // );
    } catch (gqlErr) {
      console.error("[generate-landing] Error en Apollo query:", gqlErr);
      return NextResponse.json(
        {
          error:
            "Error consultando datos de landing: " + (gqlErr as any).message,
        },
        { status: 500 }
      );
    }

    if (errors && errors.length > 0) {
      console.error("Errores GraphQL en landingData:", errors);
      return NextResponse.json(
        { error: "Error generando landing desde GraphQL" },
        { status: 500 }
      );
    }

    const config = data?.landingData;
    if (!config) {
      return NextResponse.json(
        { error: "No se encontró configuración para ese token" },
        { status: 404 }
      );
    }

    // 3) Generamos el TSX con la función que definimos
    let tsxString = "";
    try {
      tsxString = generateLandingTSX(config);
      console.log("[generate-landing] TSX generado correctamente");
    } catch (genErr) {
      console.error("[generate-landing] Error generando TSX:", genErr);
      return NextResponse.json(
        { error: "Error generando el archivo TSX: " + (genErr as any).message },
        { status: 500 }
      );
    }

    // 4) Grabamos page.tsx en /src/app/emulator/page.tsx
    // En vercel no fuciona la escritura de archivos en el sistema de archivos del proyecto
    const emulatorDir = path.join(process.cwd(), "src", "app", "emulator");
    const emulatorPagePath = path.join(emulatorDir, "page.tsx");
    try {
      await fs.mkdir(emulatorDir, { recursive: true });
      await fs.writeFile(emulatorPagePath, tsxString, "utf8");
      console.log(`[generate-landing] Archivo escrito en ${emulatorPagePath}`);
    } catch (fsErr: any) {
      console.error(
        "[generate-landing] Error escribiendo archivo en ruta de proyecto:",
        fsErr
      );
      // Si estamos en Vercel y hay error de permisos, intentamos en /tmp
      if (
        fsErr.code === "EACCES" ||
        fsErr.code === "EROFS" ||
        (fsErr.message && fsErr.message.includes("read-only"))
      ) {
        try {
          const tmpPath = path.join("/tmp", "page.tsx");
          await fs.writeFile(tmpPath, tsxString, "utf8");
          console.log(`[generate-landing] Archivo escrito en /tmp/page.tsx`);
          return NextResponse.json({
            success: true,
            tmpPath,
            warning:
              "Archivo escrito en /tmp por error de permisos en ruta de proyecto",
          });
        } catch (tmpErr) {
          console.error(
            "[generate-landing] Error escribiendo archivo en /tmp:",
            tmpErr
          );
          return NextResponse.json(
            {
              error:
                "Error escribiendo archivo en /tmp: " + (tmpErr as any).message,
            },
            { status: 500 }
          );
        }
      }
      return NextResponse.json(
        { error: "Error escribiendo archivo: " + fsErr.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Error en /api/generate-landing:", err);
    return NextResponse.json(
      { error: "Error interno: " + err.message },
      { status: 500 }
    );
  }
}
