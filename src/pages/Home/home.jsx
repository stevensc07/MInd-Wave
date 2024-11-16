import styles from "./home.module.css";
import imgCenter from "../../assets/img-center.png";
import Header from "../../components/Header";
import AppDownloadComponent from "../../components/Card";
import LearnMore from "../../components/Learn-More";
import CompaniesCarousel from "../../components/Companies";
import Price from "../../components/Price";
import TestimonialsCarousel from "../../components/Testimonials";
import FAQ from "../../components/FAQ";
import Footer from "../../components/Footer";
import { Typography, Card } from "@material-tailwind/react";
const Home = () => {
  return (
    <div className={styles.main}>
      <Header />
      <div id="home" className={styles.mainContent}>
        <div
          className={`flex flex-col  w-full h-[28vh] md:h-[50vh] lg:h-[70rem] bg-no-repeat bg-cover bg-center rounded-lg`}
          style={{ backgroundImage: `url(${imgCenter})` }}
        >
          <h1
            className={`${styles.title} text-2xl sm:text-3xl md:text-4xl lg:text-5xl`}
          >
            MindWave
          </h1>
          <p
            className={`${styles.parragraph} text-sm sm:text-base md:text-lg lg:text-xl my-5`}
          >
            Transforma tu mente, impulsa tu vida.
          </p>
          <div className="hidden w-1/4  my-10 flex-col items-center justify-center p-6 bg-[#FBDDD9] rounded-lg shadow-md sm:flex md:flex-row">
            <div className="flex items-center gap-4 max-w-lg mx-auto">
              <svg
                width="28"
                height="38"
                viewBox="0 0 28 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.8393 34.748L21.9923 33.8935L19.4234 38L12.4922 22.9033L19.9081 19.6276L26.8393 34.748Z"
                  fill="#0059CB"
                ></path>
                <path
                  d="M1.16406 34.748L6.01106 33.8935L8.57997 38L15.5112 22.9033L8.09527 19.6276L1.16406 34.748Z"
                  fill="#0059CB"
                ></path>
                <path
                  d="M27.4197 15.0956L26.3316 16.0972C25.8238 16.5503 25.6304 17.2658 25.848 17.9097L26.2832 19.3167C26.5976 20.2944 25.9931 21.3437 24.9775 21.5584L23.5268 21.8684C22.8497 22.0115 22.3178 22.5361 22.1727 23.2039L21.8584 24.6347C21.6408 25.6363 20.5769 26.2325 19.5855 25.9225L18.1831 25.4933C17.5302 25.2786 16.8048 25.4933 16.3454 25.9702L15.3299 27.0434C14.6287 27.8065 13.4197 27.8065 12.6943 27.0434L11.6788 25.9702C11.2193 25.4694 10.494 25.2786 9.84111 25.4933L8.41451 25.9225C7.42314 26.2325 6.35924 25.6363 6.14162 24.6347L5.82729 23.2039C5.68221 22.5361 5.15026 22.0115 4.47323 21.8684L3.02245 21.5584C2.00691 21.3437 1.40242 20.2944 1.71675 19.3167L2.15199 17.9335C2.3696 17.2896 2.15199 16.5742 1.66839 16.1211L0.580311 15.1195C-0.193437 14.4279 -0.193437 13.2355 0.580311 12.5201L1.66839 11.5185C2.17617 11.0654 2.3696 10.3499 2.15199 9.70604L1.71675 8.29902C1.40242 7.32126 2.00691 6.27196 3.02245 6.05733L4.47323 5.74731C5.15026 5.60422 5.68221 5.07957 5.82729 4.41184L6.14162 2.98097C6.35924 1.97936 7.42314 1.38317 8.41451 1.69319L9.81693 2.12245C10.4698 2.33708 11.1952 2.12245 11.6546 1.6455L12.6701 0.572346C13.3713 -0.190782 14.5803 -0.190782 15.3057 0.572346L16.3212 1.6455C16.7807 2.1463 17.506 2.33708 18.1589 2.12245L19.5855 1.69319C20.5769 1.38317 21.6408 1.97936 21.8584 2.98097L22.1727 4.41184C22.3178 5.07957 22.8497 5.60422 23.5268 5.74731L24.9775 6.05733C25.9931 6.27196 26.5976 7.32126 26.2832 8.29902L25.848 9.68219C25.6304 10.3261 25.848 11.0415 26.3316 11.4946L27.4197 12.4962C28.1934 13.1878 28.1934 14.3802 27.4197 15.0956Z"
                  fill="#0085FF"
                ></path>
                <path
                  d="M13.9992 24.0782C19.7502 24.0782 24.4124 19.48 24.4124 13.8079C24.4124 8.13577 19.7502 3.5376 13.9992 3.5376C8.2481 3.5376 3.58594 8.13577 3.58594 13.8079C3.58594 19.48 8.2481 24.0782 13.9992 24.0782Z"
                  fill="#0059CB"
                ></path>
              </svg>
              <span className="text-gray-800 text-center md:text-left">
                Servicio garantizado. Conoce nuestra{" "}
                <a
                  href="https://web.terapify.com/garantia-ilimitada-de-primera-cita"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 underline"
                >
                  garantía ilimitada de primera cita.
                </a>
              </span>
            </div>
          </div>
        </div>
        <div id="empresas">
          <LearnMore id="empresas" />
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-3 py-12">
          {/* Primer bloque */}
          <div className="mx-auto max-w-xs sm:max-w-md md:max-w-sm lg:max-w-md">
            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-2 text-center md:text-left"
            >
              Somos profesionales
            </Typography>
            <Typography color="gray" className="font-normal text-justify px-5">
              Todos los terapeutas son profesionales acreditados y con licencia.
              MindWave le permite conectarse con ellos en un entorno en línea
              seguro y conveniente.
            </Typography>
          </div>

          {/* Segundo bloque */}
          <div className="mx-auto max-w-xs sm:max-w-md md:max-w-sm lg:max-w-md">
            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-2 text-center md:text-left"
            >
              Somos asequibles
            </Typography>
            <Typography color="gray" className="font-normal text-justify px-5">
              Paga una tarifa plana baja tanto por las sesiones en vivo como por
              la mensajería con tu terapeuta, monitoreo y reporte. La terapia no
              tiene por qué ser cara.
            </Typography>
          </div>

          {/* Tercer bloque */}
          <div className="mx-auto max-w-xs sm:max-w-md md:max-w-sm lg:max-w-md">
            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-2 text-center md:text-left"
            >
              Somos eficaces
            </Typography>
            <Typography color="gray" className="font-normal text-justify px-5">
              Miles de personas se han beneficiado de la terapia (¡solo consulta
              sus reseñas!). Con MindWave, puedes cambiar de terapeuta en
              cualquier momento si sientes que no estás obteniendo suficiente
              beneficio.
            </Typography>
          </div>
        </div>
        <div id="precios">
          {" "}
          <CompaniesCarousel />
          <Price />
        </div>
        <div id="faq">
          <FAQ />
        </div>
        <div id="testimonios">
          <TestimonialsCarousel />
          <AppDownloadComponent />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
