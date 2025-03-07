
import React from "react";
import { CartItem as CartItemType } from "../contexts/CartContext";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleIncrease = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    } else {
      removeFromCart(item.id);
    }
  };

  return (
    <div className="flex items-center gap-4 py-4 border-b">
      <Link to={`/product/${item.id}`} className="flex-shrink-0 w-20 h-20 bg-gray-100 rounded">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-contain"
        />
      </Link>
      
      <div className="flex-grow">
        <Link to={`/product/${item.id}`} className="font-medium text-gray-900 hover:text-wine-DEFAULT transition-colors">
          {item.name}
        </Link>
        <p className="text-sm text-gray-600">{item.type}</p>
        <p className="text-wine-DEFAULT font-bold">${item.price.toFixed(2)}</p>
      </div>
      
      <div className="flex flex-col items-end gap-2">
        <button
          onClick={() => removeFromCart(item.id)}
          className="text-gray-400 hover:text-red-500 transition-colors"
          aria-label="Remove item"
        >
          <Trash2 size={18} />
        </button>
        
        <div className="flex items-center border rounded">
          <button
            onClick={handleDecrease}
            className="px-2 py-1 text-gray-500 hover:text-wine-DEFAULT transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus size={16} />
          </button>
          
          <span className="px-2 min-w-[30px] text-center">{item.quantity}</span>
          
          <button
            onClick={handleIncrease}
            className="px-2 py-1 text-gray-500 hover:text-wine-DEFAULT transition-colors"
            aria-label="Increase quantity"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
