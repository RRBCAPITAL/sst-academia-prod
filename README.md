# Mi Proyecto Next.js

## 🚀 Instalación
Ejecuta el siguiente comando para instalar las dependencias:

```sh
npm install

npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material

🔧 Configuración
Asegúrate de definir las variables de entorno en un archivo .env:
NEXT_PUBLIC_GOOGLE_ID=TU_ID_AQUI


📂 Estructura del Proyecto
src/
 ├── components/
 │    ├── GoogleAnalytics.tsx
 ├── lib/
 │    ├── gtag.ts
 ├── types/
 │    ├── global.d.ts


📜 Uso
Para usar Google Analytics, importa y coloca el componente en _app.tsx:
import GoogleAnalytics from '@/components/GoogleAnalytics';


DEBEMOS INSTALAR npm i reflect-metadata axios PARA MANEJAR PEITICIONES HTTP
PARA MANEJO DE INYECCION DE DEPENDENCIAS INSTALADO inversify
INSTALAR ZOD PARA VALIDACIONES
INSTALAMOS AXIOS PARA PEITICIONES HTTP
INSTALAMOS PRISMA npm install prisma --save-dev
INSTALAMOS CLIENTE DE PRISMA npm install @prisma/client
INICIALIZAMOS PRISMA npx prisma init
generamos cliente npx prisma generate y push npx prisma db push

npx prisma db pull PARA TRAER LAS TABLAS Y PONERLAS EN EL SCHEMA
LUEGO npx prisma generate REGENERAR
npx prisma studio PARA ABRIR UI BASICA PARA VER TABLAS


PARA CREAR UNA MIGRACION 
npx prisma migrate dev --name init

Genera el SQL sin aplicarlo aún:
npx prisma migrate dev --create-only --name init


FIREBASE AUTH

Instala Firebase y las dependencias necesarias:
npm install firebase firebase-admin next-firebase-auth

Configura las variables de entorno en tu archivo .env.local:

env
Copiar
Editar
FIREBASE_API_KEY=tu_api_key
FIREBASE_AUTH_DOMAIN=tu_auth_domain
FIREBASE_PROJECT_ID=tu_project_id
FIREBASE_STORAGE_BUCKET=tu_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id
FIREBASE_APP_ID=tu_app_id
FIREBASE_MEASUREMENT_ID=tu_measurement_id
FIREBASE_PRIVATE_KEY=tu_private_key
COOKIE_SECRET_CURRENT=clave_secreta_actual
COOKIE_SECRET_PREVIOUS=clave_secreta_anterior

