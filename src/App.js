import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './pages/AboutMe/AboutMe';
import Blogs from './pages/Blogs/Blogs';
import Checkout from './pages/Checkout/Checkout';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Footer from './pages/SharedPage/Footer/Footer';
import Header from './pages/SharedPage/Header/Header';
import Login from './pages/SharedPage/Login/Login';
import RequiredAuth from './pages/SharedPage/RequiredAuth/RequiredAuth';
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
          <Route path="/login" element={<Login />} />
          <Route
            path="/checkout/:serviceId"
            element={
              <RequiredAuth>
                <Checkout />
              </RequiredAuth>
            }
          />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
