import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignOut = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Remove the token from local storage
    localStorage.removeItem("my-token");

    // Redirect to login page
    navigate("/auth/login");
  }, [navigate]);

  return null;
};

export default SignOut;
