import { certificadoSIGBase64 } from '@/src/presentation/certificados-base64/CertificadoSistemaIntegradoGestion64';
import { certificadoSST64 } from '@/src/presentation/certificados-base64/CertificadoSST64';
import { certificadoPowerBI64 } from '@/src/presentation/certificados-base64/CertificadoPowerBI64';
import { certificadoSunafil64 } from '@/src/presentation/certificados-base64/CertificadoSunafil64';
import { certificadoTAR64 } from '@/src/presentation/certificados-base64/CertificadoTAR';
import { CertificadoAuditoriaSIG64 } from '@/src/presentation/certificados-base64/CertificadoAuditoriaSIG64';

export const CoursesOrdering = ["D-1", "A-1", "F-1", "E-1", "C-1", "I-1", "B-1", "G-1", "H-1"];

export const CoursesCertificados = [
  {
    curso_id: 'A-1', 
    curso_nombre: 'SEGURIDAD Y SALUD EN EL TRABAJO',
    certificadoBase64: certificadoSST64
  },
  {
    curso_id: 'B-1',
    curso_nombre: 'MICROSOFT POWER BI - DESKTOP',
    certificadoBase64: certificadoPowerBI64
  },
  {
    curso_id: 'C-1',
    curso_nombre: 'SUPERVISOR DE TRABAJOS DE ALTO RIESGO',
    certificadoBase64: certificadoTAR64
  },
  {
    curso_id: 'D-1',
    curso_nombre: 'SISTEMA INTEGRADO DE GESTIÓN',
    certificadoBase64: certificadoSIGBase64
  },
  {
    curso_id: 'E-1',
    curso_nombre: 'AUDITORÍA INTERNA - TRINORMA',
    certificadoBase64: CertificadoAuditoriaSIG64
  },
  {
    curso_id: 'F-1',
    curso_nombre: null,
    ruta_certificado: null
  },
  {
    curso_id: 'H-1',
    curso_nombre: null,
    ruta_certificado: null
  },
  {
    curso_id: 'I-1',
    curso_nombre: null,
    ruta_certificado: null
  },
  {
    curso_id: 'G-1',
    curso_nombre: 'SUNAFIL - FISCALIZACIÓN EN SST',
    certificadoBase64: certificadoSunafil64
  }
];