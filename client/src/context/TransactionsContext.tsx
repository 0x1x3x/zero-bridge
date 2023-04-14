import React, { ReactNode, useEffect, useState } from 'react';
import { Web3Provider } from '@ethersproject/providers';
import { Contract } from 'ethers';

import { contractABI, contractAddress } from '../utils/constants';

export const TransactionsContext = React.createContext<{
  value: string;
}>({
  value: 'test',
});

declare global {
  interface Window {
    ethereum: any;
  }
}

const getEthereumContract = () => {
  const provider = new Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const transactionContract = new Contract(
    contractAddress,
    contractABI,
    signer
  );

  console.log({ provider, signer, transactionContract });
};

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsProvider: React.FC<TransactionsProviderProps> = ({
  children,
}) => {
  return (
    <TransactionsContext.Provider value={{ value: 'test' }}>
      {children}
    </TransactionsContext.Provider>
  );
};
