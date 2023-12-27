const Welcome = () => {
  return (
    <>
      {/* First layout order: text first, then image */}
      <div className="min-h-[70vh] flex flex-col md:flex-row justify-center items-center md:mx-32 mx-5 mt-10">
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
          <img 
            src={"src/assets/Layyer-Wallet-App-Mockup-1.png"} 
            className="w-full h-auto md:max-w-md lg:max-w-none" 
            alt="Wallet Mockup"
          />
        </div>
      </div>

    
      
    </>
  );
}

export default Welcome;
