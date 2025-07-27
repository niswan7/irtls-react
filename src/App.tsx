import { Routes, Route } from "react-router-dom";
import Home from "./assets/homepage/Home";
import UserLogin from "./assets/login/userlogin"; // Make sure this file exists
import Adminlogin from "./assets/login/adminlogin";
import LoginSelection from "./assets/login/LoginSelection";
import Userdashboard from "./assets/dashboard/userdashboard";
import Admindashboard  from "./assets/dashboard/admindashboard";
import Insurancedashboard  from "./assets/dashboard/insurancedashboard";
import Filecomplaintdashboard from "./assets/dashboard/filecomplaintdashboard";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginSelection />} />
      <Route path="/userlogin" element={<UserLogin />} />
      <Route path="adminlogin" element={<Adminlogin/>}/>
      <Route path="/userdashboard" element={<Userdashboard/>}/>
      <Route path="admindashboard" element={<Admindashboard/>}/>
      <Route path="/insuracedashboard" element={<Insurancedashboard/>}/>
      <Route path="/filecomplaintdashboard" element={<Filecomplaintdashboard/>}/>
      
     </Routes>
  );
}

export default App;
