import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Footer from '../components/Footer'
import Header from '../components/Header'
import ProductItem from '../components/ProductItem';

const ProductsPage = () => {
  const {category} = useParams();
  const [products, setProducts] = useState([]);
  console.log(category)
  useEffect(() => {
    const fetchProducts = async () => {
        const {data} = await axios.get(`https://omar-tech-store.herokuapp.com/api/products/category/${category}`);
        setProducts(data);
        console.log(data);
    }
    fetchProducts();
  }, [category])  
  return (
    <div className='flex flex-col justify-between min-h-[100vh]'>
      <Header />
        <div className='pt-[7rem] w-[100%] flex flex-wrap justify-between py-[3rem]'>
            {products?.products?.length && products?.products.map((product) => {
                return (
                    <Link to={`/product/${product._id}`} className='w-[17rem] m-auto'>
                        <ProductItem product={product} />
                    </Link>
                )
            })}
        </div>
      <Footer />
    </div>
  )
}

export default ProductsPage
