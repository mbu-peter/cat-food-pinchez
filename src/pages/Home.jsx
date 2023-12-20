import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Axios from "axios";
import Footer from "../components/Footer";

const HomePage = () => {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["cat"],
    queryFn: () =>
      Axios.get("https://catfact.ninja/fact").then((res) => res.data),
  });

  const generateRandomCatFact = () => {
    queryClient.invalidateQueries(["cat"]);
  };

  return (
    <div className="container mx-auto p-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Discover Random Cat Facts</h1>
        <p className="text-gray-500">
          Click the button below to generate a random cat fact!
        </p>
      </div>

      <div className="flex items-center justify-center mb-8">
        <img
          src="https://images.pexels.com/photos/6247955/pexels-photo-6247955.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Random Cat"
          className="w-full max-w-2xl rounded-md shadow-lg"
        />
      </div>

      <div className="flex items-center justify-center mb-4">
        <button
          onClick={generateRandomCatFact}
          className={`bg-teal-500 px-4 py-2 rounded focus:outline-none transition duration-300 ${
            isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-teal-600"
          }`}
          disabled={isLoading}
        >
          {isLoading ? "Generating..." : "Generate Random Cat Fact"}
        </button>
      </div>

      {isLoading ? (
        <div className="text-center">
          <div className="spinner-border text-blue-500" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center mb-8">
          <div>
            <p className="text-lg font-semibold mb-2">{data?.fact}</p>
          </div>
        </div>
      )}

      <div className="mt-8">{/* Additional content can be added here */}</div>

      <Footer />
    </div>
  );
};

export default HomePage;
