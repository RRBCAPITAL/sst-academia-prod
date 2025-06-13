import TYPES from "@/src/infrastructure/di/types";
import { inject, injectable } from "inversify"
import type { CoursesApiPort } from "../../../repositories/courses.repository.interface";


@injectable()
export class GetAllCoursesUseCase {
    constructor(
        @inject(TYPES.CoursesApiPort) private readonly coursesApiService: CoursesApiPort
    ){}

    async execute () {
       return this.coursesApiService.getAllCourses();
    }
}