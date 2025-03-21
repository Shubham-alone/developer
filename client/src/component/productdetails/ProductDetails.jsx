import React, { useEffect, useState } from 'react';
import './productdetails.css';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import star_icon from '../Assets/star_icon.png';
import star_dull from '../Assets/star_dull_icon.png';
 import { useCart } from '../../context/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
   const [quantity, setQuantity] = useState(1);
    const {addToCart} = useCart();

  useEffect(() => {
      axios.get(`http://localhost:5432/products/id/${id}`)
      .then( (response) => {
          setProduct(response.data.product[0])
          setLoading(false)
      })
      .catch((error) => {
          console.log(error);
          setError('failed to load product details');
          setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    alert(`${product.name} added to cart!`)
  }

  const handleQuanityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value)
    }
  };

   if (loading) {
      return <div className="loading-spinner">Loading...</div>
   }

   if (error) {
    return <div className="error-message">{error}</div>
   }


  return (
    <div className='productdisplay'>
         <div className='productdisplay-left'>

              <div className='productdisplay-imglist'>
                   <img src={product.image} alt="" />
                   <img src={product.image} alt="" />
                   <img src={product.image} alt="" />
                   <img src={product.image} alt="" />
              </div>

              <div className='productdisplay-img'>
                  <img src={product.image} alt="" className='productdisplay-main-img' />
              </div>
         </div>

         <div className='productdisplay-right'>
               <h1>{product.name}</h1>

               <div className='productdisplay-right-star'>
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull} alt="" />
                    <p>(122)</p>
               </div>

               <div className='productdisplay-right-prices'>
                    <div className='productdisplay-right-price-old'>₹ {product.price}</div>
               </div>

               <div className='productdisplay-right-desciption'>{product.description}</div>

               <div className='productdisplay-right-size'>
                   <h1>Select Size</h1>

                   <div className='productdisplay-right-sizes'>
                         <div>S</div>
                         <div>M</div>
                         <div>L</div>
                         <div>XL</div>
                         <div>XXL</div>
                   </div>
               </div>

               <input type="number" value={quantity} onChange={handleQuanityChange} min="1" style={{marginBottom: '10px', padding:'5px'}} />

               <button onClick={handleAddToCart}>Add to Cart</button>

                <p className='productdisplay-right-category'><span>Category: </span> {product.category}</p>

                <p className='productdisplay-right-category'><span>Tags: </span>Modern, Latest, Trending</p>


                <button> <Link to={`/${product.category}`} className="back-to-category">
            &larr; Back to {product.category}'s Collection
          </Link></button>
         </div>

        
    </div>
  )
}

export default ProductDetails;