import { useState } from 'react';
import leyyerIcon from '../assets/icons/leyyer-icon.svg';
import Step1WalletType from './WalletRegSteps/Step1WalletType';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';

const WalletRegistrationPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [walletType, setWalletType] = useState('');
  const [showError, setShowError] = useState(false);

  const handleContinue = () => {
    if (!walletType) {
      setShowError(true);
      return;
    }
    console.log(walletType);
    setShowError(false);
    setCurrentStep(currentStep + 1);
  };

  return (
    <div className="font-poppins flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md px-10 py-10 text-center">
        <img
          src={leyyerIcon}
          alt="Leyyer Wallet"
          className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-10"
        />

        {currentStep === 1 && (
          <Step1WalletType
            walletType={walletType}
            setWalletType={setWalletType}
          />
        )}

        {showError && (
          <ErrorMessage message="Please select a wallet type to continue." />
        )}

        <button
          onClick={handleContinue}
          className="w-full px-4 py-2 font-semibold text-white bg-emerald rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default WalletRegistrationPage;
