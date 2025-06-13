import { ContainerModule, interfaces } from 'inversify';
import TYPES from '@/src/infrastructure/di/types';
import { CoursesApiPort } from '@/src/application/repositories/courses.repository.interface';
import { CoursesApiServices } from '@/src/infrastructure/services/courses-api.service';
import { GetAllCoursesUseCase } from '@/src/application/use-cases/frontend/courses/get-all-courses.use-case';

const initializeModule = ((bind: interfaces.Bind) => {
  bind<CoursesApiPort>(TYPES.CoursesApiPort).to(CoursesApiServices);

  bind<GetAllCoursesUseCase>(TYPES.GetAllCoursesUseCase).to(GetAllCoursesUseCase);
});

export const CoursesModule = new ContainerModule(initializeModule);