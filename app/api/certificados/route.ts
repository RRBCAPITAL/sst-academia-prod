// app/api/certificado/route.ts
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { v4 as uuidv4 } from 'uuid';
import { readFile } from 'fs/promises';
import { degrees } from 'pdf-lib';
import { CoursesCertificados } from '@/src/presentation/utils/CoursesOrdering';
import prismaDB from '@/src/infrastructure/db/prisma/prisma-client';

const fontkit: any = require('fontkit'); 

function hexToPdfColor(hex: string) {
  const sanitized = hex.replace('#', '');
  const bigint = parseInt(sanitized, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return rgb(r / 255, g / 255, b / 255);
}

function obtenerMesYAnio(fecha: Date): string {
  return new Intl.DateTimeFormat('es-ES', {
    month: 'long',
    year: 'numeric',
  }).format(fecha);
}

export async function POST(req: NextRequest) {
  const { user_nombre, user_id, curso_id } = await req.json();

  const certificado = CoursesCertificados.find((c) =>  c.curso_id === curso_id && !!c);
  
  if(!certificado || !certificado.curso_nombre || !certificado.ruta_certificado){
    return NextResponse.json({
      message: 'Error al procesar certificado',
    });
  }

  // Buscar en la base de datos si ya hay un código
  const usuarioCurso = await prismaDB.usuario_curso.findUnique({
    where: {
      user_id_curso_id: { user_id, curso_id }, // por la PK compuesta
    },
  });

  let codigo = usuarioCurso?.codigo_certificado;

  if (!codigo) {
    // Generar uno nuevo
    codigo = `SST-${uuidv4().split('-')[0].toUpperCase()}`;

    // Guardarlo en la BD
    await prismaDB.usuario_curso.update({
      where: {
        user_id_curso_id: { user_id, curso_id },
      },
      data: {
        codigo_certificado: codigo,
      },
    });
  }

  const templatePath = path.resolve(process.cwd(), certificado.ruta_certificado);
  console.log('📁 Ruta del certificado esperada:', templatePath);
console.log('🕵️‍♂️ El archivo existe?', fs.existsSync(templatePath));
  let templateBytes;
  try {
    templateBytes = fs.readFileSync(templatePath);
  } catch (err) {
    console.error('Error al leer la plantilla PDF:', err);
    return NextResponse.json({ message: 'Error al generar certificado (PDF no encontrado)' }, { status: 500 });
  }

  const pdfDoc = await PDFDocument.load(templateBytes);
  pdfDoc.registerFontkit(fontkit);
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];
  const secondPage = pages[1];

  const fontRegularBytes = await readFile(path.resolve(process.cwd(), 'src/presentation/fonts/Poppins-Regular.ttf'));
  const fontBoldBytes = await readFile(path.resolve(process.cwd(), 'src/presentation/fonts/Poppins-Bold.ttf'));
  const fontExtraBoldBytes = await readFile(path.resolve(process.cwd(), 'src/presentation/fonts/Poppins-ExtraBold.ttf'));
  
  const fontRegular = await pdfDoc.embedFont(fontRegularBytes);
  const fontBold = await pdfDoc.embedFont(fontBoldBytes);
  const fontExtraBold = await pdfDoc.embedFont(fontExtraBoldBytes);

  const colorNombreEstudiante = '#000000';
  firstPage.drawText(user_nombre.toUpperCase(), {
    x: 145,
    y: 432,
    size: 29,
    font: fontBold,
    color: hexToPdfColor(colorNombreEstudiante),
  });

  const colorNombreCurso = '#FF914D';
  firstPage.drawText(certificado.curso_nombre, {
    x: 145,
    y: 344,
    size: 29,
    font: fontBold,
    color: hexToPdfColor(colorNombreCurso),
  });

  const fechaEmision = obtenerMesYAnio(new Date());
  firstPage.drawText(`${fechaEmision}`, {
    x: 235,
    y: 265,
    size: 15,
    font: fontRegular,
    color: hexToPdfColor(colorNombreEstudiante),
  });

  secondPage.drawText(`${codigo}`, {
    x: 550,
    y: 125.5,
    size: 14,
    font: fontRegular,
    color: hexToPdfColor(colorNombreEstudiante),
  });

  const pdfBytes = await pdfDoc.save();

  return new NextResponse(pdfBytes, {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="certificado-${codigo}.pdf"`,
    },
  });
}

export async function GET() {
  const pdfDoc = await PDFDocument.create();

  // Página en blanco
  const page = pdfDoc.addPage([842, 595]); // A4 horizontal
  const { width, height } = page.getSize();

  // Cargar fuente
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  // Cargar imagen lateral (opcionalmente extraída del diseño original)
  const logoImageBytes = await readFile(path.resolve('public/images/logos/logo-sst.png'));
  const logoImage = await pdfDoc.embedPng(logoImageBytes);

  // Fondo naranja lateral
  page.drawRectangle({
    x: 0,
    y: 0,
    width: 80,
    height,
    color: rgb(1, 0.45, 0), // naranja
  });

  // Texto vertical "CERTIFICADO"
  page.drawText('CERTIFICADO', {
    x: 20,
    y: height / 2 + 100,
    size: 18,
    font: boldFont,
    rotate: degrees(90),
    color: rgb(1, 1, 1),
  });

  // Encabezado "SST Academy"
  page.drawText('SST ', {
    x: 100,
    y: height - 70,
    size: 26,
    font: boldFont,
    color: rgb(1, 0.45, 0),
  });
  page.drawText('Academy', {
    x: 140,
    y: height - 70,
    size: 26,
    font: boldFont,
    color: rgb(0.3, 0.3, 0.3),
  });

  // Cuerpo
  page.drawText('Otorga el presente certificado de especialista a:', {
    x: 100,
    y: height - 110,
    size: 14,
    font,
  });

  page.drawText('Por haber aprobado satisfactoriamente el Programa de especialización:', {
    x: 100,
    y: height - 150,
    size: 14,
    font,
  });

  page.drawText('Con una duración de 120 horas académicas', {
    x: 100,
    y: height - 190,
    size: 14,
    font,
  });

  page.drawText('Entregado', {
    x: 100,
    y: height - 230,
    size: 14,
    font,
  });

  // Firma (usando imagen o texto dibujado)
  const firmaImageBytes = await readFile(path.resolve('public/images/logos/logo-sst.png'));
  const firmaImage = await pdfDoc.embedPng(firmaImageBytes);
  page.drawImage(firmaImage, {
    x: 100,
    y: height - 330,
    width: 120,
    height: 60,
  });

  page.drawText('Ing. Robinson Rosales', {
    x: 100,
    y: height - 340,
    size: 12,
    font,
  });
  page.drawText('Gerente General', {
    x: 100,
    y: height - 355,
    size: 10,
    font: boldFont,
  });

  // Marca de agua "SST"
  page.drawText('SST', {
    x: width - 180,
    y: 50,
    size: 100,
    font: boldFont,
    color: rgb(0.9, 0.9, 0.9),
    opacity: 0.3,
  });

  const pdfBytes = await pdfDoc.save();

  return new NextResponse(pdfBytes, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename="certificado.pdf"',
    },
  });
}
