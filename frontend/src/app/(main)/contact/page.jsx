"use client";
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';

import { enqueueSnackbar } from 'notistack';
import React from 'react'

const Contact = () => {

  const router = useRouter();

  const contactForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ""
    },
    onSubmit: (values) => {
      console.log(values);

      //sending request to backend 
      fetch('http://localhost:5000/contact/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      })

        .then((response) => {
          console.log(response.status);
          if (response.status === 200) {
            enqueueSnackbar('contact added successfully', { variant: 'success' })
            router.push("/")
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

    <div className=''>
      <section className=" h-dvh mt-10 bg-white dark:bg-gray-900" style = {{backgroundImage: "url('https://www.sss-solutions.org/wp-content/uploads/2018/01/1116146294-login-page-background-image-112.jpg')"}}>

        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contact Us
          </h2>
         
          <form action="#" className="space-y-8" onSubmit={contactForm.handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                value={contactForm.values.email}
                onChange={contactForm.handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
               
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
               Name
              </label>
              <input
                type="text"
                id="name"
                value={contactForm.values.name}
                onChange={contactForm.handleChange}
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
               
                required=""
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                value={contactForm.values.message}
                onChange={contactForm.handleChange}
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              
              
              />
            </div>
            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Send</button>
          </form>
        </div>
      </section>

    </div>


  )
}

export default Contact