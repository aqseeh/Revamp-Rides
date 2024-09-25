import { Link } from "react-router-dom";

{
  /* <header className="bg-white shadow-md py-4">
  <div className="container mx-auto flex justify-between items-center">
    <h1 className="text-3xl font-bold text-orange-500">SubX</h1>
    <nav>
      <ul className="flex space-x-6 text-gray-600">
        <li>Home</li>
        <li>Page</li>
        <li className="text-orange-500">Contact</li>
        <li>Pricing</li>
        <li>Download</li>
      </ul>
    </nav>
  </div>
</header>; */
}

const NavBar = () => {
  return (
<<<<<<< HEAD
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
=======
    <div className="container mx-auto fixed top-0 z-50 flex justify-between items-center">
      <div className="bg-transparent opacity-40 h-16 w-full">
        <div className="hidden md:flex space-x-6 justify-start items-center px-8 h-full">
          <h1 className="text-3xl font-bold text-red-950">REVAMP RIDES</h1>
          <Link to="/" className="text-white hover:text-slate-600">
            Home
          </Link>
>>>>>>> 842b8cdf9acc0dcec671cff9f8c08327ddeefbe1

          <Link
            to="/services"
            className="text-white text-bold hover:text-yellow-500"
          >
            Services
          </Link>
          <Link to="/Booking" className="text-white hover:text-yellow-500">
            Booking
          </Link>
          <Link to="/reviews" className="text-white hover:text-yellow-500">
            Reviews
          </Link>
          <Link to="/about" className="text-white hover:text-yellow-500">
            About
          </Link>
          <Link to="/contact-us" className="text-white hover:text-yellow-500">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
