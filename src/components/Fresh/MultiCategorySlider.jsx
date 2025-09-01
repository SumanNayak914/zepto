import React, { useState } from "react";

const MultiCategorySlider = () => {
  const [addedItems, setAddedItems] = useState({});

  const freshFruits = [
    { id: 1, name: "Apple", qty: "1 Kg", price: 120, oldPrice: 150, image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=500" },
    { id: 2, name: "Banana", qty: "1 Dozen", price: 40, oldPrice: 50, image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500" },
    { id: 3, name: "Orange", qty: "1 Kg", price: 80, oldPrice: 100, image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=500" },
    { id: 4, name: "Mango", qty: "1 Kg", price: 150, oldPrice: 180, image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=500" },
    { id: 5, name: "Grapes", qty: "500 g", price: 90, oldPrice: 120, image: "https://images.unsplash.com/photo-1537640538966-79f369143b8f?w=500" },
    { id: 6, name: "Strawberry", qty: "250 g", price: 200, oldPrice: 250, image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=500" },
    { id: 7, name: "Pomegranate", qty: "1 Kg", price: 180, oldPrice: 220, image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=500" },
    { id: 8, name: "Watermelon", qty: "1 Pc", price: 60, oldPrice: 80, image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500" },
  ];

  const leafyHerbsSeasoning = [
    { id: 101, name: "Spinach", qty: "1 Bunch", price: 20, oldPrice: 30, image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500" },
    { id: 102, name: "Mint", qty: "1 Bunch", price: 15, oldPrice: 25, image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=500" },
    { id: 103, name: "Coriander", qty: "1 Bunch", price: 15, oldPrice: 20, image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500" },
    { id: 104, name: "Fenugreek", qty: "1 Bunch", price: 25, oldPrice: 35, image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500" },
    { id: 105, name: "Basil", qty: "1 Bunch", price: 30, oldPrice: 40, image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=500" },
    { id: 106, name: "Oregano", qty: "50 g", price: 80, oldPrice: 100, image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500" },
    { id: 107, name: "Thyme", qty: "50 g", price: 90, oldPrice: 120, image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=500" },
    { id: 108, name: "Rosemary", qty: "50 g", price: 85, oldPrice: 110, image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500" },
  ];

  const exoticsPremium = [
    { id: 201, name: "Avocado", qty: "1 Pc", price: 150, oldPrice: 200, image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=500" },
    { id: 202, name: "Dragon Fruit", qty: "1 Pc", price: 180, oldPrice: 220, image: "https://images.unsplash.com/photo-1526318472351-c75fcf070305?w=500" },
    { id: 203, name: "Kiwi", qty: "4 Pcs", price: 120, oldPrice: 160, image: "https://images.unsplash.com/photo-1585059895524-72359e06133a?w=500" },
    { id: 204, name: "Blueberry", qty: "125 g", price: 300, oldPrice: 380, image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=500" },
    { id: 205, name: "Cherry", qty: "250 g", price: 400, oldPrice: 500, image: "https://images.unsplash.com/photo-1528821128474-27f963b062bf?w=500" },
    { id: 206, name: "Asparagus", qty: "250 g", price: 250, oldPrice: 300, image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=500" },
    { id: 207, name: "Zucchini", qty: "500 g", price: 80, oldPrice: 100, image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=500" },
    { id: 208, name: "Baby Corn", qty: "250 g", price: 60, oldPrice: 80, image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=500" },
  ];

  const plantsFlowers = [
    { id: 301, name: "Rose Plant", qty: "1 Pot", price: 150, oldPrice: 200, image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500" },
    { id: 302, name: "Marigold", qty: "1 Pot", price: 80, oldPrice: 100, image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500" },
    { id: 303, name: "Jasmine", qty: "1 Pot", price: 120, oldPrice: 150, image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500" },
    { id: 304, name: "Tulsi Plant", qty: "1 Pot", price: 100, oldPrice: 130, image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500" },
    { id: 305, name: "Money Plant", qty: "1 Pot", price: 90, oldPrice: 120, image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500" },
    { id: 306, name: "Cactus", qty: "1 Pot", price: 70, oldPrice: 90, image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500" },
    { id: 307, name: "Succulent", qty: "1 Pot", price: 60, oldPrice: 80, image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500" },
    { id: 308, name: "Aloe Vera", qty: "1 Pot", price: 80, oldPrice: 100, image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500" },
  ];

  const categories = [
    { title: "Fresh Fruits", data: freshFruits, color: "orange" },
    { title: "Leafy & Herbs & Seasoning", data: leafyHerbsSeasoning, color: "green" },
    { title: "Exotics & Premium", data: exoticsPremium, color: "purple" },
    { title: "Plants & Flowers", data: plantsFlowers, color: "pink" },
  ];

  const handleAddClick = (itemId) => {
    setAddedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const getColorClasses = (color, isAdded) => {
    const colorMap = {
      orange: isAdded 
        ? "bg-orange-500 text-white border border-orange-500" 
        : "bg-white border border-orange-500 text-orange-500 hover:bg-orange-50",
      green: isAdded 
        ? "bg-green-500 text-white border border-green-500" 
        : "bg-white border border-green-500 text-green-500 hover:bg-green-50",
      purple: isAdded 
        ? "bg-purple-500 text-white border border-purple-500" 
        : "bg-white border border-purple-500 text-purple-500 hover:bg-purple-50",
      pink: isAdded 
        ? "bg-pink-500 text-white border border-pink-500" 
        : "bg-white border border-pink-500 text-pink-500 hover:bg-pink-50",
    };
    return colorMap[color];
  };

  const getTitleColorClass = (color) => {
    const colorMap = {
      orange: "text-orange-700",
      green: "text-green-700",
      purple: "text-purple-700",
      pink: "text-pink-700",
    };
    return colorMap[color];
  };

  return (
    <div className="bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto space-y-4">
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            {/* Category Heading */}
            <h2 className={`text-2xl md:text-3xl font-bold text-left mb-4 ${getTitleColorClass(category.color)}`}>
              {category.title}
            </h2>

            {/* Scroll container */}
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-4">
              {category.data.map((item) => (
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
                    className={`absolute bottom-2 right-2 px-2 py-1 rounded-full text-xs font-bold transition-all duration-200 ${getColorClasses(category.color, addedItems[item.id])}`}
                  >
                    {addedItems[item.id] ? "ADDED" : "ADD"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}

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

export default MultiCategorySlider;