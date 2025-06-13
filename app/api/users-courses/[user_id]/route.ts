import prismaDB from "@/src/infrastructure/db/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("user_id");
    const cursos = await prismaDB.usuario_curso.findMany({
      where: { user_id: Number(userId) },
      include: {
        curso: true,
      },
    });

    return NextResponse.json({ curso: cursos.map((uc) => uc.curso) });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}