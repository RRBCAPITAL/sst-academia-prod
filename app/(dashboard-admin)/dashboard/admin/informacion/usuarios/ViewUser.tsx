"use client";

import * as React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ViewCalificacion from '../calification/ViewCalificacion';

interface Curso {
  curso_id: string;          // Identificador único del curso
  nombre: string;           // Nombre del curso
  descripcion: string;      // Descripción del curso
  calificacion: number | null; // Calificación del curso (puede ser nulo si no se ha calificado)
  materiales: string;       // Materiales del curso (puede ser una URL o un texto)
  imagen: string;           // URL de la imagen del curso
  duracion: string;         // Duración del curso (por ejemplo, "10 horas")
  precio: number;           // Precio del curso
  fecha_creacion: Date;     // Fecha de creación del curso
  fecha_actualizacion: Date; // Fecha de última actualización del curso
}

interface DataCalificacion {
  curso_id: string;
  user_id: number;
  curso_nombre: string;
  user_nombre: string;
  porcentaje_avance: number
}

interface ViewUserProps {
  user: any;
  cursosActivos: Curso[];
  setCursosActivos: any;
  onClose: () => void;
}

interface ProgresoCurso {
  curso_id: string;
  nombre_curso: string;
  porcentaje_completado: number;
}

interface CalificacionCurso {
  curso_id: string;
  user_id: number;
  calificacion: number;
}

const ViewUser: React.FC<ViewUserProps> = ({ user, cursosActivos, setCursosActivos, onClose }) => {
  const [progreCurso, setProgreCurso] = useState<ProgresoCurso[]>([]);
  const [calificacionCurso, setCalificacionCurso] = useState<CalificacionCurso[]>([]);
  const [dataCalificacion, setDataCalificacion] = useState<DataCalificacion | null>(null);

  useEffect(() => {
    if (!user || !user.user_id) return;

    // Limpiar el estado anterior para evitar mostrar datos incorrectos
    setProgreCurso([]);
    setCalificacionCurso([]);
    setCursosActivos([]);

    const fetchCursos = async () => {
      try {
        // Obtener el progreso de los cursos
        const userProgreCursosResponse = await axios.get<{ progresoCurso: ProgresoCurso[] }>(
          `/api/usuario-curso-info-progreso?user_id=${user.user_id}`
        );
        setProgreCurso(userProgreCursosResponse.data.progresoCurso);

        // Obtener las calificaciones de los cursos
        const userCalificacionCursosResponse = await axios.get<{ calificacion: CalificacionCurso[] }>(
          `/api/calificacion?user_id=${user.user_id}`
        );
        setCalificacionCurso(userCalificacionCursosResponse.data.calificacion);

        // Obtener los cursos activos
        const userCursosResponse = await axios.get<{ curso: Curso[] }>(
          `/api/usuario-cursos?user_id=${user.user_id}`
        );
        setCursosActivos(userCursosResponse.data.curso);
      } catch (error) {
        console.error('Error fetching user or courses data:', error);
      }
    };

    fetchCursos();
  }, [user?.user_id]); // Ejecutar cada vez que el user_id cambie

  const handleCalificacion = (
    curso_id: string,
    user_id: number,
    curso_nombre: string,
    user_nombre: string,
    porcentaje_avance: number
  ) => {
    const data = {
      curso_id,
      user_id,
      curso_nombre,
      user_nombre,
      porcentaje_avance: Math.round(porcentaje_avance),
    };
    setDataCalificacion(data);
  };

  const handleCloseCalificacion = () => {
    setDataCalificacion(null);
  };

  if (!user) {
    return null; // Si no hay un usuario seleccionado, no mostramos nada
  }

  return (
    <Dialog open={!!user} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ color: '#ff8c2e' }}>Información del Usuario</DialogTitle>
      <DialogContent>
        <Typography variant="body1">
          <strong>Nombres:</strong> {user.nombres}
        </Typography>
        <Typography variant="body1">
          <strong>Apellidos:</strong> {user.apellidos}
        </Typography>
        <Typography variant="body1">
          <strong>DNI:</strong> {user.dni}
        </Typography>
        <Typography variant="body1">
          <strong>Correo:</strong> {user.correo}
        </Typography>
        <Typography variant="body1">
          <strong>Usuario:</strong> {user.usuario}
        </Typography>
        <Typography variant="body1">
          <strong>Rol:</strong> {user.rol}
        </Typography>
        <Typography variant="body1">
          <strong>Creado el:</strong> {new Date(user.fecha_creacion).toLocaleDateString()}
        </Typography>
      </DialogContent>

      <DialogTitle sx={{ color: '#ff8c2e', borderBottom: '2px solid #ff8c2e', marginBottom: '10px' }}>
        Cursos Activos
      </DialogTitle>
      {cursosActivos.length ? (
        cursosActivos.map((curso) => {
          const progreso = progreCurso?.find((p) => p.curso_id === curso.curso_id)?.porcentaje_completado || 0;
          const caliCurso = calificacionCurso?.find((p) => p.curso_id === curso.curso_id)?.calificacion || 'Aún no ha sido calificado.';
          return (
            <DialogContent key={curso.curso_id} sx={{ position: 'relative', borderBottom: '2px solid #ff8c2e', marginBottom: '2px' }}>
              <Typography variant="body1">
                <strong>ID:</strong> {curso.curso_id}
              </Typography>
              <Typography variant="body1">
                <strong>Curso:</strong> {curso.nombre}
              </Typography>
              <Typography variant="body1">
                <strong>Nota Final:</strong> {caliCurso}
              </Typography>
              <Typography variant="body1">
                <strong>Avance:</strong> {progreso ? Math.round(progreso) + '% completado' : 'No registra avances.'}
              </Typography>
              <Button
                sx={{ position: 'absolute', top: '0', right: '0', padding: '15px' }}
                onClick={() => handleCalificacion(curso.curso_id, user.user_id, curso.nombre, user.nombres, progreso)}
              >
                Calificar curso
              </Button>
            </DialogContent>
          );
        })
      ) : (
        <DialogContent>
          <Typography variant="body1">No cuenta con cursos activos.</Typography>
        </DialogContent>
      )}

      <DialogActions>
        <Button onClick={onClose}>Cerrar</Button>
      </DialogActions>

      <ViewCalificacion data={dataCalificacion} onClose={handleCloseCalificacion} />
    </Dialog>
  );
};

export default ViewUser;
