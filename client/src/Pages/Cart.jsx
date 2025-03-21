import React from 'react';
import './cart.css';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

     if (cartItems.length === 0) {
         return <div className='cart-empty-container'>
                     <p className="cart-empty">Your cart is empty.</p>
                  <Link to='/'>
                       <button className='shopping'>Continue Shopping</button>
                   </Link>
                 </div>
        }

  return (
    <div className="cart">
         <h1>Your Cart</h1>
    <div className="cart-items">
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} className="cart-item-img" />
          <div className="cart-item-details">
            <h3>{item.name}</h3>
            <p>Price: ₹{item.price}</p>
            <div className="cart-item-quantity">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            </div>
            <p>Subtotal: ₹{item.price * item.quantity}</p>
            <button
              className="remove-btn"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
    <div className="cart-total">
      <h2>Total: ₹{getCartTotal()}</h2>
      <button className="checkout-btn">Proceed to Checkout</button>
    </div>
    </div>
  );
};

export default Cart;