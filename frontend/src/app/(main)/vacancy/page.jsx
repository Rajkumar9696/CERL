'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'


const Vacancy = () => {

    const [vacancyList, setvacancyList] = useState([]);
    const [masterList, setMasterList] = useState([]);

    const allVacancy = async () => {
        const res = await fetch("http://localhost:5000/vacancy/getall")
        console.log(res.status);
        const data = await res.json();
        console.log(data);
        setvacancyList(data);
        setMasterList(data);
    }

    useEffect(() => {
        allVacancy();
    }, [])

    const applySearch = (e) => {
        const inputText = e.target.value;

        setvacancyList(masterList.filter((vacancy) => {
            return vacancy.title.toLowerCase().includes(inputText.toLowerCase()),
                vacancy.location.toLowerCase().includes(inputText.toLowerCase());
        }));
    }

    return (
        <div>
            <div className="container">
                <div className='flex'>
                    <label className="ms-20 mt-20 input input-bordered flex items-center gap-2 w-full max-w-sm" for="ctitle">
                        <input onChange={applySearch} type="text" className="grow " placeholder="Search Title" id='ctitle' name='ctitle' />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" /></svg>
                    </label>
                    <label className="ms-10 mt-20 input input-bordered flex items-center gap-2 w-full max-w-sm" for='location'>
                        <input onChange={applySearch} type="text" className="grow " placeholder="Search Location" id='location' name='location' />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" /></svg>
                    </label>
                </div>
                <div className=" mt-10 ms-20  w-full max-w-7xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                            Jobs
                        </h5>
                       
                    </div>
                    {
                        vacancyList.map((vac) => {
                            return (
                                <div className="flow-root">
                                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                                        <li className="py-3 sm:py-4">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0">
                                                    <img
                                                        className="w-8 h-8 rounded-full"
                                                        src=""
                                                        alt="Neil image"
                                                    />
                                                </div>
                                                <div className="flex-1 min-w-0 ms-4">
                                                    <Link href={"/view-vacancy/" + vac._id} className="text-lg font-medium text-gray-900 hover:text-blue-500 truncate ">
                                                        {vac.title}
                                                    </Link>
                                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                        {vac.industry}
                                                    </p>
                                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                        {vac.location}
                                                    </p>
                                                </div>

                                            </div>
                                        </li>
                                        <hr />

                                    </ul>
                                </div>
                            )
                        })
                    }

                </div>

            </div>
        </div>
    )
}

export default Vacancy
