import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-3 w-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

const PricingCard = () => {
  const plans = [
    {
      name: "Basic",
      price: "30",
      features: [
        "Test inicial",
        "Sesiones individuales: x disp",
        "Reporte básico",
        "Asistente virtual",
        "Material genérico",
      ],
    },
    {
      name: "Premium",
      price: "60",
      features: [
        "Test inicial",
        "Sesiones individuales: 5",
        "Reporte básico",
        "Asistente virtual",
        "Material genérico",
        "Reporte detallado",
        "Material dedicado",
        "Charlas grupales",
      ],
    },
    {
      name: "Pro",
      price: "90",
      features: [
        "Test inicial",
        "Sesiones individuales: a demanda",
        "Reporte básico",
        "Asistente virtual",
        "Material genérico",
        "Reporte detallado",
        "Material dedicado",
        "Charlas grupales",
        "Conferencias",
        "Integración ERP",
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {plans.map((plan, index) => (
        <Card
          key={index}
          color="cyan"
          variant="gradient"
          className="w-full max-w-[20rem] p-8 my-12"
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
          >
            <Typography
              variant="small"
              color="white"
              className="font-normal uppercase"
            >
              {plan.name}
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className="mt-6 flex justify-center gap-1 text-7xl font-normal"
            >
              <span className="mt-2 text-4xl">$</span>
              {plan.price} <span className="self-end text-4xl">/mo</span>
            </Typography>
          </CardHeader>
          <CardBody className="p-0">
            <ul className="flex flex-col gap-4">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <CheckIcon />
                  </span>
                  <Typography className="font-normal">{feature}</Typography>
                </li>
              ))}
            </ul>
          </CardBody>
          <CardFooter className="mt-12 p-0">
            <Button
              size="lg"
              color="white"
              className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
              ripple={false}
              fullWidth={true}
            >
              Comprar
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default PricingCard;
