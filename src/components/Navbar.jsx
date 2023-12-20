import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUtensils, FaPhone, FaUser } from "react-icons/fa"; // Importing Font Awesome icons

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-4 flex justify-between items-center rounded">
      <div className="flex items-center">
        <div
          className="h-10 w-10 bg-cover bg-center rounded-full overflow-hidden"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/258174/pexels-photo-258174.jpeg?auto=compress&cs=tinysrgb&w=300')`,
          }}
        ></div>
        <span className="text-white text-2xl font-bold ml-2">PINCHEZ</span>
      </div>
      <div className="flex space-x-4">
        <Link
          className="text-white hover:text-gray-300 flex items-center"
          to="/"
        >
          <FaHome className="mr-1" /> Home
        </Link>
        <Link
          className="text-white hover:text-gray-300 flex items-center"
          to="/menu"
        >
          <FaUtensils className="mr-1" /> Menu
        </Link>
        <Link
          className="text-white hover:text-gray-300 flex items-center"
          to="/contacts"
        >
          <FaPhone className="mr-1" /> Contacts
        </Link>
        <Link
          className="text-white hover:text-gray-300 flex items-center"
          to="/profile"
        >
          <FaUser className="mr-1" /> Profile
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
