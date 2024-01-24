import React from "react";
import {Card, CardBody, CardHeader, Typography} from "@material-tailwind/react";
import pic2 from "../../assets/icons/desktop-computer.png";
import pic3 from "../../assets/icons/wallet.png";
import picCreditCard from "../../assets/icons/credit-card.png";
import Background from "../Background/Background.tsx";

const Steps: React.FC = () => {
  return (
        <div className="relative flex place-content-center text-balance">
          <Background className={'top-[calc(100%-90rem)] sm:top-[calc(100%-90rem)]'} />
        <div className="px-[2rem] text-center max-w-[1408px] mx-auto p-2 md:p-8 gap-2 md:gap-12 m-2 md:m-[1rem]">
          <Background className={'top-[calc(100%-50rem)] sm:top-[calc(100%-50rem)]'} />
          <Typography
              placeholder={undefined}
              variant="h2"
              color="black"
              className="font-poppins leading-loose"
          >
            Follow the steps to Get Started
          </Typography>
          <Typography
              placeholder={undefined}
              variant="h5"
              className="font-poppins text-gray-400 font-medium mt-4"
          >
            Here is the step-by-step process how you can use Leyyer
          </Typography>
          <div className="grid lg:grid-cols-3 gap-x-2 auto-cols-auto m-6 pt-8 sm:grid-cols-1">
            {/* Step 1 */}
            <div className="place-self-center pr-1.5 flex sm:flex-grow w-4/5 sm:w-auto">
              <Card placeholder={undefined} className="m-8 w-96 shadow-2xl">
                <CardHeader placeholder={undefined} className="shadow-none mx-0">
                  <img
                      src={pic2}
                      alt="card-image"
                      className="w-[8rem] h-auto mx-auto"
                  />
                </CardHeader>
                <CardBody placeholder={undefined} className="text-center">
                  <Typography placeholder={undefined} variant="h5" color="blue-gray" className="mb-2 text-[25px] flex-center">
                    Get a Wallet
                  </Typography>
                  <Typography placeholder={undefined} className="text-[16px] justify-center">
                    Get started with the application. Download mobile or use the web app at your disposal
                  </Typography>
                </CardBody>
              </Card>
            </div>

            {/* Step 2 */}
            <div className="place-self-center pr-1.5 flex sm:flex-grow w-4/5 sm:w-auto">
              <Card placeholder={undefined} className="m-8 w-96 shadow-2xl">
                <CardHeader placeholder={undefined} className="shadow-none mx-0">
                  <img
                      src={pic3}
                      alt="card-image"
                      className="w-[8rem] h-auto mx-auto"
                  />
                </CardHeader>
                <CardBody placeholder={undefined} className="text-center">
                  <Typography placeholder={undefined} variant="h5" color="blue-gray" className="mb-2 text-[25px] flex-center">
                    Do the Crypto!
                  </Typography>
                  <Typography placeholder={undefined} className="text-[16px]">
                    Create a new wallet with ease.<br/>All wallets created at your disposal
                  </Typography>
                </CardBody>
              </Card>
            </div>

            {/* Step 3 */}
            <div className="place-self-center pr-1.5 flex sm:flex-grow w-4/5 sm:w-auto">
              <Card placeholder={undefined} className="m-8 w-96 shadow-2xl">
                <CardHeader placeholder={undefined} className="shadow-none mx-0">
                  <img
                      src={picCreditCard}
                      alt="card-image"
                      className="w-[8rem] h-auto mx-auto"
                  />
                </CardHeader>
                <CardBody placeholder={undefined} className="text-center">
                  <Typography placeholder={undefined} variant="h5" color="blue-gray" className="mb-2 text-[25px]">
                    Access the Wallet
                  </Typography>
                  <Typography placeholder={undefined} className="text-[16px]">
                    Buy crypto with Credit Card.<br/>Enjoy the app
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
        </div>
  );
};

export default Steps;
