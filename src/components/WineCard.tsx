
import React from "react";
import { Link } from "react-router-dom";
import { Wine } from "../data/wines";
import { Plus } from "lucide-react";
import { useCart } from "../contexts/CartContext";

interface WineCardProps {
  wine: Wine;
}

const WineCard: React.FC<WineCardProps> = ({ wine }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(wine, 1);
  };

  return (
    <Link to={`/product/${wine.id}`} className="block">
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
        <div className="relative h-48 bg-gray-100">
          <img
            src={wine.image}
            alt={wine.name}
            className="w-full h-full object-contain"
          />
          <div className="absolute top-2 right-2 bg-wine-DEFAULT text-white text-xs px-2 py-1 rounded">
            {wine.rating} ★
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-medium text-gray-900 truncate">{wine.name}</h3>
          <p className="text-sm text-gray-600 mb-2">{wine.type}</p>
          <div className="flex justify-between items-center">
            <span className="text-wine-DEFAULT font-bold">${wine.price.toFixed(2)}</span>
            <button
              onClick={handleAddToCart}
              className="p-2 bg-wine-DEFAULT text-white rounded-full"
              aria-label="Add to cart"
            >
              <Plus size={18} />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WineCard;
