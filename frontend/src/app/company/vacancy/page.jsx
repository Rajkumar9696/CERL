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
            return vacancy.title.toLowerCase().includes(inputText.toLowerCase());
        }));
    }

    return (
        <div>
            <div className="container">
                <div className='flex'>
                    <label className="ms-20 mt-20 input input-bordered flex items-center gap-2 w-full max-w-sm" for="title">
                        <input onChange={applySearch} type="text" className="grow " placeholder="Search Title" id='title' name='title' />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" /></svg>
                    </label>
                    <label className="ms-10 mt-20 input input-bordered flex items-center gap-2 w-full max-w-sm" for='location'>
                        <input type="text" className="grow " placeholder="Search Location" id='location' name='location' />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" /></svg>
                    </label>
                </div>
                <div className=" mt-10 ms-20  w-full max-w-7xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                            Jobs
                        </h5>
                        {/* <a
                        href="#"
                        className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                        View all
                    </a> */}
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
                                                    <Link href={"/company/view-vacancy/" +vac._id} className="text-lg font-medium text-gray-900 hover:text-blue-500 truncate ">
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
                                        {/* <li className="py-3 sm:py-4">
                                    <div className="flex items-center ">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="w-8 h-8 rounded-full"
                                                src="/docs/images/people/profile-picture-3.jpg"
                                                alt="Bonnie image"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0 ms-4">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                Bonnie Green
                                            </p>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                email@windster.com
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            $3467
                                        </div>
                                    </div>
                                </li>
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="w-8 h-8 rounded-full"
                                                src="/docs/images/people/profile-picture-2.jpg"
                                                alt="Michael image"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0 ms-4">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                Michael Gough
                                            </p>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                email@windster.com
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            $67
                                        </div>
                                    </div>
                                </li>
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center ">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="w-8 h-8 rounded-full"
                                                src="/docs/images/people/profile-picture-4.jpg"
                                                alt="Lana image"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0 ms-4">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                Lana Byrd
                                            </p>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                email@windster.com
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            $367
                                        </div>
                                    </div>
                                </li>
                                <li className="pt-3 pb-0 sm:pt-4">
                                    <div className="flex items-center ">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="w-8 h-8 rounded-full"
                                                src="/docs/images/people/profile-picture-5.jpg"
                                                alt="Thomas image"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0 ms-4">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                Thomes Lean
                                            </p>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                email@windster.com
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            $2367
                                        </div>
                                    </div>
                                </li> */}
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
