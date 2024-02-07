import React from 'react';
import Option from '../../components/Option/Option';

type Step1WalletTypeProps = {
  walletType: string;
  setWalletType: (type: string) => void;
};

const Step1WalletType: React.FC<Step1WalletTypeProps> = ({
  walletType,
  setWalletType
}) => {
  return (
    <>
      <h1 className="text-xl font-bold text-center mb-8">
        Choose the type of wallet
      </h1>
      <div className="space-y-2 mb-6">
        {['Personal', 'Corporate', 'Project'].map((type) => (
          <Option
            key={type}
            label={type}
            checked={walletType === type}
            onChange={() => setWalletType(type)}
            inputType="radio"
            name="walletType"
            value={type}
          />
        ))}
      </div>
    </>
  );
};

export default Step1WalletType;
