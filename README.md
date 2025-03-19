

# 🚀 Lista de Tareas Simple con React + TypeScript + Vite 📝

¡Bienvenido a este proyecto de lista de tareas simple! Este es un proyecto práctico para aprender y reforzar conceptos de **React** y **TypeScript**, creado siguiendo el contenido de [FreeCodeCamp en Español](https://www.youtube.com/@freecodecampes) y el repositorio de [SergieCode](https://github.com/sergiecode). 

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

---

## 📌 Descripción del Proyecto

Este proyecto es una aplicación simple de lista de tareas (**To-Do List**) que permite:

- **Agregar tareas** 📥
- **Eliminar tareas** 🗑️
- **Visualizar la lista de tareas** 📋

Fue desarrollado utilizando:
- **React** para la interfaz de usuario.
- **TypeScript** para agregar tipado estático y mejorar la calidad del código.
- **Vite** como herramienta de construcción rápida y eficiente.

---

## 🛠️ Características Técnicas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **TypeScript**: Superconjunto de JavaScript que añade tipado estático.
- **Vite**: Herramienta de construcción rápida para aplicaciones modernas.
- **HMR (Hot Module Replacement)**: Recarga rápida durante el desarrollo.
- **ESLint**: Configuración básica para mantener un código limpio y consistente.

---

## 🎯 Objetivo del Proyecto

Este proyecto fue creado con el propósito de:
- Practicar y reforzar conceptos básicos de **React** y **TypeScript**.
- Aprender a manejar el estado en aplicaciones React.
- Familiarizarse con **Vite** como herramienta de desarrollo.
- Seguir buenas prácticas de desarrollo y estructura de código.

---

## 🖼️ Capturas de Pantalla

![Captura de pantalla de la lista de tareas](/screenshoot/screenshotProject.png)  

---

## 🚀 Cómo Ejecutar el Proyecto

Sigue estos pasos para ejecutar el proyecto en tu máquina local:

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/pierotticastillo/sergiecodereactts.git
   ```

2. **Instala las dependencias**:
   ```bash
   cd sergiecodereactts
   npm install
   ```

3. **Inicia el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

4. **Abre tu navegador** y visita:
   ```
   http://localhost:5173
   ```

---

## 📂 Estructura del Proyecto

```
sergiecodereactts/
├── src/
│   ├── components/       # Componentes de React
│   ├── App.tsx           # Componente principal
│   ├── main.tsx          # Punto de entrada
├── public/               # Archivos estáticos
├── index.html            # Plantilla HTML
├── vite.config.ts        # Configuración de Vite
├── tsconfig.json         # Configuración de TypeScript
├── package.json          # Dependencias y scripts
└── README.md             # Este archivo
```

---

## 🛠️ Configuración de ESLint

Este proyecto incluye una configuración básica de ESLint. Si deseas expandirla para un proyecto de producción, puedes seguir estas recomendaciones:

```js
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

También puedes instalar plugins adicionales para reglas específicas de React:

```js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config({
  plugins: {
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```

---

## 🌟 Recursos Utilizados

- [FreeCodeCamp en Español](https://www.youtube.com/@freecodecampes): Tutoriales y guías para aprender desarrollo web.
- [SergieCode](https://github.com/sergiecode): Repositorio con ejemplos y proyectos prácticos.
- [React](https://reactjs.org/): Documentación oficial de React.
- [TypeScript](https://www.typescriptlang.org/): Documentación oficial de TypeScript.
- [Vite](https://vitejs.dev/): Documentación oficial de Vite.

---

## 🙌 Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto, sigue estos pasos:

1. Haz un **fork** del repositorio.
2. Crea una rama con tu nueva característica (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz commit (`git commit -m 'Añade nueva característica'`).
4. Haz push a la rama (`git push origin feature/nueva-caracteristica`).
5. Abre un **Pull Request**.

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**. Para más detalles, consulta el archivo [LICENSE](LICENSE).

---

¡Gracias por visitar este proyecto! Espero que te sea útil para aprender y practicar React y TypeScript. 😊

---

### Iconos y Emojis Utilizados
- 🚀: Representa el inicio rápido con Vite.
- 📝: Representa la lista de tareas.
- 🛠️: Representa las herramientas y tecnologías utilizadas.
- 🎯: Representa el objetivo del proyecto.
- 🙌: Representa las contribuciones.

---

¡Diviértete programando! 🚀👩‍💻👨‍💻