import React, { forwardRef } from "react";
import { Typography, Button } from "@material-tailwind/react";
import app_store from "../../assets/app-stores/app-store.png";
import google_play from "../../assets/app-stores/google-play.png";
import web from "../../assets/app-stores/chrome-web.png";
import pic1 from "../../assets/preview.png";
import Modal from "@mui/material/Modal";
import SignupForm from "../Navbar/SignUpForm.tsx";
import { useDashboardSharedVariable } from "../../shared/dashboard.shared.tsx";

const Dashboard: React.FC = forwardRef(() => {
  const { showSignUp, handleSignUp } = useDashboardSharedVariable();

  return (
        <div className=" relative flex place-content-center text-balance">
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
              <div className="md:w-1/2 md:pr-12 ml-4">
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
              <div className=" ml-0 md:flex-center justify-end md:w-1/2">
                <img
                    src={pic1}
                    className=" ml-20 w-3/4 object-contain"
                    alt="Description of the image"
                />
              </div>
            </div>
          </div>
        </div>
  );
});

export default Dashboard;
