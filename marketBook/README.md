# MarketBook

Este es un monorepo para el proyecto MarketBook, gestionado con Nx. Contiene el `frontend` y el `backend` de la aplicación.

## 📜 Prerrequisitos

Asegúrate de tener instalado lo siguiente en tu sistema:

- [Node.js](https://nodejs.org/) (versión 20 o superior)
- [Docker](https://www.docker.com/get-started) y Docker Compose

## 🚀 Puesta en Marcha

Sigue estos pasos para configurar el entorno de desarrollo local.

### 1. Clonar el Repositorio

Si aún no lo has hecho, clona el repositorio en tu máquina local.

### 2. Instalar Dependencias

Instala todas las dependencias del proyecto. Desde la raíz del repositorio, ejecuta:

```bash
npm install
```

### 3. Configurar Variables de Entorno

Copia el archivo de ejemplo `.env.example` para crear tu propio archivo de configuración `.env`. Este archivo es ignorado por Git para no exponer credenciales.

```bash
cp .env.example .env
```

El archivo `.env` contendrá la URL de conexión a la base de datos. Los valores por defecto están configurados para funcionar con el entorno de Docker proporcionado.

### 4. Iniciar la Base de Datos

El proyecto utiliza una base de datos PostgreSQL que se ejecuta en un contenedor de Docker. Para iniciarla, ejecuta:

```bash
docker compose up -d
```

El `-d` ejecuta el contenedor en segundo plano (detached mode).

### 5. Aplicar Migraciones de la Base de Datos

Una vez que la base de datos esté en funcionamiento, necesitas aplicar las migraciones para configurar el esquema.

```bash
npx prisma migrate dev
```

¡Y eso es todo! El entorno de desarrollo está listo.

## 💻 Ejecutando las Aplicaciones

Puedes ejecutar el backend y el frontend en terminales separadas.

### Backend

Para iniciar el servidor del backend, ejecuta:

```bash
nx serve backend
```

El servidor se iniciará en modo de desarrollo con recarga automática.

### Frontend

Para iniciar la aplicación de frontend, ejecuta:

```bash
nx serve frontend
```

La aplicación Angular se compilará y se abrirá en tu navegador por defecto.

## ✨ Comandos Útiles

### Detener la Base de Datos

Para detener el contenedor de la base de datos, puedes usar:

```bash
docker compose down
```

### Ver el Estado de los Contenedores

Para ver si tu contenedor de base de datos está corriendo, usa:

```bash
docker compose ps
```