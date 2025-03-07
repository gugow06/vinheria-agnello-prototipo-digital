
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Search, ShoppingCart, Wine } from "lucide-react";
import { useCart } from "../contexts/CartContext";

const Navbar: React.FC = () => {
  const { getTotalItems } = useCart();
  const location = useLocation();

  return (
    <>
      {/* Top App Bar */}
      <header className="fixed top-0 left-0 right-0 z-10 bg-wine-DEFAULT h-16 text-white shadow-md max-w-lg mx-auto">
        <div className="h-full px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Wine size={24} />
            <h1 className="text-xl font-semibold">Vino Cartopia</h1>
          </div>
          <Link to="/search" className="p-2">
            <Search size={22} />
          </Link>
        </div>
      </header>
      
      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-10 bg-white bottom-nav max-w-lg mx-auto">
        <div className="flex justify-around py-3">
          <Link 
            to="/" 
            className={`flex flex-col items-center ${
              location.pathname === "/" ? "text-wine-DEFAULT" : "text-gray-500"
            }`}
          >
            <Home size={22} />
            <span className="text-xs mt-1">Home</span>
          </Link>
          
          <Link 
            to="/search" 
            className={`flex flex-col items-center ${
              location.pathname === "/search" ? "text-wine-DEFAULT" : "text-gray-500"
            }`}
          >
            <Search size={22} />
            <span className="text-xs mt-1">Search</span>
          </Link>
          
          <Link 
            to="/cart" 
            className={`flex flex-col items-center relative ${
              location.pathname === "/cart" ? "text-wine-DEFAULT" : "text-gray-500"
            }`}
          >
            <ShoppingCart size={22} />
            {getTotalItems() > 0 && (
              <span className="absolute -top-1 -right-1 bg-wine-DEFAULT text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {getTotalItems()}
              </span>
            )}
            <span className="text-xs mt-1">Cart</span>
          </Link>
        </div>
      </nav>
      
      {/* Content padding for fixed nav */}
      <div className="pb-16 pt-16"></div>
    </>
  );
};

export default Navbar;
