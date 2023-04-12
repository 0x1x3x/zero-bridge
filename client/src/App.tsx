import {
  Header,
  MainSection,
  Services,
  Transactions,
  Footer,
} from './components';

const App = () => {
  return (
    <div className='lg:mx-[10%]'>
      <Header />
      <MainSection />

      {/* <Services />
      <Transactions />*/}
      <Footer />
    </div>
  );
};

export default App;
