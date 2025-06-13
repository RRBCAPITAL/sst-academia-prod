export interface LeccionDTO {
    leccion_id: number;
    // unidad_id: number;
    nombre: string;
    // video_url: string; // Puedes excluir esto si decides no exponerlo
    // material_descarga: string | null;
    leccion: string;
  }
  
  export interface UnidadDTO {
    unidad_id: number;
    curso_id: string;
    nombre: string;
    descripcion: string | null;
    unidad: string;
    leccion: LeccionDTO[];
  }
  
  export interface CursoDTO {
    curso_id: string;
    nombre: string;
    descripcion: string;
    calificacion_promedio: string | null;
    materiales: string | null;
    imagen: string;
    precio: string;
    fecha_creacion: string; // O Date si lo manejas así
    fecha_actualizacion: string;
    video_intro: string;
    duracion: number;
    unidad?: UnidadDTO[];
  }
  