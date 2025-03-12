
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { wines } from "../data/wines";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import Navbar from "../components/Navbar";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const wine = wines.find(wine => wine.id === Number(id));
  
  if (!wine) {
    return (
      <div className="mobile-container p-4 flex flex-col items-center justify-center h-screen">
        <h2 className="text-xl font-semibold mb-4">Product Not Found</h2>
        <button 
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-wine-DEFAULT text-white rounded-md"
        >
          Return to Home
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(wine, 1);
  };

  // Determine the background color based on wine type
  const getWineTypeColor = () => {
    switch (wine.type.toLowerCase()) {
      case "red wine":
        return "bg-redwine-dark";
      case "white wine":
        return "bg-whitewine-dark text-gray-800";
      case "rosé":
      case "rose":
        return "bg-rosewine-dark text-gray-800";
      case "champagne":
      case "sparkling":
        return "bg-champagne-dark text-gray-800";
      default:
        return "bg-wine-dark";
    }
  };

  const buttonColorClass = getWineTypeColor();

  return (
    <div className="mobile-container">
      <Navbar />
      
      <div className="px-4 py-6">
        {/* Back button */}
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center text-gray-600 mb-4"
        >
          <ArrowLeft size={18} className="mr-1" />
          <span>Back</span>
        </button>
        
        {/* Product Image */}
        <div className="bg-gray-100 rounded-lg mb-6 h-64 flex items-center justify-center">
          <img 
            src={wine.image} 
            alt={wine.name}
            className="max-h-full max-w-full object-contain"
          />
        </div>
        
        {/* Product Info */}
        <div className="mb-6">
          <div className="flex justify-between items-start mb-2">
            <h1 className="text-2xl font-semibold">{wine.name}</h1>
            <div className="bg-wine-DEFAULT text-white text-sm px-2 py-1 rounded">
              {wine.rating} ★
            </div>
          </div>
          
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-600">{wine.type}</p>
            <p className="text-wine-DEFAULT text-xl font-bold">${wine.price.toFixed(2)}</p>
          </div>
          
          <div className="bg-gray-50 p-3 rounded-md mb-4">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-500">Origin</span>
              <span className="text-sm font-medium">{wine.origin}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Year</span>
              <span className="text-sm font-medium">{wine.year}</span>
            </div>
          </div>
          
          {/* Add to Cart - Now positioned above the description */}
          <button
            onClick={handleAddToCart}
            className={`w-full flex items-center justify-center ${buttonColorClass} text-white px-6 py-3 rounded-md mb-6`}
          >
            <ShoppingCart size={18} className="mr-2" />
            Add to Cart
          </button>
          
          <div>
            <h2 className="text-lg font-medium mb-2">Description</h2>
            <p className="text-gray-700">{wine.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
