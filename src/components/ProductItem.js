import React from 'react'
import ReactStars from "react-rating-stars-component";
import {AiOutlineHeart} from 'react-icons/ai';
import {BsCartCheck} from 'react-icons/bs';
import { Link } from 'react-router-dom';
const ProductItem = ({product}) => {
    const addToWishlist = () => {

    }
  return (
    <Link to={`/product/${product?._id}`} className='w-[15rem] h-[11rem] mb-[8rem] '>
      <div className='w-[100%] flex justify-end'><AiOutlineHeart /></div>  
      <img className='w-[15rem] h-[12rem] object-cover' src={typeof product.images == 'string' ? product.images : product.images[0]} />
      
    <div className="flex items-center w-[100%] justify-between px-[.5rem]">
        <p className="font-bold text-xl z-10">{product.name}</p>
        <p className="text-[#278f34]">{product.price}</p>
    </div>
    <div className="flex items-center w-[100%] justify-between px-[.5rem]">
        <p><ReactStars
            count={5}
            onChange={5}
            size={24}
            activeColor="#ffd700"
            value={product.rating}
            classNames='pointer-events-none'
        /></p>
        <p className="line-through text-green decoration-[#ec4848] text-gray-600"><BsCartCheck onClick={addToWishlist} /></p>
    </div>
    </Link>
  )
}

export default ProductItem
