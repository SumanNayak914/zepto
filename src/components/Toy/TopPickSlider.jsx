// TopPickSlider.jsx
import React, { useState } from "react";

const defaultTopPicks = [
  {
    id: 1,
    name: "Chocolate Box",
    qty: "250 g",
    price: 299,
    oldPrice: 399,
    image:
      "https://images.unsplash.com/photo-1606313564200-e0da9f6c8ef8?w=500",
  },
  {
    id: 2,
    name: "Premium Coffee",
    qty: "200 g",
    price: 499,
    oldPrice: 649,
    image:
      "https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?w=500",
  },
  {
    id: 3,
    name: "Wireless Earbuds",
    qty: "1 Set",
    price: 1499,
    oldPrice: 1999,
    image:
      "https://images.unsplash.com/photo-1585386959984-a4155224a1a9?w=500",
  },
  {
    id: 4,
    name: "Fitness Watch",
    qty: "Smart Band",
    price: 1999,
    oldPrice: 2499,
    image:
      "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?w=500",
  },
  {
    id: 5,
    name: "Scented Candles",
    qty: "Pack of 4",
    price: 599,
    oldPrice: 799,
    image:
      "https://images.unsplash.com/photo-1600794006242-3e6e9d8b38a6?w=500",
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    qty: "Mini",
    price: 1299,
    oldPrice: 1799,
    image:
      "https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=500",
  },
];

const TopPickSlider = ({ title = "Top Picks", items = defaultTopPicks }) => {
  const [addedItems, setAddedItems] = useState({});

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
          {title}
        </h2>

        {/* Scroll container */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-4">
          {items.map((item) => (
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
                  {item.oldPrice ? (
                    <span className="line-through text-gray-400 text-xs">
                      ₹{item.oldPrice}
                    </span>
                  ) : null}
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

export default TopPickSlider;
