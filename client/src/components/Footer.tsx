import { AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
      <div className='flex gap-6'>
        <a
          href='Layerzero.network'
          className='text-xs text-[#acacac] hover:text-white cursor-pointer'
        >
          Layerzero.network
        </a>
        <a
          href='aptosfoundation.org'
          className='text-xs text-[#acacac] hover:text-white cursor-pointer'
        >
          aptosfoundation.org
        </a>
      </div>
      <div className='flex flex-row gap-8'>
        <AiFillGithub className='h-6 w-6 cursor-pointer' />
        <AiFillTwitterCircle className='h-6 w-6 cursor-pointer' />
      </div>
    </footer>
  );
};

export default Footer;
