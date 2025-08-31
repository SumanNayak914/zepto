import React, { useState } from "react";

const NewlyLaunched = () => {
  const [showAll, setShowAll] = useState(false);
  const [addedItems, setAddedItems] = useState({});

  const products = [
    {
      id: 1,
      name: "Blueberry Cheesecake",
      qty: "1 Slice",
      price: 149,
      image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500",
    },
    {
      id: 2,
      name: "Cold Brew Coffee",
      qty: "300 ml",
      price: 99,
      image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500",
    },
    {
      id: 3,
      name: "Strawberry Shake",
      qty: "300 ml",
      price: 119,
      image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500",
    },
    {
      id: 4,
      name: "Chocolate Muffin",
      qty: "1 Pc",
      price: 79,
      image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500",
    },
    {
      id: 5,
      name: "Mango Smoothie",
      qty: "250 ml",
      price: 139,
      image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500",
    },
    {
      id: 6,
      name: "Red Velvet Pastry",
      qty: "1 Slice",
      price: 129,
      image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500",
    },
    {
      id: 7,
      name: "Hot Chocolate",
      qty: "250 ml",
      price: 89,
      image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500",
    },
    {
      id: 8,
      name: "Oreo Shake",
      qty: "300 ml",
      price: 129,
      image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500",
    },
    {
      id: 9,
      name: "Classic Donut",
      qty: "1 Pc",
      price: 59,
      image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500",
    },
    {
      id: 10,
      name: "Lemon Iced Tea",
      qty: "300 ml",
      price: 99,
      image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500",
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
    <div className="bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-left mb-6 text-gray-800">
          Newly Launched
        </h2>

        {/* Mobile Grid Layout (3x2 = 6 products visible initially) */}
        <div className="block md:hidden">
          <div className="grid grid-cols-3 gap-3 mb-4">
            {visibleProducts.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg  relative overflow-hidden"
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
                  <p className="font-medium text-xs mb-1 leading-tight">{item.name}</p>
                  <p className="text-gray-500 text-xs mb-1">{item.qty}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-green-600">₹{item.price}</span>
                  </div>
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

        {/* Desktop/Tablet Horizontal Scroll - 7 products visible */}
        <div className="hidden md:block">
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
            {products.map((item) => (
              <div
                key={item.id}
                className="min-w-[120px] max-w-[140px] bg-white rounded-lg   relative flex-shrink-0"
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
                <div className="p-2">
                  <p className="font-medium text-xs mb-1">{item.name}</p>
                  <p className="text-gray-500 text-xs mb-1">{item.qty}</p>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-bold text-green-600">₹{item.price}</span>
                  </div>
                </div>

                {/* ADD/ADDED Button */}
                <button
                  onClick={() => handleAddClick(item.id)}
                  className={`absolute bottom-2 right-2 px-2 py-1 rounded-full text-xs font-bold transition-all duration-200 ${
                    addedItems[item.id]
                      ? 'bg-green-500 text-white border border-green-500'
                      : 'bg-white border border-pink-500 text-pink-500 hover:bg-pink-50'
                  }`}
                >
                  {addedItems[item.id] ? 'ADDED' : 'ADD'}
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

export default NewlyLaunched;