import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle dropdown menu
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Function to handle link click and close dropdown
  const handleLinkClick = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="container mx-auto fixed top-0 z-50 flex justify-between items-center">
      <div className="bg-black h-16 w-full">
        <div className="hidden md:flex space-x-6 justify-between items-center px-8 h-full">
          <h1 className="text-3xl font-bold text-white">REVAMP RIDES</h1>
          <div className="flex space-x-6 items-center font-medium h-full justify-end">
            <Link
              to="/"
              className="text-white hover:text-slate-600"
              onClick={handleLinkClick}
            >
              Home
            </Link>

            <Link
              to="/services"
              className="text-white hover:text-yellow-500"
              onClick={handleLinkClick}
            >
              Services
            </Link>

            {/* Dropdown for Cars */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="text-white flex items-center hover:text-yellow-500 focus:outline-none"
              >
                Cars
                {/* Prettier Dropdown Arrow */}
                <span className="ml-1 text-sm">&#x25BC;</span> {/* ▼ arrow */}
              </button>

              {/* Dropdown menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-black shadow-lg rounded-md">
                  <Link
                    to="/cars/new"
                    className="block px-4 py-2 text-white hover:bg-zinc-500"
                    onClick={handleLinkClick}
                  >
                    New Cars
                  </Link>
                  <Link
                    to="/cars/used"
                    className="block px-4 py-2 text-white hover:bg-yellow-200"
                    onClick={handleLinkClick}
                  >
                    Used Cars
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/reviews"
              className="text-white hover:text-yellow-500"
              onClick={handleLinkClick}
            >
              Reviews
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-yellow-500"
              onClick={handleLinkClick}
            >
              About
            </Link>
            <Link
              to="/contact-us"
              className="text-white hover:text-yellow-500"
              onClick={handleLinkClick}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
