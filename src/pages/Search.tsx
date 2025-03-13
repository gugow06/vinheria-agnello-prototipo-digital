
import React, { useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import { wines } from "../data/wines";
import WineCard from "../components/WineCard";
import Navbar from "../components/Navbar";

const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredWines = wines.filter(wine => 
    wine.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    wine.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
    wine.origin.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mobile-container">
      <Navbar />
      
      <div className="px-4 py-6">
        <h1 className="text-2xl font-semibold mb-6">Buscar Vinhos</h1>
        
        <div className="relative mb-6">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Busque por vinhos, tipos, regiões..."
            className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wine-light"
          />
          <SearchIcon size={18} className="absolute left-3 top-3.5 text-gray-400" />
        </div>
        
        <div className="mb-4">
          <h2 className="text-lg font-medium mb-4">
            {searchQuery ? `Resultados para "${searchQuery}"` : "Explore Todos os Vinhos"}
          </h2>
          
          {filteredWines.length === 0 ? (
            <p className="text-center py-8 text-gray-500">
              Nenhum vinho encontrado. Tente outro termo de busca.
            </p>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {filteredWines.map(wine => (
                <WineCard key={wine.id} wine={wine} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
