import  { useState } from "react";

interface Review {
  name: string;
  email: string;
  rating: string;
  review: string;
}

const ReviewList: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([
    {
      name: "John Doe",
      email: "john@example.com",
      rating: "5",
      review: "Excellent service!",
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      rating: "4",
      review: "Great, but could be improved.",
    },
  ]);

  const [newReview, setNewReview] = useState<Review>({
    name: "",
    email: "",
    rating: "",
    review: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReviews([...reviews, newReview]); // Adding new review to the reviews array
    setNewReview({ name: "", email: "", rating: "", review: "" }); // Reset form
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Review List</h2>

      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <input
          type="text"
          name="name"
          value={newReview.name}
          onChange={handleChange}
          placeholder="Name"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
        <input
          type="email"
          name="email"
          value={newReview.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
        <select
          name="rating"
          value={newReview.rating}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="">Choose Rating</option>
          <option value="5">★★★★★ - Excellent</option>
          <option value="4">★★★★ - Good</option>
          <option value="3">★★★ - Average</option>
          <option value="2">★★ - Poor</option>
          <option value="1">★ - Terrible</option>
        </select>
        <textarea
          name="review"
          value={newReview.review}
          onChange={handleChange}
          placeholder="Your Review"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Submit Review
        </button>
      </form>

      {/* Display Reviews */}
      {reviews.length > 0 ? (
        <ul className="space-y-4">
          {reviews.map((review, index) => (
            <li
              key={index}
              className="p-4 border border-gray-300 rounded-md shadow-sm"
            >
              <p className="text-sm text-gray-600">
                <strong>Name:</strong> {review.name}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Email:</strong> {review.email}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Rating:</strong> {review.rating} ★
              </p>
              <p className="text-sm text-gray-600">
                <strong>Review:</strong> {review.review}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">
          No reviews yet. Be the first to leave a review!
        </p>
      )}
    </div>
  );
};

export default ReviewList;
