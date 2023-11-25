import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const Grid = () => {
  return (
    <div className="container-fluid mx-auto px-4 bg-[#F2F2F2] py-[5rem]">
      <div className="my-2 p-2">
        <Typography variant="h2" color="black">
          Assert <span className="text-emerald"> ownership </span> over your{" "}
          <span className="text-emerald"> Wallet </span> data
        </Typography>
      </div>
      <div className="grid grid-flow-col grid-rows-3 gap-4 mx-auto p-6">
        <div className="col-span-1 justify-center bg-[#1B1C20] rounded-lg">
          <Card className="m-6 w-full max-w-[20rem] bg-transparent shadow-none justify-center">
            <CardBody className="justify-center">
              <Typography variant="h5" color="white" className="mb-2">
                <span className="text-emerald"> Versatile Cards </span>Use
              </Typography>
              <Typography variant="small" color="white" className="font-normal">
                Use your physical and virtual card for online purchases,
                in-store <span className="text-emerald"> purchases</span>, and
                more
              </Typography>
            </CardBody>
            <CardFooter className="pt-0 justify-center">
              <img
                src={"src/assets/card.png"}
                alt="card-image"
                className="w-20 h-auto m-auto"
              />
            </CardFooter>
          </Card>
        </div>
        <div className="col-span-1 row-span-2 max-h-[20rem] justify-center bg-[#1B1C20] rounded-lg m-0 p-0">
          <Card className="ml-12 my-6 mr-6 w-full max-w-[20rem] bg-transparent">
            <CardBody>
              <Typography variant="h5" color="white" className="mb-2">
                <span className="text-emerald"> Private-Key </span> Owner
              </Typography>
              <Typography variant="small" color="white" className="font-normal">
                You are the only owner of your private keys for all wallets
                connected to your device
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
        <div className="col-span-2 justify-center bg-[#1B1C20] rounded-lg">
          <Card className="ml-12 my-6 mr-6 w-full max-w-[20rem] bg-transparent">
            <CardBody>
              <Typography variant="h5" color="white" className="mb-2">
                Connect to
                <span className="text-emerald"> Dapps </span>
              </Typography>
              <img
                src={"src/assets/Grayscale.png"}
                alt="card-image"
                className="w-20 h-auto m-auto"
              />
            </CardBody>
            <CardFooter className="pt-0 justify-center">
              <Typography variant="small" color="white" className="font-normal">
                Unlocking{" "}
                <span className="text-emerald">
                  {" "}
                  blockchain applications{" "}
                </span>{" "}
                and embracing web3 has never been{" "}
                <span className="text-emerald"> easier </span> and more{" "}
                <span className="text-emerald"> secure </span>
              </Typography>
            </CardFooter>
          </Card>
        </div>
        <div className="col-span-2 row-span-2 m-0 max-h-[20rem] justify-center bg-[#1B1C20] rounded-lg">
          <Card className="ml-12 mr-6 my-6 w-full max-w-[20rem] bg-transparent ">
            <CardBody>
              <Typography variant="h5" color="white" className="mb-2">
                Connect to
                <span className="text-emerald"> Customer </span> Support
              </Typography>
              <img
                src={"src/assets/div.png"}
                alt="card-image"
                className="w-[11rem] h-auto m-auto"
              />
            </CardBody>
            <CardFooter className="pt-0 justify-center">
              <Typography variant="small" color="white" className="font-normal">
                Our team is ready to help you with any{" "}
                <span className="text-emerald"> questions or issues </span>{" "}
                you may have
              </Typography>
            </CardFooter>
          </Card>
        </div>
        <div className="row-span-3 justify-center">
          <Card className="w-full max-w-[20rem] h-[40rem] bg-[#1B1C20] ">
            <div className="px-2">
              <CardHeader
                shadow={false}
                floated={false}
                className="h-10 bg-[#1B1C20]"
              >
                <Typography variant="h3" color="white" className="font-medium">
                  {" "}
                  Manage
                  <span className="color-[#00D395]"> Effortlessly </span>Use
                </Typography>
              </CardHeader>
              <CardBody>
                <Typography
                  variant="small"
                  color="white"
                  className="font-normal"
                >
                  <span className="text-emerald">Leyyer Wallet</span> allows
                  you to manage your{" "}
                  <span className="text-emerald"> digital assets</span> with
                  ease
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
  );
};

export default Grid;
