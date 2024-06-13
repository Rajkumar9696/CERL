'use client';
import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import React, { useState } from 'react'
import ReactStars from "react-rating-stars-component"

const About = () => {
  return (
    <div className=''>
      <section className="bg-gray-100 mt-10"   >
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                About Us
              </h2>
              <p className="mt-4 text-gray-600 text-lg">
                Corporate Employee Recruitment Leagues is an innovative project designed to streamline and enhance the recruitment process for corporate organizations. It leverages gamification to create competitive leagues among potential candidates, evaluating their skills through various challenges and assessments. This approach not only identifies top talent efficiently but also engages candidates in a dynamic and enjoyable manner. By incorporating real-time analytics and performance metrics, it ensures a data-driven selection process. The platform fosters a fair and transparent recruitment environment, benefiting both employers and job seekers. Ultimately, it aims to revolutionize traditional hiring methods, making them more effective and engaging.
              </p>
              <div className="mt-8">
                <a href="#" className="text-blue-500 hover:text-blue-600 font-medium">
                  Learn more about us
                  <span className="ml-2">→</span>
                </a>
              </div>
            </div>
            <div className="mt-12 md:mt-0">
              <img
                src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                alt="About Us Image"
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

     
    </div>


  )
}

export default About;