import { Typography, Button } from "@material-tailwind/react";
import cards from '../../assets/Leyyer-CD-01.png'
const Cards = () => {
  return (
    <div className="section-fluid m-[7rem]">
      <div className="py-2 text-left m-6">
        <h2 className="lg:text-5xl font-bold font-poppins tracking-tight text-gray-900 sm:text-5xl ">
          Crypto Cards
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-4 rounded-[40px] bg-[#00D39529]/20 bg-center">
        <div className="m-[3rem] text-left">
          <Typography variant="h4" color="black" className="font-poppins  font-normal text-[2.5rem]">
            Make payments with VISA cards around the world, in your city and of
            course in your local grocery shop
          </Typography>
        </div>
        <div className="text-right object-top">
          <img src={cards} className="mt-[-10rem] w-screen h-auto" />
        </div>
      </div>
      <div className="m-[2rem] text-left">
        <Button className="rounded-lg py-6 px-6 text-[1.25rem] bg-emerald text-white font-normal font-poppins normal-case px-[3rem]">
          Request Your Card Today
        </Button>
      </div>
    </div>
  );
};

export default Cards;
