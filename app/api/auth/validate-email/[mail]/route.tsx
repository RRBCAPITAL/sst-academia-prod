import prismaDB from "@/src/infrastructure/db/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { mail: string }}) {
try {
    const { mail } = params;
    const user = await prismaDB.usuario.findFirst({
        where: {
            correo: {
                equals: mail.trim(),     
                mode: 'insensitive',     
              },  
        }
    });
     
    if(!user){
        NextResponse.json({
            status: 404,
            error: 'Not Found',
            message: 'El usuario no existe en el sistema.'
        });
    }

    return NextResponse.json(user);
    
} catch (error) {
    NextResponse.json({
        status: 500,
        error: 'Internal Server Error',
        message: `Error inesperado al validar mail del usuario: ${error}`
    });
}
}