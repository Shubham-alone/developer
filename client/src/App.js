
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './component/navbar/Navbar';
import Shop from './Pages/Shop';
import LoginSignup from './Pages/LoginSignup';
import Footer from './component/footer/Footer';
import Men from './Pages/Men';
import Women from './Pages/Women';
import Kids from './Pages/Kids';
import ProductDetails from './component/productdetails/ProductDetails';
import Search from './component/search/Search';
import { CartProvider } from './context/CartContext';
import Cart from './Pages/Cart';

function App() {
  return (
    <div className="App">
               <CartProvider>
        <BrowserRouter>
             <Navbar />
            

             <Routes>
                <Route path='/' element={<Shop/>} />
                <Route path='/men' element={<Men />} />
                <Route path='/women' element={<Women/>} />
                <Route path='/kids' element={<Kids/>} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/login' element={<LoginSignup/>} />
                <Route path='/product/:id' element={<ProductDetails />} />
                 <Route path='/search' element={<Search />} />
             </Routes>

             <Footer />
        </BrowserRouter>
        </CartProvider>
    </div>
  );
}

export default App;
