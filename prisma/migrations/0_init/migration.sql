-- CreateTable
CREATE TABLE "calificacion" (
    "calificacion_id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "curso_id" VARCHAR(10),
    "calificacion" DECIMAL,
    "fecha_calificacion" TIMESTAMP(6) DEFAULT ((CURRENT_TIMESTAMP AT TIME ZONE 'UTC'::text) AT TIME ZONE 'America/Lima'::text),

    CONSTRAINT "calificacion_pkey" PRIMARY KEY ("calificacion_id")
);

-- CreateTable
CREATE TABLE "curso" (
    "curso_id" VARCHAR(10) NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "descripcion" TEXT,
    "calificacion" DECIMAL(3,2),
    "materiales" TEXT,
    "imagen" VARCHAR(255),
    "precio" DECIMAL(10,2),
    "fecha_creacion" TIMESTAMP(6) DEFAULT ((CURRENT_TIMESTAMP AT TIME ZONE 'UTC'::text) AT TIME ZONE 'America/Lima'::text),
    "fecha_actualizacion" TIMESTAMP(6) DEFAULT ((CURRENT_TIMESTAMP AT TIME ZONE 'UTC'::text) AT TIME ZONE 'America/Lima'::text),
    "video_intro" VARCHAR(250),
    "duracion" INTEGER,

    CONSTRAINT "curso_pkey" PRIMARY KEY ("curso_id")
);

-- CreateTable
CREATE TABLE "leccion" (
    "leccion_id" SERIAL NOT NULL,
    "unidad_id" INTEGER,
    "nombre" VARCHAR(1000) NOT NULL,
    "video_url" VARCHAR(255),
    "material_descarga" TEXT,
    "leccion" VARCHAR(50),

    CONSTRAINT "leccion_pkey" PRIMARY KEY ("leccion_id")
);

-- CreateTable
CREATE TABLE "progreso" (
    "user_id" INTEGER,
    "leccion_id" INTEGER,
    "completado" BOOLEAN DEFAULT false,
    "progreso_id" SERIAL NOT NULL,

    CONSTRAINT "progreso_pkey" PRIMARY KEY ("progreso_id")
);

-- CreateTable
CREATE TABLE "unidad" (
    "unidad_id" SERIAL NOT NULL,
    "curso_id" VARCHAR(10),
    "nombre" VARCHAR(100) NOT NULL,
    "descripcion" TEXT,
    "unidad" VARCHAR(50),

    CONSTRAINT "unidad_pkey" PRIMARY KEY ("unidad_id")
);

-- CreateTable
CREATE TABLE "usuario" (
    "user_id" SERIAL NOT NULL,
    "nombres" VARCHAR(100),
    "apellidos" VARCHAR(100),
    "dni" CHAR(8),
    "celular" VARCHAR(15),
    "correo" VARCHAR(100) NOT NULL,
    "usuario" VARCHAR(50),
    "contrasenia" VARCHAR(255),
    "fecha_creacion" TIMESTAMP(6) DEFAULT ((CURRENT_TIMESTAMP AT TIME ZONE 'UTC'::text) AT TIME ZONE 'America/Lima'::text),
    "fecha_actualizacion" TIMESTAMP(6) DEFAULT ((CURRENT_TIMESTAMP AT TIME ZONE 'UTC'::text) AT TIME ZONE 'America/Lima'::text),
    "rol" VARCHAR(50),
    "uid" VARCHAR,
    "fotoPerfil" TEXT,
    "emailVerificado" BOOLEAN,
    "provider" VARCHAR(50),

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "usuario_curso" (
    "user_id" INTEGER NOT NULL,
    "curso_id" VARCHAR(10) NOT NULL,

    CONSTRAINT "usuario_curso_pkey" PRIMARY KEY ("user_id","curso_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "calificacion_user_id_curso_id_key" ON "calificacion"("user_id", "curso_id");

-- CreateIndex
CREATE UNIQUE INDEX "progreso_user_id_leccion_id_key" ON "progreso"("user_id", "leccion_id");

-- CreateIndex
CREATE UNIQUE INDEX "usuario_dni_key" ON "usuario"("dni");

-- CreateIndex
CREATE UNIQUE INDEX "usuario_correo_key" ON "usuario"("correo");

-- CreateIndex
CREATE UNIQUE INDEX "usuario_usuario_key" ON "usuario"("usuario");

-- AddForeignKey
ALTER TABLE "calificacion" ADD CONSTRAINT "calificacion_curso_id_fkey" FOREIGN KEY ("curso_id") REFERENCES "curso"("curso_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "calificacion" ADD CONSTRAINT "calificacion_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "usuario"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "leccion" ADD CONSTRAINT "leccion_unidad_id_fkey" FOREIGN KEY ("unidad_id") REFERENCES "unidad"("unidad_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "progreso" ADD CONSTRAINT "progreso_leccion_id_fkey" FOREIGN KEY ("leccion_id") REFERENCES "leccion"("leccion_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "progreso" ADD CONSTRAINT "progreso_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "usuario"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "unidad" ADD CONSTRAINT "unidad_curso_id_fkey" FOREIGN KEY ("curso_id") REFERENCES "curso"("curso_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "usuario_curso" ADD CONSTRAINT "usuario_curso_curso_id_fkey" FOREIGN KEY ("curso_id") REFERENCES "curso"("curso_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "usuario_curso" ADD CONSTRAINT "usuario_curso_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "usuario"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION;

