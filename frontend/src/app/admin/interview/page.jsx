'use client'
import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import React from 'react'

const Interview = () => {

    const interviewForm = useFormik({
        initialValues: {
         fname:"",
         lname:"",
         companyName:'',
         link:"",
         date:"",
         timing:""
        },
        onSubmit: (values) => {
          console.log(values);
    
          //sending request to backend 
          fetch('http://localhost:5000/interview/add', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
              'Content-Type': 'application/json'
            }
          })
    
            .then((response) => {
              console.log(response.status);
              if (response.status === 200) {
                enqueueSnackbar('Vacancy added successfully', { variant: 'success' })
                // router.push("/login")
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
            <>
                {/* Contact Us */}
                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 ">
                    <div className="max-w-xl mx-auto">
                        <div className="text-center">
                            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
                              Schedule Interview
                            </h1>
                            
                        </div>
                    </div>
                    <div className="mt-12 max-w-lg mx-auto">
                        {/* Card */}
                        <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-neutral-700">
                            <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-neutral-200">
                                Fill in the form
                            </h2>
                            <form onSubmit={interviewForm.handleSubmit}>
                                <div className="grid gap-4 lg:gap-6">
                                    {/* Grid */}
                                    <div>
                                        <label
                                            htmlFor="hs-about-contacts-1"
                                            className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                                        >
                                          Company Name
                                        </label>
                                        <input
                                                type="text"
                                                
                                                id="companyName"
                                                value={interviewForm.values.companyName}
                                                onChange={interviewForm.handleChange}
                                                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                            />
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                        <div>
                                            <label
                                                htmlFor="hs-firstname-contacts-1"
                                                className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                                            >
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                id="fname"
                                                value={interviewForm.values.fname}
                                                onChange={interviewForm.handleChange}
                                                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="hs-lastname-contacts-1"
                                                className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                                            >
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                id="lname"
                                                value={interviewForm.values.lname}
                                                onChange={interviewForm.handleChange}
                                                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                            />
                                        </div>
                                    </div>
                                    {/* End Grid */}
                                    {/* Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                        <div>
                                            <label
                                                htmlFor="hs-email-contacts-1"
                                                className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                                            >
                                             Date
                                            </label>
                                            <input
                                                type="date"
                                                id="date"
                                                value={interviewForm.values.date}
                                                onChange={interviewForm.handleChange}
                                               
                                                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="hs-phone-number-1"
                                                className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                                            >
                                               Timing
                                            </label>
                                            <input
                                                type="text"
                                                id="timing"
                                                value={interviewForm.values.timing}
                                                onChange={interviewForm.handleChange}
                                                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                            />
                                        </div>
                                    </div>
                                    {/* End Grid */}
                                    <div>
                                        <label
                                            htmlFor="hs-about-contacts-1"
                                            className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                                        >
                                           Link
                                        </label>
                                        <input
                                                type="url"
                                                id="link"
                                                value={interviewForm.values.link}
                                                onChange={interviewForm.handleChange}
                                                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                            />
                                    </div>
                                </div>
                                {/* End Grid */}
                                <div className="mt-6 grid">
                                    <button
                                        type="submit"
                                        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                                    >
                                        Schedule
                                    </button>
                                </div>
                                <div className="mt-3 text-center">
                                  
                                </div>
                            </form>
                        </div>
                        {/* End Card */}
                    </div>
                  
                </div>
                {/* End Contact Us */}
            </>

        </div>
    )
}

export default Interview
