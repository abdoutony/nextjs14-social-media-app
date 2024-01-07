import React from "react";

const SocialMediaPostCard = () => {
  return (
    <div className="mx-auto bg-white rounded-xl overflow-hidden border-2 border-gray-100 p-6 my-3">
      <div className="flex items-center">
        <img
          className="h-10 w-10 rounded-full mr-4"
          src="https://placekitten.com/100/100"
          alt="User Avatar"
        />
        <div>
          <p className="text-gray-800 font-semibold">John Doe</p>
          <p className="text-gray-600 text-sm">Posted 2 hours ago</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique
          nisi vel justo sagittis, eu convallis orci fringilla.
        </p>
      </div>
      <div className="mt-4">
        {/* <img
          className="w-full rounded-md"
          src="https://placekitten.com/600/400"
          alt="Post Image"
        /> */}
      </div>
      <div className="mt-4 flex items-center justify-between">
        <button className="text-blue-500 hover:underline">Like</button>
        <button className="text-gray-500 hover:underline">Comment</button>
        <button className="text-gray-500 hover:underline">Share</button>
      </div>
    </div>
  );
};

export default SocialMediaPostCard;
