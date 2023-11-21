import React from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import * as yup from 'yup'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {FaLongArrowAltRight} from 'react-icons/fa';
import { useField } from "formik";
import {signupRequest, successSignup, faieldSignup} from '../../redux/signup/signupAction';
import './signup.style.css';
const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
  const PASSWORD_REGEX = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})';
  const validationSchema = yup.object({
    email: yup.string().email('please enter a valid email').required("the email is required"),
    password: yup.string().matches(PASSWORD_REGEX, 'please enter a strong password').required('password is required'),
    passwordConfirmation: yup.string().required('confirmPassword is required').oneOf([yup.ref("password"), null], "Passwords must match"),
  });
  const onSubmit = async (values) => {
    dispatch(signupRequest());
    await axios.post('https://omar-tech-store.herokuapp.com/api/users/signup',
    {
        email: values.email,
        password: values.password,
        passwordConfirmation: values.passwordConfirmation,
    })
    .then((details) => {
      const {data} = details;
      dispatch(successSignup(data))
      localStorage.setItem('token', data.token);
      navigate('/')
    })
    .catch((err) => {
      console.log(err);
    })
  }
  const formik = useFormik({
    initialValues: {
        email: '',
        password: '',
        passwordConfirmation: '',
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });
  
  return (
    <div className='w-[80%] m-auto flex bg-gray-100 h-[100vh] overflow-y-hidden max-h-[100vh]'>
      <div className='w-[37%] p-[3rem] flex justify-center items-start  bg-gradient-to-b from-orange-500 via-orange-600 to-orange-700 h-[100vh]'>
        <div className='flex flex-col justify-between h-[30rem] mt-[4.5rem] '>
            <img className='w-[12rem]' src='./images/logo.png' />
            <p className='text-[#fff] font-bold text-2xl my-[1.5rem]'>Welcome Back!</p>
            <p className='text-gray-300 font-bold text-1xl opacity-[.8]'>Login to your account and start your shopping NOW!</p>
            <img src='./images/login.png' />
        </div>
      </div>
      <div className='w-[40%] h-[100vh] flex flex-col justify-center items-start p-[1rem] ml-[7rem] mt-[7rem]'>
        <p className='font-semibold text-2xl text-start title ml-[10px]'>SIGN UP</p>
        <form onSubmit={formik.handleSubmit} className='flex flex-col' >
            <div className=' my-[.5rem] h-[4rem] '><input  name="email" type='email' placeholder='John@example.com' onChange={formik.handleChange} value={formik.values.email} className='p-[1rem] my-[.9rem] w-[28rem] border-none outline-none max-h-[100%] h-[100%] field block ' /></div>
            {formik.touched.email && formik?.errors?.email}
            <div className=' my-[.5rem] h-[4rem]'><input name="password" type='password' placeholder='password' onChange={formik.handleChange} value={formik.values.password} className='p-[1rem] my-[.9rem] w-[28rem] border-none outline-none max-h-[100%] h-[100%] field block '  /></div>
            {formik.touched.password && formik?.errors?.password}
            <div className=' my-[.5rem] h-[4rem]'><input name="passwordConfirmation" type='password' placeholder='password Confirmation' onChange={formik.handleChange} value={formik.values.passwordConfirmation} className='p-[1rem] my-[.9rem] w-[28rem] border-none outline-none max-h-[100%] h-[100%] field block '  /></div>
            {formik.touched.passwordConfirmation && formik?.errors?.passwordConfirmation}
            <button type='submit' className='flex items-center mt-[2rem] '><p>Sign Up</p> <p  className=' flex items-center  bg-orange-400 rounded-full text-white text-right justify-end p-[.1rem] ml-[.5rem] hover:ml-[.8rem] transition-all duration-150' ><FaLongArrowAltRight className='block  ' /></p></button>
        </form>
        <p className='mt-[3rem]'>Already member ? <Link to='/login'>Login</Link></p>
      </div>
      
    </div>
  )
}

export default LoginPage
