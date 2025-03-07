
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import CartItem from "../components/CartItem";
import Navbar from "../components/Navbar";
import { ShoppingCart } from "lucide-react";

const Cart: React.FC = () => {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  
  const handleCheckout = () => {
    // In a real app, we would navigate to a checkout page
    alert("Checkout functionality would be implemented here!");
    // clearCart();
    // navigate("/");
  };

  return (
    <div className="mobile-container">
      <Navbar />
      
      <div className="px-4 py-6">
        <h1 className="text-2xl font-semibold mb-6">Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10">
            <ShoppingCart size={48} className="text-gray-300 mb-4" />
            <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">Add some wines to get started</p>
            <button
              onClick={() => navigate("/")}
              className="px-6 py-2 bg-wine-DEFAULT text-white rounded-md hover:bg-wine-dark transition-colors"
            >
              Browse Wines
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6">
              {cartItems.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">$5.99</span>
              </div>
              <div className="border-t pt-2 mt-2 flex justify-between">
                <span className="font-semibold">Total</span>
                <span className="font-bold text-wine-DEFAULT">
                  ${(getTotalPrice() + 5.99).toFixed(2)}
                </span>
              </div>
            </div>
            
            <div className="flex gap-4 mb-4">
              <button
                onClick={clearCart}
                className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors flex-1"
              >
                Clear Cart
              </button>
              <button
                onClick={handleCheckout}
                className="px-6 py-3 bg-wine-DEFAULT text-white rounded-md hover:bg-wine-dark transition-colors flex-1"
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
