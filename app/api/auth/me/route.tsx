import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { auth } from '@/lib/firebaseAdmin';
import prisma from '@/src/infrastructure/db/prisma/prisma-client';

export async function GET() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('session')?.value;

  if (!sessionCookie) {
    return NextResponse.json({ user: null }, { status: 401 });
  }

  try {
    const decoded = await auth.verifySessionCookie(sessionCookie, true);
    const user = await prisma.usuario.findUnique({
      where: { correo: decoded.email },
      select: {
        uid: true,
        user_id: true,
        nombres: true,
        apellidos: true,
        correo: true,
        rol: true,
        fotoPerfil: true,
      },
    });

    if (!user) {
      return NextResponse.json({ user: null }, { status: 404 });
    }

    return NextResponse.json({ user });
  } catch (error) {
    return NextResponse.json({ user: null, error: error }, { status: 401 });
  }
}
