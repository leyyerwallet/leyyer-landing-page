import { Typography, Button } from "@material-tailwind/react";
import cards from '../../assets/Leyyer-CD-02.png';

const Cards = () => {
    return (
        <div className="section-fluid m-4 md:m-[7rem]">
            <div className="py-2 text-center lg:text-left m-6">
                <h2 className="lg:text-5xl font-bold font-poppins tracking-tight text-gray-900 sm:text-4xl">
                    Crypto Cards
                </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4 rounded-[40px] bg-[#00D39529]/20 bg-center">
                <div className="m-[2rem] md:m-[3rem] text-center md:text-left">
                    <Typography
                        placeholder={undefined}
                        variant="h4"
                        color="black"
                        className="font-poppins font-normal text-xl sm:text-2xl md:text-[2.5rem] md:leading-[3rem]"
                    >
                        Make payments with VISA cards around the world, in your city, and, of course, in your local grocery shop
                    </Typography>
                    <div className="mt-[1rem] md:hidden">
                        {/* This will display the image below text on smaller screens */}
                        <img src={cards} className="w-full h-auto" alt="Crypto Cards" />
                    </div>
                </div>
                <div className="hidden md:block text-center md:text-right">
                    {/* Display image on the right on larger screens */}
                    <img src={cards} className="mt-[-8rem] md:h-full w-full h-auto md:h-full" alt="Crypto Cards" />
                </div>
            </div>
            <div className="mt-4 md:mt-6 text-center md:text-left ml-12">
                <Button
                    placeholder={undefined}
                    className="rounded-lg py-4 md:py-6 px-6 text-base md:text-lg bg-emerald text-white font-normal font-poppins normal-case md:px-[3rem]"
                >
                    Request Your Card Today
                </Button>
            </div>
        </div>
    );
};

export default Cards;
