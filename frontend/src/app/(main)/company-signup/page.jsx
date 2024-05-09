'use client';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


import { enqueueSnackbar } from 'notistack';
import React from 'react'

const company_signup = () => {

  const router = useRouter()

  const companyForm = useFormik({
    initialValues: {
      name: '',
      industry: '',
      website: '',
      email: '',
      specialities: ''
    },
    onSubmit: (values) => {
      console.log(values);

      //sending request to backend 
      fetch('http://localhost:5000/company/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      })

        .then((response) => {
          console.log(response.status);
          if (response.status === 200) {
            enqueueSnackbar('Company added successfully', { variant: 'success' })
            router.push("/company-login")
          } else {
            enqueueSnackbar('Something went wrong', { variant: 'error' })
          }
        })
        .catch(err => {
          enqueueSnackbar('Something went wrong', { variant: 'error' })
        })
    }
  })
  return (
  <div  className='' style={{ 
    backgroundImage: "url('https://img.freepik.com/free-vector/futuristic-background-design_23-2148503793.jpg?w=1060&t=st=1714880025~exp=1714880625~hmac=da62b6c52b64b140a5cd7bbd950d64d4a751fec9870a7f2627f84e22016d135a')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
}}> 
    <div style={{marginTop:"100px"}}>
      <section className="mt-20">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
           
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Company-SignUp
              </h1>
              <form className="space-y-4 md:space-y-6" action="#" onSubmit={companyForm.handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={companyForm.values.name}
                    onChange={companyForm.handleChange}
                    className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="industry"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    industry_info
                  </label>
                  <input
                    type="industry"
                    name="industry"
                    id="industry"
                    value={companyForm.values.industry}
                    onChange={companyForm.handleChange}

                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="String"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    website
                  </label>
                  <input
                    type="website"
                    name="website"
                    id="website"
                    value={companyForm.values.website}
                    onChange={companyForm.handleChange}

                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"

                    id="email"
                    value={companyForm.values.email}
                    onChange={companyForm.handleChange}
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
                    type="password"
                    id="password"
                    value={companyForm.values.password}
                    onChange={companyForm.handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    specialties
                  </label>
                  <input
                    type="specialties"
                    id="specialties"
                    value={companyForm.values.specialties}
                    onChange={companyForm.handleChange}
                    className=" border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                    required=""
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                  
                    
                  </div>
                  {/* <Link
                    href="/resetPassword"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </Link> */}
                </div>
                <div className='text-center '>
                  <button type="submit" class=" w-full focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-1 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Sign Up</button>
                
                </div>
                <div className='text-center '>
                  <Link type="submit" href={"/company-login"} class=" w-full focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2 me-2  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Login</Link>
                
                </div>
              
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>  
  )
}

export default company_signup
