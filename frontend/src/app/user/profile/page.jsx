'use client'
import { Formik, useFormik } from 'formik'
import { enqueueSnackbar } from 'notistack'
import React, { useState } from 'react'



const UserProfile = () => {

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')))

  
  const uploadProfileImage = (e) => {
    const file = e.target.files[0];
    const fd = new FormData();
    fd.append('myfile', file)
    fetch(`http://localhost:5000/util/uploadfile`, {
      method: "POST",
      body: fd,
    }).then(res => {
      if (res.status === 200) {
        enqueueSnackbar('Profile image uploaded successfully')
        updateProfile({ avatar: file.name })
      }
    })
  }

  const updateProfile = (data) => {
    fetch(`http://localhost:5000/user/update/${currentUser._id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(res => {
        console.log(res.status)
        return res.json()
      })
      .then(data => {
        console.log(data),
          setCurrentUser(data)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <>
        {/* component */}
        <link
          rel="stylesheet"
          href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
        />
        <link
          rel="stylesheet"
          href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
        />
        <main className="profile-page">
          <section className="relative block h-500-px">
            <div
              className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80")'
              }}
            >
              <span
                id="blackOverlay"
                className="w-full h-full absolute opacity-50 bg-black"
              />
            </div>
            <div
              className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
              style={{ transform: "translateZ(0px)" }}
            >
              <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x={0}
                y={0}
              >
                <polygon
                  className="text-blueGray-200 fill-current"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="relative py-16 bg-blueGray-200">
            <div className="container mx-auto px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                <div className="px-6">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                      <div className="relative">
                        <img
                          alt="..."
                          src={currentUser.avatar && `http://localhost:5000/${currentUser.avatar}`}
                          className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                      <div className="py-6 px-3 mt-32 sm:mt-0">
                        <label className='btn bg-white border hover:bg-slate-200' htmlFor='upload-image'>
                          {" "} <i className='fas fa-pen'>&nbsp;Edit </i>
                        </label>
                        <input type="file" hidden onChange={uploadProfileImage} id="upload-image" />
                      </div>
                    </div>

                  </div>
                  <div className="text-center mt-12">
                    <h3 className="text-4xl font-semibold leading-normal mb-4 text-blueGray-700 ">
                      {currentUser.name}
                    </h3>

                    <div className="mb-10 text-blueGray-600 ">
                      {currentUser.email}
                    </div>

                  </div>

                </div>
              </div>
            </div>




            <div className="bg-white mt-12  py-24 sm:py-8 lg:py-12">
              <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                {/* text - start */}
                <div className="mb-10 md:mb-16">
                  <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                    Update Profile
                  </h2>
                 
                </div>
                {/* text - end */}
                {/* form - start */}
                {
                  <Formik initialValues={currentUser} onSubmit={updateProfile}>
                    {(updateProfile) => (

                
                <form  className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                    >
                      Name*
                    </label>
                    <input
                     type='text'
                      id="name"
                     value={updateProfile.values.name}
                     onChange={updateProfile.handleChange}
                      className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                    >
                      Address*
                    </label>
                    <input
                     type="text"
                      id="address"
                      className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                   onChange={updateProfile.handleChange}
                   value={updateProfile.values.address}
                   />
                  </div>
                  <div>
                    <label
                      htmlFor="first-name"
                      className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                    >
                      Email*
                    </label>
                    <input
                    type='text'
                      id="email"
                      value={updateProfile.values.email}
                      onChange={updateProfile.handleChange}
                      className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                    >
                      Phone No.*
                    </label>
                    <input
                    type='text'
                     id="phone"
                     value={updateProfile.values.phone}
                     onChange={updateProfile.handleChange}
                      className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                    />
                  </div>
                
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                    >
                      Bio*
                    </label>
                    <textarea
                      name="message"
                      className="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                      defaultValue={""}
                    />
                  </div>
                  <div className="flex items-center justify-between sm:col-span-2">
                    <button type="submit" className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                      Update
                    </button>
                
                  </div>
                  
                </form>
                    )}
                    </Formik>
                  }
                {/* form - end */}
              </div>
            </div>





          </section>
        </main>
      </>


    </div>
  )
}

export default UserProfile;