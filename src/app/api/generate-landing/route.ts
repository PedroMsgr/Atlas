// src/app/api/generate-landing/route.ts

import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { createApolloClient } from "@/lib/apollo-client";
import { gql } from "@apollo/client";
import { generateLandingTSX } from "@/lib/landing-generator";

export async function POST(req: NextRequest) {
  try {
    const { token } = (await req.json()) as { token?: string };
    if (!token) {
      return NextResponse.json({ error: 'Falta el campo "token" en el body' }, { status: 400 });
    }

    // 1) Creamos cliente Apollo
    const apollo = createApolloClient();

    // 2) Traemos la data con la query LANDING_DATA_QUERY
    const { data, errors } = await apollo.query<{ landingData: any }>({
      query: gql`
        query LandingData($token: String!) {
          landingData(token: $token) {
            id
            name
            pageTitle
            pageDescription
            servicesDescription
            iconUrl
            footerInfo
            bannerUrl

            sections {
              id
              title
              body
              order
              images {
                id
                url
                altText
                order
              }
            }

            articles {
              id
              title
              content
              url
              order
              publishedAt
            }

            images {
              id
              url
              altText
              type
              order
            }

            legalSteps {
              id
              title
              description
              order
            }

            footerLinks {
              id
              label
              url
              order
            }
          }
        }
      `,
      variables: { token },
    });

    if (errors && errors.length > 0) {
      console.error("Errores GraphQL en landingData:", errors);
      return NextResponse.json({ error: "Error generando landing desde GraphQL" }, { status: 500 });
    }

    const config = data?.landingData;
    if (!config) {
      return NextResponse.json({ error: "No se encontró configuración para ese token" }, { status: 404 });
    }

    // 3) Generamos el TSX con la función que definimos
    const tsxString = generateLandingTSX(config);

    // 4) Grabamos page.tsx en /src/app/emulator/page.tsx
    const emulatorDir = path.join(process.cwd(), "src", "app", "emulator");
    const emulatorPagePath = path.join(emulatorDir, "page.tsx");
    await fs.mkdir(emulatorDir, { recursive: true });
    await fs.writeFile(emulatorPagePath, tsxString, "utf8");

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Error en /api/generate-landing:", err);
    return NextResponse.json({ error: "Error interno: " + err.message }, { status: 500 });
  }
}
