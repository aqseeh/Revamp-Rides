import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("my-token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return isAuthenticated;
};

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Explicitly define the type of dropdownRef as HTMLDivElement | null
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Function to toggle dropdown menu
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const isAuthenticated = useAuth();

  // Function to handle link click and close dropdown
  const handleLinkClick = () => {
    setIsDropdownOpen(false);
  };

  // Close dropdown when clicking outside of it
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current && // Check if ref is not null
      !dropdownRef.current.contains(event.target as Node) // Cast event.target as Node
    ) {
      setIsDropdownOpen(false);
    }
  };

  // Adding event listener on component mount
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="container mx-auto fixed top-0 z-50 flex justify-between items-center">
      <div className="bg-black h-16 w-full">
        <div className="hidden md:flex space-x-6 justify-between items-center px-8 h-full">
          <h1 className="text-3xl font-bold text-white">REVAMP RIDES</h1>
          <div className="flex space-x-6 items-center font-medium h-full justify-end">
            <Link
              to="/"
              className="text-white hover:text-yellow-500"
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
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className="text-white flex items-center hover:text-yellow-500 focus:outline-none"
              >
                Cars
                <span className="ml-1 text-xs">
                  <i className="fa fa-caret-down text-xs"></i>
                </span>
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-black shadow-lg">
                  <Link
                    to="/cars/new"
                    className="block px-4 py-2 text-white hover:bg-zinc-500"
                    onClick={handleLinkClick}
                  >
                    New Cars
                  </Link>
                  <Link
                    to="/cars/used"
                    className="block px-4 py-2 text-white hover:bg-zinc-500"
                    onClick={handleLinkClick}
                  >
                    Used Cars
                  </Link>
                </div>
              )}
            </div>
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
            {isAuthenticated ? (
              <Avatar>
                <AvatarImage src="/pictures/avatar1.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            ) : (
              <Link
                to="/auth/login"
                className="text-white hover:text-yellow-500"
                onClick={handleLinkClick}
              >
                Sign Up
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
