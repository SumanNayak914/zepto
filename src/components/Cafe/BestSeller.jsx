import React, { useState } from "react";

const BestSeller = () => {
  const [showAll, setShowAll] = useState(false);
  const [addedItems, setAddedItems] = useState({});

  const products = [
    {
      id: 1,
      name: "Cappuccino",
      qty: "250 ml",
      price: 129,
      oldPrice: 179,
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500",
    },
    {
      id: 2,
      name: "Veg Sandwich",
      qty: "1 Pc",
      price: 149,
      oldPrice: 199,
      image: "https://images.unsplash.com/photo-1604908177453-d7f8e68cf8f3?w=500",
    },
    {
      id: 3,
      name: "Mocha",
      qty: "250 ml",
      price: 139,
      oldPrice: 189,
      image: "https://images.unsplash.com/photo-1581349486303-2b6d9f42c1b8?w=500",
    },
    {
      id: 4,
      name: "Paneer Wrap",
      qty: "1 Pc",
      price: 169,
      oldPrice: 229,
      image: "https://images.unsplash.com/photo-1625944524656-c53b2e7d1d85?w=500",
    },
    {
      id: 5,
      name: "Espresso",
      qty: "60 ml",
      price: 89,
      oldPrice: 119,
      image: "https://images.unsplash.com/photo-1579992394782-69f4a1a7f191?w=500",
    },
    {
      id: 6,
      name: "Veg Puff",
      qty: "1 Pc",
      price: 59,
      oldPrice: 89,
      image: "https://images.unsplash.com/photo-1604908813010-1e49fbaac2ff?w=500",
    },
    {
      id: 7,
      name: "Caramel Latte",
      qty: "250 ml",
      price: 159,
      oldPrice: 219,
      image: "https://images.unsplash.com/photo-1558877385-81a1c7e98e0d?w=500",
    },
    {
      id: 8,
      name: "Veg Burger",
      qty: "1 Pc",
      price: 179,
      oldPrice: 249,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
    },
    {
      id: 9,
      name: "Brownie",
      qty: "1 Pc",
      price: 99,
      oldPrice: 149,
      image: "https://images.unsplash.com/photo-1599785209793-2a7f8ab0b8ff?w=500",
    },
    {
      id: 10,
      name: "Cafe Latte",
      qty: "250 ml",
      price: 139,
      oldPrice: 199,
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500",
    },
  ];

  const handleAddClick = (itemId) => {
    setAddedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const visibleProducts = showAll ? products : products.slice(0, 6);

  return (
    <div className="bg-gray-50  p-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-xl md:text-2xl font-bold text-left mb-4 text-gray-800">
          Best Seller
        </h2>

        {/* Mobile Grid Layout (3x2 = 6 products visible initially) */}
        <div className="block md:hidden">
          <div className="grid grid-cols-3 gap-3 mb-4">
            {visibleProducts.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-sm border relative overflow-hidden"
              >
                {/* Image square */}
                <div className="w-full aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-bold text-green-600">₹{item.price}</span>
                    <span className="line-through text-gray-400 text-xs">₹{item.oldPrice}</span>
                  </div>
                  <p className="text-gray-500 text-xs mb-1">{item.qty}</p>
                  <p className="font-medium text-xs truncate leading-tight">{item.name}</p>
                </div>

                {/* ADD/ADDED Button */}
                <button
                  onClick={() => handleAddClick(item.id)}
                  className={`absolute bottom-1 right-1 px-2 py-1 rounded-full text-xs font-bold transition-all duration-200 ${
                    addedItems[item.id]
                      ? 'bg-green-500 text-white border border-green-500'
                      : 'bg-white border border-pink-500 text-pink-500 hover:bg-pink-50'
                  }`}
                >
                  {addedItems[item.id] ? '✓' : 'ADD'}
                </button>
              </div>
            ))}
          </div>

          {/* See All / Show Less Button for Mobile */}
          {products.length > 6 && (
            <div className="text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="bg-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-600 transition-colors"
              >
                {showAll ? 'Show Less' : `See All (${products.length - 6} more)`}
              </button>
            </div>
          )}
        </div>

        {/* Desktop/Tablet Horizontal Scroll */}
        <div className="hidden md:block">
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-4 snap-x">
            {products.map((item) => (
              <div
                key={item.id}
                className="min-w-[90px] sm:min-w-[110px] max-w-[120px] bg-white rounded-lg relative snap-start"
              >
                {/* Image square */}
                <div className="w-full aspect-square overflow-hidden rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-2 text-[11px] sm:text-sm">
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-semibold">₹{item.price}</span>
                    <span className="line-through text-gray-400 text-[10px]">
                      ₹{item.oldPrice}
                    </span>
                  </div>
                  <p className="text-gray-500 text-[10px]">{item.qty}</p>
                  <p className="font-medium truncate">{item.name}</p>
                </div>

                {/* ADD Button */}
                <button 
                  onClick={() => handleAddClick(item.id)}
                  className={`absolute bottom-2 right-2 px-2 py-[1px] rounded-full text-[10px] font-bold transition-all duration-200 ${
                    addedItems[item.id]
                      ? 'bg-green-500 text-white border border-green-500'
                      : 'bg-white border border-pink-500 text-pink-500 hover:bg-pink-50'
                  }`}
                >
                  {addedItems[item.id] ? '✓' : 'ADD'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Custom CSS for hiding scrollbar */}
        <style jsx>{`
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </div>
  );
};

export default BestSeller;