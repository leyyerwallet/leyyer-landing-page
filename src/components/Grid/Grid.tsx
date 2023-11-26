import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const Grid = () => {
  return (
    <div className="container-fluid overflow-auto bg-[#F2F2F2] pt-[3rem] px-[6rem] pb-0 md:container-fluid md:mx-auto sm:mx-auto">
      <div className="my-2 px-4 py-[2rem]">
        <Typography variant="h2" color="black" className="font-poppins font-bold tracking-tight">
          Assert <span className="text-emerald"> ownership </span> over your
          <span className="text-emerald"> Wallet </span> data
        </Typography>
      </div>
      <div className="grid grid-flow-col grid-rows-3 gap-x-6 gap-y-6 mx-[3rem] px-6 sm:grid-flow-row sm:auto-cols-max md:grid-flow-col">
        <div className="col-span-1">
          <Card className="w-full max-w-[22rem] bg-[#1B1C20] rounded-[25px] shadow-none">
            <CardBody className="text-center mx-[2rem]">
              <Typography
                variant="h5"
                color="white"
                className="mb-4 font-poppins font-normal"
              >
                <span className="text-emerald"> Versatile Cards </span>Use
              </Typography>
              <Typography
                variant="small"
                color="white"
                className="font-normal text-justify font-poppins"
              >
                Use your physical and virtual card for online purchases,
                in-store <span className="text-emerald"> purchases</span>, and
                more
              </Typography>
            </CardBody>
            <CardFooter className="pt-0 text-center">
              <img
                src={"src/assets/card.png"}
                alt="card-image"
                className="w-20 h-auto m-auto"
              />
            </CardFooter>
          </Card>
        </div>
        <div className="col-span-1 row-span-2">
          <Card className="w-full max-w-[22rem] bg-[#1B1C20] rounded-[25px] shadow-none">
            <CardBody className="text-center mx-[2rem]">
              <Typography
                variant="h5"
                color="white"
                className="mb-4 font-poppins font-normal"
              >
                <span className="text-emerald"> Private-Key </span> Owner
              </Typography>
              <Typography
                variant="small"
                color="white"
                className="font-normal text-justify font-poppins"
              >
                You are the only owner of your private keys for all wallets
                connected to your device
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <img
                src={"src/assets/manage.png"}
                alt="card-image"
                className="w-20 h-auto mx-auto"
              />
            </CardFooter>
          </Card>
        </div>
        <div className="col-span-2">
          <Card className="w-full max-w-[22rem] bg-[#1B1C20] rounded-[25px] shadow-none">
            <CardBody className="text-center mx-[2rem]">
              <Typography
                variant="h5"
                color="white"
                className="mb-4 font-poppins font-normal"
              >
                Connect to
                <span className="text-emerald"> Dapps </span>
              </Typography>
              <img
                src={"src/assets/Grayscale.png"}
                alt="card-image"
                className="w-20 h-auto m-auto"
              />
            </CardBody>
            <CardFooter className="text-center mx-[2rem]">
              <Typography
                variant="small"
                color="white"
                className="font-normal text-justify font-poppins"
              >
                Unlocking{" "}
                <span className="text-emerald"> blockchain applications </span>{" "}
                and embracing web3 has never been{" "}
                <span className="text-emerald"> easier </span> and more{" "}
                <span className="text-emerald"> secure </span>
              </Typography>
            </CardFooter>
          </Card>
        </div>
        <div className="col-span-2 row-span-2">
          <Card className="w-full max-w-[22rem] bg-[#1B1C20] rounded-[25px] shadow-none">
            <CardBody className="px-8 pt-6 pb-8 text-center">
              <Typography
                variant="h5"
                color="white"
                className="font-poppins font-normal mb-4"
              >
                <span className="text-emerald"> Customer </span> Support
              </Typography>
              <img
                src={"src/assets/div.png"}
                alt="card-image"
                className="mb-4 w-40 h-auto m-auto"
              />
               <Typography
                variant="small"
                color="white"
                className="font-normal tracking-tight text-justify font-poppins mx-[2rem]"
              >
                Our team is ready to help you with any{" "}
                <span className="text-emerald"> questions or issues </span> you
                may have
              </Typography>
            </CardBody>
         
          </Card>
        </div>
        <div className="row-span-3">
          <Card className="w-full max-w-[22rem] h-[65%] bg-[#1B1C20] rounded-[25px] shadow-none">
              <CardHeader
                shadow={false}
                floated={false}
                className=" h-10 bg-[#1B1C20]"
              >
                <Typography
                variant="h5"
                color="white"
                className="font-poppins font-normal mt-4"
              > Manage
                  <span className="text-emerald"> Effortlessly </span>
                </Typography>
              </CardHeader>
              <CardBody className="text-justify mx-[2rem] mt-5">
                <Typography
                  variant="small"
                  color="white"
                  className="font-normal font-poppins"
                >
                  <span className="text-emerald">Leyyer Wallet</span> allows you
                  to manage your{" "}
                  <span className="text-emerald"> digital assets</span> with
                  ease
                </Typography>
              </CardBody>
              <CardFooter className="text-center mx-[2rem]">
                <img
                  src={"src/assets/spend.png"}
                  alt="card-image"
                  className="pt-10"
                />
              </CardFooter>
           
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Grid;
