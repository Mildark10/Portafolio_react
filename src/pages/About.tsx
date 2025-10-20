import { useEffect, useRef } from "react";
import gsap from "gsap";
import aboutBanner from "../assets/about-banner2.png";
import { experiences } from "../data/experiences";
import ExperienceCard from "../components/ExperienceCard";
import { skills } from "../data/skills";
import SkillCard from "../components/SkillCard";
import { motion } from "framer-motion";

const About = () => {
    const circlesRef = useRef<HTMLDivElement[]>([]);
    const imgRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        // === Animación de los círculos flotantes ===
        circlesRef.current.forEach((circle) => {
            gsap.to(circle, {
                y: () => gsap.utils.random(-25, 25),
                x: () => gsap.utils.random(-25, 25),
                duration: () => gsap.utils.random(4, 7),
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
        });

        // === Animación inicial de la imagen ===
        if (imgRef.current) {
            gsap.fromTo(
                imgRef.current,
                { opacity: 0, y: 100, scale: 0.9 },
                {
                    opacity: 1,
                    y: 2,
                    scale: 1,
                    duration: 1.3,
                    ease: "power3.out",
                }
            );

            // === Animación flotante infinita ===
            gsap.to(imgRef.current, {
                y: -6,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
        }
    }, []);

    // === Animaciones hover ===
    const handleMouseEnter = () => {
        gsap.to(imgRef.current, {
            scale: 1.05,
            rotate: 2,
            duration: 0.4,
            ease: "power2.out",
        });
    };

    const handleMouseLeave = () => {
        gsap.to(imgRef.current, {
            scale: 1,
            rotate: 0,
            duration: 0.4,
            ease: "power2.inOut",
        });
    };

    return (
        <section className="relative min-h-screen bg-[#0E0E1A] text-white overflow-hidden px-6 md:px-16 py-20">
            {/* Fondo animado */}
            <div className="absolute w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="absolute inset-0 overflow-hidden -z-10">
                {["bg-violet-600/30", "bg-blue-500/20", "bg-pink-400/20"].map(
                    (color, i) => (
                        <div
                            key={i}
                            ref={(el) => {
                                if (el) circlesRef.current[i] = el;
                            }}
                            className={`absolute rounded-full blur-3xl ${color}`}
                            style={{
                                width: `${120 + i * 100}px`,
                                height: `${120 + i * 100}px`,
                                top: `${10 + i * 25}%`,
                                left: `${10 + i * 20}%`,
                            }}
                        ></div>
                    )
                )}
            </div>

            {/* Contenido */}
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                {/* Imagen animada con GSAP */}
                <figure className="flex-1 flex justify-center">
                    <img
                        ref={imgRef}
                        src={aboutBanner}
                        alt="Sobre mí"
                        className="rounded-lg w-48 sm:w-64 md:w-72 lg:w-80 shadow-2xl border border-violet-500/20 transition-transform duration-300"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    />
                </figure>

                {/* Texto */}
                <div className="flex-1 space-y-4">
                    <p className="text-violet-400 font-semibold">About Me</p>
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                        Passionate about Technology and Software Development
                    </h2>
                    <p className="text-neutral-300 leading-relaxed">
                        Hi! I'm <strong>Milton Manuel Avalos Pucyura</strong>, a Systems
                        Engineer graduated from{" "}
                        <strong>National Technological University of Lima Sur (UNTELS)</strong>.
                        I am passionate about creating technology solutions that bring real value,
                        from system analysis and design to frontend and backend development.
                    </p>
                    <div className="max-w-4xl mx-auto mt-8">
                    <h3 className="text-center text-2xl font-bold mb-8 text-violet-400">
                        Skills
                    </h3>

                    <motion.div
                        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 justify-items-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        {skills.map((skill) => (
                            <SkillCard key={skill.id} skill={skill} />
                        ))}
                    </motion.div>
                </div>
                </div>
                
            </div>

            {/* Experiencia */}
            <div className="max-w-5xl mx-auto mt-20">
                <h3 className="text-center text-2xl font-bold mb-10 text-violet-400">
                    My Experience
                </h3>

                <div className="relative border-l-2 border-violet-500/40 ml-6 space-y-10">
                    {experiences.map((exp) => (
                        <ExperienceCard key={exp.id} item={exp} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
