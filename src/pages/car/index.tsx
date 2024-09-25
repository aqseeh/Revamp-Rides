import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";

// Interface for usage duration
interface UsageDuration {
  years: number;
  months: number;
}

// Interface for car details
interface Car {
  id: number;
  make: string;
  model: string;
  year: string;
  carType: string;
  image: string[]; // Array of image URLs
  usageDuration?: UsageDuration; // Optional property
  mileage: number;
  price: number;
}

const Cars: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null); // State to hold the selected car for the modal

  // Fetch car data from the API
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get<Car[]>("http://localhost:4000/cars");
        setCars(response.data);
        setLoading(false);
      } catch {
        setError("Error fetching car data");
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  // Custom next arrow component for the carousel in modal
  const SampleNextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow`}
        style={{
          ...style,
          display: "block",
          background: "gray",
          borderRadius: "50%",
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        &gt;
      </div>
    );
  };

  // Custom previous arrow component for the carousel in modal
  const SamplePrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow`}
        style={{
          ...style,
          display: "block",
          background: "gray",
          borderRadius: "50%",
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        &lt;
      </div>
    );
  };

  // Carousel settings for modal
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  // Handle opening the modal
  const openModal = (car: Car) => {
    setSelectedCar(car); // Set the selected car
  };

  // Handle closing the modal
  const closeModal = () => {
    setSelectedCar(null); // Reset the selected car
  };

  // Loading state
  if (loading) {
    return <p className="text-center text-lg">Loading...</p>;
  }

  // Error state
  if (error) {
    return <p className="text-center text-red-600">{error}</p>;
  }

  // Render the cars and carousel
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Car App</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.length === 0 ? (
          <p className="text-center col-span-3">No cars available.</p>
        ) : (
          cars.map((car) => (
            <div
              key={car.id}
              className="border rounded-lg shadow-md p-4 bg-white cursor-pointer"
              onClick={() => openModal(car)} // Open modal on click
            >
              {/* Static image (First image from array) */}
              {car.image.length > 0 && (
                <img
                  src={car.image[0]} // Display only the first image
                  alt={`${car.make} ${car.model}`}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              )}
              <h2 className="text-xl font-semibold">
                {car.make} {car.model} ({car.year})
              </h2>
              <p className="text-gray-600">
                Type: {car.carType === "new" ? "New Car" : "Old Car"}
              </p>
              <p>
                Usage Duration:{" "}
                {car.usageDuration
                  ? `${car.usageDuration.years} years, ${car.usageDuration.months} months`
                  : "Not available"}
              </p>
              <p>Mileage: {car.mileage} km</p>
              <p className="text-lg font-bold text-green-600">
                Price: ${car.price}
              </p>
            </div>
          ))
        )}
      </div>

      {/* Modal for displaying car details */}
      {selectedCar && (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full">
          <button
            onClick={closeModal}
            className="text-red-600 font-bold float-right"
          >
            Close
          </button>
          <Slider {...carouselSettings}>
            {selectedCar.image.map((imgUrl, index) => (
              <div key={index}>
                <img
                  src={imgUrl}
                  alt={`Car Image ${index + 1}`}
                  className="w-full h-96 object-cover rounded-lg mb-4"
                />
              </div>
            ))}
          </Slider>
          <h2 className="text-2xl font-bold mt-4">
            {selectedCar.make} {selectedCar.model} ({selectedCar.year})
          </h2>
          <p className="text-gray-600">
            Type: {selectedCar.carType === "new" ? "New Car" : "Old Car"}
          </p>
          <p>
            Usage Duration:{" "}
            {selectedCar.usageDuration
              ? `${selectedCar.usageDuration.years} years, ${selectedCar.usageDuration.months} months`
              : "Not available"}
          </p>
          <p>Mileage: {selectedCar.mileage} km</p>
          <p className="text-lg font-bold text-green-600">
            Price: ${selectedCar.price}
          </p>
        </div>
      )}
    </div>
  );
};

export default Cars;
