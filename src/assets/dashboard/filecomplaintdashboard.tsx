function Filecomplaintdashboard(){
return(
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border-l-4 border-yellow-500">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                        <svg className="w-6 h-6 mr-3 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12A9 9 0 113 12a9 9 0 0118 0z"></path>
                        </svg>
                        Report Violation
                    </h2>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col">
                            <label htmlFor="regNo" className="text-gray-700 font-medium mb-2">Registration Number</label>
                            <input
                                type="text"
                                id="regNo"
                                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-200"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="manufacturer" className="text-gray-700 font-medium mb-2">Location</label>
                            <input
                                type="text"
                                id="manufacturer"
                                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-200"
                                placeholder=""
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
 
);
}





export default  Filecomplaintdashboard;