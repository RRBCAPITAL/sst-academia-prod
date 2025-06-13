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
    const { uid, email, name, picture, email_verified, phone_number } = decodedToken;
    const provider = decodedToken.firebase?.sign_in_provider || null;

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // ✅ Buscar si ya existe en la base de datos
    const existingUser = await prismaDB.usuario.findUnique({
      where: { correo: email },
    });

    if (!existingUser) {
      // ✅ Si no existe, lo creamos
      await prismaDB.usuario.create({
        data: {
          uid,
          correo: email,
          nombres: name || '',
          fotoPerfil: picture || null,
          emailVerificado: email_verified || false,
          celular: phone_number || null,
          provider,
        },
      });
    } else {
      // ✅ Si existe, actualizar solo si faltan campos clave
      const updateData: any = {};

      if (!existingUser.uid && uid) updateData.uid = uid;
      if (!existingUser.fotoPerfil && picture) updateData.fotoPerfil = picture;
      if (existingUser.emailVerificado !== true && email_verified === true)
        updateData.emailVerificado = true;

      if (Object.keys(updateData).length > 0) {
        await prismaDB.usuario.update({
          where: { correo: email },
          data: updateData,
        });
      }
    }

    // ✅ Crear cookie de sesión
    const sessionCookie = await auth.createSessionCookie(idToken, {
      expiresIn: 14 * 24 * 60 * 60 * 1000,
    });

    const response = NextResponse.json({ message: 'Login successful' });

    response.cookies.set('session', sessionCookie, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 14 * 24 * 60 * 60,
      path: '/',
    });

    return response;
  } catch (error) {
    console.error('[LOGIN_ERROR]', error);
    return NextResponse.json({ error: 'Invalid token' }, { status: 400 });
  }
}
