import { useState } from "react";

interface PurchaseFormProps {
  car: {
    id: string | number;
    make: string;
    model: string;
    price: string;
  };
  carType: "new" | "used"; // Passed from the parent to indicate car type
  onClose: () => void;
}

const PurchaseForm: React.FC<PurchaseFormProps> = ({
  car,
  carType,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "", // New field
    paymentMethod: "", // New field
    price: car.price,
    carType: carType, // Automatically set based on the prop
    carId: car.id, // Automatically set car ID
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/purchase", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Show success alert
      alert(
        `Your order for the ${car.make} ${car.model} (${
          carType === "new" ? "New" : "Used"
        }) has been successfully placed!`
      );

      onClose(); // Close the form after successful submission
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("There was an error submitting your order. Please try again.");
    }
  };

  return (
    <div className="p-5 border border-gray-300 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">
        Purchase {car.make} {car.model} ({carType === "new" ? "New" : "Used"})
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
          name="phone" // New field
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="p-2 border border-gray-400 rounded"
        />
        <select
          name="paymentMethod" // New field
          value={formData.paymentMethod}
          onChange={handleChange}
          required
          className="p-2 border border-gray-400 rounded"
        >
          <option value="">Select Payment Method</option>
          <option value="credit_card">Credit Card</option>
          <option value="debit_card">Debit Card</option>
          <option value="cash">Cash</option>
          <option value="bank_transfer">Bank Transfer</option>
        </select>
        <input
          type="text"
          name="price"
          value={formData.price}
          readOnly
          className="p-2 border border-gray-400 rounded bg-gray-200"
        />
        {/* Hidden fields for carType and carId */}
        <input type="hidden" name="carType" value={formData.carType} />
        <input type="hidden" name="carId" value={formData.carId} />
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
