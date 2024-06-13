"use client"
import Link from 'next/link';
import React from 'react'
import useUserContext from '../context/UserContext';


const Navbar = () => {

  const { loggedIn, logout } = useUserContext();
  const showLoggedIn = () => {
    if (loggedIn) {
      return (

        <div className=' rounded-full flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
          <div className="hs-dropdown relative inline-flex">
            <div
              id="hs-dropdown-with-dividers"
              type=""
              className=" rounded-full hs-dropdown-toggle inline-flex items-center gap-x-2 text-sm font-medium rounded-lg  text-gray-800 shadow-sm  disabled:pointer-events-none  dark:text-white dark:hover:bg-neutral-800"
            >
              <img src="https://th.bing.com/th/id/OIP.srNFFzORAaERcWvhwgPzVAHaHa?rs=1&pid=ImgDetMain" alt="" className='rounded-full  h-8' />
             
              <svg
                className="hs-dropdown-open:rotate-180 size-4"
                xmlns="http://www.w3.org/2000/svg"
               
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
            <div
              className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 mt-2 divide-y divide-gray-200 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700"
              aria-labelledby="hs-dropdown-with-dividers"
            >
              <div className="py-2 first:pt-0 last:pb-0">
                <Link
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                  href={"/user/profile"}
                >
                  Profile
                </Link>

              </div>

              <div className="py-2 first:pt-0 last:pb-0">

                <button
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-red-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                  onClick={logout}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>


        </div>
      )
    } else {
      return (
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link
            href={"/signup"}
            type="button"
            className=" me-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            signup
          </Link>
          <Link
            href={"/login"}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            login
          </Link>


          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      )
    }
  }
  return (
    <div>
      <nav className="bg-blue-400 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">


          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            CERL
          </span>

          {
            showLoggedIn()
          }
          <div
            className=" bg-blue-800  items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border   bg-blue-400 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0   ">
              <li>
                <Link
                  href="/"
                  className="block py-2 px-3 text-dark bg-blue-700 rounded md:bg-transparent md:text-dark-700 md:p-0 md:dark:text-blue-500 md:hover:text-blue-700 md:dark:hover:text-blue-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/company-signup"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Company Signup
                </Link>
              </li>


              <li>
                <Link
                  href="/vacancy"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Vacancy
                </Link>
              </li>


              <li>
                <Link
                  href="/feedback"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  feedback
                </Link>
              </li>

              {/* <li>
                <Link
                  href="/contact"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                 Compa
                </Link>
              </li>
              */}
            </ul>

            {/* <div>
              <details className="dropdown ">
                  <summary className="m-1 btn ">Company</summary>
                  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li>
                      <Link href="/company-signup" 
                      className=''
                      >
                      Signup</Link>
                      </li>
                    <li>
                      <Link href={"/company-login"}
                      className=''
                      >
                        Login
                      </Link>
                      
                      </li>
                  </ul>
                </details>
                </div> */}


          </div>
        </div>
      </nav>


    </div>

  )
}

export default Navbar;