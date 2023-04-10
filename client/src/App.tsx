import { Navbar, Welcome, Services, Transactions, Footer } from './components';

const App = () => {
  return (
    <div className='min-h-screen lg:mx-[10%] lg:mt-4'>
      <Navbar />
      <Welcome />

      {/* <Services />
      <Transactions />
      <Footer /> */}
    </div>
  );
};

export default App;
