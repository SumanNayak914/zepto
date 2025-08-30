import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Adrak Chai (No Sugar)",
    qty: "250 ml",
    price: 77,
    oldPrice: 189,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500",
  },
  {
    id: 2,
    name: "Chole Kulche",
    qty: "Serves 1",
    price: 107,
    oldPrice: 659,
    image: "https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?w=500",
  },
  {
    id: 3,
    name: "Plain Maggi",
    qty: "1 Portion",
    price: 47,
    oldPrice: 169,
    image: "https://images.unsplash.com/photo-1626074353762-6b8b63d31589?w=500",
  },
  {
    id: 4,
    name: "Spanish Coffee",
    qty: "350 ml",
    price: 101,
    oldPrice: 539,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500",
  },
  {
    id: 5,
    name: "Chocolate Mousse",
    qty: "1 Piece",
    price: 71,
    oldPrice: 329,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500",
  },
  {
    id: 6,
    name: "Lemon Iced Tea",
    qty: "450 ml",
    price: 77,
    oldPrice: 279,
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500",
  },
  {
    id: 7,
    name: "Egg Maggi",
    qty: "1 Portion",
    price: 77,
    oldPrice: 209,
    image: "https://images.unsplash.com/photo-1626074353441-d5f6f49e87e9?w=500",
  },
  {
    id: 8,
    name: "Cold Coffee",
    qty: "300 ml",
    price: 89,
    oldPrice: 199,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=500",
  },
  {
    id: 9,
    name: "Brownie",
    qty: "1 Piece",
    price: 59,
    oldPrice: 149,
    image: "https://images.unsplash.com/photo-1628191011211-87b98d34658f?w=500",
  },
  {
    id: 10,
    name: "Pasta Arrabbiata",
    qty: "1 Portion",
    price: 129,
    oldPrice: 289,
    image: "https://images.unsplash.com/photo-1627308595216-439b387441b0?w=500",
  },
];

const CafeCategory = () => {
  const [showAll, setShowAll] = useState(false);
  const [addedItems, setAddedItems] = useState({});

  const handleAddClick = (itemId) => {
    setAddedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const visibleProducts = showAll ? products : products.slice(0, 6);

  return (
    <div className="bg-gray-50  p-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-left mb-6 text-gray-800">
          Handpicked For You!
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

        {/* Desktop/Tablet Horizontal Scroll - 7 products visible */}
        <div className="hidden md:block">
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
            {products.map((item) => (
              <div
                key={item.id}
                className="min-w-[120px] max-w-[140px] bg-white rounded-lg shadow-sm border relative flex-shrink-0"
              >
                {/* Image square */}
                <div className="w-full aspect-square overflow-hidden rounded-t-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-2">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-bold text-green-600">₹{item.price}</span>
                    <span className="line-through text-gray-400 text-xs">₹{item.oldPrice}</span>
                  </div>
                  <p className="text-gray-500 text-xs mb-1">{item.qty}</p>
                  <p className="font-medium text-xs">{item.name}</p>
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

export default CafeCategory;