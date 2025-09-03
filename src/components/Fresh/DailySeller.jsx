import React, { useState } from "react";

const DailySeller = () => {
  const [addedItems, setAddedItems] = useState({});

  // Daily Best Seller Products (example data)
  const dailySellers = [
    { id: 1, name: "Milk(Amul)", qty: "1 L", price: 35, oldPrice: 65, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/628c97e0-5ed4-425d-a667-1d3bfa6f0bde.png" },
    { id: 2, name: "Bread (Whole Wheat)", qty: "400 g", price: 35, oldPrice: 45, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/5b0b324b-9b14-4b97-9aef-c8045b734e95.png" },
    { id: 3, name: "Eggs (Farm Fresh)", qty: "12 Pcs", price: 70, oldPrice: 85, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/fb06ce0a-39c5-4bfd-9e01-0e371a720752.png" },
    { id: 4, name: "Paneer", qty: "200 g", price: 80, oldPrice: 95, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/b417bd0e-7f26-4940-8c0e-9826b8908ffa.png" },
    { id: 5, name: "Butter(Amul)", qty: "500 g", price: 220, oldPrice: 250, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/613787ac-f983-4cfb-b534-e219c8d47b39.png" },
    { id: 6, name: "Curd (Amul)", qty: "500 g", price: 40, oldPrice: 50, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/4be01dbe-2807-4c3b-8603-57ddf559df1c.png" },
    { id: 7, name: "Aashirvaad Atta", qty: "1 kg", price: 50, oldPrice: 70, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/99c07f65-9c5b-4fc4-927b-7be3f2bea854.png" },
    { id: 8, name: "Freedom Refined Sunflower Oil", qty: "1 L", price: 150, oldPrice: 179, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/cf66afec-297b-476e-9f56-3b7bd8186c2d.png" },
    { id: 9, name: "Tata Salt", qty: "1 kg", price: 30, oldPrice: 49, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/691b74b3-ba1c-4ffe-ac6a-48a52c67eec6.png" },
    { id: 10, name: "Tata Tea Premium", qty: "250 gm", price: 130, oldPrice: 249, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/62a98c6c-ae6c-4182-89ee-bf722d291eb4.png" },
  ];

  const handleAddClick = (itemId) => {
    setAddedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const getColorClasses = (isAdded) => {
    return isAdded
      ? "bg-purple-500 text-white border border-purple-500"
      : "bg-white border border-purple-500 text-purple-500 hover:bg-purple-50";
  };

  return (
    <div className="bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-lg sm:text-xl font-bold mb-4 text-gray-800">
           Daily Best Sellers
        </h2>

        {/* Daily Seller Slider */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-4">
          {dailySellers.map((item) => (
            <div
              key={item.id}
              className="
                bg-white relative flex-shrink-0
                w-[calc((100vw-48px)/3)]
                sm:min-w-[140px] sm:max-w-[140px]
                md:min-w-[160px] md:max-w-[160px]
                rounded-lg 
                shadow-sm
              "
            >
              {/* Product Image */}
              <div className="w-full h-24 sm:h-32 md:h-36 overflow-hidden rounded-t-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
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
                className={`absolute bottom-2 right-2 px-2 py-1 rounded-full text-xs font-bold transition-all duration-200 ${getColorClasses(addedItems[item.id])}`}
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

export default DailySeller;
