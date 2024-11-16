import React, { useState, useEffect } from "react";
import "./Companies.module.css";

const logos = [
  "https://www.terapify.com/homee/companies/Penske.webp",
  "https://www.terapify.com/homee/companies/Platzi.webp",
  "https://www.terapify.com/homee/companies/Metlife.webp",
  "https://www.terapify.com/homee/companies/Penske.webp",
  "https://www.terapify.com/homee/companies/Platzi.webp",
  "https://www.terapify.com/homee/companies/Metlife.webp",
  "https://www.terapify.com/homee/companies/Penske.webp",
  "https://www.terapify.com/homee/companies/Platzi.webp",
  "https://www.terapify.com/homee/companies/Metlife.webp",
];

const CompaniesCarousel = () => {
  const [index, setIndex] = useState(0);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 2000); // Cambia la imagen cada 2 segundos

    return () => clearInterval(interval);
  }, []);

  // Función para obtener los tres logos que se mostrarán
  const getVisibleLogos = () => {
    return [
      logos[index],
      logos[(index + 1) % logos.length],
      logos[(index + 2) % logos.length],
    ];
  };

  return (
    <div className="relative overflow-hidden py-8 bg-white">
      <h2 className="text-center text-xl font-semibold mb-6">
        Las mejores empresas confían en MindWaves para{" "}
        <b>cuidar la salud mental de sus colaboradores</b>
      </h2>
      {/* <div className="flex items-center justify-center space-x-4 ">
        {getVisibleLogos().map((logo, idx) => (
          <div key={idx} className="flex-shrink-0 w-24 h-24">
            <img
              src={logo}
              alt={`logo-${idx}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>*/}
    </div>
  );
};

export default CompaniesCarousel;
