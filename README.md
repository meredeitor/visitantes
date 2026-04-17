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
