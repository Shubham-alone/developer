import React, { useState, useEffect } from 'react';
import Hero from '../component/hero/Hero';
import Offer from '../component/offers/Offer';
import axios from 'axios';
import ProductCard from '../component/productcard/ProductCard';
import './shop.css';

const Shop = () => {

      const [products, setproducts] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);

      useEffect( () => {
        axios.get('https://developer-1.onrender.com/products')
        .then((response) => {
          setproducts(response.data.list)
          setLoading(false)
        })
        .catch( (error) => {
          console.log(error)
          setError('failed to load products');
          setLoading(false)
        })
      },[]);
    
      if (error) {
        return <div className="error-message">{error}</div>
      }
  
  return (
    <div>
        <Hero />
        <Offer />
      

        {loading ? (
               <div className="loading-spinner">Loading...</div>
          ) : (
               <div className="product-list">
                   {
                        products.map((product) => (
                             <ProductCard key={product.id} product={product} />
                        ))
                   }
               </div>
          )}
    </div>
  )
}

export default Shop;