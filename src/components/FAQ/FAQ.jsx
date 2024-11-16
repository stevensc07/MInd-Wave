import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "¿Qué es MindWave?",
      answer:
        "MindWave es una plataforma de terapia en línea que conecta a personas con profesionales de la salud mental, ofreciendo sesiones accesibles y personalizadas.",
    },
    {
      question: "¿Cómo puedo agendar una sesión?",
      answer:
        "Para agendar una sesión, crea una cuenta, selecciona un terapeuta y elige una fecha y hora que te acomoden.",
    },
    {
      question: "¿Las sesiones son confidenciales?",
      answer:
        "Sí, todas las sesiones en MindWave son completamente confidenciales y cumplen con estándares internacionales de privacidad.",
    },
    {
      question: "¿Qué pasa si no estoy satisfecho con mi terapeuta?",
      answer:
        "Si no estás satisfecho, puedes cambiar de terapeuta en cualquier momento. Queremos asegurarnos de que encuentres el apoyo adecuado.",
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer:
        "Aceptamos tarjetas de crédito, débito y otros métodos de pago digitales como PayPal.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="bg-[#FBDDD9] py-16 px-6 my-20 rounded-xl">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#091D3E] mb-6">
          Preguntas Frecuentes
        </h2>
        <p className="text-lg text-[#091D3E] mb-12">
          Encuentra respuestas a las preguntas más comunes sobre MindWave y
          nuestros servicios.
        </p>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-[#091D3E] font-semibold text-lg"
              >
                <span>{faq.question}</span>
                <svg
                  className={`h-6 w-6 transition-transform duration-200 ${
                    activeIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeIndex === index && (
                <div className="px-6 py-4 text-[#091D3E] border-t text-base">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
