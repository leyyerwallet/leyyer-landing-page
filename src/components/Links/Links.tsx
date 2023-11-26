import { Typography, Button} from "@material-tailwind/react";

const Links = () => {
  return (
    <div className="container-fluid grid grid-cols-2 gap-4 bg-[#00D395] place-content-start my-6 py-[4rem]">
      <div className="my-2 p-2 mx-[8rem]">
        <Typography
          variant="h2"
          color="white"
          className="font-poppins font-bold text-left"
        >
          Get your Everything <br/> Wallet now!
        </Typography>
        <div className="mt-6 text-left">
          <Button
            variant="filled"
            size="lg"
            color="white"
            className="text-emerald"
          >
            {" "}
            Download
          </Button>
        </div>
        </div>
        <div className="flex flex-wrap my-2 p-2 gap-4 justify-center">
           <div>
           <img src="src/assets/app-stores/app-store.png" alt="app-store" className="w-[8rem] h-auto" />
           </div>
          
           <div>
           <img src="src/assets/app-stores/google-play.png" alt="google-play" className="w-[8rem] h-auto " />
           
           </div>
           
            <div>
            <img src="src/assets/app-stores/chrome-web.png" alt="chrome-web" className="w-[10rem] h-auto" />
           
            </div>
            
        </div>

    </div>
  );
};

export default Links;
