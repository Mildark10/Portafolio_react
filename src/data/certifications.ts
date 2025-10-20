export interface Certification {
    id : number;
    title: string;
    img : string;
}
import cssCert from "../assets/css_certifiacion.jpg";
import gitCert from "../assets/git_certificaciones.jpg";
import designCert from "../assets/diseño_certifacion.jpg";
import gestionCert from "../assets/gestion_certifacion.jpg";
import certiprof from "../assets/certiprof.jpg";
import officeCert from "../assets/office.jpg";

export const certifications: Certification[] = [
  { id: 1, title: "CSS Certification", img: cssCert },
  { id: 2, title: "Git Certification", img: gitCert },
  { id: 3, title: "Design Certification", img: designCert },
  { id: 4, title: "Project Management", img: gestionCert },
  { id: 5, title: "CertiProf Scrum Foundation", img: certiprof },
  { id: 6, title: "Microsoft Office Certification", img: officeCert },
];