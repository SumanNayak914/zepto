import React, { useState } from "react";

const BestSeller = () => {
  const [showAll, setShowAll] = useState(false);
  const [addedItems, setAddedItems] = useState({});

  const products = [
    {
      id: 1,
      name: "Plain Maggi",
      qty: "1 portion",
      price: 79,
      oldPrice: 169,
      image: "https://cdn.zeptonow.com/production/tr:w-312,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/bda5d838-4eda-4990-9032-9fc5d5cc284a.jpeg",
    },
    {
      id: 2,
      name: "Vietnamese Cold Coffee",
      qty: "450 ml",
      price: 189,
      oldPrice: 499,
      image: "https://cdn.zeptonow.com/production/tr:w-403,ar-5304-5304,pr-true,f-auto,q-80/cms/product_variant/9bc896d4-229d-45a4-8294-b36f97f5992c.jpeg",
    },
    {
      id: 3,
      name: "Chocolate Mousse",
      qty: "1 piece",
      price: 119,
      oldPrice: 389,
      image: "https://cdn.zeptonow.com/production/tr:w-403,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/2a827af7-5559-4f9b-90cd-c26ef9906f8c.jpeg",
    },
    {
      id: 4,
      name: "Masala Chaas",
      qty: "450 ml",
      price: 99,
      oldPrice: 129,
      image: "https://cdn.zeptonow.com/production/tr:w-403,ar-3916-3916,pr-true,f-auto,q-80/cms/product_variant/7f01981f-9b95-4b81-b2a1-859871122f0e.jpeg",
    },
    {
      id: 5,
      name: "Spanish Coffee",
      qty: "350 ml",
      price: 189,
      oldPrice: 319,
      image: "https://cdn.zeptonow.com/production/tr:w-403,ar-4615-4615,pr-true,f-auto,q-80/cms/product_variant/3d3c7b5f-5c45-477d-9706-0ef2cf64d7e0.jpeg",
    },
    {
      id: 6,
      name: "Adrak chai",
      qty: "Serves 2",
      price: 129,
      oldPrice: 189,
      image: "https://cdn.zeptonow.com/production/tr:w-403,ar-4240-4240,pr-true,f-auto,q-80/cms/product_variant/1a767035-d4d1-4444-b690-b2a3e54a12d4.jpeg",
    },
    {
      id: 7,
      name: "Garlic Bread with Cheese Dip",
      qty: "1 portion",
      price: 129,
      oldPrice: 219,
      image: "https://cdn.zeptonow.com/production/tr:w-403,ar-4972-4972,pr-true,f-auto,q-80/cms/product_variant/f6990adb-b15d-4190-9c28-799be3b5b812.jpeg",
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
      name: "Chili Cheese Toast ",
      qty: "2 Pc",
      price: 59,
      oldPrice: 169,
      image: "https://cdn.zeptonow.com/production/tr:w-403,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/daae3363-e28a-474c-a3e3-5f9f3d9d3053.jpeg",
    },
    {
      id: 10,
      name: "Chicken Puff",
      qty: "1 piece",
      price: 80,
      oldPrice: 189,
      image: "https://cdn.zeptonow.com/production/tr:w-403,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/b354a4d2-ffc7-4216-b92e-fc91a07453d9.jpeg",
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
    <div className="bg-gray-50 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-left mb-6 text-gray-800">
          Best Seller
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
                    <span className="line-through text-gray-400 text-xs">₹{item.oldPrice}</span>
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
                className="min-w-[120px] max-w-[140px] bg-white rounded-lg  relative flex-shrink-0"
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
                    <span className="line-through text-gray-400 text-xs">₹{item.oldPrice}</span>
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

export default BestSeller;