import { Typography, Button } from "@material-tailwind/react";
import app_store from '../../assets/app-stores/app-store.png';
import google_play from '../../assets/app-stores/google-play.png';
import web from '../../assets/app-stores/chrome-web.png';

const Links = () => {
    return (
        <div className="container max-h-full mt-20  bg-[#00D395]">
            <div className="grid grid-cols-1 md:grid-cols-2  gap-2 place-content-start">

                <div className="mx-4 my-2 p-4 text-center md:text-center">
                    <Typography
                        placeholder={undefined}
                        variant="h2"
                        color="white"
                        className="font-poppins font-bold text-2xl md:text-4xl md:leading-[50px] mb-1"
                    >
                        Get your Everything <br/> Wallet now!
                    </Typography>
                    <div className="mt-2">
                        <Button
                            placeholder={undefined}
                            color="white"
                            className="text-emerald"
                        >
                            Download
                        </Button>
                    </div>
                </div>


                <div className="flex  p-2 gap-3 justify-center md:mt-7">
                    <div style={{order: 3}}>
                        <Button
                            placeholder={undefined}
                            variant="filled"
                            color="white"
                            onClick={() => { /* Add your action for App Store here */
                            }}
                        >
                            <img src={app_store} alt="app-store" className="w-[5rem] " />
                        </Button>
                    </div>
                    <div style={{ order: 1 }}>
                        <Button
                            placeholder={undefined}
                            variant="filled"
                            color="white"
                            onClick={() => { /* Add your action for Google Play here */ }}
                        >
                            <img src={google_play} alt="google-play" className="w-[5rem] " />
                        </Button>
                    </div>
                    <div style={{ order: 2 }}>
                        <Button
                            placeholder={undefined}
                            variant="filled"
                            color="white"
                            onClick={() => { /* Add your action for Chrome Web here */ }}
                        >
                            <img src={web} alt="chrome-web" className="w-[7rem] " />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Links;
