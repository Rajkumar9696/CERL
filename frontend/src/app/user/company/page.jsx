'use client'
import React, { useEffect, useState } from 'react'


const Company = () => {

  const [companyList, setCompanyList] = useState([]);

  const fetchCompany = async() => {
    const res = await fetch("http://localhost:5000/company/getall")
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    setCompanyList(data);
  }

  useEffect(() => {
   fetchCompany();
  },[])


  return (
    <div>
      {
        companyList.map((company) => {
         return(
          <div className='grid grid-cols-3 gap-4 ms-10'>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-20 flex flex-row flex-wrap ">
            <a href="#">
              <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                 {company.name}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
               {company.industry}
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
    
       
        
        </div>
         )
        })
      }
   
    </div>

  )
}

export default Company
