import React, { useState } from "react";

const Meals = () => {
  const [showAll, setShowAll] = useState(false);
  const [addedItems, setAddedItems] = useState({});

  // Meals Products
  const products = [
    {
      id: 1,
      name: " Malai Chicken Tikka",
      qty: "6 pieces",
      price: 259,
      oldPrice: 499,
      image: "https://cdn.zeptonow.com/production/tr:w-403,ar-3842-3842,pr-true,f-auto,q-80/cms/product_variant/59ec5fca-0645-4960-871b-de0d683152ac.jpeg",
    },
    {
      id: 2,
      name: "Chicken Tikka Sandwich",
      qty: "Serves 1",
      price: 149,
      oldPrice: 249,
      image: "https://cdn.zeptonow.com/production/tr:w-403,ar-3403-3403,pr-true,f-auto,q-80/cms/product_variant/4b77d28d-1aa0-4671-81db-bce5fda2426a.jpeg",
    },
    {
      id: 3,
      name: "Chicken Tandoori Tikka",
      qty: "6 pieces",
      price: 299,
      oldPrice: 399,
      image: "https://cdn.zeptonow.com/production/tr:w-403,ar-3842-3842,pr-true,f-auto,q-80/cms/product_variant/64c96ed1-e34a-4d84-9b26-b11c0c738aae.jpeg",
    },
    {
      id: 4,
      name: "Chicken Shawarma Sandwich",
      qty: "serve 1",
      price: 179,
      oldPrice: 259,
      image: "https://cdn.zeptonow.com/production/tr:w-403,ar-3670-3670,pr-true,f-auto,q-80/cms/product_variant/d042d1ce-33d9-43d5-8d0e-db255ad56526.jpeg",
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
      id: 6,
      name: "Tawa Plain Paratha - Pack of 2",
      qty: "Pack of 2",
      price: 189,
      oldPrice: 269,
      image: "https://cdn.zeptonow.com/production/tr:w-403,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/38f024c6-0e9d-457e-972c-b8d2a62a9520.jpeg",
    },
    {
      id: 7,
      name: "Paneer Tandoori Tikka",
      qty: "6 Pieces",
      price: 349,
      oldPrice: 449,
      image: "https://cdn.zeptonow.com/production/tr:w-403,ar-1037-1037,pr-true,f-auto,q-80/cms/product_variant/6c5c7b96-f34d-42d6-b317-c5b1e5fbe3a0.jpeg",
    },
    {
      id: 8,
      name: "Chole Kulche ",
      qty: "Serves 1",
      price: 149,
      oldPrice: 219,
      image: "https://cdn.zeptonow.com/production/tr:w-403,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/da3bf048-ddb0-461f-9ab2-b267475da0d7.jpeg",
    },
    {
      id: 9,
      name: "Mutton Curry with Rice",
      qty: "Serves 1",
      price: 399,
      oldPrice: 499,
      image: "https://cdn.zeptonow.com/production/tr:w-403,ar-1058-1058,pr-true,f-auto,q-80/cms/product_variant/a9e16c85-de62-4714-ac98-d98507aec9c2.jpeg",
    },
    {
      id: 10,
      name: "Dal Makhani & Chapati",
      qty: "Serves 1",
      price: 219,
      oldPrice: 299,
      image: "https://cdn.zeptonow.com/production/tr:w-403,ar-3920-3920,pr-true,f-auto,q-80/cms/product_variant/6ffe4c1f-8785-421e-8ec2-96d879e07473.jpeg",
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
          Meals
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

export default Meals;
