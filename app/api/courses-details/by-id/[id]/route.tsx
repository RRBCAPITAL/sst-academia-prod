// app/api/cursos/[id]/route.ts
import { NextResponse } from 'next/server'
import prismaDB from '@/src/infrastructure/db/prisma/prisma-client'

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params

  if (!id) {
    return NextResponse.json({ error: 'Course ID is required' }, { status: 400 })
  }

  try {
    const curso = await prismaDB.curso.findUnique({
      where: { curso_id: id },
      select: {
        curso_id: true,
        nombre: true,
        descripcion: true,
        calificacion_promedio: true,
        materiales: true,
        imagen: true,
        precio: true,
        fecha_creacion: true,
        video_intro: true,
        duracion: true,
        unidad: {
          select: {
            unidad_id: true,
            nombre: true,
            descripcion: true,
            unidad: true,
            leccion: {
              select: {
                leccion_id: true,
                nombre: true,
                video_url: false,
                material_descarga: true,
                leccion: true
              }
            }
          }
        }
      }
    })

    if (!curso) {
      return NextResponse.json(
        {
          statusCode: 404,
          error: 'Not Found',
          message: `El curso con id '${id}' no existe en el sistema.`,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(curso);
  } catch (error) {
    console.error('Error fetching course:', error)
  
    return NextResponse.json(
      {
        statusCode: 500,
        error: 'Internal Server Error',
        message: `Ocurrió un error inesperado al obtener el curso: ${error}`,
      },
      { status: 500 }
    )
  }
}
