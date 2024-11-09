import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

const HorizontalCard = () => {
  return (
    <Card className="w-full max-w-7xl mx-auto my-10 flex flex-col md:flex-row">
      <CardHeader
        shadow={false}
        floated={false}
        className="w-full md:w-2/5 h-48 md:h-auto md:rounded-r-none flex-shrink-0 -m-1"
      >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="p-4 md:p-8 lg:p-10">
        <Typography
          variant="h4"
          color="blue-gray"
          className="mb-2 text-center md:text-left"
        >
          MindWave para empresas
        </Typography>
        <Typography
          color="gray"
          className="mb-6 font-normal text-center md:text-left"
        >
          Cuida el bienestar de tus colaboradores a través de la terapia
          psicológica online, actividades de bienestar y contenidos exclusivos
          de salud mental.
        </Typography>
        <ul className="text-black text-left list-disc list-inside space-y-2 px-4 md:px-6 lg:px-8 mb-5">
          <li>Solución integral para el 100% de tus colaboradores.</li>
          <li>
            Dashboard de métricas e insights para mejorar la cultura laboral de
            tu empresa.
          </li>
          <li>
            Implementación de la NOM-035 para identificar y prevenir riesgos
            psicosociales.
          </li>
        </ul>
        <p className="mb-8 text-center md:text-left">
          ¡Crea un mejor ambiente laboral con MindWave!
        </p>
        <div className="flex justify-center md:justify-start">
          <Button variant="text" className="flex items-center gap-2">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default HorizontalCard;
