const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-white">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img alt="" src="/pictures/aboutus.jpg" className="w-full h-screen" />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8">
        <h2 className="text-red-500 font-bold text-3xl  mb-2">About Us</h2>
        <h1 className="text-3xl font-bold mb-4">
          Our Commitment to Your Comfort and Satisfaction
        </h1>
        <p className="text-gray-600 mb-4">
          Revamp Rides offers an unparalleled experience in buying and selling
          cars, providing a vast selection of quality vehicles and exceptional
          customer service. With transparent pricing and hassle-free
          transactions, it ensures customer satisfaction every step of the way.
        </p>
        <ul className="list-none space-y-2">
          <li className="flex items-center">
            <span className="inline-block w-4 h-4 bg-black rounded-full mr-2"></span>
            <span>24/7 Online Booking</span>
          </li>
          <li className="flex items-center">
            <span className="inline-block w-4 h-4 bg-black rounded-full mr-2"></span>
            <span>Financing Options</span>
          </li>
          <li className="flex items-center">
            <span className="inline-block w-4 h-4  bg-black rounded-full mr-2"></span>
            <span>Vehicle Trade-In </span>
          </li>
          <li className="flex items-center">
            <span className="inline-block w-4 h-4  bg-black rounded-full mr-2"></span>
            <span>Comprehensive Warranties </span>
          </li>
          <li className="flex items-center">
            <span className="inline-block w-4 h-4  bg-black rounded-full mr-2"></span>
            <span>Vehicle Inspection and Certification </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
