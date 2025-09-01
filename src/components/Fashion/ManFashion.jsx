import React, { useState } from "react";

const ManFashion = () => {
  const [addedItems, setAddedItems] = useState({});
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      id: 0,
      name: "T-shirts",
      icon: "👕",
      color: "blue",
      data: [
        {
          id: 101,
          name: "Casual Cotton T-shirt",
          qty: "1 pc",
          price: 499,
          oldPrice: 799,
          image: "http://googleusercontent.com/image_collection/image_retrieval/2242795664354066422",
        },
        {
          id: 102,
          name: "Graphic Print Tee",
          qty: "1 pc",
          price: 599,
          oldPrice: 899,
          image: "https://images.unsplash.com/photo-1622470717282-e56598c1b3f7?q=80&w=300",
        },
        {
          id: 103,
          name: "Polo Neck T-shirt",
          qty: "1 pc",
          price: 799,
          oldPrice: 1199,
          image: "https://images.unsplash.com/photo-1598032734185-3006c4b92b60?q=80&w=300",
        },
      ],
    },
    {
      id: 1,
      name: "Shirts",
      icon: "👔",
      color: "green",
      data: [
        {
          id: 201,
          name: "Men's Denim Shirt",
          qty: "1 pc",
          price: 1299,
          oldPrice: 1899,
          image: "http://googleusercontent.com/image_collection/image_retrieval/17465257710697176584",
        },
        {
          id: 202,
          name: "Linen Casual Shirt",
          qty: "1 pc",
          price: 1599,
          oldPrice: 2099,
          image: "https://images.unsplash.com/photo-1621255535372-e42100868a2f?q=80&w=300",
        },
      ],
    },
    {
      id: 2,
      name: "Jeans",
      icon: "👖",
      color: "purple",
      data: [
        {
          id: 301,
          name: "Slim Fit Jeans",
          qty: "1 pc",
          price: 1799,
          oldPrice: 2499,
          image: "http://googleusercontent.com/image_collection/image_retrieval/400838684342238527",
        },
      ],
    },
    {
      id: 3,
      name: "Footwear",
      icon: "👟",
      color: "orange",
      data: [
        {
          id: 401,
          name: "Men's Sports Shoes",
          qty: "1 pair",
          price: 2199,
          oldPrice: 3599,
          image: "http://googleusercontent.com/image_collection/image_retrieval/1833425761710025674",
        },
      ],
    },
  ];

  const handleAddClick = (itemId) => {
    setAddedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const getColorClasses = (color, isAdded) => {
    const colorMap = {
      blue: isAdded
        ? "bg-blue-500 text-white border border-blue-500"
        : "bg-white border border-blue-500 text-blue-500 hover:bg-blue-50",
      green: isAdded
        ? "bg-green-500 text-white border border-green-500"
        : "bg-white border border-green-500 text-green-500 hover:bg-green-50",
      purple: isAdded
        ? "bg-purple-500 text-white border border-purple-500"
        : "bg-white border border-purple-500 text-purple-500 hover:bg-purple-50",
      orange: isAdded
        ? "bg-orange-500 text-white border border-orange-500"
        : "bg-white border border-orange-500 text-orange-500 hover:bg-orange-50",
    };
    return colorMap[color];
  };

  const currentCategory = categories[activeCategory];

  return (
    <div className="bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <span className="text-gray-400 text-sm font-medium">FOR YOUR</span>
        </div>
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <h1 className="text-4xl md:text-5xl font-bold text-black">Men's Fashion</h1>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">👨</span>
            </div>
          </div>
          <button className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md border-2 border-gray-300 font-bold hover:shadow-lg transition-all whitespace-nowrap">
            <span className="text-gray-800">See All</span>
            <span className="text-gray-600">›</span>
          </button>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-3 sm:gap-6 overflow-x-auto no-scrollbar mb-6">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(index)}
              className={`flex-shrink-0 flex flex-col items-center pb-2 transition-all duration-200 relative min-w-0 ${
                activeCategory === index ? "text-blue-500" : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <div
                className={`w-12 h-12 mb-2 rounded-full flex items-center justify-center ${
                  activeCategory === index ? "bg-blue-100" : "bg-gray-100"
                }`}
              >
                <span className="text-xl">{category.icon}</span>
              </div>
              <span className="text-xs sm:text-sm font-medium text-center leading-tight max-w-16 sm:max-w-none">
                {category.name}
              </span>
              {activeCategory === index && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"></div>
              )}
            </button>
          ))}
        </div>

        {/* Selected Category Slider */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-4">
          {currentCategory.data.map((item) => (
            <div
              key={item.id}
              className="bg-white relative flex-shrink-0
                w-[calc((100vw-48px)/3)]
                sm:min-w-[140px] sm:max-w-[140px]
                md:min-w-[160px] md:max-w-[160px]
                rounded-lg shadow-sm"
            >
              <div className="w-full h-24 sm:h-32 md:h-36 overflow-hidden rounded-t-lg rounded-b-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-2">
                <p className="font-medium text-xs mb-1 truncate">{item.name}</p>
                <p className="text-gray-500 text-xs mb-1">{item.qty}</p>
                <div className="flex items-center gap-1 mb-2">
                  <span className="text-sm font-bold text-blue-600">₹{item.price}</span>
                </div>
              </div>
              <button
                onClick={() => handleAddClick(item.id)}
                className={`absolute bottom-2 right-2 px-2 py-1 rounded-full text-xs font-bold transition-all duration-200 ${getColorClasses(currentCategory.color, addedItems[item.id])}`}
              >
                {addedItems[item.id] ? "ADDED" : "ADD"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManFashion;