import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import {HiArrowNarrowLeft} from 'react-icons/hi'
import { Link, useNavigate } from 'react-router-dom'
import {removeFromCart} from '../redux/cart/cartActions'
import axios from 'axios'
import { useDispatch } from 'react-redux'
const PaymentPage = () => {
  // navigate
  const navigate = useNavigate(); 
  // total price
  const total = localStorage.getItem('total');
  const token = localStorage.getItem('token');
  const cart = JSON.stringify(localStorage.getItem('cart'));
  const dispatch = useDispatch();
  const createTheOrder = async () => {
    cart?.length > 0 && await axios.post(`https://omar-tech-store.herokuapp.com/api/orders`, {
        "address": "khanyounis, DownTown",
        "city": "Gaza",
        "postalCode": "00541",
        "country": "Palestine"
    },
    {
        headers: {
            authorization: `Bearer ${token}`,
        }
    }
    )
    .then((data) => {
        console.log('theRes', data)
    }).catch((err) => {
        console.log(err)
    })

    cart?.length > 0 && cart.map((item, i) => {
        dispatch(removeFromCart(item?._id));
    })
  }
  return (
    <div>
      <Header />
        <div className=' p-[3rem] pt-[6rem]  '>
            <div className='flex justify-around'>
                <form className='w-[45%] text-gray-500'>
                    <Link to='/cart' className='text-gray-400 flex mt-[1rem] items-center gap-1'><HiArrowNarrowLeft /> Return to my cart</Link>
                    <p>Choose your payment method</p>
                    <div className='flex my-[.7rem]'>
                        <input type='radio' id='master' name='master' value='master'/>
                        <label for='master' className='flex justify-between items-center  '>
                            <p className='ml-[1rem]'>Credit Card</p>
                            <p className='flex justify-between items-center ml-[7rem]'><img src='/images/visa.jpg'  className='w-[4rem] h-[2.3rem] object-cover shadow-md shadow-gray-400'/><img src='/images/master.png' className='w-[4rem] h-[2.3rem] object-cover shadow-md shadow-gray-400 ml-[.7rem]' /> <img className='w-[4rem] h-[2.3rem] object-cover shadow-md shadow-gray-400 ml-[.7rem]' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPLG6FjxQLNUZ6Byo6Jxz3typNb9mlMQne0A&usqp=CAU' /></p>
                        </label>
                    </div>
                    <div className='flex mt-[.5rem]'>
                        <input type='radio' id='paypal' name='paypal' value='paypal'/>
                        <label for='paypal' className='flex justify-between items-center  '>
                            <p className='ml-[1rem]'>PayPal</p>
                            <p className='flex justify-between items-center ml-[9rem]'><img src='/images/paypal.png'  className='w-[4rem] h-[2.3rem] object shadow-md shadow-gray-400'/></p>
                        </label>
                    </div>
                    <p >Credit card number</p>
                    <input className='w-[100%] p-[.7rem] shadow-md shadow-gray-300 border-none outline-none  ' type='text' placeholder='66 55 8844 2233 5599' />
                    <div className='flex gap-2 my-[1rem]'>
                        <div className='w-[50%] flex flex-col'>
                            <p >CVV Code</p>
                            <input className='w-[100%] p-[.7rem] shadow-md shadow-gray-300 border-none outline-none  ' type='text' placeholder='66 55 8844 2233 5599' />
                        </div>
                        <div className='w-[50%] flex flex-col'>
                            <p >Expiry Date</p>
                            <input className='w-[100%] p-[.7rem] shadow-md shadow-gray-300 border-none outline-none  ' type='text' placeholder='66 55 8844 2233 5599' />
                        </div>
                    </div>

                    <p >Name On Card</p>
                    <input className='w-[100%] p-[.7rem] shadow-md shadow-gray-300 border-none outline-none  ' type='text' placeholder='66 55 8844 2233 5599' />
                    
                </form>
                <div className='pt-[4rem]'>
                    <div className='border shadow-md shadow-gray-400 p-[1.3rem] w-[25rem]'>
                        <div className='flex justify-between items-center py-[.3rem]'>
                            <p className='text-gray-400'>Order total</p>
                            <p className='text-gray-500'>${total || 0}</p>
                        </div>
                        <div className='flex justify-between items-center py-[.3rem]'>
                            <p className='text-gray-400'>Promo Code</p>
                            <p className='text-gray-500'>SaLE22</p>
                        </div>
                        <div className='flex justify-between items-center py-[.3rem]'>
                            <p className='text-gray-400'>Shipping</p>
                            <p className='text-gray-500'>$45</p>
                        </div>
                        <hr />
                        <div className='flex justify-between items-center py-[.3rem] font-bold'>
                            <p className='text-gray-400'>Subtotal</p>
                            <p className='text-green-600'>Total: ${parseInt(total)+45} </p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='my-[1rem] mx-[4rem]'/>
            <div className='w-[100%] flex justify-between px-[4rem]'>
                <button className='p-[.3rem] w-[7rem] rounded-[4px] hover:bg-opacity-[.8]  text-center cursor-pointer text-[#fff] border-none outline-none bg-gray-400' onClick={() => navigate(-1)}>Go Back</button>
                <button className='p-[.3rem] w-[7rem] rounded-[4px] hover:bg-opacity-[.8] text-center cursor-pointer text-[#fff] border-none outline-none bg-orange-500' onClick={() => createTheOrder()}>Checkout</button>
            </div>
        </div>
      <Footer />
    </div>
  )
}

export default PaymentPage;
