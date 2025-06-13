import { injectable } from "inversify";
import { CoursesApiPort } from "@/src/application/repositories/courses.repository.interface";
import prisma from "../db/prisma/prisma-client";

@injectable()
export class CoursesApiServices implements CoursesApiPort {
    constructor() { }

    async getAllCourses() {
      return await prisma.curso.findMany();
    }
}