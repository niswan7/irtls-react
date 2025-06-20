import { Routes, Route } from "react-router-dom";
import Home from "./assets/homepage/Home";
import UserLogin from "./assets/login/userlogin"; // Make sure this file exists
import Adminlogin from "./assets/login/adminlogin";
import LoginSelection from "./assets/login/Loginselection";
import Userdashboard from "./assets/dashboard/user-dashboard";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginSelection />} />
      <Route path="/userlogin" element={<UserLogin />} />
      <Route path="adminlogin" element={<Adminlogin/>}/>
      <Route path="/user-dashboard" element={<Userdashboard/>}/>
     </Routes>
  );
}

export default App;
