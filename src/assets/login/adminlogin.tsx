import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (username === "admin" && password === "12345") {
      navigate("/admindashboard");
    } else {
      setError("Invalid admin credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-indigo-700">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Admin Login</h2>
        
        <Link 
          to="/login" 
          className="inline-block text-blue-600 hover:underline mb-6"
        >
          ← Back to Login Selection
        </Link>

        {error && (
          <p className="text-red-500 bg-red-100 p-2 rounded-lg mb-4">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Admin Username</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border rounded-lg"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              required
              className="w-full px-4 py-2 border rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
          >
            Login as Admin
          </button>
        </form>

        <div className="mt-4 text-center">
          <Link to="/forgot-password" className="text-blue-600 hover:underline text-sm">
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;