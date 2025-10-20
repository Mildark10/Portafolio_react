export interface Project {
  title: string;
  subtitle: string;
  imgSrc: string;
  githubLink: string;
  liveLink: string;
  technologies: { name: string; icon: string }[];
}

import srcCripto from "../assets/desktop-cripto.png";
import srcCotizador from "../assets/desktop-cotizador.png";
import srcMern from "../assets/desktop_fullstack.png";
import react from "../assets/react.png";
import html5 from "../assets/html5.png";
import bootstrap from "../assets/bootstrap.png";
import tailwind from "../assets/twcss.png";
import nodejs from "../assets/node.png";
import mongodb from "../assets/mongodb.png";



export const projects: Project[] = [
  {
    title: "CriptoMoneda",
    subtitle: `🚀 Visualiza los diferentes tipos de cambio de moneda respecto a criptomonedas como Bitcoin.<br>
               🚀 Hecho con useState, useEffect.<br>
               🚀 Permite evaluar el tipo de cambio de tu criptomoneda.`,
    imgSrc: srcCripto,
    githubLink: "https://github.com/Mildark10/criptos",
    liveLink: "https://cambio-criptos.netlify.app/",
    technologies: [{ name: "React", icon: react },
    { name: "Bootstrap", icon: bootstrap },],
  },
  {
    title: "Control de Presupuestos",
    subtitle: `🚀 Uso de librerías Swipeable y hooks personalizados.<br>
                🚀 Evalúa ingresos y egresos mensuales.<br>
                🚀 Permite agregar, editar y eliminar gastos.`,
    imgSrc: srcCotizador,
    githubLink: "https://github.com/Mildark10/Control-Presupuesto",
    liveLink: "https://gastos-planificacion.netlify.app/",
    technologies: [{ name: "React", icon: react },
    { name: "Tailwind", icon: tailwind }],
  },
  {
    title: "Proyecto MERN - Gestión de Pacientes",
    subtitle: `🚀 Permite registrar, editar y eliminar pacientes fácilmente.<br>
🚀 Implementa autenticación segura con JSON Web Token (JWT).<br>
🚀 Utiliza MongoDB para almacenar historiales médicos y datos clínicos.<br>
🚀 Incluye hooks personalizados de React para manejar formularios y estados.<br>
🚀 Backend desarrollado en Node.js y Express para una gestión eficiente de la API.`,
    imgSrc: srcMern,
    githubLink: "https://github.com/Mildark10/Mern",
    liveLink: "",
    technologies: [{ name: "Node.js", icon: nodejs },
    { name: "MongoDB", icon: mongodb },
    { name: "React", icon: react }],
  },

];
