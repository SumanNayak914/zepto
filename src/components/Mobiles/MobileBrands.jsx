import React, { useState } from "react";

const MobileBrands = () => {
  const [addedItems, setAddedItems] = useState({});
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      id: 0,
      name: "Apple",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png",
      color: "gray",
      data: [
        {
          id: 101,
          name: "iPhone 15 Pro Max",
          qty: "1 pc",
          price: 159900,
          oldPrice: 179900,
          image: "https://images.unsplash.com/photo-1695287313049-7e8c3f761005?q=80&w=300"
        },
        {
          id: 102,
          name: "iPhone 15",
          qty: "1 pc",
          price: 79900,
          oldPrice: 89900,
          image: "https://images.unsplash.com/photo-1694763073359-3914a4087e02?q=80&w=300"
        },
        {
          id: 103,
          name: "iPhone 14",
          qty: "1 pc",
          price: 69900,
          oldPrice: 79900,
          image: "https://images.unsplash.com/photo-1662999406439-e4839818817a?q=80&w=300"
        }
      ]
    },
    {
      id: 1,
      name: "Samsung",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png",
      color: "blue",
      data: [
        {
          id: 201,
          name: "Galaxy S24 Ultra",
          qty: "1 pc",
          price: 139999,
          oldPrice: 159999,
          image: "https://images.unsplash.com/photo-1704285810260-eb24e4d58066?q=80&w=300"
        },
        {
          id: 202,
          name: "Galaxy Z Fold 5",
          qty: "1 pc",
          price: 154999,
          oldPrice: 169999,
          image: "https://images.unsplash.com/photo-1691238965902-1811565a443a?q=80&w=300"
        }
      ]
    },
    {
      id: 2,
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
      color: "red",
      data: [
        {
          id: 301,
          name: "Pixel 8 Pro",
          qty: "1 pc",
          price: 109999,
          oldPrice: 119999,
          image: "https://images.unsplash.com/photo-1697207663486-0775d7870e6e?q=80&w=300"
        }
      ]
    },
    {
      id: 3,
      name: "OnePlus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/archive/d/df/20210210101700%21OnePlus_Logo.png/600px-OnePlus_Logo.png",
      color: "orange",
      data: [
        {
          id: 401,
          name: "OnePlus 12",
          qty: "1 pc",
          price: 64999,
          oldPrice: 69999,
          image: "https://images.unsplash.com/photo-1678122394541-e945e4e8e19c?q=80&w=300"
        }
      ]
    },
    {
      id: 4,
      name: "Nothing",
      logo: "https://images.crunchbase.com/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/fgbqf6t4k7553hht41o9",
      color: "black",
      data: [
        {
          id: 501,
          name: "Nothing Phone (2)",
          qty: "1 pc",
          price: 39999,
          oldPrice: 45999,
          image: "https://images.unsplash.com/photo-1690325450849-c183785197b1?q=80&w=300"
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
      red: isAdded
        ? "bg-red-500 text-white border border-red-500"
        : "bg-white border border-red-500 text-red-500 hover:bg-red-50",
      blue: isAdded
        ? "bg-blue-500 text-white border border-blue-500"
        : "bg-white border border-blue-500 text-blue-500 hover:bg-blue-50",
      orange: isAdded
        ? "bg-orange-500 text-white border border-orange-500"
        : "bg-white border border-orange-500 text-orange-500 hover:bg-orange-50",
      gray: isAdded
        ? "bg-gray-800 text-white border border-gray-800"
        : "bg-white border border-gray-800 text-gray-800 hover:bg-gray-100",
      black: isAdded
        ? "bg-black text-white border border-black"
        : "bg-white border border-black text-black hover:bg-gray-100",
    };
    return colorMap[color];
  };

  const currentCategory = categories[activeCategory];

  return (
    <div className="bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <span className="text-gray-400 text-sm font-medium">FOR ALL YOUR</span>
        </div>

        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <h1 className="text-4xl md:text-5xl font-bold text-black">Mobile Brands</h1>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">📱</span>
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
                activeCategory === index ? 'text-blue-500' : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <div className={`w-12 h-12 mb-2 rounded-full flex items-center justify-center ${
                activeCategory === index ? 'bg-blue-100' : 'bg-gray-100'
              }`}>
                <img src={category.logo} alt={`${category.name} Logo`} className="h-6 w-6 object-contain" />
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

export default MobileBrands;