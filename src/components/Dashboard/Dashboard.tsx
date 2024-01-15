import { Typography, Button } from "@material-tailwind/react";
import './styles.css';
import app_store from '../../assets/app-stores/app-store.png';
import google_play from '../../assets/app-stores/google-play.png';
import web from '../../assets/app-stores/chrome-web.png';
import pic1 from '../../assets/preview.png';
import pic2 from '../../assets/app-mockup.png';
import Modal from '@mui/material/Modal';
import SignupForm from "../Navbar/SignUpForm.tsx";
import React, {forwardRef} from "react";
import {useDashboardSharedVariable} from "../../shared/dashboard.shared.tsx";

const Dashboard: React.FC = forwardRef(() => {
  const { showSignUp, handleSignUp } = useDashboardSharedVariable();

  return (
    <div className="bg-white m-[1rem]">
    <div className="relative isolate px-6 lg:px-8">
      <div className="mx-auto sm:py-48 lg:py-[2rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1">
          {showSignUp ? (
            <Modal open={showSignUp} onClose={() => handleSignUp()} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
              <SignupForm handleSignUp={handleSignUp} />
               </Modal>
              ) : ''
              }

              {/* Left side content */}
              <div className="text-left">
                <Typography
                    placeholder={undefined}
                    variant="h1"
                    color="black"
                    className="font-poppins lg:text-2xl xl:text-3xl 2xl:text-4xl 2xl:font-bold text-gray-900 sm:text-2xl sm:font-semibold mobile-single-line"
                >
                  Non-custodial <br /> Super Wallet App
                </Typography>

                <div
                    className="absolute inset-x-0 top-[calc(100%-70rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-70rem)]"
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

                <p className="mt-6 text-[1.20rem] font-400 leading-8 text-gray-600 font-poppins mobile-single-line">
                  The ultimate solution for secure and <br/> convenient NFT, Crypto asset management
                </p>

                {/* App Buttons */}
                <div className="flex flex-wrap my-2 p-2 gap-4">
                  <Button
                      placeholder={undefined}
                      color="white"
                      onClick={() => { /* App Store action */ }}
                  >
                    <img src={app_store} alt="app-store" className="w-[8rem] h-auto" />
                  </Button>

                  <Button
                      placeholder={undefined}
                      color="white"
                      onClick={() => { /* Google Play action */ }}
                  >
                    <img src={google_play} alt="google-play" className="w-[8rem] h-auto" />
                  </Button>

                  <Button
                      placeholder={undefined}
                      color="white"
                      onClick={() => { /* Chrome Web action */ }}
                  >
                    <img src={web} alt="chrome-web" className="w-[8rem] h-auto" />
                  </Button>
                </div>

              </div>

              {/* Right side content (pic1 image) */}
              <div className="flex justify-end items-center">
                <img
                    src={pic1}
                    className="w-full md:w-1/2 lg:w-1/2 object-contain"
                    alt="Description of the image"
                />
              </div>

            </div>

          </div>

          {/**
           * AVAILABLE ON
           */}

          <div className="wrapper">
            <Typography placeholder={undefined} variant="h2" color="black" className="2xl m-3 mt-20 font-poppins font-bold"> Available Devices </Typography>
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

          <div className="grid lg:grid-cols-2 gap-4 my-6 py-8 md:grid-cols-1 sm:grid-cols-1 items-center">
            {/* Image Section */}
            <div className="w-full h-full">
              <img
                  src={pic2}
                  className="w-full h-full object-cover"
                  alt="Description of the image"
              />
            </div>

            {/* Text Section */}
            <div className="mt-6 md:mt-0">
              <Typography
                  placeholder={undefined}
                  variant="h1"
                  color="black"
                  className="font-poppins text-xl md:text-3xl leading-normal font-bold text-center md:text-left"
              >
                Manage your crypto <br /> portfolio securely
              </Typography>

              <div className="mt-4">
                <Typography
                    placeholder={undefined}
                    variant="h4"
                    color="black"
                    className="font-poppins text-lg md:text-xl font-normal text-center md:text-left"
                >
                  Buy, sell & swap the <br />
                  cryptocurrencies you want <br /> anytime, anywhere.
                </Typography>
        </div>
      </div>
          </div>
        </div>
      </div>
  );
});

export default Dashboard;
