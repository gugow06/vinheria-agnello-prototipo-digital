
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Search, ShoppingCart, Wine, Menu, X } from "lucide-react";
import { useCart } from "../contexts/CartContext";

const Navbar: React.FC = () => {
  const { getTotalItems } = useCart();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Top App Bar */}
      <header className="fixed top-0 left-0 right-0 z-10 bg-white h-16 text-wine-DEFAULT shadow-md">
        <div className="h-full px-4 flex items-center justify-between max-w-[480px] mx-auto">
          <div className="flex items-center gap-2">
            <Wine size={24} />
            <h1 className="text-xl font-semibold">Agnello</h1>
          </div>
          <div className="flex items-center">
            <Link to="/search" className="p-2 mr-2">
              <Search size={22} />
            </Link>
            <button 
              onClick={toggleMenu} 
              className="p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        
        {/* Wine Categories Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white shadow-md z-20">
            <div className="p-4 max-w-[480px] mx-auto">
              <h2 className="font-semibold text-wine-DEFAULT mb-2">Wine Types</h2>
              <ul className="space-y-2 mb-4">
                <li>
                  <Link 
                    to="/category/red" 
                    className="block p-2 hover:bg-gray-100 rounded-md text-wine-DEFAULT"
                    onClick={toggleMenu}
                  >
                    Red Wines
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/category/white" 
                    className="block p-2 hover:bg-gray-100 rounded-md text-wine-DEFAULT"
                    onClick={toggleMenu}
                  >
                    White Wines
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/category/rose" 
                    className="block p-2 hover:bg-gray-100 rounded-md text-wine-DEFAULT"
                    onClick={toggleMenu}
                  >
                    Rosé Wines
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/category/champagne" 
                    className="block p-2 hover:bg-gray-100 rounded-md text-wine-DEFAULT"
                    onClick={toggleMenu}
                  >
                    Champagne & Sparkling
                  </Link>
                </li>
              </ul>
              
              <h2 className="font-semibold text-wine-DEFAULT mb-2">About</h2>
              <ul className="space-y-2">
                <li>
                  <Link 
                    to="/about" 
                    className="block p-2 hover:bg-gray-100 rounded-md text-wine-DEFAULT"
                    onClick={toggleMenu}
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </header>
      
      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-10 bg-white bottom-nav">
        <div className="flex justify-around py-3 max-w-[480px] mx-auto">
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
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
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
