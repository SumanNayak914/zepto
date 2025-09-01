
import React, { useState } from "react";

const VegetableSlider = () => {
  const [addedItems, setAddedItems] = useState({});

  const vegetables = [
    { id: 1, name: "Tomato", qty: "1 Kg", price: 45, oldPrice: 60, image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=500" },
    { id: 2, name: "Potato", qty: "1 Kg", price: 30, oldPrice: 40, image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=500" },
    { id: 3, name: "Onion", qty: "1 Kg", price: 35, oldPrice: 50, image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=500" },
    { id: 4, name: "Carrot", qty: "500 g", price: 25, oldPrice: 35, image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=500" },
    { id: 5, name: "Cauliflower", qty: "1 Pc", price: 40, oldPrice: 55, image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=500" },
    { id: 6, name: "Broccoli", qty: "250 g", price: 60, oldPrice: 80, image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=500" },
    { id: 7, name: "Spinach", qty: "1 Bunch", price: 20, oldPrice: 30, image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=500" },
    { id: 8, name: "Capsicum", qty: "500 g", price: 50, oldPrice: 65, image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=500" },
    { id: 9, name: "Cucumber", qty: "1 Kg", price: 35, oldPrice: 45, image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=500" },
    { id: 10, name: "Brinjal", qty: "1 Kg", price: 40, oldPrice: 55, image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=500" },
    { id: 11, name: "Beans", qty: "500 g", price: 35, oldPrice: 50, image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=500" },
    { id: 12, name: "Peas", qty: "500 g", price: 55, oldPrice: 70, image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=500" },
    { id: 13, name: "Ginger", qty: "250 g", price: 30, oldPrice: 40, image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=500" },
    { id: 14, name: "Garlic", qty: "250 g", price: 35, oldPrice: 50, image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=500" },
    { id: 15, name: "Mushroom", qty: "200 g", price: 70, oldPrice: 90, image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=500" },
  ];

  const handleAddClick = (itemId) => {
    setAddedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  return (
    <div className="bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-left mb-6 text-gray-800">
          Fresh Vegetables
        </h2>

        {/* Scroll container */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-4">
          {vegetables.map((item) => (
            <div
              key={item.id}
              className="
                bg-white relative flex-shrink-0
                w-[calc((100vw-48px)/3)]
                sm:min-w-[140px] sm:max-w-[140px]
                md:min-w-[160px] md:max-w-[160px]
                rounded-lg 
              "
            >
              {/* Image */}
              <div className="w-full h-24 sm:h-32 md:h-36 overflow-hidden rounded-t-lg rounded-b-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Content */}
              <div className="p-2">
                <p className="font-medium text-xs mb-1 truncate">{item.name}</p>
                <p className="text-gray-500 text-xs mb-1">{item.qty}</p>
                <div className="flex items-center gap-1 mb-2">
                  <span className="text-sm font-bold text-green-600">
                    ₹{item.price}
                  </span>
                  <span className="line-through text-gray-400 text-xs">
                    ₹{item.oldPrice}
                  </span>
                </div>
              </div>

              {/* ADD/ADDED Button */}
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

        {/* Hide scrollbar */}
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

export default VegetableSlider;
