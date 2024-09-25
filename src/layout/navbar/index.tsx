import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-black  h-16 w-full fixed top-0 z-50">
      <div className="hidden md:flex space-x-6 justify-start items-center px-8 h-full">
        <Link to="/" className=" text-black hover:text-yellow-500">
          Home
        </Link>
        <Link to="/about" className="text-white hover:text-yellow-500">
          About
        </Link>
        <Link to="/cars" className="text-white hover:text-yellow-500">
          Cars
        </Link>
        <Link to="/services" className="text-white hover:text-yellow-500">
          Services
        </Link>

        <Link to="/contact us" className="text-white hover:text-yellow-500">
          Contact Us
        </Link>
        <Link to="/auth/login" className="text-white hover:text-yellow-500">
          login
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
