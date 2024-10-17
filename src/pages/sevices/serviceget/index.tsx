import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";

// Define the structure of a Service
interface Service {
  id: number;
  title: string;
  description: string;
}

const ServiceGet = () => {
  const { id } = useParams<{ id: string }>(); // Get service id from URL params
  const serviceId = parseInt(id || "", 10);
  console.log("type of", typeof serviceId);

  const [service, setService] = useState<Service | null>(null); // State for service details
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState<string | null>(null); // State for error
  const router = useNavigate();

  // Fetch service details from the db.json API
  const fetchServiceDetails = async () => {
    if (!serviceId) return; // Exit if no id is available
    try {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/services/save-services/${serviceId}/`
      );
      console.log("data", data);
      setService(data); // Set service data
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An unknown error occurred";
      setError(`Error fetching service details: ${errorMessage}`);
      console.error("Error fetching service details:", err);
    } finally {
      setLoading(false); // Update loading state
    }
  };

  // Use effect to fetch service details when component mounts
  useEffect(() => {
    fetchServiceDetails();
  }, [id]); // Include fetchServiceDetails in the dependency array

  // Render loading state
  if (loading) {
    return <div>Loading...</div>; // Customize this to a loading spinner if needed
  }

  // Render error state
  if (error) {
    return <div>{error}</div>;
  }

  // Render not found state
  if (!service) {
    return <div>Service not found</div>;
  }

  // Render service details
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-5xl font-bold text-center mb-4">{service.title}</h1>
      <p className="text-lg text-gray-700 text-justify max-w-2xl">
        {service.description}
      </p>
      <Button className="gap-y-12" onClick={() => router("/services")}>
        Back
      </Button>
    </div>
  );
};

export default ServiceGet;
