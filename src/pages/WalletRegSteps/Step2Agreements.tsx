import React from 'react';
import Option from '../../components/Option/Option';

type Agreement = {
  lostFunds: boolean;
  exposeRisk: boolean;
};

type AgreementProps = {
  agreements: Agreement;
  onAgreementChange: (key: keyof Agreement) => void;
};

const Step2Agreements: React.FC<AgreementProps> = ({
  agreements,
  onAgreementChange
}) => {
  const handleChange = (key: keyof Agreement) => {
    onAgreementChange(key);
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Backup your wallet now!</h1>
      <p className="mb-8 text-s">
        In the next step, you will see the Secret Phrase (12 words) that allows
        you to recover a wallet.
      </p>
      <div className="space-y-4 mb-8">
        <Option
          label="If I lose my secret phrase, my funds will be lost forever."
          checked={agreements.lostFunds}
          onChange={() => handleChange('lostFunds')}
          inputType="checkbox"
        />
        <Option
          label="If I expose or share my secret phrase to anybody, my funds could get stolen."
          checked={agreements.exposeRisk}
          onChange={() => handleChange('exposeRisk')}
          inputType="checkbox"
        />
      </div>
    </div>
  );
};

export default Step2Agreements;
