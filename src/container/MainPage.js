import React, { useState } from 'react'
import {MdKeyboardArrowRight, MdKeyboardArrowDown} from 'react-icons/md';
import Nav from '../components/nav/Nav';
import Products from '../components/featchered/Products';
import Trending from '../components/Trending';
import { SSlider } from '../components/slider/Slider';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const MainPage = () => {
  const navigate = useNavigate();
  const [offer, setProductOffer] = useState({});
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/login');
    }
    const fetchData = async () => {
      await axios.get('https://omar-tech-store.herokuapp.com/api/products/offers')
      .then((data) => {
        setProductOffer(data)
      }).catch((err) => {
        console.log(err);
      })
    }
    fetchData();
  
  }, [])
  return (
    <div>
      <Header />  
      <div className='bg-main-img w-[100%] block h-[100vh] bg-no-repeat bg-cover relative z-0'>
          <div className='w-[100%] flex ' >
            <div className='w-[100%] flex-col mt-[15rem] flex items-start text-white ml-[7rem]  ' >
              <h2 className='text-5xl mb-[.9rem]'>PLAYSTATION 5</h2>
              <p className='mt-[1rem] '> ligtning-fast download-speed with super fast ssd storage</p>
              <button className='flex p-[.5rem] items-center jus mt-[3.5rem] text-[#000] bg-white rounded-md hover:gap-3 transition delay-150 duration-300 ease-in-out;
              '><p className='font-bold'>Start Shopping</p> <span className='flex -ml-[.4rem] text-[#000] '><MdKeyboardArrowRight className='text-[1.5rem] ml-[10px] '/><MdKeyboardArrowRight className='text-[1.5rem] -ml-[1.2rem] '/><MdKeyboardArrowRight className='text-[1.5rem] -ml-[1.2rem]'/></span></button>
            </div>
          </div>
          <div className='w-[2rem] h-[2rem] rounded-full flex items-center justify-center bg-white absolute bottom-6 left-[50%] cursor-pointer'>
            <MdKeyboardArrowDown className='text-orange-500 font-bold '/>
          </div>
        </div>
        <div>
          <SSlider />
        </div>
        
        <Nav />
        <Products />
        <div className='w-[100%] my-[2.5rem] m-auto flex justify-center items-center h-[3rem]'>
          <button className='w-[10rem] border border-gray-300 rounded-md bg-gray-100 cursor-pointer p-[.3rem] font-semibold'>View More</button>
        </div>
        <Trending />
        <Footer />
    </div>
  )
}

export default MainPage
