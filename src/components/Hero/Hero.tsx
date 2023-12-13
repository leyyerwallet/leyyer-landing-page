import { Typography } from "@material-tailwind/react"
import './styles.css'
import pic1 from '../../assets/banner.png'
import pic2 from '../../assets/app-mockup.png'
const Hero = () => {
  return (
    <div className="bg-white px-[6rem]">
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto sm:py-48 lg:py-[9rem]">
          <div className="grid grid-cols-2 relative gap-4 md:grid-cols-2 sm:grid-cols-1">
            <div className="text-left"> 
              <Typography
                variant="h1"
                color="black"
                className="font-poppins text-[48px] leading-[60px]  font-[900] text-gray-900 sm:text-6xl"
              >
                Non-custodial <br /> Super Wallet App
              </Typography>
              <div
                className="absolute inset-x-0 top-[calc(100%-12rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-12rem)]"
                aria-hidden="true"
              >
                <div
                  className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[70.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#00D395] to-[#ffffff] opacity-30 sm:left-[calc(50%)] sm:bottom-[calc(50%)] sm:w-[72.1875rem]"
                  style={{
                    clipPath:
                      "elipse(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                  }}
                />
              </div>
              <p className="mt-6 text-[1.25rem] font-400 leading-8 text-gray-600 font-poppins">
                The ultimate solution for secure and <br/> convenient NFT, Crypto
                asset management
              </p>
            </div>
            <div className="inset-y-0 left-0">
              <img src={pic1} />
            </div>
          </div>
        </div>

        {/**
         * AVAILABLE ON
         */}

    <div className="wrapper">
      <Typography variant="h2" color="black" className="2xl m-5 font-poppins font-bold"> Available Devices </Typography>
      <div className="carousel">
        <div className="carousel__item">
          <div className="carousel__item-body">
          <p className="text-2xl font-bold font-poppins">Mobile</p>
          </div>
          
        </div>
        <div className="carousel__item">
        <div className="carousel__item-body">
          <p className="text-2xl font-bold font-poppins">Web App</p>
          </div>
        </div>
        <div className="carousel__item">
        <div className="carousel__item-body">
          <p className="text-2xl font-bold font-poppins">Extension</p>
          </div>
        </div>
        <div className="carousel__item">
        <div className="carousel__item-body">
          <p className="text-2xl font-bold font-poppins">Mobile</p>
          </div>
        </div>
        <div className="carousel__item">
        <div className="carousel__item-body">
          <p className="text-2xl font-bold font-poppins">Web App</p>
          </div>
        </div>
        <div className="carousel__item">
        <div className="carousel__item-body">
          <p className="text-2xl font-bold font-poppins">Extension</p>
          </div>
        </div>
        <div className="carousel__item">
        <div className="carousel__item-body">
          <p className="text-2xl font-bold font-poppins">Mobile</p>
          </div>
        </div>
        <div className="carousel__item">
        <div className="carousel__item-body">
          <p className="text-2xl font-bold font-poppins">Web App</p>
          </div>
        </div>
        <div className="carousel__item">
        <div className="carousel__item-body">
          <p className="text-2xl font-bold font-poppins">Extension</p>
          </div>
        </div>
      </div>
    </div>
    
        {/***
         * MANAGE PORTFOLIO
         */}

        <div className="grid lg:grid-cols-2 relative gap-4 my-6 py-8 md:grid-cols-1 sm:grid-cols-1">
          <div className="inset-y-0 left-0">
            <img src={pic2} />
          </div>
          <div className="mt-[30%] space-x-4 space-y-4">
            <Typography
              variant="h1"
              color="black"
              className="font-poppins text-[48px] leading-[60px] text-justify font-[700] tracking-tight"
            >
              Manage your crypto <br /> portfolio securely
            </Typography>
            <Typography
              variant="h4"
              color="black"
              className="font-poppins text-[40px] text-justify font-normal"
            >
              Buy, sell & swap the <br />
              cryptocurrencies you want <br /> anytime, anywhere.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
