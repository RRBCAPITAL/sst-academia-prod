// app/checkout/[nombre]/metadata.ts

import { Metadata, ResolvingMetadata } from 'next';
import { deslugify } from '@/src/presentation/utils/deslugify';
import { MetaDataCursos } from '@/src/presentation/utils/MetaDataCursos';

const MetaDataCursosMap = new Map([
  ['seguridad y salud en el trabajo', MetaDataCursos[0]],
  ['power bi con enfoque a ssoma', MetaDataCursos[1]],
  ['supervisor en trabajos de alto riesgo', MetaDataCursos[2]],
  ['sistema integrado de gestion', MetaDataCursos[3]],
  ['auditor interno en sistemas integrados de gestion', MetaDataCursos[4]],
  ['gestion y manejo integral de residuos solidos', MetaDataCursos[5]],
  ['sunafil fiscalizacion en seguridad y salud en el trabajo', MetaDataCursos[6]],
  ['elaboracion de tesis y proyectos', MetaDataCursos[7]],
]);

type PageProps = {
  params: {
    nombre: string;
  };
};

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const nombreSlug = params.nombre;
  const nombreDeslugified = deslugify(nombreSlug);
  const metaData = MetaDataCursosMap.get(nombreDeslugified.toLowerCase());

  return metaData ?? {
    title: "Curso no encontrado | SST Academy",
    description: "El curso solicitado no está disponible en nuestra plataforma.",
    keywords: ["curso no encontrado", "sst academy"],
    alternates: {
      canonical: `https://www.sstacademia.com/cursos-virtuales/${nombreSlug}`,
    },
  };
}
