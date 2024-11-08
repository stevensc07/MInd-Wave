import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

const HorizontalCard = () => {
  return (
    <Card className="w-4/5 m-20 flex-row">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          MindWave para empresas
        </Typography>
        <Typography color="gray" className="mb-8 font-normal">
          Cuida el bienestar de tus colaboradores a través de la terapia
          psicológica online, actividades de bienestar y contenidos exclusivos
          de salud mental.
        </Typography>
        <ul className="text-black text-left mt-6 list-disc list-inside space-y-2 px-4 md:px-8 lg:px-16 mb-5">
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
        <p className="mb-16">¡Crea un mejor ambiente laboral con MindWave!</p>
        <a href="#" className="inline-block">
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
        </a>
      </CardBody>
    </Card>
  );
};

export default HorizontalCard;
