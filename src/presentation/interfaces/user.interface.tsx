export interface UserInterface {
    user_id: number;
    nombres: string;
    apellidos: string;
    dni: string;
    celular: string;
    correo: string;
    usuario: string;
    contrasenia: string;
    fecha_creacion: string; // o Date si haces el parse
    fecha_actualizacion: string; // o Date
    rol: 'estudiante' | 'administrador'; // puedes añadir más roles si los hay
  }
  