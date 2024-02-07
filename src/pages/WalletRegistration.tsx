import { useState } from 'react';
import leyyerIcon from '../assets/icons/leyyer-icon.svg';
import Step1WalletType from './WalletRegSteps/Step1WalletType';
import Step2Agreements from './WalletRegSteps/Step2Agreements';
import Step3GeneratePhrase from './WalletRegSteps/Step3GeneratePhrase ';

const WalletRegistration = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [walletType, setWalletType] = useState('');
  const [agreements, setAgreements] = useState({
    lostFunds: false,
    exposeRisk: false
  });

  const handleWalletTypeChange = (type: string) => {
    setWalletType(type);
  };

  const handleAgreementChange = (key: keyof typeof agreements) => {
    setAgreements((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleContinue = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const isContinueDisabled =
    (currentStep === 1 && !walletType) ||
    (currentStep === 2 && (!agreements.lostFunds || !agreements.exposeRisk));

  return (
    <div className="font-poppins flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md px-10 py-10 text-center">
        <img
          src={leyyerIcon}
          alt="Leyyer Wallet"
          className="w-24 h-24 mx-auto mb-10"
        />

        {currentStep === 1 && (
          <Step1WalletType
            walletType={walletType}
            setWalletType={handleWalletTypeChange}
          />
        )}
        {currentStep === 2 && (
          <Step2Agreements
            agreements={agreements}
            onAgreementChange={handleAgreementChange}
          />
        )}
        {currentStep === 3 && <Step3GeneratePhrase />}

        <button
          onClick={handleContinue}
          disabled={isContinueDisabled}
          className={`w-full px-4 py-2 font-semibold text-white bg-emerald rounded-md ${!isContinueDisabled ? '' : 'opacity-50 cursor-not-allowed'} focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2`}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default WalletRegistration;
