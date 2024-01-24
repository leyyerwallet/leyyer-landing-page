import pic2 from '../../assets/app-mockup.png';
import { Typography } from '@material-tailwind/react';
import Background from "../Background/Background.tsx";

const ManagePortfolio = () => {    return (
    <div className="relative">
        <div className="grid lg:grid-cols-2 gap-4  py-2 md:grid-cols-1 sm:grid-cols-1 items-center">
            {/* Image Section */}
            <div className="display-flex ml-10">
                <img
                    src={pic2}
                    className=" ml-auto w-full h-full object-cover"
                    alt="Description of the image"
                />
            </div>

            <Background className={'left-[calc(100%-60rem)] sm:left-[calc(100%-60rem)] top-[calc(100%-46rem)] sm:top-[calc(100%-46rem)]'} />
            <div className="mt-6 ml-9 md:mt-0">
                <Typography
                    placeholder={undefined}
                    variant="h1"
                    color="black"
                    className="font-poppins text-xl md:text-3xl leading-normal font-bold text-center md:text-left"
                >
                    Manage your crypto <br /> portfolio securely
                </Typography>

                <div className="mt-4 flex-auto">
                    <Typography
                        placeholder={undefined}
                        variant="h4"
                        color="black"
                        className="font-poppins text-lg md:text-xl font-normal text-center md:text-left"
                    >
                        Buy, sell & swap the
                        cryptocurrencies<br/> you want anytime, anywhere
                    </Typography>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ManagePortfolio;
