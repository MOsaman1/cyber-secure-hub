import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to signin page on initial load
    navigate("/signin");
  }, [navigate]);

  return null; // No need to render anything as we're redirecting
};

export default Index;
