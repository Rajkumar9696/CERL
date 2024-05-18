
'use client';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { enqueueSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react';
import ReactStars from "react-rating-stars-component";
import { useRouter } from 'next/navigation';


const Feedback = () => {

  const [rating, setRating] = useState(0);
  const [feedbacklist, setFeedbackList] = useState([]);

  const fetchfeedback = async() => {
    const res = await fetch("http://localhost:5000/feedback/getall")
    console.log(res.status);
    const data = await res.json()
    console.log(data);
    setFeedbackList(data);

  }
  useEffect(() => {
  fetchfeedback()
  },[])

  const feedbackForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      feedback: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      feedback: Yup.string().required('Feedback is required'),
    }),
    onSubmit: (values) => {
      const feedbackData = { ...values, rating };
      fetch('http://localhost:5000/feedback/add', {
        method: 'POST',
        body: JSON.stringify(feedbackData),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          if (response.status === 200) {
            enqueueSnackbar('Feedback added successfully', { variant: 'success' });

          } else {
            enqueueSnackbar('Something went wrong', { variant: 'error' });
          }
        })
        .catch(() => {
          enqueueSnackbar('Something went wrong', { variant: 'error' });
        });
    }
  });

  return (
    <div>
      <section className="h-dvh mt-10 bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Feedback
          </h2>
          <form className="space-y-8" onSubmit={feedbackForm.handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                {...feedbackForm.getFieldProps('email')}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                required
              />
              {feedbackForm.touched.email && feedbackForm.errors.email ? (
                <div className="text-red-600">{feedbackForm.errors.email}</div>
              ) : null}
            </div>
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                {...feedbackForm.getFieldProps('name')}
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                required
              />
              {feedbackForm.touched.name && feedbackForm.errors.name ? (
                <div className="text-red-600">{feedbackForm.errors.name}</div>
              ) : null}
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="feedback"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Feedback
              </label>
              <textarea
                id="feedback"
                {...feedbackForm.getFieldProps('feedback')}
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required
              />
              {feedbackForm.touched.feedback && feedbackForm.errors.feedback ? (
                <div className="text-red-600">{feedbackForm.errors.feedback}</div>
              ) : null}
            </div>
            <ReactStars
              value={rating}
              onChange={newRating => setRating(newRating)}
              size={30}
              activeColor="#ffd700"
            />
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Send
            </button>
          </form>
        </div>
      </section>

      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-md px-4 md:px-8">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">
            Customer Reviews
          </h2>

         {
          feedbacklist.map((feed) => {
            return(

          <div className="divide-y">
          
            <div className="flex flex-col gap-3 py-4 md:py-8">
              <div>
                <span className="block text-sm font-bold">{feed.name}</span>
                <span className="block text-sm text-gray-500">{feed.email}</span>
                <ReactStars 
                count={feed.rating}
                size={30}
                color={"#ffd700"}
                />
              </div>
              {/* stars - start */}
              
              {/* stars - end */}
              <p className="text-gray-600">
               {feed.feedback}
              </p>
            </div>
           

          </div>
            )
          })
         }
        </div>
      </div>

    </div>
  );
};

export default Feedback;
