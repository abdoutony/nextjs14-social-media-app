import React from "react";

const LoadingWrapper = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex items-center space-x-2 text-gray-600">
        <svg
          className="animate-spin h-8 w-8 text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 010 12H0a12 12 0 0112-12v4a8 8 0 01-8 8zM20 12a8 8 0 01-8 8v4a12 12 0 0112-12h-4zm-2-5.291A7.962 7.962 0 0124 12h0a12 12 0 01-12 12v-4a8 8 0 018-8z"
          ></path>
        </svg>
        <span>Loading...</span>
      </div>
    </div>
  );
};

export default LoadingWrapper;
