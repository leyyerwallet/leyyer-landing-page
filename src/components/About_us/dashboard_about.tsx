import { Typography } from "@material-tailwind/react";
import pic1 from "../../assets/about_wal.png";

const Links = () => {
    return (
        <div className="container max-w-full max-h-full   bg-[#00D395]">
            <div className="grid grid-cols-1 md:grid-cols-2  place-content-start">

                <div className="mx-4 my-2 p-4 flex flex-col">

                    <div className=" ml-0 w-auto md:flex-center justify-end md:w-1/2">
                        <img
                            src={pic1}
                            className=" ml-20 w-auto object-contain"
                            alt="Description of the image"
                        />
                    </div>
                </div>


                <div className="flex  p-2 gap-3 justify-center md:mt-7">
                    <div style={{order: 3}}>
                        <Typography
                            placeholder={undefined}
                            variant="h2"
                            color="white"
                            className="font-poppins font-bold text-2xl md:text-4xl md:leading-[50px] mb-1"
                        >
                            <div>Hi, we are <span className="text-black">Leyyer!</span></div>
                        </Typography>
                        <div
                            className="mt-7 font-poppins text-2xl text-white font-thin leading-48 tracking-normal text-left">
                            Building a super app like <br/>self-custody digital wallet:<br/>
                            The ultimate solution to <br/> <span
                            className="text-black"> securely manage and Invest <br/>in Crypto </span>assets
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Links;
