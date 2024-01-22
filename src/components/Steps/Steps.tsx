// Import necessary dependencies and assets
import React, { forwardRef } from "react";
import { Typography, Button, Card, CardHeader, CardBody } from "@material-tailwind/react";
import Modal from "@mui/material/Modal";
import SignupForm from "../Navbar/SignUpForm.tsx";
import { useDashboardSharedVariable } from "../../shared/dashboard.shared.tsx";
import pic1 from "../../assets/preview.png";
import app_store from "../../assets/app-stores/app-store.png";
import google_play from "../../assets/app-stores/google-play.png";
import web from "../../assets/app-stores/chrome-web.png";
import pic2 from "../../assets/icons/desktop-computer.png";
import pic3 from "../../assets/icons/wallet.png";
import picCreditCard from "../../assets/icons/credit-card.png";

// Define the Dashboard component
export const Dashboard: React.FC = forwardRef(() => {
  const { showSignUp, handleSignUp } = useDashboardSharedVariable();

  return (
      <div className="relative">
        {/* Elliptical shape with gradient */}
        <div
            className="absolute inset-x-0 top-[calc(100%-70rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-70rem)]"
            aria-hidden="true"
        >
          <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[70.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#00D395] to-[#ffffff] opacity-30 sm:left-[calc(50%)] sm:bottom-[calc(50%)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                    "ellipse(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
          />
        </div>

        {/* Dashboard component content */}
        <div className=" max-w-[1408px] mx-auto p-2 md:p-8 gap-2 md:gap-12 m-2 md:m-[1rem]">
          <div className="relative isolate gap-2 md:gap-12">
            <div className="mx-auto md:flex md:w-full md:max-w-[1408px] lg:px-24 py-8 md:py-16">
              {showSignUp && (
                  <Modal
                      open={showSignUp}
                      onClose={() => handleSignUp()}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                  >
                    <SignupForm handleSignUp={handleSignUp} />
                  </Modal>
              )}

              {/* Left side content */}
              <div className="md:w-1/2 md:pr-12">
                <Typography
                    placeholder={undefined}
                    variant="h2"
                    color="black"
                    className="font-poppins font-bold text-5xl leading-[80px] tracking-tight"
                >
                  Non-custodial <span className="text-emerald">Super Wallet</span> App
                </Typography>

                <p className="mt-6 text-xl font-normal leading-8 text-gray-600 font-poppins">
                  The ultimate solution for secure and convenient NFT, Crypto asset management
                </p>

                {/* App Buttons */}
                <div className="flex flex-wrap my-4 gap-4">
                  <Button
                      placeholder={undefined}
                      color="white"
                      onClick={() => {
                        /* App Store action */
                      }}
                  >
                    <img src={app_store} alt="app-store" className="w-[5rem] h-auto" />
                  </Button>

                  <Button
                      placeholder={undefined}
                      color="white"
                      onClick={() => {
                        /* Google Play action */
                      }}
                  >
                    <img src={google_play} alt="google-play" className="w-[5rem] h-auto" />
                  </Button>

                  <Button
                      placeholder={undefined}
                      color="white"
                      onClick={() => {
                        /* Chrome Web action */
                      }}
                  >
                    <img src={web} alt="chrome-web" className="w-[5rem] h-auto" />
                  </Button>
                </div>
              </div>

              {/* Right side content (pic1 image) */}
              <div className=" ml-0 md:flex-center justify-end  md:w-1/2">
                <img
                    src={pic1}
                    className=" ml-20 w-3/4 object-contain"
                    alt="Description of the image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
});

// Define the Steps component
const Steps: React.FC = () => {
  return (
      <div className="relative">
        {/* Elliptical shape with gradient */}
        <div
            className="absolute inset-x-0 top-[calc(100%-70rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-70rem)]"
            aria-hidden="true"
        >
          <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[70.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#00D395] to-[#ffffff] opacity-30 sm:left-[calc(50%)] sm:bottom-[calc(50%)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                    "ellipse(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
          />
        </div>

        {/* Steps component content */}
        <div className="px-[2rem] text-center  max-w-[1408px] mx-auto p-2 md:p-8 gap-2 md:gap-12 m-2 md:m-[1rem]">
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
              variant="h4"
              className="font-poppins text-gray-400 font-medium mt-4"
          >
            Here is the step-by-step process how you can use Leyyer
          </Typography>
          <div className="grid lg:grid-cols-3 gap-4 justify-center m-6 pt-8 sm:grid-cols-1">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <Card placeholder={undefined} className="m-8 w-96 shadow-none">
                <CardHeader placeholder={undefined} className="shadow-none">
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
            <div className="flex flex-col items-center">
              <Card placeholder={undefined} className="m-8 w-96 shadow-none">
                <CardHeader placeholder={undefined} className="shadow-none">
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
            <div className="flex flex-col items-center">
              <Card placeholder={undefined} className="m-8 w-96 shadow-none">
                <CardHeader placeholder={undefined} className="shadow-none">
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
