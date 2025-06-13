// // src/infrastructure/di/container.ts

// import { Container } from 'inversify';
// import 'reflect-metadata';
// import TYPES from './types';

// // import { AuthApiPort } from '@/core/application/interfaces/AuthApiPort';
// import { AuthApiService } from '../services/auth-api.service';

// // import { HttpClientPort } from '@/core/application/interfaces/HttpClientPort';
// import { AxiosHttpClient } from '../http/AxiosHttpClient';
// import { CoursesApiServices } from '../services/courses-api.service';
// import { HttpClientPort } from '@/src/application/repositories/http-client.repository.interface';
// import { AuthApiPort } from '@/src/application/repositories/auth.repository.interface';
// import { CoursesApiPort } from '@/src/application/repositories/courses.repository.interface';
// import { getAllCoursesUseCase } from '@/src/application/use-cases/courses/get-all-courses.use-case';

// const container = new Container();

// // Bindings de servicios (adaptadores)
// container.bind<HttpClientPort>(TYPES.HttpClientPort).to(AxiosHttpClient);
// container.bind<AuthApiPort>(TYPES.AuthApiPort).to(AuthApiService);
// container.bind<CoursesApiPort>(TYPES.CoursesApiPort).to(CoursesApiServices);

// // 🔹 Bindings de Use Cases
// container.bind<getAllCoursesUseCase>(TYPES.GetAllCoursesUseCase).to(getAllCoursesUseCase);

// export default container;


// src/infrastructure/di/container.ts
import { Container } from 'inversify';
import 'reflect-metadata';

// import { AuthModule } from './auth/auth.module';
import { CoursesModule } from './courses/courses.module';

const ApplicationContainer = new Container({ defaultScope: 'Singleton' });

export const initializeContainer = () => {
    ApplicationContainer.load(CoursesModule);
};

initializeContainer();

export const getInjection = <T>(symbol: symbol) => {
    return ApplicationContainer.get<T>(symbol)
}

export { ApplicationContainer };
