import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="flex flex-col space-y-4">
          <h2 className="text-lg font-semibold">Connect with Us</h2>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-gray-400">
              Facebook
            </a>
            <a href="#" className="hover:text-gray-400">
              Instagram
            </a>
            <a href="#" className="hover:text-gray-400">
              Twitter
            </a>
            <a href="#" className="hover:text-gray-400">
              GitHub
            </a>
            <a href="#" className="hover:text-gray-400">
              YouTube
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="text-lg font-semibold">Subscribe to Our Newsletter</h2>
          <form className="flex items-center space-x-4">
            <input
              type="email"
              placeholder="Your email"
              className="py-2 px-3 bg-gray-700 text-white rounded-md focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-md transition duration-300 focus:outline-none"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; 2023 pmcode, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
