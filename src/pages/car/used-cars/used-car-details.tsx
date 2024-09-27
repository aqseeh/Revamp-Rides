import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { MapPin } from "lucide-react";
import { FaCar, FaTachometerAlt, FaGasPump } from "react-icons/fa";
import { MdCalendarToday } from "react-icons/md";
import CarDetailsTable from "@/pages/car-details/table"; // Import the table component
import PurchaseForm from "@/components/purchase-form"; // Import the purchase form
import Modal from "@/pages/purchase-model"; // Import the modal component

// Define the type for car details
interface CarDetails {
  id: number;
  make: string;
  model: string;
  year: number;
  price: string;
  location: string;
  image: string;
  kilometers: string; // Added mileage
  fuelType: string; // Added fuel type
  transmission: string; // Added transmission type
  registeredIn: string;
  assembly: string;
  bodyType: string;
  adRef: string;
  color: string;
  engineCapacity: number;
  lastUpdated: string;
}

const Used_Car_Details = () => {
  const { id } = useParams<{ id: string }>();
  const [carDetail, setCarDetail] = useState<CarDetails | null>(null);
  const [showCarDetails, setShowCardDetails] = useState(false); // For showing/hiding table
  const [showPurchaseForm, setShowPurchaseForm] = useState(false); // For showing/hiding purchase form

  useEffect(() => {
    const fetchCarDetail = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/usedcars/${id}`
        );
        setCarDetail(response.data);
      } catch (error) {
        console.error("Error fetching car details:", error);
      }
    };

    fetchCarDetail();
  }, [id]);

  const toggleCardDetails = () => {
    setShowCardDetails(!showCarDetails);
  };

  const togglePurchaseForm = () => {
    setShowPurchaseForm(!showPurchaseForm);
  };

  if (!carDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col m-20 space-y-10 mb-5 ">
      <div className="flex space-x-10">
        {/* Car Image */}
        <div className="w-2/3 h-96 overflow-hidden shadow-lg bg-black">
          <img
            className="w-full h-full object-contain transition-transform duration-300 transform hover:scale-105"
            src={carDetail.image}
            alt={`${carDetail.make} ${carDetail.model}`}
          />
        </div>

        {/* Car Details */}
        <div className="flex flex-col justify-start border border-gray-500 p-5 shadow-md w-96 h-96 bg-white">
          <div className="p-3 rounded-md">
            <h1 className="text-3xl font-bold mb-2 text-gray-800">
              {carDetail.make} {carDetail.model}
            </h1>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              {carDetail.price}
            </h2>
          </div>
          <div className="flex items-center mb-2">
            <MapPin className="w-5 h-5 mr-2 text-gray-600" />
            <span className="text-gray-600">{carDetail.location}</span>
          </div>
          <div className="flex items-center mb-2">
            <MdCalendarToday className="w-5 h-5 mr-2 text-gray-600" />
            <p className="text-gray-600">Year: {carDetail.year}</p>
          </div>
          <div className="flex items-center mb-2">
            <FaTachometerAlt className="w-5 h-5 mr-2 text-gray-600" />
            <p className="text-gray-600">Mileage: {carDetail.kilometers} km</p>
          </div>
          <div className="flex items-center mb-2">
            <FaGasPump className="w-5 h-5 mr-2 text-gray-600" />
            <p className="text-gray-600">Fuel Type: {carDetail.fuelType}</p>
          </div>
          <div className="flex items-center mb-2">
            <FaCar className="w-5 h-5 mr-2 text-gray-600" />
            <p className="text-gray-600">
              Transmission: {carDetail.transmission}
            </p>
          </div>
        </div>
      </div>

      {/* Car Details Button */}
      <div>
        <button
          onClick={toggleCardDetails}
          className="px-4 py-2 bg-black text-white shadow hover:bg-gray-700 mr-2"
        >
          {showCarDetails ? "Hide Car Details" : "Show Car Details"}
        </button>
        <button
          onClick={togglePurchaseForm}
          className="px-4 py-2 bg-black text-white shadow hover:bg-gray-700"
        >
          Purchase
        </button>
      </div>

      {/* Conditional Rendering for Table */}
      {showCarDetails && <CarDetailsTable car={carDetail} />}

      {/* Modal for Purchase Form */}
      <Modal isOpen={showPurchaseForm} onClose={togglePurchaseForm}>
        <PurchaseForm
          car={carDetail}
          carType="used"
          onClose={togglePurchaseForm}
        />
      </Modal>
    </div>
  );
};

export default Used_Car_Details;
