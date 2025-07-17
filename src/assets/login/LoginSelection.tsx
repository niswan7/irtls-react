import { Link } from "react-router-dom";

function LoginSelection() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-indigo-700">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-6">Welcome to Integrated Road Transport & Licensing System</h2>
        
        <div className="space-y-6">
          <Link 
            to="/userlogin"
            className="block w-full bg-gradient-to-r from-blue-800 to-indigo-900 shadow-lg sticky top-0 z-50 text-white py-3 px-4 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition duration-300"
          >

            Login as User
          </Link>
          
          <Link 
            to="/adminlogin"
            className="block w-full bg-green-600 to text-white py-3 px-4 rounded-lg font-semibold shadow-md hover:bg-green-700 transition duration-300"
          >
            Login as Admin
          </Link>
          
          <Link 
            to="/"
            className="inline-block text-blue-600 hover:underline mt-4"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginSelection;