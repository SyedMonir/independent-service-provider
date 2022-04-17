import { Route, Routes } from 'react-router-dom';
import './App.css';
import Checkout from './pages/Checkout/Checkout';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Footer from './pages/SharedPage/Footer/Footer';
import Header from './pages/SharedPage/Header/Header';
import Signup from './pages/SharedPage/Signup/Signup';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Signup />} />
          <Route path="/checkout/:serviceId" element={<Checkout />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
