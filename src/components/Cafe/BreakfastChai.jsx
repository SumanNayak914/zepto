import React, { useState } from "react";

const BreakfastChai = () => {
  const [showAllBreakfast, setShowAllBreakfast] = useState(false);
  const [showAllChai, setShowAllChai] = useState(false);
  const [addedItems, setAddedItems] = useState({});

  const breakfast = [
    {
      id: 1,
      name: "Khao Suey Maggi",
      qty: "350g",
      price: 129,
      oldPrice: 279,
      image: "https://cdn.zeptonow.com/production/tr:w-403,ar-4418-4418,pr-true,f-auto,q-80/cms/product_variant/6cdc01ad-eccc-4aa5-8297-fbad7e7d7912.jpg",
    },
    {
      id: 2,
      name: "Chole Kulche ",
      qty: " serves 2",
      price: 179,
      oldPrice: 269,
      image: "https://cdn.zeptonow.com/production/tr:w-403,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/da3bf048-ddb0-461f-9ab2-b267475da0d7.jpeg",
    },
    {
      id: 3,
      name: "Muesli with Strawberry Greek Yogurt",
      qty: "180g",
      price: 179,
      oldPrice: 309,
      image: "https://cdn.zeptonow.com/production/tr:w-403,ar-3920-3920,pr-true,f-auto,q-80/cms/product_variant/2ef83614-2175-4422-b8d8-fb9bda5b79b8.jpeg",
    },
    {
      id: 4,
      name: "Hot Milk",
      qty: "300 ml",
      price: 99,
      oldPrice: 139,
      image: "https://cdn.zeptonow.com/production/tr:w-403,ar-3842-3842,pr-true,f-auto,q-80/cms/product_variant/71698c46-0ca2-4702-abd5-80b18f9024d2.jpeg",
    },
    {
      id: 5,
      name: "Butter Chicken Steamed Bao",
      qty: "2 Pc",
      price: 119,
      oldPrice: 159,
      image: "https://cdn.zeptonow.com/production/tr:w-403,ar-5198-5198,pr-true,f-auto,q-80/cms/product_variant/8bb09df1-c095-475d-8aed-c0be55a175da.jpeg",
    },
    {
      id: 6,
      name: "Hot Chocolate",
      qty: "250 ml",
      price: 139,
      oldPrice: 239,
      image: "https://cdn.zeptonow.com/production/tr:w-403,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/76f7bedc-0cf0-4a64-ae7d-476e187346d8.jpeg",
    },
    {
      id: 7,
      name: "Chicken Tikka Sandwich",
      qty: "1 serves",
      price: 109,
      oldPrice: 149,
      image: "https://cdn.zeptonow.com/production/tr:w-403,ar-3403-3403,pr-true,f-auto,q-80/cms/product_variant/4b77d28d-1aa0-4671-81db-bce5fda2426a.jpeg",
    },
    {
      id: 8,
      name: "Vietnamese Cold Coffee",
      qty: "250 ml",
      price: 139,
      oldPrice: 179,
      image: "https://cdn.zeptonow.com/production/tr:w-403,ar-5304-5304,pr-true,f-auto,q-80/cms/product_variant/9bc896d4-229d-45a4-8294-b36f97f5992c.jpeg",
    },
    {
      id: 9,
      name: "Classic Cold Coffee",
      qty: "350 ml",
      price: 179,
      oldPrice: 309,
      image: "https://cdn.zeptonow.com/production/tr:w-403,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/18d502d4-00ba-4533-99e3-ae817db3f361.jpeg",
    },
    {
      id: 10,
      name: "Chicken Shawarma Sandwich  ",
      qty: "Serves 1",
      price: 89,
      oldPrice: 119,
      image: "https://cdn.zeptonow.com/production/tr:w-403,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/38f024c6-0e9d-457e-972c-b8d2a62a9520.jpeg",
    },
  ];

  const chai = [
    {
      id: 11,
      name: "Masala Chai",
      qty: "150 ml",
      price: 29,
      oldPrice: 49,
      image: "https://cdn.zeptonow.com/production/tr:w-403,ar-3894-3894,pr-true,f-auto,q-80/cms/product_variant/5dd3feab-004a-4b86-a77e-68bc6bf669fc.jpeg",
    },
    {
      id: 12,
      name: "Ginger Tea",
      qty: "150 ml",
      price: 35,
      oldPrice: 55,
      image: "https://cdn.zeptonow.com/production/tr:w-403,ar-3920-3920,pr-true,f-auto,q-80/cms/product_variant/12c6b9a5-9d9b-47da-a517-f6bb9dee4041.jpeg",
    },
    {
      id: 13,
      name: "Green Tea",
      qty: "150 ml",
      price: 39,
      oldPrice: 59,
      image: "https://cdn.zeptonow.com/production/tr:w-403,ar-3920-3920,pr-true,f-auto,q-80/cms/product_variant/1b2fb7db-c3b5-4f74-8c40-51d023b8da96.jpeg",
    },
    {
      id: 14,
      name: "Lemon Tea",
      qty: "150 ml",
      price: 35,
      oldPrice: 55,
      image: "https://cdn.zeptonow.com/production/tr:w-403,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/76f7bedc-0cf0-4a64-ae7d-476e187346d8.jpeg",
    },
    {
      id: 15,
      name: "Cardamom Chai",
      qty: "150 ml",
      price: 39,
      oldPrice: 59,
      image: "https://cdn.zeptonow.com/production/tr:w-403,ar-5078-5078,pr-true,f-auto,q-80/cms/product_variant/2d3193cf-aa42-4836-ac49-7a95bcd5c83e.jpeg",
    },
    {
      id: 16,
      name: "Tulsi Tea",
      qty: "150 ml",
      price: 45,
      oldPrice: 65,
      image: "https://cdn.zeptonow.com/production/tr:w-403,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/0d42397a-5df8-4c69-8653-98b91060b543.jpeg",
    },
    {
      id: 17,
      name: "Elaichi Chai",
      qty: "150 ml",
      price: 39,
      oldPrice: 59,
      image: "https://cdn.zeptonow.com/production/tr:w-403,ar-4155-4155,pr-true,f-auto,q-80/cms/product_variant/71acc3dc-9367-4090-ae36-f6aa1a98c134.jpeg",
    },
    {
      id: 18,
      name: "Kesar Chai",
      qty: "150 ml",
      price: 49,
      oldPrice: 79,
      image: "https://cdn.zeptonow.com/production/tr:w-403,ar-5304-5304,pr-true,f-auto,q-80/cms/product_variant/9bc896d4-229d-45a4-8294-b36f97f5992c.jpeg",
    },
    {
      id: 19,
      name: "Iced Tea",
      qty: "200 ml",
      price: 59,
      oldPrice: 89,
      image: "https://cdn.zeptonow.com/production/tr:w-403,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/76f7bedc-0cf0-4a64-ae7d-476e187346d8.jpeg",
    },
    {
      id: 20,
      name: "Special Cutting Chai",
      qty: "100 ml",
      price: 20,
      oldPrice: 40,
      image: "https://cdn.zeptonow.com/production/tr:w-403,ar-4155-4155,pr-true,f-auto,q-80/cms/product_variant/71acc3dc-9367-4090-ae36-f6aa1a98c134.jpeg",
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