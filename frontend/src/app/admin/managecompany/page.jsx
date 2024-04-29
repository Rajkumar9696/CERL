'use client';
import { enqueueSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react'

const Managecompany = () => {

  const [companyList, setCompanyList] = useState([]);

  const fetchCompany = async () => {
    const res = await fetch("http://localhost:5000/company/getall")
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    setCompanyList(data);
  }
  useEffect(() => {
    fetchCompany()
  }, [])

  const deleteCompany = async(id) => {
    console.log(id);
    const res = await fetch("http://localhost:5000/company/delete/" +id,{
      method:"DELETE",
    }
     
  );
  console.log(res.status);
  if(res.status === 200){
    enqueueSnackbar("Company Deleted Successfully", {variant:"success"})
    fetchCompany();
  }else{
    enqueueSnackbar("Somthing went Wrong", {variant:"warning"})
  }
  }

  const displayCompany = () => {
    return (
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
            >
              Industry
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
            >
             Website
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
            >
            Email
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
            >
             Specialities
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
            >
              Action
            </th>
          </tr>
        </thead>
        {
          companyList.map((use) => {
            return (
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-100">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                    {use.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {use.industry}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {use.website}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {use.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {use.specialities}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                    <button
                      onClick={(e) => deleteCompany(use._id)}
                      type="button"
                      className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-600 hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      Delete
                    </button>
                  </td>
                </tr>

              </tbody>
            )
          })
        }

      </table>
    )
  }


  return (
    <div >
      <div className="flex flex-col my-10 bg-white ">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle ">
            <div className="overflow-hidden">
              {
                displayCompany()
              }
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Managecompany;
