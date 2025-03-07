
import React from "react";
import { wines } from "../data/wines";
import WineCard from "../components/WineCard";
import Navbar from "../components/Navbar";
import { Wine } from "lucide-react";

const Index: React.FC = () => {
  // Filter wines by type
  const redWines = wines.filter(wine => wine.type === "Red Wine");
  const whiteWines = wines.filter(wine => wine.type === "White Wine");
  const champagnes = wines.filter(wine => wine.type === "Champagne");
  const roseWines = wines.filter(wine => wine.type === "Rosé Wine");

  return (
    <div className="mobile-container">
      <Navbar />
      
      <div className="px-4 py-6">
        {/* Hero Section */}
        <div className="bg-wine-DEFAULT text-white p-6 rounded-lg mb-6">
          <h1 className="text-2xl font-semibold mb-2">Welcome to Vino Cartopia</h1>
          <p className="text-wine-accent">Discover the finest wines from around the world</p>
        </div>
        
        {/* Featured Wines */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Featured Wines</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {wines.slice(0, 4).map(wine => (
              <WineCard key={wine.id} wine={wine} />
            ))}
          </div>
        </section>
        
        {/* Red Wines */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Red Wines</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {redWines.slice(0, 2).map(wine => (
              <WineCard key={wine.id} wine={wine} />
            ))}
          </div>
        </section>
        
        {/* White Wines */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">White Wines</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {whiteWines.slice(0, 2).map(wine => (
              <WineCard key={wine.id} wine={wine} />
            ))}
          </div>
        </section>
        
        {/* Champagne Section */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Champagne & Sparkling</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {champagnes.slice(0, 2).map(wine => (
              <WineCard key={wine.id} wine={wine} />
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="mb-8 bg-wine-accent/20 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-semibold flex items-center">
              <Wine size={20} className="mr-2 text-wine-DEFAULT" />
              About Vino Cartopia
            </h2>
          </div>
          <p className="text-sm text-gray-700">
            We curate the finest wines from renowned vineyards across the globe. 
            Whether you're a wine connoisseur or just beginning your journey, 
            we have the perfect bottle for every palate and occasion.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Index;
