const Welcome = () => {
  return (
    <>
    <div className="min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10">
      <div className="flex-auto md:w-2/4 text-center">
        <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Non-Custodial Super App Wallet
        </h1>
        <p className="text-emerald">
          The ultimate solution for secure and convenient NFT, Crypto asset
          management
        </p>
      </div>
      <div className="flex-auto">
        <img src={"src/assets/Layyer-Wallet-App-Mockup-1.png"} />
      </div>
    </div>
    <div className="min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10">
    <div className="flex-auto"> 
        <img src={"src/assets/Layyer-Wallet-App-Mockup-1.png"} />
      </div>
      <div className="flex-auto md:w-2/4 text-center">
        <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Non-Custodial Super App Wallet
        </h1>
        <p className="text-emerald">
          The ultimate solution for secure and convenient NFT, Crypto asset
          management
        </p>
      </div>
      
    </div>
    </>
  );
};

export default Welcome;
