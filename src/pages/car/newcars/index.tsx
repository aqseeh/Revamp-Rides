import { useState, useEffect } from "react";
import axios from "axios";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

// Define the type for car details
interface CarDetails {
  id: number;
  make: string;
  model: string;
  year: number;
  price: string;
  location: string;
  image: string;
}

const NewCars = () => {
  const [carDetails, setCarDetails] = useState<CarDetails[] | null>(null);

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await axios.get("http://localhost:4000/newcars");
        setCarDetails(response.data);
      } catch (error) {
        console.error("Error fetching car details:", error);
      }
    };

    fetchCarDetails();
  }, []);

  if (!carDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 m-10 mt-20">
      {carDetails.map((car) => (
        <div
          key={car.id}
          className="w-72 rounded overflow-hidden shadow-md border cursor-pointer transition duration-300"
        >
          {/* Car Image */}
          <div className="w-full h-72">
            <img
              className="w-full h-full object-cover object-center block"
              src={car.image}
              alt={`${car.make} ${car.model}`}
            />
          </div>

          {/* Car Details */}
          <div className="px-3 py-4">
            <div className="font-bold text-xl mb-2">
              {car.make} {car.model} ({car.year})
            </div>
            <div className="flex items-center text-gray-700 text-base mb-1">
              {/* {<Banknote className="h-6 w-7" />} */}
              {/* Price icon */}
              {car.price}
            </div>

            <div className="flex items-center justify-between text-gray-700 text-base w-full">
              <div className="flex items-center">
                <MapPin className="w-5 h-5" /> {/* Location icon */}
                {car.location}
              </div>
              <Link
                to={`/cars/${car.id}/${car.make}-${car.model
                  .replace(/\s+/g, "-")
                  .toLowerCase()}`}
                className="border border-black bg-black text-white px-4 py-2"
              >
                More Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewCars;
