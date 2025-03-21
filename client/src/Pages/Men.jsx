import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductCard from '../component/productcard/ProductCard';
import men_banner from '../component/Assets/banner.png';
import './men.css';


const Men = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect( () => {
      axios.get('https://developer-1.onrender.com/products/category/Men')
      .then( (response) => {
           setProducts(response.data.product)
           setLoading(false)
      })
      .catch((error) => {
          console.log('error is there', error)
          setError('failed to load products. please try agian')
          setLoading(false);
      })
  },[]);


  if (error) {
    return <div className='error-message'>{error}</div>
  }

  return (
    <div className='section-page'>
        <div>
            <img className='shopcategory-banner' src={men_banner} alt="" />
        </div>

        {loading ? (
            <div className="loading-spinner">Loading...</div>
        ) : (
          <div className='product-list'>
                {
                     products.map( (product) => (

                          <ProductCard key={product.id} product={product} />
                          
                     ))
                
                }
          </div>
      
        )}
    </div>
  )
}

export default Men;