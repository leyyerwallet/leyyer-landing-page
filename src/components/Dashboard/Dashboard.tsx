import { Typography } from "@material-tailwind/react";
import './styles.css';
import preview from '../../assets/preview.png';
import pic2 from '../../assets/app-mockup.png';

const Dashboard = () => {
  return (
    <div className="bg-white p-4 md:px-[6rem]">
      <div className="isolate md:px-10 lg:px-8">
        <div className="lg:py-[2rem] sm:py-8 2xl:py-0">
          <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 gap-4 relative">
            <div className="md:pt-10">
              <Typography
                placeholder={undefined}
                variant="h1"
                color="black"
                className="font-poppins lg:text-2xl xl:text-3xl 2xl:text-4xl 2xl:font-bold text-gray-900 sm:text-sm sm:font-semibold"
              >
                Non-custodial <br /> Super Wallet App
              </Typography>
              <div
                className="absolute inset-x-0 top-1/3 sm:top-2/3 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-2/3"
                aria-hidden="true"
              >
                <div
                  className="relative left-[calc(50%+3rem)] aspect-w-5 aspect-h-3 w-[70.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#00D395] to-[#ffffff] opacity-30 sm:left-1/2 sm:bottom-1/2 sm:w-[72.1875rem]"
                  style={{
                    clipPath:
                      "ellipse(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                  }}
                />
              </div>
              <p className="mt-4 text-sm font-400 leading-6 text-gray-600 font-poppins">
                The ultimate solution for secure and <br/> convenient NFT, Crypto
                asset management
              </p>
            </div>
            <div className="text-center md:text-right pt-4 md:pt-0">
              <img src={preview} className='w-full md:w-[80%] mx-auto md:mx-0' alt="Preview" />
            </div>
          </div>
        </div>

        {/**
         * AVAILABLE ON
         */}
        <div className="wrapper mt-8 md:mt-20 relative">
          <Typography placeholder={undefined} variant="h2" color="black" className="md:m-4 font-poppins font-bold md:text-2xl 2xl:text-3xl"> Available Devices </Typography>
          <div className="carousel grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {Array.from({ length: 6 }, (_, index) => (
              <div key={index} className="carousel__item col-span-1 md:col-span-1 lg:col-span-2">
                <div className="carousel__item-body">
                  <p className="text-base font-bold font-poppins">Device {index + 1}</p>
                </div>
              </div>
            ))}
          </div>
          <div
            className="absolute w-24 h-24 bg-gradient-to-tr from-[#00D395] to-[#ffffff] opacity-30 rounded-full -left-12 top-1/2 transform -translate-y-1/2"
            style={{ clipPath: "ellipse(50% 50%)" }}
          />
        </div>

        {/***
         * MANAGE PORTFOLIO
         */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 py-8 sm:grid-cols-1">
          <div className="relative w-full md:w-auto">
            <img src={pic2} className="w-full h-auto md:rounded-lg md:w-full lg:w-2/3 xl:w-4/5 2xl:w-full mx-auto" alt="Manage Portfolio" />
          </div>
          <div className="mt-4 space-y-4">
            <Typography
              placeholder={undefined}
              variant="h1"
              color="black"
              className="font-poppins text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:font-bold tracking-tight"
            >
              Manage your crypto <br /> portfolio securely
            </Typography>
            <Typography
              placeholder={undefined}
              variant="h4"
              color="black"
              className="mt-6 text-base font-400 leading-6 text-gray-600 font-poppins">
              Buy, sell & swap the cryptocurrencies you want anytime, anywhere.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
