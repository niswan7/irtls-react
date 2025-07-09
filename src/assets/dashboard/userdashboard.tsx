import { Link } from "react-router-dom";

function Userdashboard(){
    
    return(
        
    
    <><header className="bg-slate-800 shadow-md sticky top-0 z-50">
            <div className="w-full h-20 flex items-center justify-between px-4 md:px-10">
                <h1 className="text-white text-xl md:text-3xl font-bold">Welcome User</h1>
                <div>
                    <Link to="/" className="text-white bg-yellow-500 px-4 py-2 md:px-5 md:py-2 rounded-lg hover:bg-yellow-600 transition duration-300">
                        Logout
                    </Link>
                </div>
            </div>

        </header>
        <div >
            <div className="block text-gray-700 mb-1 border rounded-lg"><h2 className="text-black">My Vehicle</h2> 
                    <div className="text-gray-800 border-solid px-2">
                        Vehicle type
                    </div>
                    <div className="text-gray-800">
                        RC Status
                    </div>
                    <div className="text-gray-800">
                        Insurance Status
                    </div>
                    <div className="text-gray-800">
                        Pollution Status 
                    </div>
                </div>
        </div>
        </>


);
}
export default Userdashboard;