// import { ContainerModule, interfaces } from 'inversify';
// import TYPES from '@/src/infrastructure/di/types';
// import { AuthApiService } from '@/src/infrastructure/services/auth-api.service';
// import { AuthApiPort } from '@/src/application/repositories/auth.repository.interface';

// const initializeModule =((bind: interfaces.Bind) => {
//   bind<AuthApiPort>(TYPES.AuthApiPort).to(AuthApiService);
// });

// export const AuthModule = new ContainerModule(initializeModule);