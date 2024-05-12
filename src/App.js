// import logo from './logo.svg';

import NavSection from './NavSection';
import TopHeadSection from './TopHeadSection'
import FilterSection from './FilterSection'
// import ProductsSection from './ProductsSection';
import Footer from './Footer';

import './App.css';

function App() {
  return ( 
    <div className='main'>
      <NavSection />
      
      <TopHeadSection />
      <FilterSection />
      <Footer/>
      
      
    </div>
    
  );
}

export default App;
