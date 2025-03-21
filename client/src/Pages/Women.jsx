import React,{useState, useEffect} from 'react';
import axios from 'axios';
import ProductCard from '../component/productcard/ProductCard';
import women_banner from '../component/Assets/banner_women.png';
import './women.css';


const Women = () => {

    const [products, setproducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect( () => {
      axios.get('http://localhost:5432/products/category/Women')
      .then((response) => {
        setproducts(response.data.product)
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

           <div>
                <img className='shopcategory-banner' src={women_banner} alt="" />
            </div>

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

export default Women;