import { useEffect, useRef } from "react";
import gsap from "gsap";
import { certifications } from "../data/certifications";
import CertificationCard from "../components/CertificationCard";

const Certifications = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 60,
      stagger: 0.15,
      duration: 0.8,
      ease: "power3.out",
      cursor: "smooth",
    });
  }, []);

  return (
    <section className="min-h-screen bg-[#0E0E1A] text-white px-6 md:px-16 py-20">
      <div className="absolute w-full  bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-violet-400">
        📜 Certifications
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-8">
        {certifications.map((cert) => (
          <CertificationCard key={cert.id} item={cert} />
        ))}
      </div>
    </section>
  );
};

export default Certifications;
