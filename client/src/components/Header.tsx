import logo from '/logo.svg';

const Header = () => {
  return (
    <header>
      <div className='flex flex-row items-center'>
        <img src={logo} alt='Logo' className='w-24 cursor-pointer' />
        <ul className='flex flex-row justify-between items-center flex-initial ml-10 lg:ml-14 gap-6 lg:gap-8'>
          <li className='text-[#acacac] hover:text-white cursor-pointer'>
            Transfer
          </li>
          <li className='text-[#acacac] hover:text-white cursor-pointer'>
            Community
          </li>
          <li className='text-[#acacac] hover:text-white cursor-pointer'>
            FAQ
          </li>
        </ul>
      </div>

      <button className='hidden sm:block rounded-full text-sm text-black bg-[#ff33ff] hover:bg-[#fa5afa] cursor-pointer py-2 px-4'>
        CONNECT WALLET
      </button>
    </header>
  );
};

export default Header;
