import { forwardRef } from 'react';
import { Typography, Button } from '@material-tailwind/react';
import app_store from '../../assets/app-stores/app-store.png';
import google_play from '../../assets/app-stores/google-play.png';
import web from '../../assets/app-stores/chrome-web.png';
import pic1 from '../../assets/preview.png';

interface DashboardProps {}

const Dashboard = forwardRef<HTMLDivElement, DashboardProps>((_props, ref) => {
  return (
    <div className="relative flex place-content-center text-balance" ref={ref}>
      <div className="relative isolate gap-2 md:gap-12">
        <div className="mx-auto md:flex md:w-full md:max-w-[1408px] lg:px-24 py-8 md:py-16">
          {/* Left side content */}
          <div className="md:w-1/2 md:pr-12 ml-4">
            <Typography
              variant="h2"
              color="black"
              className="font-poppins font-bold text-5xl leading-[80px] tracking-tight"
              placeholder="Super Wallet"
            >
              Non-custodial <span className="text-emerald">Super Wallet</span>{' '}
              App
            </Typography>

            <p className="mt-6 text-xl font-normal leading-8 text-gray-600 font-poppins">
              The ultimate solution for secure and convenient NFT, Crypto asset
              management
            </p>

            {/* App Buttons */}
            <div className="flex flex-wrap my-4 gap-4">
              <Button
                color="white"
                placeholder="AppStore"
                onClick={() => window.open('https://appstore.link', '_blank')}
              >
                <img
                  src={app_store}
                  alt="app-store"
                  className="w-[5rem] h-auto"
                />
              </Button>

              <Button
                color="white"
                placeholder="Google Play"
                onClick={() =>
                  window.open('https://play.google.com/store', '_blank')
                }
              >
                <img
                  src={google_play}
                  alt="google-play"
                  className="w-[5rem] h-auto"
                />
              </Button>

              <Button
                color="white"
                placeholder="Google WebStore"
                onClick={() =>
                  window.open('https://chrome.google.com/webstore', '_blank')
                }
              >
                <img src={web} alt="chrome-web" className="w-[5rem] h-auto" />
              </Button>
            </div>
          </div>

          {/* Right side content (Preview image) */}
          <div className="ml-0 md:flex md:justify-end md:w-1/2">
            <img
              src={pic1}
              alt="Wallet Preview"
              className="ml-20 w-3/4 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
});

Dashboard.displayName = 'Dashboard';

export default Dashboard;
