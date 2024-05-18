'use client';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { enqueueSnackbar } from 'notistack';
import React from 'react';

const company_signup = () => {
  const router = useRouter();

  // Define validation schema using Yup
  const companySchema = Yup.object({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .required('Name is required'),
    industry: Yup.string()
      .required('Industry is required'),
    website: Yup.string()
      .url('Invalid website URL')
      .required('Website is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const companyForm = useFormik({
    initialValues: {
      name: '',
      industry: '',
      website: '',
      email: '',
      password: '',
    },
  
    onSubmit: (values) => {
      console.log(values);

      // Sending request to backend
      fetch('http://localhost:5000/company/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          console.log(response.status);
          if (response.status === 200) {
            enqueueSnackbar('Company added successfully', { variant: 'success' });
            router.push('/company-login');
          } else {
            enqueueSnackbar('Something went wrong', { variant: 'error' });
          }
        })
        .catch((err) => {
          enqueueSnackbar('Something went wrong', { variant: 'error' });
        });
    },
    validationSchema: companySchema
  });

  return (
    <div
      className=""
      style={{
        backgroundImage:
          "url('https://www.sss-solutions.org/wp-content/uploads/2018/01/1116146294-login-page-background-image-112.jpg')",
        backgroundSize: 'cover',
      }}
    >
      <div style={{ marginTop: '68px', marginBottom: '0px' }}>
        <section className="">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8 bg-gradient-to-r from-sky-500 to-indigo-500">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Company-SignUp
                </h1>
                <form
                  className="space-y-4 md:space-y-6"
                  action="#"
                  onSubmit={companyForm.handleSubmit}
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
                      value={companyForm.values.name}
                      onChange={companyForm.handleChange}
                      onBlur={companyForm.handleBlur}
                      className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                    {companyForm.touched.name && companyForm.errors.name ? (
                      <div className="text-red-500 text-sm">{companyForm.errors.name}</div>
                    ) : null}
                  </div>
                  <div>
                    <label
                      htmlFor="industry"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Industry
                    </label>
                    <input
                      type="text"
                      name="industry"
                      id="industry"
                      value={companyForm.values.industry}
                      onChange={companyForm.handleChange}
                      onBlur={companyForm.handleBlur}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                    {companyForm.touched.industry && companyForm.errors.industry ? (
                      <div className="text-red-500 text-sm">{companyForm.errors.industry}</div>
                    ) : null}
                  </div>
                  <div>
                    <label
                      htmlFor="website"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Website
                    </label>
                    <input
                      type="text"
                      name="website"
                      id="website"
                      value={companyForm.values.website}
                      onChange={companyForm.handleChange}
                      onBlur={companyForm.handleBlur}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                    {companyForm.touched.website && companyForm.errors.website ? (
                      <div className="text-red-500 text-sm">{companyForm.errors.website}</div>
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
                      value={companyForm.values.email}
                      onChange={companyForm.handleChange}
                      onBlur={companyForm.handleBlur}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                    {companyForm.touched.email && companyForm.errors.email ? (
                      <div className="text-red-500 text-sm">{companyForm.errors.email}</div>
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
                      value={companyForm.values.password}
                      onChange={companyForm.handleChange}
                      onBlur={companyForm.handleBlur}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                    {companyForm.touched.password && companyForm.errors.password ? (
                      <div className="text-red-500 text-sm">{companyForm.errors.password}</div>
                    ) : null}
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-1.5 me-2 mb-1 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                      Sign Up
                    </button>
                    <Link
                      href="/company-login"
                      className="w-full focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-1 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                      Login
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default company_signup;


