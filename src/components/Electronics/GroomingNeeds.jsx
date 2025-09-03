import React, { useState } from "react";

const GroomingNeed = () => {
  const [addedItems, setAddedItems] = useState({});
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      id: 0,
      name: "Beard Trimmers",
      icon: "🧔",
      color: "pink",
      data: [
        {
          id: 101,
          name: "Philips OneBlade Turbo2X Trimmer",
          qty: "1 pc",
          price: 1899,
          oldPrice: 2199,
          image: "https://cdn.zeptonow.com/production/tr:w-403,ar-1200-1200,pr-true,f-auto,q-80/cms/product_variant/512c486f-f77e-4ddf-8775-65cd08ed2dff.jpeg"
        },
        {
          id: 102,
          name: "Winston 2 in 1 Face & Eyebrow Trimmer",
          qty: "1 pc",
          price: 1899,
          oldPrice: 2990,
          image: "https://cdn.zeptonow.com/production/tr:w-403,ar-1200-1200,pr-true,f-auto,q-80/cms/product_variant/512c486f-f77e-4ddf-8775-65cd08ed2dff.jpeg"
        },
        {
          id: 103,
          name: "Morphy Richards Kingsman Elite",
          qty: "1 pc",
          price: 999,
          oldPrice: 1999,
          image: "https://cdn.zeptonow.com/production/tr:w-403,ar-1200-1200,pr-true,f-auto,q-80/cms/product_variant/512c486f-f77e-4ddf-8775-65cd08ed2dff.jpeg"
        }
      ]
    },
    {
      id: 1,
      name: "Body Trimmers",
      icon: "🪒",
      color: "orange",
      data: [
        {
          id: 201,
          name: "Philips Body Groomer",
          qty: "1 pc",
          price: 2499,
          oldPrice: 3299,
          image: "https://images.unsplash.com/photo-1600185365483-d2f4f3d1cf9d?w=300"
        }
      ]
    },
    {
      id: 2,
      name: "Straighteners & Curlers",
      icon: "💇‍♀️",
      color: "purple",
      data: [
        {
          id: 301,
          name: "Havells Hair Straightener",
          qty: "1 pc",
          price: 1599,
          oldPrice: 2299,
          image: "https://images.unsplash.com/photo-1596464716125-9f3765d7e02a?w=300"
        }
      ]
    },
    {
      id: 3,
      name: "Hair Dryers",
      icon: "💨",
      color: "green",
      data: [
        {
          id: 401,
          name: "Syska Hair Dryer",
          qty: "1 pc",
          price: 899,
          oldPrice: 1399,
          image: "https://images.unsplash.com/photo-1618244972963-2bfa9a9e15f8?w=300"
        }
      ]
    },
    {
      id: 4,
      name: "Personal Care",
      icon: "✨",
      color: "blue",
      data: [
        {
          id: 501,
          name: "Nova Nose & Ear Trimmer",
          qty: "1 pc",
          price: 599,
          oldPrice: 999,
          image: "https://images.unsplash.com/photo-1629196918051-3fa029b5bf20?w=300"
        }
      ]
    }
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
      blue: isAdded
        ? "bg-blue-500 text-white border border-blue-500"
        : "bg-white border border-blue-500 text-blue-500 hover:bg-blue-50",
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
            <h1 className="text-xl md:text-3xl font-bold text-black ">Grooming Needs</h1>
            <div className="w-8 h-8   md:w-12 md:h-12 bg-pink-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">🪒</span>
            </div>
          </div>
           <button className="flex items-center gap-2 bg-white px-2  md:px-3  rounded-full shadow-sm  border-1 border-gray-300 hover:shadow-md transition-shadow">
            <span className="font-bold text-gray-800">See All</span>
            <span className="text-gray-600 text-2xl md:text-3xl pb-2">›</span>
          </button>

        </div>

        {/* Category Tabs */}
        <div className="flex gap-3 sm:gap-6 overflow-x-auto no-scrollbar mb-6">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(index)}
              className={`flex-shrink-0 flex flex-col items-center pb-2 transition-all duration-200 relative min-w-0 ${
                activeCategory === index ? 'text-pink-500' : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <div className={`w-12 h-12 mb-2 rounded-full flex items-center justify-center ${
                activeCategory === index ? 'bg-pink-100' : 'bg-gray-100'
              }`}>
                <span className="text-xl">{category.icon}</span>
              </div>
              <span className="text-xs sm:text-sm font-medium text-center leading-tight max-w-16 sm:max-w-none">
                {category.name}
              </span>
              {activeCategory === index && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-pink-500"></div>
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
                  <span className="text-sm font-bold text-green-600">₹{item.price}</span>
                  <span className="line-through text-gray-400 text-xs">₹{item.oldPrice}</span>
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

export default GroomingNeed;
