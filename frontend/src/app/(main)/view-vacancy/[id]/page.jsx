'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const ViewVacancy = () => {

    const { id } = useParams();
    const [vacancyList, setvacancyList] = useState([]);

    const getVacancyData = async () => {
        const res = await fetch("http://localhost:5000/vacancy/getbyid/" + id);
        console.log(res.status);

        const data = await res.json();
        setvacancyList(data);
        console.log(data);
    }

    useEffect(() => {
        getVacancyData();

    },[])


    return (
        <div>
            <div className="container mt-20 ms-7 mr-5">

                {
                    vacancyList !== null ? (
                        <form action="" className='w-full max-w-2xl '>
                            <h1 className='text-lg font-bold'>{vacancyList.title}</h1>
                            <p>{vacancyList.industry}</p>
                            <p>{vacancyList.location}</p>
                            <div className='my-3'>
                                <Link href="/apply"  type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                    Apply </Link>
                            </div>
                            <h1 className='text-lg font-bold'>About the Job</h1>
                            <p className='mt-3'>Company Description</p>
                            <span>{vacancyList.description}</span>
                            <p className='mt-3 font-bold'>Requirement</p>
                            <span>{vacancyList.requirements}</span>
                            <p className='mt-3 font-bold'>Experience</p>
                            <span>{vacancyList.experience}</span>
                            <p className='mt-3 font-bold'>Responsibilities</p>
                            <span>{vacancyList.responsibilities}</span>
                        </form>

                    ) : (
                        <div>
                            <h1>No Vacancy Found</h1>
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default ViewVacancy