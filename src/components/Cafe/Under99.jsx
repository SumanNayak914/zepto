import React, { useState } from "react";

const Under99 = () => {
  const [showAll, setShowAll] = useState(false);
  const [addedItems, setAddedItems] = useState({});

  // Products under 99
  const products = [
    {
      id: 1,
      name: "Hot Milk  ",
      qty: "180 ml",
      price: 25,
      oldPrice: 40,
      image:"https://cdn.zeptonow.com/production/tr:w-403,ar-3842-3842,pr-true,f-auto,q-80/cms/product_variant/71698c46-0ca2-4702-abd5-80b18f9024d2.jpeg",
    },
    {
      id: 2,
      name: "Tawa Plain Paratha - Pack of 2",
      qty: "2 Pieces",
      price: 30,
      oldPrice: 45,
      image:"https://cdn.zeptonow.com/production/tr:w-403,ar-4579-4579,pr-true,f-auto,q-80/cms/product_variant/c64cab0a-4c25-40d3-87ea-964fb8533920.jpeg",
    },
    {
      id: 3,
      name: "Butter Popcorn Bag",
      qty: "1 Bottle",
      price: 45,
      oldPrice: 60,
      image:"https://cdn.zeptonow.com/production/tr:w-403,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/3d9adf43-3522-4d78-974e-4dfa0626e1bd.jpeg",
    },
    {
      id: 4,
      name: "Masala Chaas",
      qty: "1 Piece",
      price: 40,
      oldPrice: 55,
      image:"https://cdn.zeptonow.com/production/tr:w-403,ar-3916-3916,pr-true,f-auto,q-80/cms/product_variant/7f01981f-9b95-4b81-b2a1-859871122f0e.jpeg",
    },
    {
      id: 5,
      name: "Kesari Rasmalai ",
      qty: "1 Cup",
      price: 35,
      oldPrice: 50,
      image:"https://cdn.zeptonow.com/production/tr:w-403,ar-5198-5198,pr-true,f-auto,q-80/cms/product_variant/877caa67-3037-4e5f-bf03-bfb76d2a7413.jpeg",
    },
    {
      id: 6,
      name: "Wheat Chapati - Pack of 10",
      qty: "Pack of 10",
      price: 98,
      oldPrice: 179,
      image:"https://cdn.zeptonow.com/production/tr:w-403,ar-4487-4487,pr-true,f-auto,q-80/cms/product_variant/21d61d6b-b585-4b37-88f7-5e9ac3168edb.jpeg",
    },
    {
      id: 7,
      name: "Wheat Chapati - Pack of 5",
      qty: "1 Plate",
      price: 59,
      oldPrice: 99,
      image:"https://cdn.zeptonow.com/production/tr:w-403,ar-4487-4487,pr-true,f-auto,q-80/cms/product_variant/21d61d6b-b585-4b37-88f7-5e9ac3168edb.jpeg",
    },
    {
      id: 8,
      name: "Cheese Maggi ",
      qty: "1 Portion",
      price: 89,
      oldPrice: 190,
      image:"https://cdn.zeptonow.com/production/tr:w-403,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/f4b05def-9f0b-4fc1-a1ba-55b8714aaa72.jpeg",
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
          Under 99
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

export default Under99;
