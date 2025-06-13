// context/CursoContext.tsx
'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { CursoDTO } from '../dto/get-all-courses-public.dto';

interface CursoContextType {
  cursoSeleccionado: Partial<CursoDTO> | null;
  setCursoSeleccionado: (curso: Partial<CursoDTO>) => void;
}

const CursoContext = createContext<CursoContextType | undefined>(undefined);

export const CursoProvider = ({ children }: { children: ReactNode }) => {
  const [cursoSeleccionado, setCursoSeleccionado] = useState<Partial<CursoDTO> | null>(null);

  return (
    <CursoContext.Provider value={{ cursoSeleccionado, setCursoSeleccionado }}>
      {children}
    </CursoContext.Provider>
  );
};

export const useCurso = () => {
  const context = useContext(CursoContext);
  if (!context) throw new Error('useCurso debe usarse dentro de <CursoProvider>');
  return context;
};
