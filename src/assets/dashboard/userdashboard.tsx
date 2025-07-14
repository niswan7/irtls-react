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

        <h1 className="text-3xl p-4">VEHICLE : KL 11 CA 7</h1>
    <div className="flex flex-col md:flex-row gap-4 p-4"> 

        <div className="max-w-md mx-auto my-8 flex">
  <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4">
      <h3 className="text-xl font-bold text-white">Vehicle type </h3>
    </div>
    
    <div className="p-6">
      <ul className="space-y-2">
     <li>
       <span className="text-gray-700 mb-4">
      Manufacture : BMW 
      </span>
      
      </li>
        <li className="flex items-start">
          <span>Variant : M5 CS</span>
        </li>
      <li>
        <span>Colour : Racing Green</span>
      </li>
        <li className="flex items-start">
          <span>Fuel : Petrol</span>
        </li>
        <li className="flex items-start">
          <span>Horse Power : 900</span>
        </li>
        <li>
          <span>Seat Capacity : 5 </span>
        </li>
        <li>
          <span>Year of Manufacture : 2023</span>
        </li>
      </ul>
    </div>
    
    
  </div>
</div>
<div className="max-w-md mx-auto my-8">
  <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4">
      <h3 className="text-xl font-bold text-white">RC Status</h3>
    </div>
    
    <div className="p-6">
 
      
      <ul className="space-y-2">
        <li><span>Resistration No : KL 11 CA 7</span></li>
        <li><span>Vechicle Type : Saloon</span></li>
      <li>

        <span>Valid Up : 24 January 2038</span>
      </li>
        <li className="flex items-start">
          <span>Status : Good</span>
        </li>
        <li className="flex items-start">
          <span>Seat Capacity : 5 </span>
        </li>
        <li className="flex items-start">
          <span>Year of Manufacture : 2023</span>
        </li>
      </ul>
    </div>

  </div>
</div>

<div className="max-w-md mx-auto my-8">
  <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4">
      <h3 className="text-xl font-bold text-white">Insurance Status</h3>
    </div>
    
    <div className="p-6">
      
      <ul className="space-y-2">
        <li>
          <span>Valid Upto : 25 January  2028 </span>
        </li>
        <li className="flex items-start">
          <span>Status : Good</span>
        </li>
        <li className="flex items-start">
          <span>Insurance Company : New India</span>
        </li>
        <li className="flex items-start">
          <span>Insurance No : K12E23F32VBB</span>
        </li>
        
      </ul>
    </div>
    
    <div className="bg-gray-50 px-6 py-4">
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105">
        Update
      </button>
    </div>
  </div>
</div>

<div className="max-w-md mx-auto my-8">
  <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4">
      <h3 className="text-xl font-bold text-white"> Pollution Status </h3>
    </div>
    
    <div className="p-6">
    
      
      <ul className="space-y-2">
    <li>
          <span>Valid Upto : 25 January  2026 </span>
    </li>
        <li className="flex items-start">
          <span>Status : Good</span>
        </li>
        <li className="flex items-start">
          <span>Pollution Company : New India</span>
        </li>
        <li className="flex items-start">
          <span>Pollution No : TT1WE23F32VBB</span>
        </li>
      </ul>
    </div>
    
    <div className="bg-gray-50 px-6 py-4">
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105">
        Update
      </button>
    </div>
  </div>
</div>

<div className="max-w-md mx-auto my-8">
  <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4">
      <h3 className="text-xl font-bold text-white">E-Challan</h3>
    </div>
    
    <div className="p-6">
      
      
      <ul className="space-y-2">
        <li className="flex items-start">
          <span>Disposed</span>
        </li>
        <li className="flex items-start">
          <span>Pending</span>
        </li>
       
      </ul>
    </div>
    
    <div className="bg-gray-50 px-6 py-4">
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105">
        Pay
      </button>
            </div>
        </div>
    </div>

</div>
        </>


);
}
export default Userdashboard;