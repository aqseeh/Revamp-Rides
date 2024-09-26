// PurchaseForm.tsx
import { useState } from "react";

interface PurchaseFormProps {
  car: { make: string; model: string; price: string };
  onClose: () => void;
}

const PurchaseForm: React.FC<PurchaseFormProps> = ({ car, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    price: car.price,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to server)
    console.log("Form submitted:", formData);
    onClose(); // Close the form after submission
  };

  return (
    <div className="p-5 border border-gray-300 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">
        Purchase {car.make} {car.model}
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-2 border border-gray-400 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-2 border border-gray-400 rounded"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
          className="p-2 border border-gray-400 rounded"
        />
        <input
          type="text"
          name="price"
          value={formData.price}
          readOnly
          className="p-2 border border-gray-400 rounded bg-gray-200"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-700"
        >
          Confirm Purchase
        </button>
        <button
          type="button"
          onClick={onClose}
          className="mt-2 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default PurchaseForm;
