import React from "react";

const Contacts = () => {
  return (
    <div className="bg-white">
      <div className="relative h-60 sm:h-96 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&w=300"
          alt="Landing"
          className="absolute h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-extrabold text-white text-center">
            Welcome to Our World
          </h1>
        </div>
      </div>

      
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
            About Us
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            We are passionate about nourishing your feline companions with the
            finest, healthiest, and most delectable cat food. As dedicated cat
            lovers ourselves, we understand the unique bond that exists between
            you and your furry friends, and we believe that providing them with
            optimal nutrition is the key to a happy and healthy life. Catering
            to the diverse tastes and preferences of our feline friends, we
            offer a wide range of flavors and textures. Whether your cat is a
            connoisseur of tender cuts, savory gravies, or crunchy bites, we
            have the perfect meal to satisfy even the most discerning palate.
          </p>
        </div>
      </div>

      
      <div className="bg-gray-100 py-12">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Connect With Us
          </h2>
          <div className="mt-6 flex space-x-4">
            <a
              href="https://twitter.com/mbugua_is_me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              Twitter
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              Facebook
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-700"
            >
              Instagram
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
