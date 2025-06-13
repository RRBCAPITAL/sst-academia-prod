import { NextResponse } from 'next/server';
import prismaDB from '@/src/infrastructure/db/prisma/prisma-client';

export async function GET(): Promise<NextResponse> {
  try {
    const cursos = await prismaDB.curso.findMany({
      include: {
        unidad: {
          include: {
            leccion: {
                select: {
                    leccion_id: true,
                    nombre: true,
                    leccion: true,
                  }
            }
          },
        },
      },
    });

    return NextResponse.json(cursos);
  } catch (error) {
    console.error('Error al obtener los cursos:', error);
    return NextResponse.json(
      {
        statusCode: 500,
        error: 'Internal server error',
        message: `Ocurrió un error inesperado al obtener todos los cursos: ${error}`
      },
      { status: 500 }
    );
  }
}
