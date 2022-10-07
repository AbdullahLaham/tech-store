import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import "./slider.css";
import ProductItem from "../ProductItem";
import { Link } from "react-router-dom";

export function SSlider() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('MOBILES');
  const [active, setActive] = useState('MOBILES');
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 1000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 500,
    arrows: false,
    adaptiveHeight: true,
    appendDots: dots => <ul>{dots}</ul>,
    customPaging: i => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    )
  };
  useEffect(() => {
    const fetcProducts = async () => {
      const {data} = await axios.get(`https://omar-tech-store.herokuapp.com/api/products/featured-categories?category=${category}`);
      console.log('data', data);
      setProducts(data);
    }
    fetcProducts();
    const fetchCategories = async () => {
      const {data: {categories}}= await axios.get('https://omar-tech-store.herokuapp.com/api/products/category/all');
      setCategories(categories);
      console.log(categories)
    }
    fetchCategories();
  }, [category])
  return (
    <>
    <div className="flex w-[100%] justify-between items-center p-[1rem] ">
      <p className="text-2xl font-bold">FEATCHRED CATEGORIES</p>
      <div className="flex w-[60%] justify-between items-center">
        {categories.map((category, i) => {
          return (
            <p onClick={() => {setActive(category.name); setCategory(category.name)}} className={active == category.name ? 'bg-orange-500 text-[#fff] rounded-md p-[.4rem] cursor-pointer transition-all ' : 'cursor-pointer transition-all '}>
              {category.name}
            </p>
          )
        })  } 
      </div>
      
    </div>
    <div className="flex">
    <div className="flex flex-wrap w-[45%] items-center m-auto">
        {products.map((product, i) => {
          return (
            product.name != "HUAWEI Mate 40 Pro" &&  product._id != "62c2e1ac9fbfe22ca844882f" && 
            <div className="w-[45%] flex flex-col ">
              <ProductItem product={product} />
            </div>
          )
        })  } 
      </div>
      <div className="spec-card">
        <div className="categories-wrapper flex">
          <Swiper className=""
            // install Swiper modules
            modules={[Pagination, A11y, Autoplay]}
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            
            {products.map((product, i) => {
                return (
                  product.name != "HUAWEI Mate 40 Pro" && 
                    
                      (<SwiperSlide >
                        <p className='bg-orange-400 text-black rounded-md absolute p-[.4rem]  '>SALE -50%</p>
                        <div className="W-[100%] flex justify-center mt-[1.5rem] ">
                          <img className="block mt-[.5rem] w-[20rem] max-w-[25rem] overflow-hidden max-h-[27rem]  object-cover" src={typeof product.images == 'string' ? product.images : product.images[0]} />
                        </div>
                        <div className="flex items-center w-[100%] justify-between p-[.5rem]">
                          <p className="font-bold text-3xl z-10">{product.name}</p>
                          <p className="text-[#278f34]">{product.price}</p>
                        </div>
                        <div className="flex items-center w-[100%] justify-between p-[.5rem]">
                          <p className="text-gray-400 ">Brand Name</p>
                          <p className="line-through text-green decoration-[#ec4848] text-gray-600">139.000</p>
                        </div>
                    </SwiperSlide>)
                    
                )
              })}
    </Swiper>
      
    
        </div>
      </div>
     
    </div>
     <div className='w-[100%] my-[2.5rem] m-auto flex justify-center items-center h-[3rem]'>
          <Link to={`/products/${category}`} className='text-center w-[13rem] border border-gray-300 rounded-md bg-gray-100 cursor-pointer p-[.3rem] font-semibold'>View More {category}</Link>
      </div>
    </>
  );
}


