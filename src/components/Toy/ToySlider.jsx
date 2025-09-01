// ToySlider.jsx
import React, { useState } from "react";

const defaultToys = [
  {
    id: 1,
    name: "Remote Car",
    qty: "1 Pc",
    price: 499,
    oldPrice: 699,
    image:
      "https://images.unsplash.com/photo-1600697395549-1c39b4a59a91?w=500",
  },
  {
    id: 2,
    name: "Teddy Bear",
    qty: "30 cm",
    price: 349,
    oldPrice: 499,
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500",
  },
  {
    id: 3,
    name: "Building Blocks",
    qty: "60 pcs",
    price: 599,
    oldPrice: 799,
    image:
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=500",
  },
  {
    id: 4,
    name: "Rubik's Cube",
    qty: "3x3",
    price: 199,
    oldPrice: 299,
    image:
      "https://images.unsplash.com/photo-1599948061143-3c4b5a5c6c2a?w=500",
  },
  {
    id: 5,
    name: "Doll House",
    qty: "Mini Set",
    price: 899,
    oldPrice: 1199,
    image:
      "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=500",
  },
  {
    id: 6,
    name: "Cricket Bat (Kids)",
    qty: "Size 3",
    price: 399,
    oldPrice: 549,
    image:
      "https://images.unsplash.com/photo-1599050751793-7ad1b5b9b5bd?w=500",
  },
  {
    id: 7,
    name: "Action Figure",
    qty: "1 Pc",
    price: 449,
    oldPrice: 599,
    image:
      "https://images.unsplash.com/photo-1598899134739-24f3e8a8b8b0?w=500",
  },
  {
    id: 8,
    name: "Kitchen Set",
    qty: "12 pcs",
    price: 529,
    oldPrice: 749,
    image:
      "https://images.unsplash.com/photo-1620192866564-0c3f94a639a5?w=500",
  },
  {
    id: 9,
    name: "Puzzle Board",
    qty: "A-Z",
    price: 259,
    oldPrice: 349,
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=500",
  },
];

const ToySlider = ({ title = "Popular Toys", items = defaultToys }) => {
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

        {/* Hide scrollbar (same trick as your VegetableSlider) */}
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

export default ToySlider;
