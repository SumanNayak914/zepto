import React, { useState } from "react";

const BreakfastChai = () => {
  const [showAllBreakfast, setShowAllBreakfast] = useState(false);
  const [showAllChai, setShowAllChai] = useState(false);
  const [addedItems, setAddedItems] = useState({});

  const breakfast = [
    {
      id: 1,
      name: "Veg Sandwich",
      qty: "1 Pc",
      price: 89,
      oldPrice: 119,
      image: "https://images.unsplash.com/photo-1585032226651-759b7c2b3c29?w=500",
    },
    {
      id: 2,
      name: "Paneer Paratha",
      qty: "2 Pc",
      price: 129,
      oldPrice: 169,
      image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=500",
    },
    {
      id: 3,
      name: "Poha",
      qty: "1 Plate",
      price: 79,
      oldPrice: 109,
      image: "https://images.unsplash.com/photo-1625944524743-6b8aef9d8b74?w=500",
    },
    {
      id: 4,
      name: "Idli Sambhar",
      qty: "4 Pc",
      price: 99,
      oldPrice: 139,
      image: "https://images.unsplash.com/photo-1576402187878-974f5a12b3d8?w=500",
    },
    {
      id: 5,
      name: "Dosa",
      qty: "1 Pc",
      price: 119,
      oldPrice: 159,
      image: "https://images.unsplash.com/photo-1589308078056-eb1d1b1e79d6?w=500",
    },
    {
      id: 6,
      name: "Aloo Paratha",
      qty: "2 Pc",
      price: 99,
      oldPrice: 139,
      image: "https://images.unsplash.com/photo-1604909052629-259cbb7fbd56?w=500",
    },
    {
      id: 7,
      name: "Uttapam",
      qty: "1 Pc",
      price: 109,
      oldPrice: 149,
      image: "https://images.unsplash.com/photo-1630382992150-15d76f1c1e45?w=500",
    },
    {
      id: 8,
      name: "Pancakes",
      qty: "2 Pc",
      price: 139,
      oldPrice: 179,
      image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=500",
    },
    {
      id: 9,
      name: "Omelette",
      qty: "2 Egg",
      price: 79,
      oldPrice: 109,
      image: "https://images.unsplash.com/photo-1606756790138-3f4b1d7f379f?w=500",
    },
    {
      id: 10,
      name: "Upma",
      qty: "1 Bowl",
      price: 89,
      oldPrice: 119,
      image: "https://images.unsplash.com/photo-1617196039897-bbe3a9c88fc0?w=500",
    },
  ];

  const chai = [
    {
      id: 11,
      name: "Masala Chai",
      qty: "150 ml",
      price: 29,
      oldPrice: 49,
      image: "https://images.unsplash.com/photo-1601924572658-6d8b8dc5fbd8?w=500",
    },
    {
      id: 12,
      name: "Ginger Tea",
      qty: "150 ml",
      price: 35,
      oldPrice: 55,
      image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=500",
    },
    {
      id: 13,
      name: "Green Tea",
      qty: "150 ml",
      price: 39,
      oldPrice: 59,
      image: "https://images.unsplash.com/photo-1604152135912-04a022e23696?w=500",
    },
    {
      id: 14,
      name: "Lemon Tea",
      qty: "150 ml",
      price: 35,
      oldPrice: 55,
      image: "https://images.unsplash.com/photo-1597484661649-17a3a18188d4?w=500",
    },
    {
      id: 15,
      name: "Cardamom Chai",
      qty: "150 ml",
      price: 39,
      oldPrice: 59,
      image: "https://images.unsplash.com/photo-1592324191678-3f9e4f386327?w=500",
    },
    {
      id: 16,
      name: "Tulsi Tea",
      qty: "150 ml",
      price: 45,
      oldPrice: 65,
      image: "https://images.unsplash.com/photo-1617196039897-bbe3a9c88fc0?w=500",
    },
    {
      id: 17,
      name: "Elaichi Chai",
      qty: "150 ml",
      price: 39,
      oldPrice: 59,
      image: "https://images.unsplash.com/photo-1585238342028-4bcf0e85b3f0?w=500",
    },
    {
      id: 18,
      name: "Kesar Chai",
      qty: "150 ml",
      price: 49,
      oldPrice: 79,
      image: "https://images.unsplash.com/photo-1630348628523-2030fd0a95c0?w=500",
    },
    {
      id: 19,
      name: "Iced Tea",
      qty: "200 ml",
      price: 59,
      oldPrice: 89,
      image: "https://images.unsplash.com/photo-1625944524451-df6a5e9f9a33?w=500",
    },
    {
      id: 20,
      name: "Special Cutting Chai",
      qty: "100 ml",
      price: 20,
      oldPrice: 40,
      image: "https://images.unsplash.com/photo-1625944524656-c53b2e7d1d85?w=500",
    },
  ];

  const handleAddClick = (itemId) => {
    setAddedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const renderCategory = (title, items, showAll, setShowAll) => {
    const visibleProducts = showAll ? items : items.slice(0, 6);

    return (
      <div className="mb-8">
        {/* Category Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-left mb-6 text-gray-800">
          {title}
        </h2>

        {/* Mobile Grid Layout (3x2 = 6 products visible initially) */}
        <div className="block md:hidden">
          <div className="grid grid-cols-3 gap-3 mb-4">
            {visibleProducts.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg  relative overflow-hidden"
              >
                {/* Image square */}
                <div className="w-full aspect-square overflow-hidden ">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-2">
                  <p className="font-medium text-xs mb-1 leading-tight">{item.name}</p>
                  <p className="text-gray-500 text-xs mb-1">{item.qty}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-green-600">₹{item.price}</span>
                    <span className="line-through text-gray-400 text-xs">₹{item.oldPrice}</span>
                  </div>
                </div>

                {/* ADD/ADDED Button */}
                <button
                  onClick={() => handleAddClick(item.id)}
                  className={`absolute bottom-1 right-1 px-2 py-1 rounded-full text-xs font-bold transition-all duration-200 ${
                    addedItems[item.id]
                      ? 'bg-green-500 text-white border border-green-500'
                      : 'bg-white border border-pink-500 text-pink-500 hover:bg-pink-50'
                  }`}
                >
                  {addedItems[item.id] ? '✓' : 'ADD'}
                </button>
              </div>
            ))}
          </div>

          {/* See All / Show Less Button for Mobile */}
          {items.length > 6 && (
            <div className="text-center mb-6">
              <button
                onClick={() => setShowAll(!showAll)}
                className="bg-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-600 transition-colors"
              >
                {showAll ? 'Show Less' : `See All (${items.length - 6} more)`}
              </button>
            </div>
          )}
        </div>

        {/* Desktop/Tablet Horizontal Scroll - 7 products visible */}
        <div className="hidden md:block">
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="min-w-[120px] max-w-[140px] bg-white rounded-lg  relative flex-shrink-0"
              >
                {/* Image square */}
                <div className="w-full aspect-square overflow-hidden rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-2">
                  <p className="font-medium text-xs mb-1">{item.name}</p>
                  <p className="text-gray-500 text-xs mb-1">{item.qty}</p>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-bold text-green-600">₹{item.price}</span>
                    <span className="line-through text-gray-400 text-xs">₹{item.oldPrice}</span>
                  </div>
                </div>

                {/* ADD/ADDED Button */}
                <button
                  onClick={() => handleAddClick(item.id)}
                  className={`absolute bottom-2 right-2 px-2 py-1 rounded-full text-xs font-bold transition-all duration-200 ${
                    addedItems[item.id]
                      ? 'bg-green-500 text-white border border-green-500'
                      : 'bg-white border border-pink-500 text-pink-500 hover:bg-pink-50'
                  }`}
                >
                  {addedItems[item.id] ? 'ADDED' : 'ADD'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {renderCategory("Breakfast", breakfast, showAllBreakfast, setShowAllBreakfast)}
        {renderCategory("Chai", chai, showAllChai, setShowAllChai)}

        {/* Custom CSS for hiding scrollbar */}
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

export default BreakfastChai;