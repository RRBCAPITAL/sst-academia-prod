/*
  Warnings:

  - A unique constraint covering the columns `[codigo_certificado]` on the table `usuario_curso` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "usuario_curso" ADD COLUMN     "codigo_certificado" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "usuario_curso_codigo_certificado_key" ON "usuario_curso"("codigo_certificado");
