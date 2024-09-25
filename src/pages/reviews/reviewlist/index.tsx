import { useState } from "react";

interface Review {
  name: string;
  email: string;
  rating: string;
  review: string;
}

const ReviewForm: React.FC = () => {
  const [formData, setFormData] = useState<Review>({
    name: "",
    email: "",
    rating: "",
    review: "",
  });

  const [reviews, setReviews] = useState<Review[]>([]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add the submitted review to the reviews list
    setReviews([...reviews, formData]);
    // Clear the form
    setFormData({
      name: "",
      email: "",
      rating: "",
      review: "",
    });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Leave a Review</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 bg-white py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 bg-white py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="rating" className="block font-medium text-gray-700">
            Rating
          </label>
          <select
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border bg-white border-gray-300 rounded-md"
          >
            <option value="">Choose a rating</option>
            <option value="5">★★★★★ - Excellent</option>
            <option value="4">★★★★ - Good</option>
            <option value="3">★★★ - Average</option>
            <option value="2">★★ - Poor</option>
            <option value="1">★ - Terrible</option>
          </select>
        </div>

        <div>
          <label htmlFor="review" className="block font-medium text-gray-700">
            Review
          </label>
          <textarea
            name="review"
            value={formData.review}
            onChange={handleChange}
            required
            className="w-full bg-white px-3 py-2 border border-gray-300 rounded-md"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
