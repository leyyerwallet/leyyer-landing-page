import React from 'react';
import leyyerIcon from '../../assets/icons/leyyer-icon.svg';

const IconBlock: React.FC = () => (
  <img
    src={leyyerIcon}
    alt="Leyyer Wallet"
    className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-10"
  />
);

export default IconBlock;
