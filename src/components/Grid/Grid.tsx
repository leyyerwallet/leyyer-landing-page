import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import pic1 from '../../assets/card.png'
import pic2 from '../../assets/manage.png'
import pic3 from '../../assets/div.png'
import pic4 from '../../assets/Grayscale.png'
import pic5 from '../../assets/spend.png'

const Grid = () => {
  return (
    <div className="container mx-auto bg-[#F2F2F2] pt-8 px-6 sm:px-2 pb-4">
      <div className="my-2 px-4 py-8">
        <Typography variant="h2" color="black" className="font-poppins font-bold tracking-tight text-center">
          Assert <span className="text-emerald">ownership</span> over your
          <span className="text-emerald"> Wallet </span> data
        </Typography>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-2 sm:mx-0">
        {/* Card 1 */}
        <div>
          <Card className="w-full bg-[#1B1C20] rounded-[25px] shadow-none">
            <CardBody className="text-center mx-4">
              <Typography
                variant="h5"
                color="white"
                className="mb-4 font-poppins font-normal"
              >
                <span className="text-emerald">Versatile Cards</span> Use
              </Typography>
              <Typography
                variant="small"
                color="white"
                className="font-normal text-justify font-poppins"
              >
                Use your physical and virtual card for online purchases,
                in-store <span className="text-emerald">purchases</span>, and
                more
              </Typography>
            </CardBody>
            <CardFooter className="pt-0 text-center">
              <img
                src={pic1}
                alt="card-image"
                className="w-20 h-auto m-auto"
              />
            </CardFooter>
          </Card>
        </div>

        {/* Card 2 */}
        <div>
          <Card className="w-full bg-[#1B1C20] rounded-[25px] shadow-none">
            <CardBody className="text-center mx-4">
              <Typography
                variant="h5"
                color="white"
                className="mb-4 font-poppins font-normal"
              >
                <span className="text-emerald">Private-Key</span> Owner
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
            <CardFooter className="pt-0 text-center">
              <img
                src={pic2}
                alt="card-image"
                className="w-20 h-auto mx-auto"
              />
            </CardFooter>
          </Card>
        </div>

        {/* Card 3 */}
        <div>
          <Card className="w-full bg-[#1B1C20] rounded-[25px] shadow-none">
            <CardBody className="text-center mx-4">
              <Typography
                variant="h5"
                color="white"
                className="mb-4 font-poppins font-normal"
              >
                Connect to
                <span className="text-emerald"> Dapps </span>
              </Typography>
              <img
                src={pic4}
                alt="card-image"
                className="w-20 h-auto m-auto"
              />
            </CardBody>
            <CardFooter className="text-center mx-4">
              <Typography
                variant="small"
                color="white"
                className="font-normal text-justify font-poppins"
              >
                Unlocking{" "}
                <span className="text-emerald">blockchain applications</span>{" "}
                and embracing web3 has never been{" "}
                <span className="text-emerald">easier</span> and more{" "}
                <span className="text-emerald">secure</span>
              </Typography>
            </CardFooter>
          </Card>
        </div>

        {/* Card 4 */}
        <div>
          <Card className="w-full bg-[#1B1C20] rounded-[25px] shadow-none">
            <CardBody className="px-4 pt-6 pb-8 text-center">
              <Typography
                variant="h5"
                color="white"
                className="font-poppins font-normal mb-4"
              >
                <span className="text-emerald">Customer</span> Support
              </Typography>
              <img
                src={pic3}
                alt="card-image"
                className="mb-4 w-40 h-auto m-auto"
              />
              <Typography
                variant="small"
                color="white"
                className="font-normal tracking-tight text-justify font-poppins mx-2"
              >
                Our team is ready to help you with any{" "}
                <span className="text-emerald">questions or issues</span> you
                may have
              </Typography>
            </CardBody>
          </Card>
        </div>

        {/* Card 5 */}
        <div>
          <Card className="w-full bg-[#1B1C20] rounded-[25px] shadow-none">
            <CardHeader
              shadow={false}
              floated={false}
              className="h-10 bg-[#1B1C20]"
            >
              <Typography
                variant="h5"
                color="white"
                className="font-poppins font-normal mt-4 text-center"
              >
                Manage
                <span className="text-emerald"> Effortlessly </span>
              </Typography>
            </CardHeader>
            <CardBody className="text-justify mx-4 mt-5">
              <Typography
                variant="small"
                color="white"
                className="font-normal font-poppins"
              >
                <span className="text-emerald">Leyyer Wallet</span> allows you
                to manage your{" "}
                <span className="text-emerald">digital assets</span> with ease
              </Typography>
            </CardBody>
            <CardFooter className="text-center">
              <img
                src={pic5}
                alt="card-image"
                className="w-32 h-auto mx-auto"
              />
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Grid;
