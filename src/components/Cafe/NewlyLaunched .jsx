import React, { useState } from "react";

const NewlyLaunched = () => {
  const [showAll, setShowAll] = useState(false);
  const [addedItems, setAddedItems] = useState({});

  const products = [
    {
      id: 1,
      name: "Masala Chaas",
      qty: "450 ml",
      price: 99,
      image: "https://cdn.zeptonow.com/production/tr:w-403,ar-3916-3916,pr-true,f-auto,q-80/cms/product_variant/7f01981f-9b95-4b81-b2a1-859871122f0e.jpeg",
    },
    {
      id: 2,
      name: "Kesar Chai",
      qty: "150 ml",
      price: 49,
      oldPrice: 79,
      image: "https://cdn.zeptonow.com/production/tr:w-403,ar-5304-5304,pr-true,f-auto,q-80/cms/product_variant/9bc896d4-229d-45a4-8294-b36f97f5992c.jpeg",
    },
    {
      id: 3,
      name: "Cardamom Chai",
      qty: "150 ml",
      price: 39,
      oldPrice: 59,
      image: "https://cdn.zeptonow.com/production/tr:w-403,ar-5078-5078,pr-true,f-auto,q-80/cms/product_variant/2d3193cf-aa42-4836-ac49-7a95bcd5c83e.jpeg",
    },
    {
      id: 4,
      name: "Butter Chicken Steamed Bao",
      qty: "2 Pc",
      price: 119,
      oldPrice: 159,
      image: "https://cdn.zeptonow.com/production/tr:w-403,ar-5198-5198,pr-true,f-auto,q-80/cms/product_variant/8bb09df1-c095-475d-8aed-c0be55a175da.jpeg",
    },
    {
      id: 5,
      name: "Khao Suey Maggi",
      qty: "350g",
      price: 129,
      oldPrice: 279,
      image: "https://cdn.zeptonow.com/production/tr:w-403,ar-4418-4418,pr-true,f-auto,q-80/cms/product_variant/6cdc01ad-eccc-4aa5-8297-fbad7e7d7912.jpg",
    },
    {
      id: 6,
      name: "Muesli with Strawberry Greek Yogurt",
      qty: "180g",
      price: 179,
      oldPrice: 309,
      image: "https://cdn.zeptonow.com/production/tr:w-403,ar-3920-3920,pr-true,f-auto,q-80/cms/product_variant/2ef83614-2175-4422-b8d8-fb9bda5b79b8.jpeg",
    },
    {
      id: 7,
      name: "Plain Maggi",
      qty: "1 portion",
      price: 79,
      oldPrice: 169,
      image: "https://cdn.zeptonow.com/production/tr:w-312,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/bda5d838-4eda-4990-9032-9fc5d5cc284a.jpeg",
    },
    {
      id: 8,
      name: "Chicken Tikka Sandwich",
      qty: "2 serves",
      price: 169,
      image: "https://cdn.zeptonow.com/production/tr:w-403,ar-3403-3403,pr-true,f-auto,q-80/cms/product_variant/4b77d28d-1aa0-4671-81db-bce5fda2426a.jpeg",
    },
    {
      id: 9,
      name: "Chole Samose ",
      qty: "1 Portion",
      price: 149,
      image: "https://cdn.zeptonow.com/production/tr:w-403,ar-5198-5198,pr-true,f-auto,q-80/cms/product_variant/1b66e21a-e02c-4e6e-bf1f-e3507b1ee055.jpeg",
    },
    {
      id: 10,
      name: "Butter Popcorn Bag",
      qty: "Serve 1",
      price: 99,
      image: "https://cdn.zeptonow.com/production/tr:w-403,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/3d9adf43-3522-4d78-974e-4dfa0626e1bd.jpeg",
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