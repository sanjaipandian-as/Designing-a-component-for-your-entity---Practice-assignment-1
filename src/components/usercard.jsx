// write the component code here


import React from "react";

const Usercard = () => {

  const profilePhoto = "https://tse2.mm.bing.net/th?id=OIP.GPR4l6Hv4mf8nkZrCFiC5QHaEK&pid=Api&P=0&h=180"; 
  const name = "Adolf Hitler";
  const email = "Adolf Hitler@example.com";
  const phone = "+1 234 567 890";
  const address = "The Führer Headquarters , German";

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300">
      <img className="w-full h-40 object-cover" src={profilePhoto} alt="Profile" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600">📧 {email}</p>
        <p className="text-gray-600">📞 {phone}</p>
        <p className="text-gray-600">🏠 {address}</p>
      </div>
    </div>
  );
};

export default Usercard;