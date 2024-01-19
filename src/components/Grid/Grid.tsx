import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import pic1 from '../../assets/card.png';
import pic2 from '../../assets/manage.png';
import pic3 from '../../assets/div.png';
import pic4 from '../../assets/Grayscale.png';
import pic5 from '../../assets/spend.png';

const Grid = () => {
  return (
      <div className="container-fluid flex flex-col items-center justify-center pt-20 pb-0">
        <div className="my-2 px-4 py-8">
          <Typography
              placeholder={undefined}
              variant="h2"
              color="black"
              className="font-poppins font-bold tracking-tight text-2xl md:text-4xl text-center"
          >
            Assert{" "}
            <span className="text-emerald"> ownership </span> over your
            <span className="text-emerald"> Wallet </span> data
          </Typography>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6 mx-8 md:mx-[3rem]">
          {/* First Column */}
          <div className="col-span-1">
            {/* Versatile Cards */}
            <Card
                placeholder={undefined}
                className="w-full max-w-[22rem] bg-[#1B1C20] h-[48%] rounded-[25px] shadow-none"
            >
              <CardBody
                  placeholder={undefined}
                  className="text-center mx-2 font-poppins text-lg font-normal leading-7 md:text-xl md:leading-10"
              >
                <Typography
                    placeholder={undefined}
                    variant="h5"
                    color="white"
                    className="mb-4 font-poppins font-normal"
                >
                  <span className="text-emerald"> Versatile Cards </span>Use
                </Typography>
                <Typography
                    placeholder={undefined}
                    variant="small"
                    color="white"
                    className="font-normal text-center font-poppins"
                >
                  Use your physical and virtual card for online purchases, in-store{" "}
                  <span className="text-emerald"> purchases</span>, and more
                </Typography>
              </CardBody>
              <CardFooter placeholder={undefined} className="pt-0 text-center">
                <img src={pic1} alt="card-image" className="w-20 h-auto m-auto" />
              </CardFooter>
            </Card>
            {/* Private-Key Owner */}
            <Card
                placeholder={undefined}
                className="w-full max-w-[22rem] h-[48%] bg-[#1B1C20] rounded-[25px] shadow-none mt-6"
            >
              <CardBody
                  placeholder={undefined}
                  className="text-center mx-2 font-poppins text-lg font-normal leading-7 md:text-xl md:leading-10"
              >
                <Typography
                    placeholder={undefined}
                    variant="h5"
                    color="white"
                    className="mb-4 font-poppins font-normal"
                >
                  <span className="text-emerald"> Private-Key </span> Owner
                </Typography>
                <Typography
                    placeholder={undefined}
                    variant="small"
                    color="white"
                    className="font-normal font-poppins"
                >
                  You are the only owner of your private keys for all wallets connected
                  to your device
                </Typography>
              </CardBody>
              <CardFooter placeholder={undefined} className="pt-0">
                <img src={pic2} alt="card-image" className="w-20 h-auto mx-auto" />
              </CardFooter>
            </Card>
          </div>
          {/* Second Column */}
          <div className="col-span-1">
            {/* Connect to Dapps */}
            <Card
                placeholder={undefined}
                className="w-full max-w-[22rem] h-[48%] bg-[#1B1C20] rounded-[25px] shadow-none"
            >
              <CardBody
                  placeholder={undefined}
                  className="text-center mx-[2rem] font-poppins"
              >
                <Typography
                    placeholder={undefined}
                    variant="h5"
                    color="white"
                    className="mb-4 font-poppins font-normal"
                >
                  Connect to <span className="text-emerald"> Dapps </span>
                </Typography>
                <img src={pic4} alt="card-image" className="w-20 h-auto m-auto" />
              </CardBody>
              <CardFooter
                  placeholder={undefined}
                  className="text-center mx-[2rem] font-poppins"
              >
                <Typography
                    placeholder={undefined}
                    variant="small"
                    color="white"
                    className="font-normal font-poppins"
                >
                  Unlocking <span className="text-emerald"> blockchain applications </span>{" "}
                  and embracing web3 has never been <span className="text-emerald"> easier </span> and more{" "}
                  <span className="text-emerald"> secure </span>
                </Typography>
              </CardFooter>
            </Card>
            {/* Customer Support */}
            <Card
                placeholder={undefined}
                className="w-full max-w-[22rem] h-[48%] bg-[#1B1C20] rounded-[25px] shadow-none mt-6"
            >
              <CardBody
                  placeholder={undefined}
                  className="text-center mx-[2rem] font-poppins"
              >
                <Typography
                    placeholder={undefined}
                    variant="h5"
                    color="white"
                    className="font-poppins font-normal"
                >
                  <span className="text-emerald"> Customer </span> Support
                </Typography>
                <img src={pic3} alt="card-image" className="w-35 m-auto h-32" />
                <Typography
                    placeholder={undefined}
                    variant="small"
                    color="white"
                    className="font-normal font-poppins"
                >
                  Our team is ready to help you with any <span className="text-emerald"> questions or issues </span>{" "}
                  you may have.
                </Typography>
              </CardBody>
            </Card>
          </div>
          {/* Third Column */}
          <div className="col-span-1">
            {/* Manage Effortlessly */}
            <Card
                placeholder={undefined}
                className="w-auto max-w-[22rem] h-[100%] bg-[#1B1C20] rounded-[25px] shadow-none"
            >
              <CardBody
                  placeholder={undefined}
                  className="text-center mx-[2rem] mt-5 font-poppins"
              >
                <Typography
                    placeholder={undefined}
                    variant="h5"
                    color="white"
                    className="font-normal mt-4 mb-4"
                >
                  Manage <span className="text-emerald"> Effortlessly </span>
                </Typography>
                <Typography
                    placeholder={undefined}
                    variant="small"
                    color="white"
                    className="font-normal font-poppins"
                >
                  <span className="text-emerald">Leyyer Wallet</span> allows you to manage your{" "}
                  <span className="text-emerald"> digital assets</span> with ease
                </Typography>
              </CardBody>
              <CardFooter
                  placeholder={undefined}
                  className="text-center mx-[3rem] font-poppins"
              >
                <img src={pic5} alt="card-image" className="mb-4 w-40 m-auto" />
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
  );
};

export default Grid;
