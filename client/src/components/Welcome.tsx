import { ChangeEvent, FC } from 'react';

import { AiFillPlayCircle } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';

import { Loader } from './';

const Welcome = () => {
  interface InputProps {
    placeholder: string;
    name: string;
    type: string;
    value?: string;
    handleChange: (e: ChangeEvent<HTMLInputElement>, name: string) => void;
  }

  const percsStyle =
    'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white';

  const Input: FC<InputProps> = ({
    placeholder,
    name,
    type,
    value,
    handleChange,
  }) => (
    <input
      placeholder={placeholder}
      name={name}
      type={type}
      step='0.0001'
      value={value}
      onChange={(e) => handleChange(e, name)}
      className='w-full my-2 p-2 rounded-sm outline-none bg-transparent text-sm text-[#acacac] border'
    />
  );
  const handleConnectWallet = () => {};

  return (
    <section className='py-2 px-4 flex justify-center items-center'>
      <div className='flex flex-col md:flex-row items-start justify-between py-12'>
        <div className='flex flex-1 justify-start flex-col md:mr-10'>
          <h1 className='text-4xl sm:text-6xl text-white text-gradient'>
            Send Crypto <br /> Simple and Fast
          </h1>
          <p className='text-left text-sm text-[#acacac] mt-8'>
            Zero Bridge is a convenient and fast service that allows users to
            easily send cryptocurrencies. With Zero Bridge, you can quickly and
            securely send your preferred digital currencies to other users or to
            your own accounts. Whether you are an experienced crypto user or new
            to the world of digital currencies, Zero Bridge is an excellent
            choice for hassle-free crypto transactions.
          </p>
          <button
            type='button'
            onClick={handleConnectWallet}
            className='flex flex-row justify-center items-center my-8 w-4/12 rounded-full text-sm text-black bg-[#ff33ff] hover:bg-[#fa5afa] cursor-pointer py-2 px-4'
          >
            CONNECT WALLET
          </button>

          <div className='grid sm:grid-cols-3 grid-cols-2 w-full mt-10'>
            <div className={`rounded-tl-2xl ${percsStyle}`}>Reliability</div>
            <div className={percsStyle}>Security</div>
            <div className={`sm:rounded-tr-2xl ${percsStyle}`}>Ethereum</div>
            <div className={`sm:rounded-bl-2xl ${percsStyle}`}>Web 3.0</div>
            <div className={percsStyle}>Low Fees</div>
            <div className={`rounded-br-2xl ${percsStyle}`}>Blockchain</div>
          </div>
        </div>

        <div className='flex flex-col flex-1 items-center justify-start w-full'>
          <div className='p-3 justify-end items-start flex-col rounded-xl h-56 sm:w-96 w-full my-5  white-glassmorphism'>
            <div className='flex justify-between flex-col w-full h-full '>
              <div className='flex justify-between items-start'>
                <div className='w-10 h-10 rounded-full border border-white flex justify-center items-center'>
                  <SiEthereum fontSize={20} />
                </div>
                <BsInfoCircle fontSize={16} />
              </div>
              <div>
                <p className='text-white text-sm font-light'>
                  0x99.......AbFE9
                </p>
              </div>
            </div>

            <div className='w-full mt-4 p-5 flex flex-col justify-start items-center '>
              <Input
                placeholder='Address To'
                name='addressTo'
                type='text'
                handleChange={() => {}}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
