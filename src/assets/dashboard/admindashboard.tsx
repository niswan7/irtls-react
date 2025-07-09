import {Link} from 'react-router-dom';

function Admindashboard(){


    return(
        <header className="bg-slate-800 shadow-md sticky top-0 z-50">
            <div className="w-full h-20 flex items-center justify-between px-4 md:px-10">
                <h1 className="text-white text-xl md:text-3xl font-bold">Welcome Admin</h1>
                <div>
                    <Link to="/" className="text-white bg-yellow-500 px-4 py-2 md:px-5 md:py-2 rounded-lg hover:bg-yellow-600 transition duration-300" >
                         Logout
                     </Link>
                </div>
            </div>
        </header>
        

            );
}
export default Admindashboard;