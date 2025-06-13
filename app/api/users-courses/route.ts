import { NextResponse } from 'next/server';
import prismaDB from '@/src/infrastructure/db/prisma/prisma-client';
import { v4 as uuidv4 } from 'uuid';

// GET: Obtener cursos asignados a un usuario
export async function GET() {
  try {
    const cursos = await prismaDB.usuario_curso.findMany({
      include: {
        curso: true,
      },
    });

    return NextResponse.json({ curso: cursos.map((uc) => uc.curso) });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

// PUT: Agregar o quitar cursos a un usuario
export async function PUT(request: Request) {
  try {
    const { userId, cursoIds } = await request.json();

    if (!userId || !Array.isArray(cursoIds)) {
      return NextResponse.json({ error: 'Parámetros inválidos.' }, { status: 400 });
    }

    // Elimina todos los cursos actuales del usuario
    await prismaDB.usuario_curso.deleteMany({
      where: { user_id: userId },
    });

    // Inserta los nuevos cursos
    await prismaDB.usuario_curso.createMany({
      data: cursoIds.map((cursoId: string) => ({
        user_id: userId,
        curso_id: cursoId,
      })),
      skipDuplicates: true,
    });

    return NextResponse.json({ message: 'Cursos actualizados correctamente.' });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

// POST: Asignar varios cursos a un nuevo usuario
export async function POST(request: Request) {
  try {
    const { userId, cursos } = await request.json();

    if (!userId || !Array.isArray(cursos)) {
      return NextResponse.json({ error: 'Parámetros inválidos.' }, { status: 400 });
    }

    await Promise.all(
      cursos.map(async (cursoId: string) => {
      const codigo_certificado = `SST-${uuidv4().split('-')[0].toUpperCase()}`;

        await prismaDB.usuario_curso.create({
          data: {
            user_id: userId,
            curso_id: cursoId,
            codigo_certificado,
          },
        });
      })
    );

    return NextResponse.json({ user: { user_id: userId } });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
