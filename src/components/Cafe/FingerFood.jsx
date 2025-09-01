import React, { useState } from "react";

const FingerFood = () => {
  const [showAll, setShowAll] = useState(false);
  const [addedItems, setAddedItems] = useState({});

  // Finger Food Products
  const products = [
    {
      id: 1,
      name: "Chicken Tandoori Momos",
      qty: "6 pieces",
      price: 159,
      oldPrice: 399,
      image: "https://cdn.zeptonow.com/production/tr:w-403,ar-4318-4318,pr-true,f-auto,q-80/cms/product_variant/693055b3-9e4e-46f8-b963-d88d35ce35f9.jpeg",
    },
    {
      id: 2,
      name: "Veg Tandoori Momos  ",
      qty: "6 Pieces",
      price: 149,
      oldPrice: 249,
      image: "https://cdn.zeptonow.com/production/tr:w-403,ar-4318-4318,pr-true,f-auto,q-80/cms/product_variant/e983c62e-ee68-4443-b768-5a7960d05a64.jpeg",
    },
    {
      id: 3,
      name: "Butter Chicken Steamed Bao",
      qty: "2 pieces",
      price: 129,
      oldPrice: 299,
      image: "https://cdn.zeptonow.com/production/tr:w-403,ar-5198-5198,pr-true,f-auto,q-80/cms/product_variant/8bb09df1-c095-475d-8aed-c0be55a175da.jpeg",
    },
    {
      id: 4,
      name: "Chicken Shawarma Roti",
      qty: "3 Pieces",
      price: 179,
      oldPrice: 259,
      image: "https://cdn.zeptonow.com/production/tr:w-403,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/b354a4d2-ffc7-4216-b92e-fc91a07453d9.jpeg",
    },
    {
      id: 5,
      name: "Butter Chicken",
      qty: "Serve 1",
      price: 159,
      oldPrice: 229,
      image: "https://cdn.zeptonow.com/production/tr:w-403,ar-4579-4579,pr-true,f-auto,q-80/cms/product_variant/c64cab0a-4c25-40d3-87ea-964fb8533920.jpeg",
    },
    {
      id: 5,
      name: "Chicken Shawarma Sandwich",
      qty: "Serve 1",
      price: 159,
      oldPrice: 229,
      image: "https://cdn.zeptonow.com/production/tr:w-403,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/38f024c6-0e9d-457e-972c-b8d2a62a9520.jpeg",
    },
  ];

  const handleAddClick = (itemId) => {
    setAddedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const visibleProducts = showAll ? products : products.slice(0, 6);

  return (
    <div className="bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-left mb-6 text-gray-800">
          Finger Food
        </h2>

        {/* Mobile Grid Layout */}
        <div className="block md:hidden">
          <div className="grid grid-cols-3 gap-3 mb-4">
            {visibleProducts.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg relative overflow-hidden"
              >
                <div className="w-full aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <div className="p-2">
                  <p className="font-medium text-xs mb-1 leading-tight">
                    {item.name}
                  </p>
                  <p className="text-gray-500 text-xs mb-1">{item.qty}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-green-600">
                      ₹{item.price}
                    </span>
                    <span className="line-through text-gray-400 text-xs">
                      ₹{item.oldPrice}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleAddClick(item.id)}
                  className={`absolute bottom-1 right-1 px-2 py-1 rounded-full text-xs font-bold transition-all duration-200 ${
                    addedItems[item.id]
                      ? "bg-green-500 text-white border border-green-500"
                      : "bg-white border border-pink-500 text-pink-500 hover:bg-pink-50"
                  }`}
                >
                  {addedItems[item.id] ? "✓" : "ADD"}
                </button>
              </div>
            ))}
          </div>

          {products.length > 6 && (
            <div className="text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="bg-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-600 transition-colors"
              >
                {showAll
                  ? "Show Less"
                  : `See All (${products.length - 6} more)`}
              </button>
            </div>
          )}
        </div>

        {/* Desktop/Tablet Horizontal Scroll */}
        <div className="hidden md:block">
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
            {products.map((item) => (
              <div
                key={item.id}
                className="min-w-[120px] max-w-[140px] bg-white rounded-lg relative flex-shrink-0"
              >
                <div className="w-full aspect-square overflow-hidden rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <div className="p-2">
                  <p className="font-medium text-xs mb-1">{item.name}</p>
                  <p className="text-gray-500 text-xs mb-1">{item.qty}</p>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-bold text-green-600">
                      ₹{item.price}
                    </span>
                    <span className="line-through text-gray-400 text-xs">
                      ₹{item.oldPrice}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleAddClick(item.id)}
                  className={`absolute bottom-2 right-2 px-2 py-1 rounded-full text-xs font-bold transition-all duration-200 ${
                    addedItems[item.id]
                      ? "bg-green-500 text-white border border-green-500"
                      : "bg-white border border-pink-500 text-pink-500 hover:bg-pink-50"
                  }`}
                >
                  {addedItems[item.id] ? "ADDED" : "ADD"}
                </button>
              </div>
            ))}
          </div>
        </div>

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

export default FingerFood;
