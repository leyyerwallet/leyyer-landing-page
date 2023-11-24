import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const Grid = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="my-0.5">
        <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Assert Ownership over your wallet data
        </h1>
      </div>
      <div className="min-h-[90vh] flex flex-wrap flex-row justify-center my-5">
        <div className="">
          <div className=" flex flex-col justify-evenly my-2 mx-2">
            <Card className="w-full max-w-[20rem] shadow-lg bg-[#1B1C20]">
              <div className="px-3 py-3">
              <CardHeader shadow={false} floated={false} className="h-10 bg-[#1B1C20]">
                <Typography variant= "h4" color="white" className="font-normal">
                 <span className="text-[#00D395]">  Versatile Cards  </span>Use
                </Typography>
              </CardHeader>
              <CardBody>
                <Typography
                  variant="small"
                  color="white"
                  className="font-normal">
                  Use your physical and virtual card for online purchases,
                  in-store <span className="text-[#00D395]"> purchases</span>, and more
                </Typography>
              </CardBody>
              <CardFooter className="pt-0 justify-center">
                <img
                  src={"src/assets/card.png"}
                  alt="card-image"
                  className="w-20 h-auto m-auto"
                />
              </CardFooter>
              </div>
            </Card>
          </div>
          <div className="flex flex-col justify-evenly my-2 mx-2">
          <Card className="w-full max-w-[20rem] shadow-lg bg-[#1B1C20]">
              <CardHeader shadow={false} floated={false} className="h-10 bg-[#1B1C20]">
                <Typography variant= "h4" color="white" className="font-normal">
                 <span className="text-[#00D395]"> Private-Key </span> Owner
                </Typography>
              </CardHeader>
              <CardBody className="justify-center">
                <Typography
                  variant="small"
                  color="white"
                  className="font-normal">
                  You are the only owner of your private keys for all wallets connected to your device
                </Typography>
              </CardBody>
              <CardFooter className="pt-0 justify-center">
                <img
                  src={"src/assets/manage.png"}
                  alt="card-image"
                  className="w-20 h-auto mx-auto"
                />
              </CardFooter>
            </Card>
          </div>
        </div>
        <div className="">
        <div className="flex flex-col justify-evenly gap-4 my-2 mx-2">
            <Card className="w-full max-w-[20rem] shadow-lg bg-[#1B1C20]">
              <CardHeader shadow={false} floated={false} className="h-10 bg-[#1B1C20]">
                <Typography variant ="h4" color="white" className="font-normal">
                  Connect to 
                 <span className="text-[#00D395]"> Dapps </span>
                </Typography>
              </CardHeader>
              <CardBody>
              <img
                  src={"src/assets/Grayscale.png"}
                  alt="card-image"
                  className="w-20 h-auto m-auto"
                />
              </CardBody>
              <CardFooter className="pt-0 justify-center">
              <Typography
                  variant="small"
                  color="white"
                  className="font-normal">
                
                  Unlocking <span className="text-[#00D395]"> blockchain applications </span> and embracing web3 has
                  never been <span className="text-[#00D395]"> easier </span>  and more <span className="text-[#00D395]"> secure </span> 
                </Typography>
              </CardFooter>
            </Card>
          </div>
          <div className="flex flex-col justify-evenly gap-4 my-2 mx-2">
            <Card className="w-full max-w-[20rem] shadow-lg bg-[#1B1C20]">
              <CardHeader shadow={false} floated={false} className="h-10 bg-[#1B1C20]">
                <Typography variant ="h4" color="white" className="font-normal">
                 <span className="text-[#00D395]"> Customer </span> Support
                </Typography>
              </CardHeader>
              <CardBody>
              <img
                  src={"src/assets/div.png"}
                  alt="card-image"
                  className="w-[11rem] h-auto m-auto"
                />
              </CardBody>
              <CardFooter className="pt-0 justify-center">
              <Typography
                  variant="small"
                  color="white"
                  className="font-normal">
                  Our team is ready to help you with any <span className="text-[#00D395]"> questions or issues </span> you may have
                </Typography>
              </CardFooter>
            </Card>
          </div>
        </div>
        <div className="">
        <div className="flex flex-col justify-evenly gap-4 my-2 mx-2">
            <Card className="w-full max-w-[20rem] h-auto shadow-lg bg-[#1B1C20]">
              <div className="px-2">
              <CardHeader shadow={false} floated={false} className="h-10 bg-[#1B1C20]">
                <Typography variant= "h3" color="white" className="font-medium"> Manage
                 <span className="color-[#00D395]">  Effortlessly  </span>Use
                </Typography>
              </CardHeader>
              <CardBody>
                <Typography
                  variant="small"
                  color="white"
                  className="font-normal"
                >
                <span className="text-[#00D395]">Leyyer Wallet</span> allows you to manage your <span className="text-[#00D395]"> digital assets</span> with ease
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <img
                  src={"src/assets/spend.png"}
                  alt="card-image"
                  className=""
                />
              </CardFooter>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grid;
