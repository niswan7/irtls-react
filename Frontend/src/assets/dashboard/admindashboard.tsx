import React from 'react';
import { Search, ClipboardList, PlusCircle, Repeat2 } from 'lucide-react';
import {Link} from "react-router-dom";

function Admindashboard() {
    return (
        <div className="min-h-screen bg-gray-100 font-sans">
            <header className="bg-gradient-to-r from-blue-800 to-indigo-900 shadow-lg sticky top-0 z-50">
                <div className="w-full h-20 flex items-center justify-between px-4 md:px-10">
                    <h1 className="text-white text-xl md:text-3xl font-bold">Welcome Admin</h1>
                    <div>
                        <Link to="/"
                            onClick={() => console.log("Logout clicked from Admin Dashboard")} // Placeholder for logout action
                            className="text-white bg-gradient-to-r from-yellow-500 to-yellow-600 px-4 py-2 md:px-5 md:py-2 rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                            Logout
                        </Link>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-8 p-4 bg-white rounded-lg shadow-sm">Admin Panel</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {/* Search Vehicle Details Card */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-l-4 border-blue-500">
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4">
                            <h3 className="text-xl font-bold text-white flex items-center">
                                <Search className="w-5 h-5 mr-2" /> {/* Lucide icon used as a component */}
                                Search Vehicle Details
                            </h3>
                        </div>
                        <div className="p-6">
                            <p className="text-gray-700 mb-4">
                                Search for detailed information about any vehicle using its registration number.
                            </p>
                            <ul className="space-y-2 text-gray-600 text-sm">
                                <li>Access vehicle specifications.</li>
                                <li>View ownership history.</li>
                                <li>Check registration validity.</li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 px-6 py-4">
                            <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg">
                                Go to Search
                            </button>
                        </div>
                    </div>

                    {/* E-Challan Management Card */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-l-4 border-red-500">
                        <div className="bg-gradient-to-r from-red-600 to-pink-700 p-4">
                            <h3 className="text-xl font-bold text-white flex items-center">
                                <ClipboardList className="w-5 h-5 mr-2" /> {/* Lucide icon used as a component */}
                                E-Challan Management
                            </h3>
                        </div>
                        <div className="p-6">
                            <p className="text-gray-700 mb-4">
                                Manage and track e-challans issued to vehicles.
                            </p>
                            <ul className="space-y-2 text-gray-600 text-sm">
                                <li>View pending and disposed challans.</li>
                                <li>Process challan payments.</li>
                                <li>Generate challan reports.</li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 px-6 py-4">
                            <button className="w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg">
                                Manage Challans
                            </button>
                        </div>
                    </div>

                    {/* Add New Vehicle Card */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-l-4 border-green-500">
                        <div className="bg-gradient-to-r from-green-600 to-teal-700 p-4">
                            <h3 className="text-xl font-bold text-white flex items-center">
                                <PlusCircle className="w-5 h-5 mr-2" /> {/* Lucide icon used as a component */}
                                Add New Vehicle
                            </h3>
                        </div>
                        <div className="p-6">
                            <p className="text-gray-700 mb-4">
                                Register new vehicles into the system.
                            </p>
                            <ul className="space-y-2 text-gray-600 text-sm">
                                <li>Input new vehicle details.</li>
                                <li>Assign registration numbers.</li>
                                <li>Update database records.</li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 px-6 py-4">
                            <button className="w-full bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg">
                                Add Vehicle
                            </button>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-l-4 border-purple-500">
                        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 p-4">
                            <h3 className="text-xl font-bold text-white flex items-center">
                                <Repeat2 className="w-5 h-5 mr-2" />
                                Vehicle Ownership Transfer
                            </h3>
                        </div>
                        <div className="p-6">
                            <p className="text-gray-700 mb-4">
                                Facilitate the transfer of vehicle ownership.
                            </p>
                            <ul className="space-y-2 text-gray-600 text-sm">
                                <li>Initiate transfer requests.</li>
                                <li>Verify ownership documents.</li>
                                <li>Update ownership records.</li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 px-6 py-4">
                            <button className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg">
                                Transfer Ownership
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Admindashboard;
