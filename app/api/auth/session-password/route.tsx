// app/api/auth/session/route.ts (o donde tengas la API en Next.js)

import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/firebaseAdmin'; // Firebase Admin SDK

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const idToken = body.idToken;  // El cliente debe enviar el ID token en el body

    if (!idToken) {
      return NextResponse.json({ error: 'No se proporcionó token' }, { status: 400 });
    }

    // Verificar token Firebase
    const decodedToken = await auth.verifyIdToken(idToken);
    const { email } = decodedToken;

    if (!email) {
      return NextResponse.json({ error: 'Email es requerido' }, { status: 400 });
    }

    // Crear cookie de sesión
    const expiresIn = 14 * 24 * 60 * 60 * 1000; // 14 días en ms
    const sessionCookie = await auth.createSessionCookie(idToken, { expiresIn });

    const response = NextResponse.json({ message: 'Sesión creada correctamente' });

    response.cookies.set('session', sessionCookie, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: expiresIn / 1000,
      path: '/',
      sameSite: 'lax',
    });

    return response;

  } catch (error) {
    console.error('[API SESSION ERROR]', error);
    return NextResponse.json({ error: 'Token inválido o error del servidor' }, { status: 401 });
  }
}
