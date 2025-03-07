
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="mobile-container">
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-6xl font-bold text-wine-DEFAULT mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Oops! Page not found</p>
        <button 
          onClick={() => navigate("/")}
          className="flex items-center px-6 py-3 bg-wine-DEFAULT text-white rounded-md hover:bg-wine-dark transition-colors"
        >
          <ArrowLeft size={18} className="mr-2" />
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
