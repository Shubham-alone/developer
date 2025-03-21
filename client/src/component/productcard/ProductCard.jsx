import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
  
        
         <div className='product-grid'>
             <div className="container">
             <Link to={`/product/${product.id}`}>
                 <img src={product.image} alt="" className='product-img' />
                 <h3 className='product-name'>{product.name}</h3>
                 <p className='product-price'>Price: ₹{product.price}</p>
              </Link>


                 <div className="product-actions">

                      <Link to={`/product/${product.id}`} className='view-details-btn'>View Details</Link>
                  </div>

              </div>
            </div>

  
  
  )
}

export default ProductCard;