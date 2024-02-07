import { Typography, Button } from '@material-tailwind/react';
import cards from '../../assets/Leyyer-CD-03 2.png';
import Background from '../Background/Background.tsx';

const Cards = () => {
  return (
    <div className="section-fluid m-4 md:m-[7rem] flex flex-col md:flex-row items-center relative">
      {/* Left side */}
      <div className="md:w-1/2 m-2 md:m-3 text-center md:text-left">
        <div className="text-center lg:text-left m-6">
          <h2 className="lg:text-5xl font-bold font-poppins tracking-tight text-gray-900 sm:text-4xl">
            Crypto Cards
          </h2>
        </div>
        <Typography
          placeholder={undefined}
          color="gray"
          className="font-poppins font-normal text-base sm:text-xl md:text-2xl md:leading-10 ml-8"
        >
          Make payments with VISA cards around the world, in your city, and, of
          course, in your local grocery shop
        </Typography>

        <div className="mt-4 flex-auto md:text-left md:ml-8">
          <Button
            placeholder={undefined}
            className="rounded-lg md:py-2.5 px-2 md:text-lg bg-emerald text-white font-normal font-poppins normal-case md:px-auto"
          >
            Request Your Card Today
          </Button>
        </div>
      </div>

      {/* Right side */}
      <div className="md:w-1/2 m-2 md:m-3 text-center md:text-right">
        {/* Display the image below on smaller screens */}
        <Background
          className={
            'left-[calc(100%-60rem)] sm:left-[calc(100%-60rem)] top-[calc(100%-40rem)] sm:top-[calc(100%-40rem)]'
          }
        />
        <img
          src={cards}
          className="md:max md:hidden h-auto"
          alt="Crypto Cards"
        />
        {/* Display the image on the right on larger screens */}
        <img
          src={cards}
          className="md:max hidden md:block h-auto"
          alt="Crypto Cards"
        />
      </div>
    </div>
  );
};

export default Cards;
