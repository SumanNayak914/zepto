import React, { useState, useEffect } from 'react';
import { Search, User, ShoppingCart, ChevronDown, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeZepto, setActiveZepto] = useState('zepto');
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);

  const searchPlaceholders = [
    "amul butter",
    "maggi noodles", 
    "coca cola",
    "dairy milk",
    "basmati rice",
    "sunflower oil",
    "colgate paste",
    "tata salt"
  ];

  // index auto-change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlaceholderIndex((prev) => (prev + 1) % searchPlaceholders.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [searchPlaceholders.length]);

  const categories = [
    { name: 'All', image:"https://cdn.zeptonow.com/production/inventory/banner/a767cf6e-9113-409b-b5ab-ac0d22a7db58.png", active: true },
    { name: 'Cafe', image: "https://cdn.zeptonow.com/production/inventory/banner/e8abccfb-64fe-4249-84d3-426eccf01e23.png" },
    { name: 'Home', image:"https://cdn.zeptonow.com/production/inventory/banner/be82f78d-d993-4838-9f4a-4c64cd387126.png"  },
    { name: 'Toys', image:"https://cdn.zeptonow.com/production/inventory/banner/b6960301-bb3c-4b75-af0e-433a8ce0a6b9.png" },
    { name: 'Fresh', image: "https://cdn.zeptonow.com/production/inventory/banner/8e8a58b9-f2d7-46fb-9634-930b016499fa.png" },
    { name: 'Electronics', image: "https://cdn.zeptonow.com/production/inventory/banner/5c9a7bea-68b1-4bad-9fab-44cc940b72ee.png" },
     { name: 'Mobiles', image:"https://cdn.zeptonow.com/production/inventory/banner/c882779f-738d-46f8-8656-8ebb72246b46.png" },
    { name: 'Beauty', image:"https://cdn.zeptonow.com/production/inventory/banner/fcb1b518-5047-4aee-a6c4-3677c801d2ca.png"  },
    { name: 'Fashion', image:"https://cdn.zeptonow.com/production/inventory/banner/331fa0bc-afda-409d-a201-acc3deedaa2d.png"},
  ];

  const mobileCategories = [
    { name: 'All', image: "https://cdn.zeptonow.com/production/inventory/banner/a767cf6e-9113-409b-b5ab-ac0d22a7db58.png" },
    { name: 'Cafe', image: "https://cdn.zeptonow.com/production/inventory/banner/e8abccfb-64fe-4249-84d3-426eccf01e23.png" },
    { name: 'Home', image: "https://cdn.zeptonow.com/production/inventory/banner/be82f78d-d993-4838-9f4a-4c64cd387126.png" },
    { name: 'Toys', image: "https://cdn.zeptonow.com/production/inventory/banner/b6960301-bb3c-4b75-af0e-433a8ce0a6b9.png" },
   { name: 'Fresh', image: "https://cdn.zeptonow.com/production/inventory/banner/8e8a58b9-f2d7-46fb-9634-930b016499fa.png" },
    { name: 'Electronics', image: "https://cdn.zeptonow.com/production/inventory/banner/5c9a7bea-68b1-4bad-9fab-44cc940b72ee.png" },
    { name: 'Mobiles', image:"https://cdn.zeptonow.com/production/inventory/banner/c882779f-738d-46f8-8656-8ebb72246b46.png" },
     { name: 'Beauty', image:"https://cdn.zeptonow.com/production/inventory/banner/fcb1b518-5047-4aee-a6c4-3677c801d2ca.png"  },
    { name: 'Fashion', image: "https://cdn.zeptonow.com/production/inventory/banner/331fa0bc-afda-409d-a201-acc3deedaa2d.png" },
  ];

  return (
    // Main header container with responsive backgrounds
    <div className="bg-[#EEBF65] md:bg-gradient-to-b md:from-purple-100 md:to-white shadow-sm">
      
      {/* Desktop and Tablet Header */}
      <div className="hidden md:block">
        <div className="px-4">
         
          <div className="flex items-center justify-between py-3  ">
            
            <div className="flex items-center space-x-3 pl-12 ">
              <div className="text-white font-semibold text-3xl bg-purple-600 rounded-full py-2 px-6 text-center">
                zepto
              </div>
              <div className="bg-gray-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium">
                zepto Super Saver
              </div>
            </div>

            {/* Location Selector */}
            <div className="flex items-center space-x-2 cursor-pointer">
              <MapPin className="w-5 h-5 text-black" />
              {/* Updated text for better fit */}
              <span className="text-gray-700 font-medium">Location</span>
              <ChevronDown className="w-4 h-4 text-black" />
            </div>

            {/* Search Bar */}
            {/* Removed horizontal margin to give more space */}
            <div className="flex-1 max-w-lg">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                
                {searchQuery === '' && (
                  <div className="absolute left-10 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400">
                    <div className="flex items-center">
                      <span>Search for </span>
                      <div className="relative overflow-hidden h-6 mx-1 w-32">
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={currentPlaceholderIndex}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.6 }}
                            className="absolute inset-0 flex items-center font-medium text-gray-500 whitespace-nowrap"
                          >
                            "{searchPlaceholders[currentPlaceholderIndex]}"
                          </motion.span>
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-6 pr-6">
              <div className="flex items-center space-x-1 cursor-pointer">
                <User className="w-5 h-5 text-black" />
                <span className="text-gray-700 font-medium">Login</span>
              </div>
              <div className="flex items-center space-x-1 cursor-pointer">
                <ShoppingCart className="w-5 h-5 text-black" />
                <span className="text-gray-700 font-medium">Cart</span>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="max-w-7xl mx-auto px-4 border-t border-gray-100 py-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
            <div className="flex items-center space-x-8">
              {categories.map((category, index) => {
                return (
                  <div
                    key={index}
                    className={`flex items-center space-x-2 cursor-pointer py-2 px-3 rounded-lg transition-colors ${
                      category.active 
                        ? 'text-purple-600 bg-purple-50 border-b-2 border-purple-600' 
                        : 'text-gray-600 hover:text-purple-600 hover:bg-gray-50'
                    }`}
                  >
                    <img src={category.image} alt={category.name} className="w-5 h-5" />
                    <span className="font-medium">{category.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden">
        <div className="px-4 py-3">
          {/* Zepto Buttons - Centered and Wider */}
          <div className="flex justify-center mb-4">
            <div className="bg-gray-100 rounded-full p-1 w-72 max-w-full">
              <div className="flex">
                <button
                  onClick={() => setActiveZepto('zepto')}
                  className={`flex-1 py-2.5 px-6 rounded-full font-semibold text-sm transition-all duration-300 ${
                    activeZepto === 'zepto'
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-purple-600'
                  }`}
                >
                  zepto
                </button>
                <button
                  onClick={() => setActiveZepto('super-saver')}
                  className={`flex-1 py-2.5 px-4 rounded-full font-medium text-sm transition-all duration-300 whitespace-nowrap ${
                    activeZepto === 'super-saver'
                      ? 'bg-green-50 text-green-600 shadow-lg'
                      : 'text-green-600 hover:text-green-700'
                  }`}
                >
                  zepto Super Saver
                </button>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center space-x-2 mb-3 cursor-pointer">
            <MapPin className="w-4 h-4 text-black" />
            <span className="text-sm text-gray-700 font-medium">Select Location</span>
            <ChevronDown className="w-3 h-3 text-black" />
          </div>

          {/* Mobile Search Bar */}
          <div className="mb-4">
            <div className="relative bg-white rounded-lg border border-gray-200">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-transparent border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
              />
              
              {!searchQuery && (
                <div className="absolute left-9 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <div className="flex items-center text-sm text-gray-400">
                    <span>Search for </span>
                    <div className="relative overflow-hidden h-5 mx-1 w-24">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={currentPlaceholderIndex}
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -20, opacity: 0 }}
                          transition={{ duration: 0.6 }}
                          className="absolute inset-0 flex items-center font-medium text-gray-500 whitespace-nowrap"
                        >
                          "{searchPlaceholders[currentPlaceholderIndex]}"
                        </motion.span>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Categories */}
          <div className="flex items-center space-x-6 overflow-x-auto whitespace-nowrap scrollbar-hide">
            {mobileCategories.map((category, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center space-x-2 cursor-pointer min-w-0 flex-shrink-0"
                >
                  <img src={category.image} alt={category.name} className="w-5 h-5" />
                  <span className="text-sm font-medium text-gray-700">{category.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;