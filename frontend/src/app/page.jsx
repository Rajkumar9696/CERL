import React from 'react'
import Navbar from './(main)/navbar'


const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>
        <div className="font-sans bg-gray-900 text-white">
          {/* Hero Section */}
          <section className="hero py-20 bg-gradient-to-r from-gray-800 to-gray-900">
            <div className="container mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-4">Corporate Employees Recruitment Leagues</h1>
              <p className="text-lg lg:text-xl mb-8">Connect with top companies, showcase your skills, and advance your career.</p>
              <a href="\signup" className="bg-blue-500 text-white py-3 px-8 rounded-full inline-block text-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Get Started</a>
            </div>
          </section>

          {/* About Section */}
          <section className="about py-16 bg-gray-800">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl lg:text-4xl font-semibold mb-8 text-center text-white">About Us</h2>
              <p className="text-lg text-center leading-relaxed mb-12 text-gray-300">We are dedicated to connecting talented individuals with top corporations through our innovative recruitment leagues. Join us and unlock your potential!</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="md:col-span-1">
                  <h3 className="text-2xl font-semibold mb-4 text-white">Our Mission</h3>
                  <p className="text-lg leading-relaxed text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget urna auctor, tempor nisi vel, rhoncus velit.</p>
                </div>
                <div className="md:col-span-1">
                  <h3 className="text-2xl font-semibold mb-4 text-white">Why Choose Us</h3>
                  <p className="text-lg leading-relaxed text-gray-300">Connect with leading corporations and startups. Showcase your skills and advance your career.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="services py-16 bg-gray-900">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl lg:text-4xl font-semibold mb-8 text-center text-white">Our Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="service bg-gray-800 p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-white">Talent Sourcing</h3>
                  <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget urna auctor, tempor nisi vel, rhoncus velit.</p>
                </div>
                <div className="service bg-gray-800 p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-white">Skill Assessments</h3>
                  <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget urna auctor, tempor nisi vel, rhoncus velit.</p>
                </div>
                <div className="service bg-gray-800 p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-white">Career Development</h3>
                  <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget urna auctor, tempor nisi vel, rhoncus velit.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Call-to-Action Section */}
          <section className="cta py-16 bg-gray-800 ">
            <div className="container mx-auto text-center ">
              <h2 className="text-3xl lg:text-4xl font-semibold mb-4 text-white">Ready to Get Started?</h2>
              <p className="text-lg mb-8 text-white">Join our recruitment leagues and take the next step in your career.</p>
              <a href="/signup" className="bg-white text-blue-500 py-3 px-8 rounded-full inline-block text-lg hover:bg-blue-100 hover:text-blue-800 focus:outline-none focus:bg-blue-100">Sign Up Now</a>
            </div>
          </section>
        </div>
      </h1>
    </div>
  )
}

export default Home
