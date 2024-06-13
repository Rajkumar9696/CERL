'use client';
import React from 'react'
import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';

const Applyform = () => {

  const applyform = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      phonenumber: '',
      fileUpload: '',
    },
    onSubmit: (values) => {
      console.log(values);

      //sending request to backend 
      fetch('http://localhost:5000/apply/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      })

        .then((response) => {
          console.log(response.status);
          if (response.status === 200) {
            enqueueSnackbar('Apply form added successfully', { variant: 'success' })
            router.push("/login")
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
    <div>
      <form className="max-w-md mx-auto mt-40" onSubmit={applyform.handleSubmit}>

        <div className="relative z-0 w-full mb-5 group">
          <label
            htmlFor="floating_fullname"
            className="peer-focus:font-medium absolute text-lg font-bold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Full-name
          </label>
          <input
            type="text"
            id='name'
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
            value={applyform.values.name}
            onChange={applyform.handleChange}
          />
        </div>

        <div className="relative z-0 w-full mb-10 group">
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-lg font-bold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
          <input
            type="email"
            id='email'
            className="block py-2.5 px-0 w-full text-sm text-gray-900t border-0 border-b-2  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
            value={applyform.values.email}
            onChange={applyform.handleChange}
          />
        </div>
        <div className="relative z-0 w-full mb-10 group">
          <label
            htmlFor="floating_password"
            className="peer-focus:font-medium absolute text-lg font-bold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
          <input
            type="password"
            id='password'
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
            value={applyform.values.password}
            onChange={applyform.handleChange}
          />
        </div>

       

        <div className="relative z-0 w-full mb-5 group">
          <label
            htmlFor="floating_phone"
            className="peer-focus:font-medium absolute text-lg font-bold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Phone Number
          </label>
          <input
            type="text"
            id='phonenumber'
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
            value={applyform.values.phonenumber}
            onChange={applyform.handleChange}
          />
        </div>



        <div className="relative z-0 w-full mb-5 group mt-5">
          <label
            className="block mb-2text-lg font-bold font-medium text-gray-900 dark:text-white"
            htmlFor="multiple_files"
          >
           
          </label>
          <input
            type="file"
            id='fileUpload'
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
            value={applyform.values.fileUpload}
            onChange={applyform.handleChange}
          />

        </div>




        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5"
        >
          Submit
        </button>
      </form>

    </div>
  )
}

export default Applyform
