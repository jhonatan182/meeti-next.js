# Meeti - Next.js

Aplicación web construida con Next.js 16, TypeScript y Drizzle ORM para la gestión de comunidades.

## 🚀 Tecnologías

### Stack Principal

- **Next.js 16.1.6** - Framework de React con App Router
- **React 19.2.3** - Biblioteca de UI
- **TypeScript 5** - Tipado estático
- **TailwindCSS 4** - Framework de CSS

### Base de Datos

- **PostgreSQL** - Base de datos relacional
- **Drizzle ORM 0.45.1** - ORM para TypeScript
- **Drizzle Kit 0.31.9** - Herramientas de migración

### Formularios y Validación

- **React Hook Form 7.71.2** - Manejo de formularios
- **Zod 4.3.6** - Validación de esquemas
- **@hookform/resolvers 5.2.2** - Integración con Zod

### Herramientas de Desarrollo

- **ESLint 9** - Linting de código
- **tsx 4.21.0** - Ejecución de TypeScript
- **clsx 2.1.1** - Utilidades de clases CSS

## 📁 Estructura del Proyecto

```
meeti/
├── app/                          # Rutas de Next.js App Router
│   ├── (public)/                 # Rutas públicas
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── auth/                     # Rutas de autenticación
│   │   ├── create-account/
│   │   ├── forgot-password/
│   │   ├── login/
│   │   └── layout.tsx
│   ├── globals.css               # Estilos globales
│   ├── layout.tsx                # Layout principal
│   └── favicon.ico
├── src/                          # Código fuente
│   ├── db/                       # Configuración de base de datos
│   │   ├── index.ts              # Conexión a la DB
│   │   └── schema/               # Esquemas de Drizzle
│   │       └── community.ts      # Esquema de comunidades
│   ├── features/                 # Funcionalidades por dominio
│   │   └── auth/                 # Módulo de autenticación
│   │       ├── actions/          # Server Actions
│   │       ├── components/       # Componentes del feature
│   │       ├── schemas/          # Esquemas de validación
│   │       └── services/         # Lógica de negocio
│   └── shared/                   # Código compartido
│       ├── components/           # Componentes reutilizables
│       │   ├── forms/           # Componentes de formularios
│       │   ├── typography/      # Componentes de texto
│       │   └── ui/              # Componentes UI base
│       └── utils/               # Utilidades compartidas
├── drizzle/                      # Migraciones de base de datos
│   ├── 0000_living_martin_li.sql
│   ├── 0001_gorgeous_invisible_woman.sql
│   └── meta/                    # Metadatos de migraciones
├── public/                       # Archivos estáticos
├── .env                          # Variables de entorno (no versionado)
├── drizzle.config.ts            # Configuración de Drizzle
├── next.config.ts               # Configuración de Next.js
├── tsconfig.json                # Configuración de TypeScript
└── package.json                 # Dependencias y scripts
```

## 🛠️ Scripts Disponibles

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar servidor de producción
npm run start

# Linting del código
npm run lint
```

## 🚀 Configuración Inicial

### 1. Clonar el Repositorio

```bash
git clone <repositorio-url>
cd meeti
```

### 2. Instalar Dependencias

```bash
npm install
```

### 3. Configurar Variables de Entorno

Crear un archivo `.env` en la raíz del proyecto:

```env
DATABASE_URL=postgresql://usuario:password@localhost:5432/nombre_db
APP_NAME=Meeti
```

### 4. Configurar Base de Datos

Asegúrate de tener PostgreSQL instalado y una base de datos creada.

### 5. Ejecutar Migraciones

```bash
npx drizzle-kit push
```

### 6. Iniciar Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🏗️ Guía de Desarrollo

### Crear un Nuevo Feature

1. **Crear la estructura de carpetas** en `src/features/`:

```
src/features/nuevo-feature/
├── actions/          # Server Actions de Next.js
├── components/       # Componentes específicos del feature
├── schemas/          # Esquemas de validación con Zod
└── services/         # Lógica de negocio y API calls
```

2. **Crear componentes reutilizables** en `src/shared/components/` si son necesarios.

3. **Añadir rutas** en el directorio `app/` siguiendo la estructura de App Router.

### Buenas Prácticas

- **Componentes**: Usa PascalCase para nombres de archivos y componentes
- **Tipos**: Define interfaces y tipos en archivos separados cuando sea necesario
- **Validación**: Usa Zod para validar datos de entrada en formularios y APIs
- **Estilos**: Utiliza TailwindCSS y las clases de `clsx` para condicionales
- **Base de Datos**: Los cambios en el esquema deben generar migraciones con Drizzle

### Comandos de Base de Datos

```bash
# Generar migraciones
npx drizzle-kit generate

# Aplicar migraciones
npx drizzle-kit push

# Ver estado de la base de datos
npx drizzle-kit studio
```

### Alias Configurados

- `@/*` → Raíz del proyecto
- `@/components/*` → `./src/shared/components/*`

## 📊 Estado Actual de la Base de Datos

### Tablas Existentes

- **communities**: Almacenamiento de comunidades con:
  - `id`: UUID (primary key)
  - `name`: VARCHAR(255) NOT NULL

## 🚀 Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio a [Vercel](https://vercel.com)
2. Configura las variables de entorno en el dashboard de Vercel
3. Despliega automáticamente con cada push a main

### Manual

```bash
npm run build
npm run start
```

## 📚 Recursos

- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de Drizzle ORM](https://orm.drizzle.team)
- [Documentación de TailwindCSS](https://tailwindcss.com/docs)
- [Documentación de Zod](https://zod.dev)
