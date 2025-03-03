import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-7xl font-extrabold text-blue-500 animate-bounce">
        404
      </h1>
      <h2 className="text-3xl font-semibold text-gray-700 mt-4">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-500 mt-2 text-center">
        The page you're looking for doesn't exist or has been moved.
      </p>

      <button
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
      >
        Go Back Home
      </button>

      <div className="mt-10">
        <img
          src="https://media.giphy.com/media/l2JehQ2GitHGdVG9y/giphy.gif"
          alt="Not Found"
          className="w-64"
        />
      </div>
    </div>
  );
};

export default PageNotFound;
