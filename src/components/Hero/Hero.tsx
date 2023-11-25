import { Typography } from "@material-tailwind/react";
const Hero = () => {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto sm:py-48 lg:py-[9rem]">
          <div className="grid grid-cols-2 relative gap-4 px-[6rem]">
            <div className="text-left">
              <Typography
                variant="h1"
                color="black"
                className="font-poppins text-[48px] leading-[60px] text-justify font-[900] text-gray-900 sm:text-6xl"
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
              <p className="mt-6 text-lg leading-8 text-gray-600">
                The ultimate solution for secure and convenient NFT, Crypto
                asset management
              </p>
            </div>
            <div className="inset-y-0 left-0">
              <img src={"src/assets/banner.png"} />
            </div>
          </div>
        </div>

        {/**
         * AVAILABLE ON
         */}
        <div className="">
          <div className="font-extrabold text-4xl md:text-4xl [text-wrap:balance] bg-clip-text text-black bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">
            Available Devices
            <span className="inline-flex flex-col border-2 border-white rounded-lg p-6 m-7 text-emerald bg-gray
             h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
              <ul className="block animate-text-slide-3 text-left leading-tight [&_li]:block">
                <li>
                    Mobile
                </li>
                <li>
                    Web App 
                </li>
                <li> Extension </li>
                <li aria-hidden="true">
                    Mobile
                </li>
              </ul>
            </span>
          </div>
        </div>

        {/***
         * MANAGE PORTFOLIO
         */}

        <div className="grid grid-cols-2 relative gap-4 my-6 py-8">
          <div className="inset-y-0 left-0">
            <img src={"src/assets/app-mockup.png"} />
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
              color="gray"
              className="font-poppins text-[40px] text-justify font-medium"
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
