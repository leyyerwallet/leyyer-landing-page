import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import pic1 from '../../assets/icons/credit-card.png'
import pic2 from '../../assets/icons/desktop-computer.png'
import pic3 from '../../assets/icons/wallet.png'
const Steps = () => {
  return (
    <div className="py-[5rem] px-[6rem]">
      <Typography placeholder={undefined} variant="h2" color="black" className="font-poppins leading-loose">
        Follow the steps to Get Started
      </Typography>
      <Typography placeholder={undefined} variant="h4" className="font-poppins text-gray-400 font-medium">
        Here are a few reasons why you should choose Coin
      </Typography>
      <div className="grid lg:grid-cols-3 gap-4 bg-white justify-center m-6 pt-8 sm:grid-cols-1">
        <div>
          <Card placeholder={undefined} className="m-8 w-96 shadow-none">
            <CardHeader placeholder={undefined} className="shadow-none">
              <img
                src={pic2}
                alt="card-image"
                className="w-[8rem] h-auto mx-auto"
              />
            </CardHeader>
            <CardBody placeholder={undefined} className="justify-center">
              <Typography placeholder={undefined} variant="h5" color="blue-gray" className="mb-2 text-[25px] md:leading-tight sm:leading-tight">
                Get a Wallet
              </Typography>
              <Typography placeholder={undefined} className="text-[16px]">
              Get started with the application.<br/>Download mobile or use the web app
                disposal
              </Typography>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card placeholder={undefined} className="m-8 w-96 shadow-none">
            <CardHeader placeholder={undefined} className="shadow-none">
              <img
                src={pic3}
                alt="card-image"
                className="w-[8rem] h-auto mx-auto"
              />
            </CardHeader>
            <CardBody placeholder={undefined} className="justify-center">
              <Typography placeholder={undefined} variant="h5" color="blue-gray" className="mb-2 text-[25px]">
                Do the Crypto!
              </Typography>
              <Typography placeholder={undefined} className="text-[16px]">
                Create a new wallet with easy.<br/> All wallets created at your
                disposal
              </Typography>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card placeholder={undefined} className="m-8 w-96 shadow-none">
            <CardHeader placeholder={undefined} className="shadow-none">
              <img
                src={pic1}
                alt="card-image"
                className="w-[8rem] h-auto mx-auto"
              />
            </CardHeader>
            <CardBody placeholder={undefined} className="justify-center">
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
  );
};

export default Steps;
