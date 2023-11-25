import { Typography, Button } from "@material-tailwind/react";

const Cards = () => {
  return (
    <div className="section-fluid">
    <div className="m-[2rem] text-left">
    <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Crypto Cards
            </h2>
           </div>
    
      <div className="grid grid-cols-2 gap-4 rounded-[20px] bg-[#00D39529] bg-center justify-center m-6 p-[2rem]">
        <div>
          <div className="m-[10rem]">
            <Typography variant="h4" color="black" className="font-poppins">
              Make payments with VISA cards around the world, in your city and
              of course in your local grocery shop
            </Typography>
          </div>
          <div className="m-[4rem]">
            <Button fullWidth>block level button</Button>
          </div>
        </div>
        <div>
          <img src={"src/assets/Leyyer-CD-01.png"} className="m-[-10rem]" />
        </div>
      </div>
    </div>
  );
};

export default Cards;
