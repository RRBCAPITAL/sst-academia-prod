// app/api/courses/[...slug]/route.ts

import { NextResponse } from 'next/server'

export async function GET(req: Request, { params }: { params: { slug: string[] } }) {
  return NextResponse.json(
    {
      statusCode: 404,
      error: 'Not Found',
      message: `La ruta /api/${params.slug.join('/')} no existe.`,
    },
    { status: 404 }
  )
}
