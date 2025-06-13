"use client"

import { useParams } from 'next/navigation'
import CampusVirtualSidebar from '@/src/presentation/campus-virtual/components/CampusVirtualSidebar'

const RouteCursoDetalle = () => {

  const params = useParams();
  const curso_id = params?.id as string | undefined;

  if (!curso_id) {
    return <p>Cargando...</p>;  // O cualquier otra UI de carga o error
  }
  
  return (
        <CampusVirtualSidebar curso_id = {curso_id}/>
  )
}

export default RouteCursoDetalle;
