import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-center py-[1rem] border-t-2 border-b-2 border-t-gray-300 border-b-gray-300 text-gray-600 '>
      <div className='flex justify-between w-[85%] '>
        <div className='flex flex-col h-[10rem] justify-around'>
          <img className='w-[10rem]' src='/images/logo.png' />
          <p className='w-[20rem] text-[.9rem]'>teck store is an online market to sell all the types of the electronic devices like phones , laptops, Ipdas and so on.</p>
        </div>
        <div className='justify-between flex text-[.9rem]'>
          <div className='flex flex-col  w-[11rem]  justify-between'>
            <p>Home</p>
            <p>Featured Categories</p>
            <p>Featured Productsenu</p>
            <p>offers</p>
          </div>
          <div className='flex  flex-col w-[11rem]  justify-between'>
            <p>Menu</p>
            <p>Home</p>
            <p>New arrival</p>
            <p className=''>Mobiles</p>
          </div>
          <div className='flex flex-col  w-[11rem]  justify-between'>
            <p>Menu </p>
            <p>Laptops</p>
            <p>Headphones</p>
            <p>Accessories</p>
          </div>
          <div className='flex  flex-col  w-[15rem]  justify-between'>
            <p>Contacts</p>
            <p>Fell free get in touch with us via phone or send us a message</p>
            <p><a href='https://wa.me/+972592311426'>+972592311426</a></p>
            <p><a href='https://m.me/100003602820747'>abed26194@gmail.com</a></p>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default Footer
