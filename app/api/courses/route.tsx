import { GetAllCoursesUseCase } from "@/src/application/use-cases/frontend/courses/get-all-courses.use-case";
import { ApplicationContainer } from "@/src/infrastructure/di/container";
import TYPES from "@/src/infrastructure/di/types";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const useCase = ApplicationContainer.get<GetAllCoursesUseCase>(TYPES.GetAllCoursesUseCase);
        const cursos = await useCase.execute();
        return NextResponse.json( cursos );
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
        return NextResponse.json({ error: "Error interno desconocido" }, { status: 500 });
    }
}