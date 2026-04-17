# Sistema de Visitantes – PWA

Sistema web progresivo (PWA) para el **registro y control de visitantes**, diseñado para operación en plantas, oficinas y accesos controlados.

El sistema está dividido en dos partes claras:

- **Registro de visitantes (público)** mediante un enlace/QR.
- **Control por guardia o administrador (privado)** mediante una PWA instalada.

---

## 🚀 Funcionalidad principal

### 🧍 Registro de Visitantes (Público)
- Acceso mediante **QR impreso** o enlace directo.
- Registro desde el **dispositivo personal del visitante**.
- Datos capturados:
  - Nombre
  - Empresa
  - Motivo de visita
  - Persona a quien visita
- Generación de **QR único** por visita.
- Visualización de **contador de espera**.
- No requiere login ni instalación de app.

### 🚓 Guardia / Administrador (PWA)
- Acceso privado con **login Firebase**.
- Aplicación instalable como **PWA**.
- Funciones principales:
  - Visualización de visitantes en tiempo real.
  - Escaneo de QR del visitante.
  - Validación de acceso (entrada).
  - Registro de salida.
  - Captura de **incidencias al momento de la salida**.
- Control de roles mediante Firebase Auth y Firestore Rules.

---

## 🧱 Estructura del proyecto
## 📲 Progressive Web App (PWA)

- La **PWA está pensada únicamente para el guardia o administrador**.
- El visitante **NO instala la aplicación**, solo accede a `kiosk.html`.

### Características PWA:
- Instalación en Android / Desktop.
- Modo `standalone` (sin barra del navegador).
- Inicio automático en `index.html`.
- Uso de caché básico para disponibilidad de la interfaz.
- Íconos personalizados.

---

## 🔐 Seguridad

- La seguridad no depende del hosting.
- Acceso protegido con:
  - **Firebase Authentication**
  - **Firestore Security Rules**
- Sin login:
  - No hay acceso al panel de guardia.
  - No se puede leer ni modificar información sensible.

---

## 🌐 Despliegue

El sistema está pensado para ser publicado mediante **GitHub Pages**.

### URLs típicas:

- Registro de visitantes:
- https://meredeitor.github.io/visitantes/kiosk.html

- Guardia / Admin (PWA):

https://meredeitor.github.io/visitantes/index.html

## 🖨 QR para visitantes

Se recomienda imprimir un QR que apunte a:


https://usuario.github.io/visitantes/kiosk.html

Colocarlo en el acceso principal para que los visitantes realicen su registro desde su propio dispositivo.

---

## ✅ Requisitos

- Navegador moderno (Chrome, Edge, Firefox, Safari).
- Cuenta y proyecto configurado en **Firebase**:
  - Authentication (Email/Password).
  - Firestore Database.
- Hosting estático (GitHub Pages).

---

## 🧠 Notas de diseño

- El visitante **no elige rol**.
- El guardia es el único que se autentica.
- La PWA es una **herramienta interna**, no pública.
- Diseño pensado para simplicidad operativa y auditoría.

---

## 📌 Estado del proyecto

✅ Flujo de registro completo  
✅ Control de accesos  
✅ Registro de incidencias  
✅ PWA funcional  
✅ Listo para producción

---

## 👤 Autor

Desarrollado como parte de un proyecto de digitalización de procesos de control de accesos.

---
