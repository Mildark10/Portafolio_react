export interface Skill {
    id: number;
    name: string;
    logo: string;
    category: "frontend" | "backend" | "tools" | "database";
}

import html5 from "../assets/html5.png";
import css3 from "../assets/css3.png";
import javascript from "../assets/javascript.png";
import typescript from "../assets/typescript.png";
import react from "../assets/react.png";
import tailwind from "../assets/twcss.png";
import bootstrap from "../assets/bootstrap.png";
import php from "../assets/php.png";
import java from "../assets/java.png";
import mysql from "../assets/mysql.png";
import firebase from "../assets/firebase.png";
import git from "../assets/git.png";

export const skills: Skill[] = [
    { id: 1, name: "HTML5", logo: html5, category: "frontend" },
    { id: 2, name: "CSS3", logo: css3, category: "frontend" },
    { id: 3, name: "JavaScript", logo: javascript, category: "frontend" },
    { id: 4, name: "TypeScript", logo: typescript, category: "frontend" },
    { id: 5, name: "React", logo: react, category: "frontend" },
    { id: 6, name: "Tailwind", logo: tailwind, category: "frontend" },
    { id: 7, name: "Bootstrap", logo: bootstrap, category: "frontend" },
    { id: 8, name: "PHP", logo: php, category: "backend" },
    { id: 9, name: "Java", logo: java, category: "backend" },
    { id: 10, name: "MySQL", logo: mysql, category: "database" },
    { id: 11, name: "Firebase", logo: firebase, category: "database" },
    { id: 12, name: "Git", logo: git, category: "tools" }
];
