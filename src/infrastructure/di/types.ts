// src/infrastructure/di/types.ts
const TYPES = {
    AuthApiPort: Symbol.for('AuthApiPort'),
    HttpClientPort: Symbol.for('HttpClientPort'),
    CoursesApiPort: Symbol.for('CoursesApiPort'),

    // UseCases
    GetAllCoursesUseCase: Symbol.for('GetAllCoursesUseCase'),
  };
  
  export default TYPES;
  