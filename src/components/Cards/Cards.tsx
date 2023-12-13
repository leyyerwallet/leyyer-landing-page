import { Typography, Button } from "@material-tailwind/react";
import cards from '../../assets/Leyyer-CD-01.png';

const Cards = () => {
  return (
    <div className="section-fluid md:m-6">
      <div className="py-2 text-center md:text-left md:m-6">
        <h2 className="text-3xl lg:text-5xl font-bold font-poppins tracking-tight text-gray-900 sm:text-5xl">
          Crypto Cards
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-[40px] bg-[#00D39529]/20 bg-center items-center">
        <div className="m-3 text-center md:text-left md:m-3">
          <Typography variant="h4" color="black" className="font-poppins font-normal text-lg md:text-[2rem] lg:text-[xx-large]">
            Make payments with VISA cards around the world, in your city, and, of
            course, in your local grocery shop
          </Typography>
          <div className="mt-4 md:mt-2 text-center md:text-left">
            <Button className="rounded-lg py-4 md:py-2 text-base md:text-[1.25rem] bg-emerald text-white font-normal font-poppins normal-case px-6 md:px-[3rem]">
              Request Your Card Today
            </Button>
          </div>
        </div>
        <div className="text-center md:text-right object-top">
          <img src={cards} className="mt-[-5rem] w-full h-auto md:w-auto max-w-full" alt="crypto-cards" />
        </div>
      </div>
    </div>
  );
};

export default Cards;