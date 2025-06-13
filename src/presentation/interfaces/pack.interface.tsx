export interface PackInterface {
    id: string;
    nombre: string;
    descripcion: string;
    precio: number;
    antes: number;
    imagenInicio: string;
    imagenDetalle: string;
    url: string;
    estudiantes: string; // Puede considerarse number si deseas manejarlo como número
    puntuacion: number;
  }
  