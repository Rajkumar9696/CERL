"use client";
import React from 'react'

const Contact = () => {
  return (


<div className=" bg-white text-black font-sans bg-gray-900  mt-20">
      <div className="container mx-auto py-12 px-4 bg-light  ">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-lg">123 Main Street</p>
            <p className="text-lg">City, State 12345</p>
            <p className="text-lg">Phone: (123) 456-7890</p>
            <p className="text-lg">Email: info@example.com</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-lg mb-2">Your Name</label>
                <input type="text" id="name" name="name" className="w-full border border-gray-600 rounded-md py-2 px-3 text-lg focus:outline-none focus:border-blue-500 bg-gray-800 text-black bg-white" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-lg mb-2">Your Email</label>
                <input type="email" id="email" name="email" className="w-full border border-gray-600 rounded-md py-2 px-3 text-lg focus:outline-none focus:border-blue-500 bg-gray-800 text-black bg-white" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-lg mb-2">Message</label>
                <textarea id="message" name="message" rows="4" className="w-full border border-gray-600 rounded-md py-2 px-3 text-lg focus:outline-none focus:border-blue-500 bg-gray-800 text-blakc bg-white"></textarea>
              </div>
              <button type="submit" className="bg-blue-500 text-white py-3 px-6 rounded-md text-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact