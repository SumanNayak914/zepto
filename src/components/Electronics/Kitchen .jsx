import React, { useState } from "react";

const Kitchen = () => {
  const [addedItems, setAddedItems] = useState({});
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      id: 0,
      name: "Juicers & Mixers",
      icon: "🥤",
      color: "pink",
      data: [
        { 
          id: 101, 
          name: "Bajaj Pluto Mixer", 
          qty: "1 pc", 
          price: 2299, 
          oldPrice: 4125, 
          image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop"
        },
        { 
          id: 102, 
          name: "Philips Juicer", 
          qty: "1 pc", 
          price: 1899, 
          oldPrice: 2999, 
          image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=300&h=300&fit=crop"
        },
        { 
          id: 103, 
          name: "Preethi Mixer", 
          qty: "1 pc", 
          price: 3299, 
          oldPrice: 5199, 
          image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop"
        }
      ]
    },
    {
      id: 1,
      name: "Electric Cookware",
      icon: "🍳",
      color: "orange",
      data: [
        { 
          id: 201, 
          name: "Electric Kettle", 
          qty: "1 pc", 
          price: 899, 
          oldPrice: 1299, 
          image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300&h=300&fit=crop"
        },
        { 
          id: 202, 
          name: "Electric Cooker", 
          qty: "1 pc", 
          price: 1199, 
          oldPrice: 1899, 
          image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop"
        }
      ]
    },
    {
      id: 2,
      name: "Toasters",
      icon: "🍞",
      color: "purple",
      data: [
        { 
          id: 301, 
          name: "Pop Up Toaster", 
          qty: "1 pc", 
          price: 1599, 
          oldPrice: 2299, 
          image: "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=300&h=300&fit=crop"
        },
        { 
          id: 302, 
          name: "Auto Toaster", 
          qty: "1 pc", 
          price: 2199, 
          oldPrice: 3199, 
          image: "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=300&h=300&fit=crop"
        }
      ]
    },
    {
      id: 3,
      name: "Coffee Maker",
      icon: "☕",
      color: "green",
      data: [
        { 
          id: 401, 
          name: "Coffee Maker", 
          qty: "1 pc", 
          price: 2899, 
          oldPrice: 4199, 
          image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=300&fit=crop"
        },
        { 
          id: 402, 
          name: "Instant Pot", 
          qty: "1 pc", 
          price: 3999, 
          oldPrice: 5999, 
          image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=300&fit=crop"
        }
      ]
    },
    {
      id: 4,
      name: "Kettles & Egg Boilers",
      icon: "🥚",
      color: "blue",
      data: [
        { 
          id: 501, 
          name: "Hand Blender", 
          qty: "1 pc", 
          price: 1519, 
          oldPrice: 2100, 
          image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop"
        },
        { 
          id: 502, 
          name: "Electric Kettle", 
          qty: "1 pc", 
          price: 799, 
          oldPrice: 1299, 
          image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300&h=300&fit=crop"
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
          <div className="flex items-center gap-3">
            <span className="text-gray-400 text-sm font-medium">SET UP YOUR</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <h1 className="text-4xl md:text-5xl font-bold text-black">Kitchen</h1>
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">🥤</span>
            </div>
          </div>
          <button className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm border hover:shadow-md transition-shadow">
            <span className="font-semibold text-gray-800">See All</span>
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
                activeCategory === index ? 'text-pink-500' : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              {/* Category Icon */}
              <div className={`w-12 h-12 mb-2 rounded-full flex items-center justify-center ${
                activeCategory === index ? 'bg-pink-100' : 'bg-gray-100'
              }`}>
                <span className="text-xl">{category.icon}</span>
              </div>
              
              <span className="text-xs sm:text-sm font-medium text-center leading-tight max-w-16 sm:max-w-none">
                {category.name}
              </span>
              
              {/* Active underline */}
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
                className={`absolute bottom-2 right-2 px-2 py-1 rounded-full text-xs font-bold transition-all duration-200 ${getColorClasses(currentCategory.color, addedItems[item.id])}`}
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
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Kitchen;