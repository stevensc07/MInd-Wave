import React from "react";
import App from "../../assets/app.png";

const AppDownloadComponent = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-[#FBDDD9] rounded-[50px] rounded-tr-[10rem] shadow-md text-black">
      <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
        {/* Columna de texto */}
        <div className="md:w-1/2 mb-6 md:mb-0 md:mr-4 mt-20">
          <h2 className="text-2xl font-bold mb-4 ">
            Descarga nuestra app de psicología
          </h2>
          <p className="text-lg mb-6">
            MindWave, la app de gestion emocinal online que cuida de tu salud
            mental en donde quiera que estés. Encuentra hoy a tu psicólogo ideal
            y comienza tu terapia psicológica en línea de forma fácil, segura y
            privada.
          </p>
          {/* Botones de descarga */}
          <div className="flex justify-center gap-4 mt-6 bg-[#bcdcda] p-4 rounded-r-[50px] -ml-6">
            <a
              href="#"
              className="flex items-center bg-black px-4 py-2 rounded-lg text-white hover:bg-gray-800 focus:outline-none"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 384 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Icono de App Store */}
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
              </svg>
              <span>App Store</span>
            </a>

            <a
              href="#"
              className="flex items-center bg-black px-4 py-2 rounded-lg text-white hover:bg-gray-800 focus:outline-none"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Icono de Google Play */}
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
              </svg>
              <span>Google Play</span>
            </a>
          </div>
        </div>

        {/* Columna de imagen */}
        <div className="md:w-1/2 ">
          <img
            src={App} // Cambia esto a la URL o import de tu imagen
            alt="Vista de la app Terapify"
            className="rounded-lg "
          />
        </div>
      </div>
    </div>
  );
};

export default AppDownloadComponent;
