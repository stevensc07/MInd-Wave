import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import Logo from "../../assets/logo.png";
const Header = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 m-5 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#empresas" className="flex items-center">
          Terapia para empresas
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#precios" className="flex items-center">
          Precios
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#faq" className="flex items-center">
          Preguntas frecuentes
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#testimonios" className="flex items-center">
          Opiniones
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className="-m-6  max-h-[768px] w-[calc(100%+48px)] overflow-scroll mb-48">
      <Navbar className=" fixed  top-0 z-10 h-32 max-w-full ml-6 rounded-none px-4 py-2 lg:px-8 lg:py-4 ">
        <div className=" m-10 flex items-center justify-between text-blue-gray-900">
          <div className="-mt-10">
            <img
              href="#home"
              alt="nature"
              className="h-[3rem] w-[3rem] object-cover object-center"
              src={Logo}
            />
            <Typography
              as="a"
              href="#home"
              className=" -ml-2 cursor-pointer py-1.5 font-medium"
            >
              MindWave
            </Typography>
          </div>

          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            {/*<div className="flex items-center gap-x-1">
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span>Log In</span>
              </Button>
              <Button
                variant="outlined"
                size="sm"
                className="hidden lg:inline-block bg-[#fbddd9] color-[#fbddd9] border-none"
              >
                <span>Sign in</span>
              </Button>
            </div>*/}
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse className="bg-white w-full -mt-2" open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className=" border">
              <span>Log In</span>
            </Button>
            <Button
              fullWidth
              variant="outlined"
              size="sm"
              className="border-none bg-[#fbddd9]"
            >
              <span>Sign in</span>
            </Button>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
};
export default Header;
