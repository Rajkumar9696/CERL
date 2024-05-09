'use client'
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { enqueueSnackbar } from 'notistack';
import React from 'react';



const Login = () => {

  const router = useRouter()

  const loginForm = useFormik({
    initialValues: {

      email: '',
      password: '',

    },
    onSubmit: (values) => {
      console.log(values);

      //sending request to backend 
      fetch('http://localhost:5000/user/authenticate', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      })

        .then((response) => {
          console.log(response.status);
          if (response.status === 200) {
            enqueueSnackbar('User added successfully', { variant: 'success' })
            return response.json();
          } else {
            enqueueSnackbar('Something went wrong', { variant: 'error' })
          }
        })
        .then((data) => {
          sessionStorage.setItem('user', JSON.stringify(data));
          router.push("/")
        })
        .catch(err => {
          enqueueSnackbar('Something went wrong', { variant: 'error' })
        })
    }
  })

  return (
<div className='' style={{ 
    backgroundImage: "url('https://img.freepik.com/free-vector/futuristic-background-design_23-2148503793.jpg?w=1060&t=st=1714880025~exp=1714880625~hmac=da62b6c52b64b140a5cd7bbd950d64d4a751fec9870a7f2627f84e22016d135a')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
}} >
    <div className="  flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          {/* <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            CERL
          </a> */}
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700" >
            <div className=" shadow-lg  p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                User-Login
              </h1>
              <form className="space-y-4 md:space-y-6" action="#" onSubmit={loginForm.handleSubmit}>
               
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                     Email
                  </label>
                  <input
                    type="email"

                    id="email"
                    value={loginForm.values.email}
                    onChange={loginForm.handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="text"

                    id="password"
                    value={loginForm.values.password}
                    onChange={loginForm.handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                    required=""
                  />
                </div>
               
                <div className="flex items-center justify-between">
                  {/* <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div> */}
                  <Link
                    href="/resetPassword"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className='text-center'>
                  <button type="submit" className=" w-full focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Login</button>
                </div>
                {/* <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}

                </p> */}
              </form>
            </div>
          </div>
        </div>
    </div>  
  )
}

export default Login;