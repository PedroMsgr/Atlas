// src/app/api/generate-landing/route.ts

import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'
import { createApolloClient } from '@/lib/apollo-client'
import { gql } from '@apollo/client'
import { generateLandingTSX } from '@/lib/landing-generator'
import { LANDING_DATA_QUERY } from '@/graphql/queries/configs.querys'

export async function POST(req: NextRequest) {
  try {
    const { token } = (await req.json()) as { token?: string }
    if (!token) {
      return NextResponse.json({ error: 'Falta el campo "token" en el body' }, { status: 400 })
    }

    // 1) Creamos el cliente Apollo que ya apunta a /api/graphql
    const apollo = createApolloClient()

    // 2) Llamamos a la query landingData(token)
    const { data, errors } = await apollo.query<{ landingData: any }>({
      query: LANDING_DATA_QUERY,
      variables: { token },
    })

    if (errors && errors.length > 0) {
      console.error('Errores GraphQL en landingData:', errors)
      return NextResponse.json({ error: 'Error generando landing desde GraphQL' }, { status: 500 })
    }

    const landingObject = data.landingData
    const tsxString = generateLandingTSX(landingObject)

    // 3) Determinamos la ruta absoluta a src/app/emulator/page.tsx
    const emulatorDir = path.join(process.cwd(), 'src', 'app', 'emulator')
    const emulatorPagePath = path.join(emulatorDir, 'page.tsx')

    // Aseguramos que la carpeta existe
    await fs.mkdir(emulatorDir, { recursive: true })

    // 4) Escribimos (sobrescribimos) ese archivo con el TSX generado
    await fs.writeFile(emulatorPagePath, tsxString, 'utf8')

    return NextResponse.json({ success: true })
  } catch (err: any) {
    console.error('Error en /api/generate-landing:', err)
    return NextResponse.json({ error: 'Error interno: ' + err.message }, { status: 500 })
  }
}
