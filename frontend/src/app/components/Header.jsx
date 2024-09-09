import React from "react";

const Header = () => {
  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-semibold">
          <a href="/">My Blog</a>
        </div>
        <div className="space-x-4">
          <a href="/" className="text-gray-300 hover:text-white">
            Home
          </a>
          <a href="/create" className="text-gray-300 hover:text-white">
            Create Post
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
