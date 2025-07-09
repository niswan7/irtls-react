import logo from "./logo2.png";
import highway from "./highway.jpg";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

function Home() { 
  // Create refs for scrollable sections
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [randomNumber, setRandomNumber] = useState<number>(0);

  // Smooth scroll function
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Generate random number
  const generateNumber = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      setRandomNumber(generateNumber());
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-lg font-medium">Loading IRTLS System...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Header Section */}
      <header className="bg-slate-800 shadow-md sticky top-0 z-50">
        <div className="w-full h-20 flex items-center justify-between px-4 md:px-10">
          <div className="flex items-center gap-2 md:gap-4">
            <div className="w-12 h-12 md:w-16 md:h-16">
              <img src={logo} alt="Logo" className="w-full h-full object-contain" />
            </div>
            <h1 className="text-white text-xl md:text-3xl font-bold">
              Integrated Road Transport & Licensing System
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:block">
            <ul className="flex gap-4 md:gap-6 items-center">
              <li>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="text-white hover:text-yellow-300 transition duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection(aboutRef)}
                  className="text-white hover:text-yellow-300 transition duration-300"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection(contactRef)}
                  className="text-white hover:text-yellow-300 transition duration-300"
                >
                  Contact
                </button>
              </li>
              <li>
                <Link to="/login" className="text-white bg-yellow-500 px-4 py-2 md:px-5 md:py-2 rounded-lg hover:bg-yellow-600 transition duration-300">
                  Login  
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative w-full h-screen">
        <img src={highway} alt="Highways" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60"></div>

        <section className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Efficient. Transparent. Integrated.</h2>
          <p className="text-base md:text-xl max-w-2xl mb-6">
            Manage your vehicle registrations, licenses, insurance, and violations all in one place.
          </p>

          <Link to="/login" className="mt-6 bg-yellow-500 text-black px-6 py-3 text-lg font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300">
            Access Your Account
          </Link>
        </section>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-gray-700">For Users</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  View vehicle & license details
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  Check & renew insurance & certificates
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  Manage fines & violations
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  View complaints against your vehicle
                </li>
              </ul>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-gray-700">For Authorities</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  Register vehicles & drivers
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  Track & enforce penalties
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  Manage complaints & violations
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  Ensure real-time data accuracy
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        ref={aboutRef} 
        className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About Our System</h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg">
            <p>
              At <span className="font-bold">Integrated Road Transport & Licensing System</span>, we believe that managing your vehicle shouldn't be complicated. Our platform is built to simplify the way you handle vehicle registrations, driving licenses, insurance policies, and traffic violations — all in one secure, user-friendly dashboard.
            </p>
            <p>
              Founded with a mission to digitally streamline transport-related services, we aim to eliminate paperwork, reduce queues, and bring clarity to a system that affects millions of drivers and vehicle owners every day.
            </p>
            <p>
              Whether you're a private vehicle owner, fleet manager, or new driver, our tools are designed to give you real-time updates, reminders, and access to everything you need — when you need it.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        ref={contactRef} 
        className="py-16 bg-gray-100"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Contact Us</h2>
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
<footer className="bg-gray-800 text-white py-8">
  <div className="container mx-auto px-4">
    {/* Top Section - Copyright and Links */}
    <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6">
      <div className="mb-4 md:mb-0">
        <p className="text-sm md:text-base">
          &copy; 2025 Integrated Road Transport and Licensing System | IRTLS
        </p>
      </div>
      <div className="flex space-x-6">
        <a href="#" className="hover:text-yellow-300 transition duration-300 text-sm md:text-base">
          Privacy Policy
        </a>
        <a href="#" className="hover:text-yellow-300 transition duration-300 text-sm md:text-base">
          Terms of Service
        </a>
      </div>
    </div>

    {/* Support Information */}
    <div className="py-6 border-b border-gray-700">
      <h3 className="text-center text-lg font-medium mb-4">Support</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-4">
        <div className="flex flex-col items-center">
          <svg className="w-5 h-5 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <p>+91 1234567890</p>
        </div>
        <div className="flex flex-col items-center">
          <svg className="w-5 h-5 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <p>+91 1234567899</p>
        </div>
        <div className="flex flex-col items-center">
          <svg className="w-5 h-5 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <p>supportirtls@gmail.com</p>
        </div>
      </div>
    </div>

    {/* Government Information */}
    <div className="py-6 border-b border-gray-700">
      <div className="text-center mb-4">
        <p className="font-medium mb-2">Web Information Manager</p>
        <p className="text-sm text-gray-300">
          Designed, Developed and Hosted by: NIC, Government of India © 2023. All Rights Reserved.
        </p>
      </div>
    </div>

    {/* User Count */}
    <div className="py-6 border-b border-gray-700 text-center">
      <p className="text-lg">
        Total Users: <span className="font-bold text-yellow-300">{randomNumber}</span>
      </p>
    </div>

    {/* Browser Support */}
    <div className="pt-6 text-center">
      <p className="text-sm text-gray-400 mb-2">
        For the best viewing experience, please use 1280×768 resolution
      </p>
      <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
        <div className="flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C8.21 0 4.066 2.66 4.066 6.949c0 1.847.898 3.26 2.351 4.299-.235.947-.942 2.68-.942 2.68-.187.641.315.641.439.641.129 0 .621-.235.973-.401 1.191-.489 2.309-1.121 3.129-1.803.453.211.934.32 1.429.32 4.547 0 7.934-3.476 7.934-6.949C19.934 3.476 16.547 0 12 0zm0 9.568c-1.496 0-2.711-1.179-2.711-2.635S10.504 4.298 12 4.298s2.711 1.179 2.711 2.635S13.496 9.568 12 9.568z" />
          </svg>
          Chrome (v120+)
        </div>
        <div className="flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.382 13.5c-.553 0-1-.447-1-1s.447-1 1-1 1 .447 1 1-.447 1-1 1zm-3.5 0c-.553 0-1-.447-1-1s.447-1 1-1 1 .447 1 1-.447 1-1 1zm-3.5 0c-.553 0-1-.447-1-1s.447-1 1-1 1 .447 1 1-.447 1-1 1z" />
          </svg>
          Safari (v17+)
        </div>
        <div className="flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5C6.201 22.5 1.5 17.799 1.5 12S6.201 1.5 12 1.5 22.5 6.201 22.5 12 17.799 22.5 12 22.5zm5.5-10.5c0 .553-.447 1-1 1s-1-.447-1-1 .447-1 1-1 1 .447 1 1zm-3.5 0c0 .553-.447 1-1 1s-1-.447-1-1 .447-1 1-1 1 .447 1 1zm-3.5 0c0 .553-.447 1-1 1s-1-.447-1-1 .447-1 1-1 1 .447 1 1z" />
          </svg>
          Firefox (v120+)
        </div>
        <div className="flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5C6.201 22.5 1.5 17.799 1.5 12S6.201 1.5 12 1.5 22.5 6.201 22.5 12 17.799 22.5 12 22.5zm5.5-10.5c0 .553-.447 1-1 1s-1-.447-1-1 .447-1 1-1 1 .447 1 1zm-3.5 0c0 .553-.447 1-1 1s-1-.447-1-1 .447-1 1-1 1 .447 1 1zm-3.5 0c0 .553-.447 1-1 1s-1-.447-1-1 .447-1 1-1 1 .447 1 1z" />
          </svg>
          Edge (v120+)
        </div>
      </div>
    </div>
  </div>
</footer>
    </>
  );
}

export default Home;