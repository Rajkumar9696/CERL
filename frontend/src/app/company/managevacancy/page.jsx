'use client';
import React, { useEffect, useState } from 'react'
import { RiDeleteBinLine } from "react-icons/ri";
import { MdModeEditOutline } from "react-icons/md";
import { enqueueSnackbar } from 'notistack';

const Managevacancy = () => {

    const [vacancyList, setVacancyList] = useState([]);

    const fetchVacancy = async () => {
        const res = await fetch("http://localhost:5000/vacancy/getall")
        console.log(res.status);
        const data = await res.json();
        console.log(data);
        setVacancyList(data);
    }
    useEffect(() => {
        fetchVacancy()
    }, [])

    const deletevacancy = async (id) => {
        console.log(id);
        const res = await fetch("http://localhost:5000/vacancy/delete/" + id, {
            method: "DELETE",
        })
        console.log(res.status);
        if (res.status === 200) {
            enqueueSnackbar("vacancy deleted successfully", { variant: "success" })
            fetchVacancy()
        } else {
            enqueueSnackbar("somthing went worng", { variant: "error" })
        }
    }

    const displayVacancy = () => {
        return (
            <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700 scroll-ml-6">
                <thead>
                    <tr>
                        <th
                            scope="col"
                            className=" px-6 py-3 text-start text-xs font-large text-gray-500 uppercase dark:text-neutral-500"
                        >
                            Job Title
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-start text-xs font-large text-gray-500 uppercase dark:text-neutral-500"
                        >
                            Industry
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-start text-xs font-large text-gray-500 uppercase dark:text-neutral-500"
                        >
                            Location
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-start text-xs font-large text-gray-500 uppercase dark:text-neutral-500"
                        >
                            Experience
                        </th>
                        {/* <th
                            scope="col"
                            className="px-6 py-3 text-start text-xs font-large text-gray-500 uppercase dark:text-neutral-500"
                        >
                            Employement Type
                        </th> */}
                        <th
                            scope="col"
                            className="px-6 py-3 text-end text-xs font-large text-gray-500 uppercase dark:text-neutral-500"
                        >
                            Action
                        </th>
                    </tr>
                </thead>
                {
                    vacancyList.map((vacancy) => {
                        return (
                            <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                                        {vacancy.title}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                        {vacancy.industry}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                        {vacancy.location}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                        {vacancy.experience}
                                    </td>
                                    {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                        {vacancy.employmentType}
                                    </td> */}
                                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                        {/* <button
                                            type="button"
                                            className="me-3  inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400"
                                        >
                                            <MdModeEditOutline className='size-5' />
                                        </button> */}
                                        <button
                                            onClick={e => deletevacancy(vacancy._id)}
                                            type="button"
                                            className=" fs-5 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-600 hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none dark:text-red-500 dark:hover:text-red-400"
                                        >
                                            <RiDeleteBinLine className='size-5' />
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
        <div>
            <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle ">
                        <div className="">
                            {
                                displayVacancy()
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Managevacancy
