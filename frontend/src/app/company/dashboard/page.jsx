'use client';
import React, { useEffect, useState } from 'react'

const Dashboard = () => {

  const [interview, setInterview] = useState([]);

  const fetchinterview = async() => {
    const res = await fetch("http://localhost:5000/interview/getall")
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    setInterview(data);
  }

  useEffect(() => {
    fetchinterview()
  },[])

  return (
    <div className=''>

           <div className="container">
            <div className="grid grid-cols-4 gap-4">
      {
        interview.map((int) => {
          return(
              <div className='col-span-2'>
                <h1>{int.companyName}</h1>
                <h1>{int.fname}</h1>
                <h1>{int.lname}</h1>
                <h1>{int.date}</h1>
                <h1>{int.timing}</h1>
                <a  href={int.link}>{int.link}</a>
              </div>
          )
        })
      }
      </div>
     </div>
     
    </div>

  )
}

export default Dashboard
