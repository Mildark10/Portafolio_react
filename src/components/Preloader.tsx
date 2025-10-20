import { useEffect, useRef } from "react";
import { gsap } from "gsap"; // Carga local de la fuente Monoton

const Preloader = () => {
  const preloaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const preloader = preloaderRef.current;
    if (!preloader) return;

    const letters = preloader.querySelectorAll(".letter");

    // Animación inicial: letras apareciendo secuencialmente
    gsap.fromTo(
      letters,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: "power3.out",
      }
    );

    // Animación de “expansión” y desvanecimiento del preloader completo
    gsap.to(preloader, {
      scale: 6,
      opacity: 0,
      duration: 1.6,
      delay: 2,
      ease: "power3.in",
      onComplete: () => {
        preloader.style.display = "none";
      },
    });
  }, []);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-neutral-950 to-black text-white z-50"
    >
      <div className="flex flex-wrap justify-center">
        {"Portafolio - MAP".split("").map((char, i) => (
          <span
            key={i}
            className="letter text-5xl sm:text-6xl md:text-7xl font-[Monoton] tracking-widest"
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Preloader;
