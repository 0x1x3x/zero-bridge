import React, { ReactNode, useEffect, useState } from 'react';
import { Web3Provider } from '@ethersproject/providers';
import { Contract } from 'ethers';

import { contractABI, contractAddress } from '../utils/constants';

export const TransactionsContext = React.createContext<{
  value: string;
  connectWallet: () => Promise<void>;
  currentAccount: string;
}>({
  value: 'test',
  connectWallet: async () => {},
  currentAccount: '',
});

declare global {
  interface Window {
    ethereum: any;
  }
}

const getEthereumContract = () => {
  const transactionContract = new Contract(contractAddress, contractABI); //добавить signer
  const provider = new Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  console.log({ provider, signer, transactionContract });
};

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsProvider: React.FC<TransactionsProviderProps> = ({
  children,
}) => {
  // UseState
  const [currentAccount, setCurrentAccount] = useState('');
  const [formData, setFormData] = useState({
    addressTo: '',
    amount: '',
    keyword: '',
    message: '',
  });

  // const handleChange = (e, name) => {
  //   setFormData((prev)=> {...prev, [name]: e.target.value })

  // }

  // Checking Wallet Connection
  const checkIfWalletIsConnected = async () => {
    try {
      if (!window.ethereum) return alert('Please install MetaMask');
      const accounts = await window.ethereum.request({
        method: 'eth_accounts',
      });
      if (accounts.lenght) {
        setCurrentAccount(accounts[0]);
        //get AllTransactions
      } else {
        console.log('No accounts found');
      }
    } catch (error) {
      console.log(error);
      throw new Error('No ethereum object.');
    }
  };

  // Connect Wallet func
  const connectWallet = async () => {
    try {
      if (!window.ethereum) return alert('Please install MetaMask');
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
      throw new Error('No ethereum object.');
    }
  };

  // Send Transaction func

  const sendTransaction = async () => {
    try {
      if (!window.ethereum) return alert('Please install MetaMask');
    } catch (error) {
      console.log(error);
      throw new Error('No ethereum object.');
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{ connectWallet, value: currentAccount, currentAccount }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
