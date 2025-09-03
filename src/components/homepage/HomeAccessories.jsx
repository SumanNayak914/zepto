import React, { useState } from "react";

const HomeAccessories = () => {
  const [addedItems, setAddedItems] = useState({});
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      id: 0,
      name: "Home Cleaning",
      icon: "🧹",
      color: "pink",
      data: [
        { 
          id: 101, 
          name: "Floor Mop", 
          qty: "1 pc", 
          price: 499, 
          oldPrice: 799, 
          image: "https://images.unsplash.com/photo-1600172454284-d4b1f79fa0fc?w=300&h=300&fit=crop"
        },
        { 
          id: 102, 
          name: "Cleaning Brush Set", 
          qty: "1 set", 
          price: 299, 
          oldPrice: 599, 
          image: "https://images.unsplash.com/photo-1616628182501-fc9e3ea364ab?w=300&h=300&fit=crop"
        }
      ]
    },
    {
      id: 1,
      name: "Storage & Organizers",
      icon: "🗄️",
      color: "orange",
      data: [
        { 
          id: 201, 
          name: "Plastic Storage Box", 
          qty: "1 pc", 
          price: 799, 
          oldPrice: 1299, 
          image: "https://images.unsplash.com/photo-1616628196625-bf27c65c1a01?w=300&h=300&fit=crop"
        },
        { 
          id: 202, 
          name: "Wardrobe Organizer", 
          qty: "1 pc", 
          price: 999, 
          oldPrice: 1499, 
          image: "https://images.unsplash.com/photo-1622537407846-70a63e32d65d?w=300&h=300&fit=crop"
        }
      ]
    },
    {
      id: 2,
      name: "Home Decor",
      icon: "🪞",
      color: "purple",
      data: [
        { 
          id: 301, 
          name: "Wall Clock", 
          qty: "1 pc", 
          price: 1199, 
          oldPrice: 1999, 
          image: "https://images.unsplash.com/photo-1582719471137-c3967ffb1c6d?w=300&h=300&fit=crop"
        },
        { 
          id: 302, 
          name: "Decorative Vase", 
          qty: "1 pc", 
          price: 699, 
          oldPrice: 1099, 
          image: "https://images.unsplash.com/photo-1600494447044-81a2e508d57c?w=300&h=300&fit=crop"
        }
      ]
    },
    {
      id: 3,
      name: "Lighting",
      icon: "💡",
      color: "green",
      data: [
        { 
          id: 401, 
          name: "LED Table Lamp", 
          qty: "1 pc", 
          price: 899, 
          oldPrice: 1599, 
          image: "https://images.unsplash.com/photo-1582719366764-ef042f2e88a3?w=300&h=300&fit=crop"
        },
        { 
          id: 402, 
          name: "Decorative String Lights", 
          qty: "1 set", 
          price: 499, 
          oldPrice: 899, 
          image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=300&h=300&fit=crop"
        }
      ]
    },
    {
      id: 4,
      name: "Tools & Hardware",
      icon: "🛠️",
      color: "blue",
      data: [
        { 
          id: 501, 
          name: "Screwdriver Kit", 
          qty: "1 set", 
          price: 599, 
          oldPrice: 999, 
          image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?w=300&h=300&fit=crop"
        },
        { 
          id: 502, 
          name: "Hammer", 
          qty: "1 pc", 
          price: 349, 
          oldPrice: 599, 
          image: "https://images.unsplash.com/photo-1616628262650-057d8a5c6d3c?w=300&h=300&fit=crop"
        }
      ]
    },
    {
      id: 5,
      name: "Curtains & Carpets",
      icon: "🪟",
      color: "purple",
      data: [
        { 
          id: 601, 
          name: "Window Curtains", 
          qty: "1 set", 
          price: 1599, 
          oldPrice: 2299, 
          image: "https://images.unsplash.com/photo-1625314897518-c44a1ef54eab?w=300&h=300&fit=crop"
        },
        { 
          id: 602, 
          name: "Living Room Carpet", 
          qty: "1 pc", 
          price: 2499, 
          oldPrice: 3599, 
          image: "https://images.unsplash.com/photo-1625315289284-63bc1f0c9af5?w=300&h=300&fit=crop"
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
            <h1 className="text-xl md:text-3xl font-bold text-black">Home Accessories</h1>
            <div className="w-8 h-8 md:w-12 md:h-12 bg-yellow-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">🧹</span>
            </div>
          </div>
          <button className="flex items-center gap-2 bg-white px-2 md:px-3 rounded-full shadow-sm border-1 border-gray-300 hover:shadow-md transition-shadow">
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

export default HomeAccessories;
