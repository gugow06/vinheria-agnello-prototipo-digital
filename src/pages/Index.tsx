import React from "react";
import { wines } from "../data/wines";
import WineCard from "../components/WineCard";
import Navbar from "../components/Navbar";
import { Wine, GlassWater, Sparkles, Grape } from "lucide-react";
import { Link } from "react-router-dom";

const Index: React.FC = () => {
  // Filter wines by type
  const redWines = wines.filter(wine => wine.type === "Red Wine");
  const whiteWines = wines.filter(wine => wine.type === "White Wine");
  const champagnes = wines.filter(wine => wine.type === "Champagne");
  const roseWines = wines.filter(wine => wine.type === "Rosé Wine");

  return (
    <div className="mobile-container">
      <Navbar />
      <div className="pb-16">
        {/* Hero Banner Section - Full width without margins */}
        <div className="relative h-64 w-full overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" 
            alt="Wine Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-3xl font-bold text-white mb-2">Agnello</h1>
              <p className="text-wine-accent text-sm">Descubra vinhos excepcionais de todo o mundo</p>
            </div>
          </div>
        </div>
        
        <div className="px-4 py-6">
          {/* Wine Type Buttons */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-wine-DEFAULT">Explore Vinhos</h2>
            <div className="grid grid-cols-2 gap-3">
              <Link 
                to="/category/red" 
                className="bg-red-wine-gradient rounded-lg p-4 flex flex-col items-center hover:shadow-md transition-all duration-300 transform hover:scale-[1.02]"
              >
                <Grape size={24} className="text-white mb-2" />
                <span className="font-medium text-white">Vinhos Tintos</span>
              </Link>
              <Link 
                to="/category/white" 
                className="bg-white-wine-gradient rounded-lg p-4 flex flex-col items-center hover:shadow-md transition-all duration-300 transform hover:scale-[1.02]"
              >
                <GlassWater size={24} className="text-redwine-DEFAULT mb-2" />
                <span className="font-medium text-redwine-DEFAULT">Vinhos Brancos</span>
              </Link>
              <Link 
                to="/category/rose" 
                className="bg-rose-wine-gradient rounded-lg p-4 flex flex-col items-center hover:shadow-md transition-all duration-300 transform hover:scale-[1.02]"
              >
                <Wine size={24} className="text-redwine-DEFAULT mb-2" />
                <span className="font-medium text-redwine-DEFAULT">Vinhos Rosé</span>
              </Link>
              <Link 
                to="/category/champagne" 
                className="bg-champagne-gradient rounded-lg p-4 flex flex-col items-center hover:shadow-md transition-all duration-300 transform hover:scale-[1.02]"
              >
                <Sparkles size={24} className="text-redwine-DEFAULT mb-2" />
                <span className="font-medium text-redwine-DEFAULT">Champagne</span>
              </Link>
            </div>
          </div>
          
          {/* Featured Wines */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-wine-DEFAULT">Vinhos em Destaque</h2>
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
              <h2 className="text-xl font-semibold text-redwine-DEFAULT">Vinhos Tintos</h2>
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
              <h2 className="text-xl font-semibold text-whitewine-dark">Vinhos Brancos</h2>
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
              <h2 className="text-xl font-semibold text-champagne-dark">Champagne & Espumantes</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {champagnes.slice(0, 2).map(wine => (
                <WineCard key={wine.id} wine={wine} />
              ))}
            </div>
          </section>

          {/* About Section */}
          <section className="mb-8 bg-wine-accent/20 p-4 rounded-lg border border-wine-accent/30">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-semibold flex items-center text-wine-DEFAULT">
                <Wine size={20} className="mr-2 text-wine-DEFAULT" />
                Sobre a Agnello
              </h2>
            </div>
            <p className="text-sm text-gray-700">
              Selecionamos os melhores vinhos de vinícolas renomadas de todo o mundo. 
              Seja você um conhecedor de vinhos ou apenas iniciando sua jornada, 
              temos a garrafa perfeita para cada paladar e ocasião.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Index;
