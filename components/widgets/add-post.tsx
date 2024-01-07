import React from "react";

const AddPostCard = () => {
  return (
    <div className="mx-auto bg-white rounded-xl overflow-hidden border-2 border-gray-100 p-6 w-full">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <svg
            className="h-12 w-12 text-blue-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 1C4.48 1 0 5.48 0 11s4.48 10 10 10 10-4.48 10-10S15.52 1 10 1zm0 18c-1.71 0-3.37-.39-4.85-1.09-.31-.14-.67-.05-.91.18-.24.23-.32.59-.2.92.23.68.61 1.32 1.13 1.84 1.61 1.61 3.53 2.88 5.59 3.72.32.13.68.03.93-.22.24-.25.34-.61.23-.94-.23-.71-.51-1.39-.84-2.03-1.23-2.17-2.55-3.94-3.89-5.55-.23-.29-.59-.45-.94-.42-.36.03-.69.22-.92.49-.26.31-.36.71-.27 1.11.09.41.37.76.77.95 2.37 1.21 4.77 2.24 7.16 3.18.36.15.76.02 1.04-.29.26-.29.37-.67.28-1.05s-.37-.66-.76-.84c-2.52-1.28-5.04-2.55-7.56-3.83-.4-.21-.83-.26-1.24-.16z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="ml-4 w-full">
          <div className="text-xl font-semibold text-gray-800">
            Share your moment
          </div>
          <input
            type="text"
            className="mt-2 p-2 rounded-md w-full focus:outline-none"
            placeholder="Express yourself and share your thoughts with the community."
          />
        </div>
      </div>
      <div className="mt-6">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Add Post
        </button>
      </div>
    </div>
  );
};

export default AddPostCard;
