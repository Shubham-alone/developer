import React, { useEffect, useState } from 'react';
import {useSearchParams} from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../productcard/ProductCard';
import './search.css';
import { Link } from 'react-router-dom';


const Search = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

      axios.get(`http://localhost:5432/search?query=${(query)}`)
      .then((response) => {
        setProducts(response.data.product);
        setLoading(false);
      })
      .catch((error) => {
          console.log(error);
          setLoading(false);
      });
    }, [query]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="search-container">
          
          {products.length > 0 ? ( <div className='product-list'>
          
               {products.map((product) => (
                   <ProductCard key={product.id} product={product} />
               ))}
           </div>) : (
            <div>
                <p>No products found</p>
               <Link to='/'>
                   <button className='shopping'>Continue Shopping</button>
               </Link>
            </div>
           )}
    </div>
  )
}

export default Search;