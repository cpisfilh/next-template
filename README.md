# NEXT TEMPLATE

Template full-stack moderno construido con tecnologías actuales y patrones de arquitectura escalables para sistemas administrativos, CRMs, ERPs, plataformas SaaS y aplicaciones empresariales.

---

# Stack

- Next.js 16
- React 19
- TypeScript
- PostgreSQL
- Prisma ORM
- Tailwind CSS
- shadcn/ui

---

# Features

## Autenticación y Autorización

- Autenticación con JWT
- Manejo de sesión con Better Auth
- Manejo de cookies
- Roles y permisos (RBAC)
- Rutas protegidas
- Validación de sesión

---

## Base de Datos

- PostgreSQL
- Prisma ORM
- Soporte para migraciones
- Soporte para seeders

---

## Capa API

### Backend
- Next.js Route Handlers

### Frontend
- Fetch API nativo

---

## Formularios y Validaciones

- React Hook Form
- Validaciones con Zod
- Componentes reutilizables para formularios
- Manejo de errores

---

## Sistema CRUD

- Arquitectura CRUD genérica
- DataTable reutilizable
- TanStack Table
- Crear, leer, actualizar y eliminar
- Paginación
- Filtros
- Ordenamiento
- Búsqueda
- Columna de acciones
- Columnas dinámicas

---

## UI & UX

- Componentes con shadcn/ui
- Diseño responsive
- Modales y diálogos
- Toast notifications
- Dark mode
- Estados de carga
- Estados vacíos

---

## Manejo de Estado

- Zustand
- Manejo de estado global ligero

---

# Arquitectura

## Screaming Architecture

El proyecto está organizado por módulos de negocio en lugar de capas técnicas.

```txt
src/
├── app/
├── components/
├── lib/
├── modules/
│   ├── auth/
│   ├── users/
│   ├── roles/
│   └── products/
├── prisma/
├── shared/
├── store/
├── types/
└── utils/
```

---

# Ejemplo de Módulo

Cada módulo puede contener:

```txt
users/
├── actions/
├── components/
├── hooks/
├── schemas/
├── services/
├── types/
├── utils/
└── views/
```

---

# Convenciones

- Un módulo por dominio de negocio
- Un schema por formulario
- Una capa de servicios por módulo
- Componentes compartidos dentro de `/components`
- Componentes específicos dentro de cada módulo
- Patrones reutilizables para tablas y formularios
- Arquitectura server-first cuando sea posible

---

# Decisiones Técnicas

## ¿Por qué fetch en lugar de TanStack Query?

Este template prioriza:

- Simplicidad
- Mantenibilidad
- Patrones nativos de Next.js
- Mejor compatibilidad con SSR
- Menos boilerplate

TanStack Query puede agregarse opcionalmente para aplicaciones altamente dinámicas.

---

# Casos de Uso

Este template es ideal para:

- Paneles administrativos
- CRMs
- ERPs
- Dashboards SaaS
- Sistemas internos
- Plataformas empresariales

---

# Posibles Mejoras Futuras

Integraciones futuras posibles:

- Arquitectura multi-tenant
- Subida de archivos
- Logs de auditoría
- Notificaciones
- Funcionalidades realtime
- Analytics y dashboards
- Soporte i18n
- Testing
- Docker
- CI/CD

---

# Inicio Rápido

```bash
# Instalar dependencias
pnpm install

# Renombrar archivo .env.example a .env y configurar las variables de entorno

# Ejecutar migraciones o directamente push a la base de datos
pnpm prisma migrate dev o pnpm prisma db push

# Iniciar servidor de desarrollo
pnpm dev
```
---
# Pasos que se realizaron para configurar la plantilla: 
(Por si te interesa saber cómo se configuró )

## 1) Integración Prisma ORM en esta guía: https://www.prisma.io/docs/guides/frameworks/nextjs

## 2) Configuración de Better-Auth: https://better-auth.com/docs/integrations/next
Generar tu secret y URL de Better-Auth en el archivo `.env`

## 3) Implementación de Shadcn UI: https://ui.shadcn.com/docs/installation/next#existing-next-project

## 4) Layout Base: https://ui.shadcn.com/blocks
Se instaló un bloque de layout base usando Shadcn UI (pnpm dlx shadcn@latest add sidebar-07) y se implementó Dark Mode (https://ui.shadcn.com/docs/dark-mode/next)

---

# Licencia

MIT
