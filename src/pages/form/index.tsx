import { useState } from "react";
import axios from "axios"; // For making HTTP requests
import { toast } from "react-hot-toast"; // Correct import for toast

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    tel: "",
    postcode: "",
    ServeYouWant: "",
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      console.log("send data ", formData);
      // Send POST request to save data in db.json
      const response = await axios.post(
        "http://127.0.0.1:8000/services/submission-form/",
        formData
      );
      console.log("Data saved:", response.data);

      // Clear the form after submission
      setFormData({
        name: "",
        email: "",
        address: "",
        tel: "",
        postcode: "",
        ServeYouWant: "",
      });

      toast.success("Form submitted and data saved successfully!");
    } catch (error) {
      console.error("Error saving form data:", error);
      toast.error("Error saving form data!");
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: name === "tel" || name === "postcode" ? Number(value) : value,
    });
  };

  return (
    <div className="container mx-auto p-8 flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg"
      >
        <h2 className="text-3xl text-red-500 font-bold mb-6 text-center">
          SERVICES FORM
        </h2>

        <div className="mb-4">
          <input
            className="block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <input
            className="block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <input
            className="block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <input
            className="block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Tel"
            name="tel"
            type="string"
            value={formData.tel}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <input
            className="block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Postcode"
            name="postcode"
            type="string"
            value={formData.postcode}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <textarea
            className="block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Service you want"
            name="ServeYouWant"
            value={formData.ServeYouWant}
            onChange={handleChange}
            required
            rows={5} // Specify the number of rows for the textarea
          />
        </div>

        <button
          type="submit"
          className="w-full text-white p-3 rounded-lg bg-black hover:bg-black transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
