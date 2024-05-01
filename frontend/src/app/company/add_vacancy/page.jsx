'use client'
import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import React from 'react';

function Add_vacancy() {
  // Example company data
  const vacancy = useFormik({
    initialValues: {
      designation: '',
      location: '',
      description: '',
      openings: '',
      experience: '',
      salary: '',
      noticePeriod: '',
      modeOfHire: '',
      skillSet: '',
    },
    onSubmit: (values) => {
      console.log(values);

      //sending request to backend 
      fetch('http://localhost:5000/vacancy/add', {
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
    <>
      {/* Hire Us */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
              Company Form
            </h1>
            <p className="mt-1 text-gray-600 dark:text-neutral-400">
              Tell us your story and we’ll be in touch.
            </p>
          </div>
          <div className="mt-12">
            {/* Form */}
            <form onSubmit={vacancy.handleSubmit}>
              <div className="grid gap-4 lg:gap-6">
                {/* Grid */}
                <div className="">
                  <div>
                    <label
                      htmlFor=""
                      className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                    >
                      Designation
                    </label>
                    <input
                      type="text"
                      name="designation"
                      value={vacancy.values.designation}
                      onChange={vacancy.handleChange}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor=""
                      className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                    >
                      Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      id="location"
                      value={vacancy.values.Location}
                      onChange={vacancy.handleChange}

                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="hs-work-email-hire-us-2"
                      className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                    >
                      Description
                    </label>
                    <input
                      type="text"
                      name="description"
                      id="description"
                      value={vacancy.values.description}
                      onChange={vacancy.handleChange}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    />
                  </div>
                  {/* Grid */}
                  <div className="">
                    <div>
                      <label
                        htmlFor="hs-company-hire-us-2"
                        className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                      >
                        Openings
                      </label>
                      <input
                        type="number"
                        name="openings"
                        id="openings"
                        value={vacancy.values.openings}
                        onChange={vacancy.handleChange}
                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="hs-company-website-hire-us-2"
                        className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                      >
                        Experience
                      </label>
                      <input
                        type="text"
                        name="experience"
                        id="experience"
                        value={vacancy.values.experience}
                        onChange={vacancy.handleChange}
                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor=""
                      className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                    >
                      Salary
                    </label>
                    <input
                      type="text"
                      id="salary"
                      name="salary"
                      value={vacancy.values.salary}
                      onChange={vacancy.handleChange}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"

                    />
                  </div>
                  <div>
                    <label
                      htmlFor=""
                      className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                    >
                      NoticePeriod
                    </label>
                    <input
                      type="text"
                      name="noticePeriod"
                      id="noticePeriod"
                      value={vacancy.values.noticePeriod}
                      onChange={vacancy.handleChange}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor=""
                      className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                    >
                      ModeOfHire
                    </label>
                    <input
                      type="text"
                      name="modeOfHire"
                      id="modeOfHire"
                      value={vacancy.values.modeOfHire}
                      onChange={vacancy.handleChange}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor=""
                      className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                    >
                      skillSet
                    </label>
                    <input
                      type="text"
                      name="skillSet"
                      id="SkillSet"
                      value={vacancy.values.skillSet}
                      onChange={vacancy.handleChange}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    />
                  </div>
                </div>

              </div>



              <div className="mt-6 grid">
                <button
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Submit
                </button>
              </div>
              <div className="mt-3 text-center">
                <p className="text-sm text-gray-500 dark:text-neutral-500">
                  We'll get back to you in 1-2 business days.
                </p>
              </div>
            </form>

          </div>
        </div>
      </div>

    </>


  );
}

export default Add_vacancy;

