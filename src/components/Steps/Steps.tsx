import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const Steps = () => {
  return (
    <div className="py-[5rem]">
      <Typography variant="h2" color="black" className="font-poppins">
        Follow the steps to Get Started
      </Typography>
      <Typography variant="h4" color="gray" className="font-poppins">
        Here are a few reasons why you should choose Coin
      </Typography>
      <div className="grid grid-cols-3 gap-4 bg-white justify-center m-6 p-8">
        <div>
          <Card className="m-8 w-96 shadow-none">
            <CardHeader className="shadow-none">
              <img
                src={"src/assets/icons/desktop-computer.png"}
                alt="card-image"
                className="w-[8rem] h-auto mx-auto"
              />
            </CardHeader>
            <CardBody className="justify-center">
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Get a Wallet
              </Typography>
              <Typography>
                Create a new wallet with easy.All wallets created at your
                disposal
              </Typography>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card className="m-8 w-96 shadow-none">
            <CardHeader className="shadow-none">
              <img
                src={"src/assets/icons/credit-card.png"}
                alt="card-image"
                className="w-[8rem] h-auto mx-auto"
              />
            </CardHeader>
            <CardBody className="justify-center">
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Do the Crypto!
              </Typography>
              <Typography>
                Create a new wallet with easy.All wallets created at your
                disposal
              </Typography>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card className="m-8 w-96 shadow-none">
            <CardHeader className="shadow-none">
              <img
                src={"src/assets/icons/wallet.png"}
                alt="card-image"
                className="w-[8rem] h-auto mx-auto"
              />
            </CardHeader>
            <CardBody className="justify-center">
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Access the Wallet
              </Typography>
              <Typography>
                Buy crypto with Credit Card. Enjoy the app
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Steps;
