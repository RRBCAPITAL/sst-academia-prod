import { NextRequest, NextResponse } from 'next/server';
import prismaDB from '@/src/infrastructure/db/prisma/prisma-client';

export async function GET(
    _req: NextRequest,
    context: { params: { codigo_certificado: string } }
) {
    const codigo_certificado = context.params.codigo_certificado;

  if (!codigo_certificado) {
    return NextResponse.json({ error: 'Código de certificado es requerido' }, { status: 400 })
  }

  try {
    const usuarioCurso = await prismaDB.usuario_curso.findUnique({
      where: {
        codigo_certificado,
      },
      include: {
        usuario: {
          select: {
            user_id: true,
            nombres: true,
            apellidos: true,
          },
        },
        curso: {
          select: {
            curso_id: true,
            nombre: true,
          },
        },
      },
    });

    if (!usuarioCurso) {
      return NextResponse.json(
        { error: 'Certificado no encontrado' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      user_id: usuarioCurso.usuario?.user_id,
      nombres: usuarioCurso.usuario?.nombres,
      apellidos: usuarioCurso.usuario?.apellidos,
      curso_id: usuarioCurso.curso?.curso_id,
      curso_nombre: usuarioCurso.curso?.nombre,
    });
  } catch (error) {
    console.error('Error al buscar certificado:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
