'use client';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import { enqueueSnackbar } from 'notistack';
import React from 'react';

const Signup = () => {

  const router = useRouter();

  const signupSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()

      .required('Password is required')
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must contain 8 character, one upper case, one lower case, one number and special character"
      ),
    cpassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')

  });

  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      cpassword: '',
    },
   
    onSubmit: (values) => {
      console.log(values);

      // Sending request to backend
      fetch('http://localhost:5000/user/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          console.log(response.status);
          if (response.status === 200) {
            enqueueSnackbar('User added successfully', { variant: 'success' });
            router.push('/login');
          } else {
            enqueueSnackbar('Something went wrong', { variant: 'error' });
          }
        })
        .catch((err) => {
          enqueueSnackbar('Something went wrong', { variant: 'error' });
        });
    },
    validationSchema : signupSchema
  });

  return (
    <div
      className=""
      style={{
        backgroundImage:
          "url('https://www.sss-solutions.org/wp-content/uploads/2018/01/1116146294-login-page-background-image-112.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <section className="">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="shadow-lg p-6 space-y-4 md:space-y-6 sm:p-8 bg-gradient-to-r from-sky-500 to-indigo-500">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                User-SignUp
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                action="#"
                onSubmit={signupForm.handleSubmit}
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={signupForm.values.name}
                    onChange={signupForm.handleChange}
                    onBlur={signupForm.handleBlur}
                    className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                  {signupForm.touched.name && signupForm.errors.name ? (
                    <div className="text-red-500 text-sm">{signupForm.errors.name}</div>
                  ) : null}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={signupForm.values.email}
                    onChange={signupForm.handleChange}
                    onBlur={signupForm.handleBlur}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                  {signupForm.touched.email && signupForm.errors.email ? (
                    <div className="text-red-500 text-sm">{signupForm.errors.email}</div>
                  ) : null}
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={signupForm.values.password}
                    onChange={signupForm.handleChange}
                    onBlur={signupForm.handleBlur}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                  {signupForm.touched.password && signupForm.errors.password ? (
                    <div className="text-red-500 text-sm">{signupForm.errors.password}</div>
                  ) : null}
                </div>
                <div>
                  <label
                    htmlFor="cpassword"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="cpassword"
                    id="cpassword"
                    value={signupForm.values.cpassword}
                    onChange={signupForm.handleChange}
                    onBlur={signupForm.handleBlur}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                  {signupForm.touched.cpassword && signupForm.errors.cpassword ? (
                    <div className="text-red-500 text-sm">{signupForm.errors.cpassword}</div>
                  ) : null}
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
