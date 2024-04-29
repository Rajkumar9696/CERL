'use client'
import React from 'react';

function Add_vacancy() {
  // Example company data
  const company = {
    name: "",
    industry: "",
    location: "",
    description: "",
    experienceRequired: "",
    
  };

  // Function to handle the apply button click
  const handleApply = () => {
    // Add your apply logic here
    alert("Your application has been submitted successfully!");
  };

  return (
    <div className="font-sans bg-black text-white min-h-screen mt-20">
    <div className="container mx-auto py-12 px-4">
      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-2">{company.name}</h1>
        <p className="text-lg text-gray-400 mb-2">{company.industry} | {company.location}</p>
        <hr className="my-4 border-t border-gray-600" />
        <p className="text-lg text-gray-300 mb-4">{company.description}</p>
        <p className="text-lg text-gray-300 mb-4">Experience Required: {company.experienceRequired}</p>
        {/* Apply Button */}
        <button onClick={handleApply} className="bg-blue-500 text-white py-3 px-6 rounded-md text-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Apply</button>
      </div>
    </div>
  </div>
  );
}

export default Add_vacancy;

