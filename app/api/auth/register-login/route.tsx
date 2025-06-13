import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/firebaseAdmin';
import prismaDB from '@/src/infrastructure/db/prisma/prisma-client';

export async function POST(req: NextRequest) {
  const idToken = req.headers.get('Authorization')?.split('Bearer ')[1];
  if (!idToken) {
    return NextResponse.json({ error: 'No token provided' }, { status: 400 });
  }

  try {
    const decodedToken = await auth.verifyIdToken(idToken);
    const { uid, email, email_verified } = decodedToken;

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const body = await req.json();
    const { nombres, apellidos } = body;

    // Verificar si el usuario ya existe
    const existingUser = await prismaDB.usuario.findUnique({
      where: { correo: email },
    });

    if (existingUser) {
      return NextResponse.json({ message: 'Usuario ya registrado' }, { status: 200 });
    }
    // Crear nuevo usuario
    const user = await prismaDB.usuario.create({
      data: {
        uid,
        correo: email,
        nombres,
        apellidos,
        emailVerificado: email_verified || false,
        provider: 'password',
      },
    });

    // // Crear cookie de sesión
    // const sessionCookie = await auth.createSessionCookie(idToken, {
    //   expiresIn: 14 * 24 * 60 * 60 * 1000,
    // });

    // const response = NextResponse.json({ message: 'Registro exitoso' });

    // response.cookies.set('session', sessionCookie, {
    //   httpOnly: true,
    //   secure: process.env.NODE_ENV === 'production',
    //   maxAge: 14 * 24 * 60 * 60,
    //   path: '/',
    // });

    return user;
  } catch (error) {
    console.error('[REGISTER_USER_ERROR]', error);
    return NextResponse.json({ error: 'Invalid token or server error' }, { status: 400 });
  }
}
