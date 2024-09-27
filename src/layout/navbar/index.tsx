import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="container mx-auto fixed top-0 z-50 flex justify-between items-center">
      <div className="bg-black h-16 w-full">
        <div className="hidden md:flex space-x-6 justify-start items-center px-8 h-full">
          <h1 className="text-3xl font-bold text-red-500">REVAMP RIDES</h1>
          <Link to="/" className="text-white font-bold hover:text-slate-600">
            Home
          </Link>

          <Link
            to="/services"
            className="text-white text-bold font-bold hover:text-yellow-500"
          >
            Services
          </Link>
          <Link
            to="/Booking"
            className="text-yellow-50 font-bold hover:text-yellow-500"
          >
            Booking
          </Link>
          <Link to="/reviews" className="text-white hover:text-yellow-500">
            Reviews
          </Link>
          <Link
            to="/about"
            className="text-white font-bold hover:text-yellow-500"
          >
            About
          </Link>
          <Link
            to="/contact-us"
            className="text-white font-bold hover:text-yellow-500"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
