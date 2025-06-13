import { NextResponse } from "next/server";
import prismaDB from "@/src/infrastructure/db/prisma/prisma-client";
import { DataLeccionCargaMasiva } from "@/src/presentation/utils/DataLeccionCargaMasiva";
export async function POST(request: Request) {
    try {
    //   const data = await request.json(); // Esperamos un array de objetos
        
      if (!Array.isArray(DataLeccionCargaMasiva)) {
        return NextResponse.json({ error: 'El cuerpo debe ser un array de objetos' }, { status: 400 });
      }
  
      const created = await prismaDB.leccion.createMany({
        data: DataLeccionCargaMasiva,
        skipDuplicates: true, // Esto evitará errores si el ID ya existe
      });
  
      return NextResponse.json({ message: 'Lecciones insertadas', count: created.count }, { status: 200 });
    } catch (error) {
      console.error('Error al insertar lecciones:', error);
      return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
    }
  }