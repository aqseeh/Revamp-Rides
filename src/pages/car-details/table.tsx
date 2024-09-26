import CarDetails from "."; // Import the interface

interface CarDetailsTableProps {
  car: CarDetails; // Define the type of the car prop
}

const CarDetailsTable = ({ car }: CarDetailsTableProps) => {
  return (
    <div className="overflow-x-auto relative shadow-md mb-5">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="py-3 px-6">
              Attribute
            </th>
            <th scope="col" className="py-3 px-6">
              Details
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b">
            <td className="py-4 px-6 font-medium text-gray-900">Body Type</td>
            <td className="py-4 px-6">{car.bodyType}</td>
          </tr>
          <tr className="bg-gray-50 border-b">
            <td className="py-4 px-6 font-medium text-gray-900">Color</td>
            <td className="py-4 px-6">{car.color}</td>
          </tr>
          <tr className="bg-white border-b">
            <td className="py-4 px-6 font-medium text-gray-900">
              Engine Capacity
            </td>
            <td className="py-4 px-6">{car.engineCapacity} cc</td>
          </tr>
          <tr className="bg-gray-50 border-b">
            <td className="py-4 px-6 font-medium text-gray-900">
              Registered In
            </td>
            <td className="py-4 px-6">{car.registeredIn}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CarDetailsTable;
