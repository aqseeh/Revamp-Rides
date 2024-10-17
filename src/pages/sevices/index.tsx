import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <div className="max-w-4xl mx-auto py-8 px-4 mt-20">
        <h1 className="font-bold text-5xl text-red-500 text-center mb-6">
          SERVICES
        </h1>
        <p className="font-bold text-xl text-gray-700 mb-8 text-center">
          We offer seamless car buying and selling services, ensuring a
          hassle-free experience with competitive pricing and expert guidance.
        </p>
      </div>

      <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 mb-10 ">
        {/* Body Repair */}
        <div className="shadow-lg">
          <Link to="/services/1" className="text-gray-300 hover:text-white">
            <img
              alt="Body Repair"
              src="/pictures/bodyrepair.avif"
              className="rounded-t-lg w-full h-96 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Body Repair
              </h3>
            </div>
          </Link>
        </div>

        {/* Accident Damage Insurance */}
        <div className=" shadow-lg">
          <Link to="/services/2" className="text-gray-300 hover:text-white">
            <img
              alt="Accident Damage Insurance"
              src="/pictures/accinsurance.avif"
              className="rounded-t-lg w-full h-96 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Accident Damage Insurance
              </h3>
            </div>
          </Link>
        </div>

        {/* Book A Service */}
        <div className="shadow-lg">
          <Link to="/services/3" className="text-gray-300 hover:text-white">
            <img
              alt="Book A Service"
              src="/pictures/servicing.avif"
              className="rounded-t-lg w-full h-96 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Book A Service
              </h3>
            </div>
          </Link>
        </div>

        {/* Financing */}
        <div className=" shadow-lg">
          <Link to="/services/4" className="text-gray-300 hover:text-white">
            <img
              alt="Financing"
              src="/pictures/financing.avif"
              className="rounded-t-lg w-full h-96 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Financing
              </h3>
            </div>
          </Link>
        </div>
      </div>
      {/* Button to navigate to the service form */}
      <div className="text-end px-10">
        <Link to="/form">
          <button className="bg-black text-white text-2xl rounded-t-lg hover:bg-black-600 p-3 transition-colors">
            Service Form
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
