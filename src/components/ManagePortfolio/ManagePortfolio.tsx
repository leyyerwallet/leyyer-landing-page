import pic2 from '../../assets/app-mockup.png';
import { Typography } from '@material-tailwind/react';

const ManagePortfolio = () => {    return (
        <div className="grid lg:grid-cols-2 gap-4  py-2 md:grid-cols-1 sm:grid-cols-1 items-center">
            {/* Image Section */}
            <div className="display-flex ml-10">
                <img
                    src={pic2}
                    className=" ml-auto w-full h-full object-cover"
                    alt="Description of the image"
                />
            </div>

            {/* Text Section */}
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
                        cryptocurrencies<br/> you want anytime, anywhere.
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default ManagePortfolio;
