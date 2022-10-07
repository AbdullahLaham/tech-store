import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProductItem from './ProductItem'

const Trending = () => {
    const [featchredProducts, setFeatchredProducts] = useState([]);
    useEffect(() => {
        async function fetchData  () {
            const {data} = await axios.get('https://omar-tech-store.herokuapp.com/api/products/trending-products');
            setFeatchredProducts(data);
        }
        fetchData();
    }, [])
    console.log('setFeatchredProducts', featchredProducts)
  return (
    <div className='w-[100%] flex justify-center'>
        <div className='flex max-w-[85%] flex-wrap justify-between '>
            {
                featchredProducts.map((product, i) => {
                    return (
                       i != featchredProducts.length - 1 && <Link to={`/product/${product?._id}`} className='m-[1rem]'>
                            <div className='border-1 border-solid  p-[.5rem] border-1 border-gray-600 rounded-md '>
                                <img className='w-[10rem] h-[10rem] object-cover  block ' src={product.images} />
                            </div>
                            <div className='flex items-center text-[12px] w-[100%] justify-between px-[1rem]'>
                                <p className='mr-[5px]'>{product.name}</p>
                                <p className='bg-red-300 rounded-[5rem]  p-[.2rem] text-red-100 '>{product.price}</p>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Trending
