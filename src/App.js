
import Header from './components/Header'

import Footer from './components/Footer';
import LoginPage from './container/login/LoginPage';
import SignupPage from './container/signup/SignupPage';
import { Route, Routes } from 'react-router-dom';
import MainPage from './container/MainPage';
import ProfilePage from './container/profile/ProfilePage';
import ProductDetails from './container/ProductDetails';
import PaymentPage from './container/PaymentPage';
import CartPage from './container/CartPage';
import Search from './container/Search';
import ProductsPage from './container/ProductsPage';
// import './App.css';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<MainPage />} />
          {/* <Route path='/products/:category' element={<ProductsPage />} /> 
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/payment' element={<PaymentPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/search' element={<Search />} /> */}
        </Routes>
    </div>
  );
}

export default App;
