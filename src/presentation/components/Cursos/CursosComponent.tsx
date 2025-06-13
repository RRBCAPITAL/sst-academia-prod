'use client'

import { useMemo } from 'react'
import { useCourses } from '../../hooks/useCourses.hook'
import { CoursesOrdering } from '../../utils/CoursesOrdering'
import CursoComponent from './CursoComponent'
import { Grid, Typography, Skeleton } from '@mui/material'
import { CursoDTO } from '@/src/application/dto/get-all-courses-public.dto'

const CursosComponent = () => {
  const { data, error, isLoading } = useCourses()

  // 🧠 Memoriza el ordenamiento solo cuando cambian los datos
  const orderedCourses = useMemo(() => {
    if (isLoading || !data) return []
    return [...data].sort(
      (a: CursoDTO, b: CursoDTO) =>
        CoursesOrdering.indexOf(a.curso_id) - CoursesOrdering.indexOf(b.curso_id)
    )
  }, [data, isLoading])

  if (error) {
    return (
      <Grid component="div" sx={{ gridColumn: '1 / -1' }}>
        <Typography color="error" variant="body1">
          Error: {(error as Error).message}
        </Typography>
      </Grid>
    )
  }
  
  return (
    <Grid
      component="section"
      display="grid"
      gridTemplateColumns={{
        xs: "1fr",        // 1 columna en móviles (<600px)
        sm: "1fr 1fr",    // 2 columnas en tablets (≥600px)
        md: "1fr 1fr",    // 2 columnas en desktop medio (≥900px)
        lg: "repeat(3, 1fr)" // 3 columnas en pantallas grandes (≥1200px)
      }}
      sx={{
        width: { sm: "100vw", md: "100%" },
        gap: { xs: 2 },
        pt: 0,
        p: 0,
        alignItems: "center",
        maxWidth: {
          sm: '768px',
          md: '968px',
          lg: '1440px'
        },
      }}
    >
      {isLoading ? (
        <Grid component="div" sx={{ gridColumn: '1 / -1' }}>
          <Skeleton variant="rectangular" width="100%" height={200} />
        </Grid>
      ) : orderedCourses ? (
        orderedCourses.map((curso: CursoDTO) => (
          <CursoComponent key={curso.curso_id} curso={curso} />
        ))
      ) : (
        <Grid component="div" sx={{ gridColumn: '1 / -1' }}>
          <Typography variant="body1">No se encontraron cursos.</Typography>
        </Grid>
      )}
    </Grid>
  )
}

export default CursosComponent;
