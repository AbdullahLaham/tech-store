import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Checkbox from '../components/Checkbox'
import { useSelector, useDispatch } from 'react-redux'
import {addToCart} from '../redux/cart/cartActions'
const ProductDetails = () => {
    const profile = useSelector((state) => state.login.data);
    const token = localStorage.getItem('token') ? localStorage.getItem('token') : '';
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const [currentImage, setCurrentImage] = useState(product?.images && product?.images[0]);
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();
    const addProductToCart = async () => {
        dispatch(addToCart(product));
        navigate('/cart')
        // await axios.put('https://omar-tech-store.herokuapp.com/api/users/profile/cart', {
        //    "productId": product._id,
        //     "qty": 2 
        // },
        // {         
        //     headers: {
        //         authorization: `Bearer ${token}`,
        //         'Content-Type': 'application/json',
        //     },
        // },
        // ).then((res) => {
        //     console.log('res', res);

        // }).catch((err) => {
        //     console.log(err)
        // })
    }
    

    console.log('profile', profile);
    
    useEffect(() => {
       const fetchProductDetails = async () => {
        const {data} = await axios.get(`https://omar-tech-store.herokuapp.com/api/products/${id}`);
        setProduct(data);
        console.log('dataaa', data);
       }
       fetchProductDetails();
    }, [id]);
    return (
        <>
            <Header />
            <div className='p-[.7rem] flex flex-col lg:flex-row justify-around w-[100%] h-[100vh]'>
                <div className='w-[100%] md:mt-[13rem] mt-[32rem]  lg:w-[44%] lg:mt-[5.5rem]'>
                    <div className='h-[27rem] pt-[6rem] lg:pt-[3.5rem] border shadow-lg shadow-gray-400  p-[.8rem] rounded-[7px] '>
                        <img src={!currentImage ?  product?.images && product?.images[0] : currentImage} className='w-[25rem] max-h-[25rem] mx-auto -mt-[3rem] ' />
                    </div>
                    <div className='flex w-[100%] justify-between items-center mt-[.5rem]'>
                        {product?.images && product.images.map((image) => {
                            return (
                                <img className='w-[5.2rem] h-[5.2rem] md:w-[8rem] md:h-[8rem]  shadow-lg shadow-gray-400 p-[.3rem] mr-[.1rem] cursor-pointer prounded-[11px]' src={image} onClick={() => setCurrentImage(image)} />
                            )
                        })}
                    </div>

                </div>
                <div className='w-[100%] mt-[1rem] lg:w-[44%] lg:mt-[5.5rem]'>
                    <p className='text-4xl font-bold  mb-[1rem]'>{product?.name}</p>
                    <p className='text-gray-400  mb-[1rem]'>{product?.description}</p>
                    <p className='flex mb-[1rem] text-gray-500 '>Availability in stock: {product?.countInStock > 0 ? <p className='text-green-600 pl-[.5rem]'>Available</p> : <p className='text-green-600'>Not Available</p>}</p>
                    <hr />
                    <p className='mb-[1rem] text-gray-500'>Choose your combination</p>
                    <div className='flex w-[100%] justify-around mb-[1rem]'>
                        {
                            product?.colors && product?.colors?.map((color, i) => {
                                return (
                                    <div className='flex flex-col justify-center mb-[1rem]'>
                                        <label for={`color${i}`} className='flex w-[4rem]'>
                                            <div style={{ background: ` ${color?.one}` }} className={`w-[5rem] h-[3rem]`}></div>
                                            <div style={{background: `${color?.two}`}} className={` w-[5rem] h-[3rem]`}></div>
                                        </label>
                                        <input type='radio' id={`color${i}`}  name="fav_language" value={color} className='block mt-[.6rem]' />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <hr />
                    <p className='text-gray-500'>Size And Weight</p>
                        <Checkbox data={product?.size} />
                    <p className='text-gray-500'>Chip</p>
                    <Checkbox data={product?.categories} />
                    <p className='text-gray-500'>Storage</p>
                    <Checkbox data={product?.categories} />
                    <p className='text-gray-500'>Memory</p>
                    <Checkbox data={product?.memory} />
                    <button className='mb-[2rem] w-[100%] h-[2rem] pb-[.8rem] text-center bg-orange-500 text-white' onClick={addProductToCart}>Add To Cart</button>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default ProductDetails
