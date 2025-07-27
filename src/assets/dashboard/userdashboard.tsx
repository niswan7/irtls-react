import React, { useState } from "react";
import { Link } from "react-router-dom";

function Userdashboard() {
    const [showCarDetails, setShowCarDetails] = useState(true);

    const toggleCarDetails = () => {
        setShowCarDetails(!showCarDetails);
    };

    return (
        <>
        <div className="min-h-screen bg-gray-100 font-sans">
            <header className="bg-gradient-to-r from-blue-800 to-indigo-900 shadow-lg sticky top-0 z-50">
                <div className="w-full h-20 flex items-center justify-between px-4 md:px-10">
                    <h1 className="text-white text-xl md:text-3xl font-bold">Welcome User</h1>
                    <div>
                        <Link to="/"
                            onClick={() => console.log("Logout clicked")} 
                            className="text-white bg-gradient-to-r from-yellow-500 to-yellow-600 px-4 py-2 md:px-5 md:py-2 rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                            Logout
                        </Link >
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                <div className="mb-8 p-4 bg-white rounded-lg shadow-sm cursor-pointer border-l-4 border-green-500" onClick={toggleCarDetails}>
                    <h1 className="text-3xl font-bold text-gray-800">
                        VEHICLE : KL 11 CA 7277
                        <span className="ml-3 text-blue-500 text-sm">
                            {showCarDetails ? "(Click to Hide)" : "(Click to Show)"}
                        </span>
                    </h1>
                </div>

                {showCarDetails && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-l-4 border-blue-500">
                            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4">
                                <h3 className="text-xl font-bold text-white flex items-center">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                    </svg>
                                    Vehicle Details
                                </h3>
                            </div>
                            <div className="p-6">
                                <ul className="space-y-3">
                                    <li className="flex items-center">
                                        <span className="bg-blue-100 text-blue-800 p-1 rounded-full mr-3">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        <span className="text-gray-700">Manufacturer: <span className="font-semibold">BMW</span></span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="bg-blue-100 text-blue-800 p-1 rounded-full mr-3">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        <span className="text-gray-700">Variant: <span className="font-semibold">M5 CS</span></span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="bg-blue-100 text-blue-800 p-1 rounded-full mr-3">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        <span className="text-gray-700">Color: <span className="font-semibold">Racing Green</span></span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="bg-blue-100 text-blue-800 p-1 rounded-full mr-3">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        <span className="text-gray-700">Fuel Type: <span className="font-semibold">Petrol</span></span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="bg-blue-100 text-blue-800 p-1 rounded-full mr-3">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        <span className="text-gray-700">Horse Power: <span className="font-semibold">900 HP</span></span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="bg-blue-100 text-blue-800 p-1 rounded-full mr-3">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        <span className="text-gray-700">Seat Capacity: <span className="font-semibold">5</span></span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="bg-blue-100 text-blue-800 p-1 rounded-full mr-3">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        <span className="text-gray-700">Year of Manufacture: <span className="font-semibold">2023</span></span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-gray-50 px-6 py-4">
                                <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg">
                                    View RC Copy
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-l-4 border-green-500">
                            <div className="bg-gradient-to-r from-green-600 to-teal-700 p-4">
                                <h3 className="text-xl font-bold text-white flex items-center">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                    RC Status
                                </h3>
                            </div>
                            <div className="p-6">
                                <ul className="space-y-3">
                                    <li className="flex items-center">
                                        <span className="bg-green-100 text-green-800 p-1 rounded-full mr-3">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        <span className="text-gray-700">Registration No: <span className="font-semibold">KL 11 CA 7</span></span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="bg-green-100 text-green-800 p-1 rounded-full mr-3">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        <span className="text-gray-700">Vehicle Type: <span className="font-semibold">Saloon</span></span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="bg-green-100 text-green-800 p-1 rounded-full mr-3">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        <span className="text-gray-700">Valid Until: <span className="font-semibold">24 January 2038</span></span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="bg-green-100 text-green-800 p-1 rounded-full mr-3">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        <span className="text-gray-700">Status: <span className="font-semibold text-green-600">Active</span></span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-gray-50 px-6 py-4">
                                <button className="w-full bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg">
                                    View RC Copy
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-l-4 border-purple-500">
                            <div className="bg-gradient-to-r from-purple-600 to-indigo-700 p-4">
                                <h3 className="text-xl font-bold text-white flex items-center">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                    Insurance Status
                                </h3>
                            </div>
                            <div className="p-6">
                                <ul className="space-y-3">
                                    <li className="flex items-center">
                                        <span className="bg-purple-100 text-purple-800 p-1 rounded-full mr-3">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        <span className="text-gray-700">Valid Until: <span className="font-semibold">25 January 2028</span></span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="bg-purple-100 text-purple-800 p-1 rounded-full mr-3">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        <span className="text-gray-700">Status: <span className="font-semibold text-green-600">Active</span></span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="bg-purple-100 text-purple-800 p-1 rounded-full mr-3">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        <span className="text-gray-700">Insurance Company: <span className="font-semibold">New India</span></span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="bg-purple-100 text-purple-800 p-1 rounded-full mr-3">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        <span className="text-gray-700">Policy No: <span className="font-semibold">K12E23F32VBB</span></span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-gray-50 px-6 py-4">
                                <button className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg">
                                    Renew Insurance
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-l-4 border-orange-500">
                            <div className="bg-gradient-to-r from-orange-600 to-amber-700 p-4">
                                <h3 className="text-xl font-bold text-white flex items-center">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                    Pollution Status
                                </h3>
                            </div>
                            <div className="p-6">
                                <ul className="space-y-3">
                                    <li className="flex items-center">
                                        <span className="bg-orange-100 text-orange-800 p-1 rounded-full mr-3">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        <span className="text-gray-700">Valid Until: <span className="font-semibold">25 January 2026</span></span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="bg-orange-100 text-orange-800 p-1 rounded-full mr-3">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        <span className="text-gray-700">Status: <span className="font-semibold text-green-600">Valid</span></span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="bg-orange-100 text-orange-800 p-1 rounded-full mr-3">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        <span className="text-gray-700">Certificate No: <span className="font-semibold">TT1WE23F32VBB</span></span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="bg-orange-100 text-orange-800 p-1 rounded-full mr-3">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        <span className="text-gray-700">Last Tested: <span className="font-semibold">15 January 2024</span></span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-gray-50 px-6 py-4">
                                <button className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg">
                                    Book Pollution Test
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-l-4 border-red-500">
                            <div className="bg-gradient-to-r from-red-600 to-pink-700 p-4">
                                <h3 className="text-xl font-bold text-white flex items-center">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                    E-Challan Status
                                </h3>
                            </div>
                            <div className="p-6">
                                <ul className="space-y-3">
                                    <li className="flex items-center">
                                        <span className="bg-red-100 text-red-800 p-1 rounded-full mr-3">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        <span className="text-gray-700">Disposed Challans: <span className="font-semibold">2</span></span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="bg-red-100 text-red-800 p-1 rounded-full mr-3">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        <span className="text-gray-700">Pending Challans: <span className="font-semibold text-red-600">1</span></span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="bg-red-100 text-red-800 p-1 rounded-full mr-3">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        <span className="text-gray-700">Total Amount Due: <span className="font-semibold">₹1,500</span></span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="bg-red-100 text-red-800 p-1 rounded-full mr-3">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        <span className="text-gray-700">Last Challan Date: <span className="font-semibold">10 January 2024</span></span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-gray-50 px-6 py-4">
                                <button className="w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg">
                                    Pay Challan
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-l-4 border-cyan-500">
                            <div className="bg-gradient-to-r from-cyan-600 to-blue-700 p-4">
                                <h3 className="text-xl font-bold text-white flex items-center">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                    Vehicle Fitness
                                </h3>
                            </div>
                            <div className="p-6">
                                <ul className="space-y-3">
                                    <li className="flex items-center">
                                        <span className="bg-cyan-100 text-cyan-800 p-1 rounded-full mr-3">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        <span className="text-gray-700">Fitness Valid Until: <span className="font-semibold">15 March 2025</span></span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="bg-cyan-100 text-cyan-800 p-1 rounded-full mr-3">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        <span className="text-gray-700">Status: <span className="font-semibold text-green-600">Valid</span></span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="bg-cyan-100 text-cyan-800 p-1 rounded-full mr-3">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        <span className="text-gray-700">Last Inspection: <span className="font-semibold">20 February 2023</span></span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="bg-cyan-100 text-cyan-800 p-1 rounded-full mr-3">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        <span className="text-gray-700">Next Due Date: <span className="font-semibold">1 March 2025</span></span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-gray-50 px-6 py-4">
                                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg">
                                    Schedule Inspection
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border-l-4 border-yellow-500">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                        <svg className="w-6 h-6 mr-3 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12A9 9 0 113 12a9 9 0 0118 0z"></path>
                        </svg>
                        Add New Vehicle
                    </h2>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col">
                            <label htmlFor="regNo" className="text-gray-700 font-medium mb-2">Registration Number</label>
                            <input
                                type="text"
                                id="regNo"
                                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-200"
                                placeholder="e.g., KL 11 CA 7277"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="manufacturer" className="text-gray-700 font-medium mb-2">Manufacturer</label>
                            <input
                                type="text"
                                id="manufacturer"
                                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-200"
                                placeholder="e.g., BMW"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="variant" className="text-gray-700 font-medium mb-2">Variant</label>
                            <input
                                type="text"
                                id="variant"
                                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-200"
                                placeholder="e.g., M5 CS"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="color" className="text-gray-700 font-medium mb-2">Color</label>
                            <input
                                type="text"
                                id="color"
                                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-200"
                                placeholder="e.g., Racing Green"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="fuelType" className="text-gray-700 font-medium mb-2">Fuel Type</label>
                            <input
                                type="text"
                                id="fuelType"
                                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-200"
                                placeholder="e.g., Petrol"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="seatCapacity" className="text-gray-700 font-medium mb-2">Seat Capacity</label>
                            <input
                                type="number"
                                id="seatCapacity"
                                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-200"
                                placeholder="e.g., 5"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="yearOfManufacture" className="text-gray-700 font-medium mb-2">Year of Manufacture</label>
                            <input
                                type="number"
                                id="yearOfManufacture"
                                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-200"
                                placeholder="e.g., 2023"
                            />
                        </div>
                        <div className="md:col-span-2 flex justify-end">
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg"
                            >
                                Add Vehicle
                            </button>
                        </div>
                    </form>
                </div>
                <div className="mb-8 p-4 bg-white rounded-lg shadow-sm cursor-pointer flex justify-between border-l-4 border-red-600 " >
                   <div >
                    <h2 className="text-3xl font-bold text-gray-800">Register A Complaint/Violation </h2>
                    </div>
                    <div className="">
                            <button className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg">
                                <Link to="/filecomplaintdashboard">
                                        Click Here
                                </Link>
                            </button>
                        </div>
                </div>
            </main>
        </div>
    </>
    );
}

export default Userdashboard;
