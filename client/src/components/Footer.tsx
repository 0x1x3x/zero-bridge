import { AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
      <div className='flex gap-6'>
        <a className='text-xs text-[#acacac] hover:text-white cursor-pointer'>
          Zerobridge.network
        </a>
        <a className='text-xs text-[#acacac] hover:text-white cursor-pointer'>
          13foundation.org
        </a>
      </div>
      <div className='flex flex-row gap-8'>
        <a href='https://github.com/0x1x3x/zero-bridge' target='blank'>
          <AiFillGithub className='h-6 w-6 cursor-pointer' />
        </a>
        <a href='https://twitter.com/0x1x3x' target='blank'>
          <AiFillTwitterCircle className='h-6 w-6 cursor-pointer' />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
