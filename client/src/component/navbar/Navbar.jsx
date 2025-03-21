import React, { useState } from 'react';
 import './navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';


const Navbar = () => {

  const [menu, setMenu] = useState("shop");

   const [searchQuery, setSearchQuery] = useState('');
   const navigate = useNavigate();
      const { cartItems } = useCart();

  //handle search input
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery) {
      navigate(`/search?query=${searchQuery}`)
    }
  };


  return (

  
  
    
    <div  className='navbar'>
      

        <div className="nav-logo" id='navbar-logo'>
          
            <Link to='/'>
                <img src={logo} alt="" />
                <p>SHOP</p>
            </Link>
        </div>

      

        <ul  className='nav-menu'>
           <li onClick={() => {setMenu("shop")}}><Link to='/'>Shop</Link>{menu === "shop" ? <hr/> : <></>} </li>

           <li onClick={() => {setMenu("men")}}><Link to='/men'>Men</Link> {menu === "men" ? <hr/> : <></>} </li>

           <li onClick={() => {setMenu('women')}}><Link to='/women'>Women</Link>{menu === "women" ? <hr/> : <></>}</li>

           <li onClick={() => {setMenu("kids")}}><Link to='/kids'>Kids</Link>{menu === "kids" ? <hr/> : <></> }</li>
        </ul>

        
        <form onSubmit={handleSearch} className='nav-search'>
             <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder='Search...' />

             <button type='submit'>Search</button>
        </form>

        <div className="nav-login-cart">
           <Link to='/login'><button>Login</button></Link>
           <Link to='/cart'>
             <div className='cart-container'>
                <img src={cart_icon} alt="" id='cart-icon' />

                <div className="nav-cart-count">{cartItems.length}</div>
              </div>
            </Link>
          
          
        </div>
  
        </div>
  )
}

export default Navbar;