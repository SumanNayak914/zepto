import React from 'react';

const ShopByCategory = () => {
  const categories = [
    {
      id: 1,
      bgColor: "bg-green-200",
      src: "https://cdn.zeptonow.com/production/tr:w-300,ar-640-304,pr-true,f-auto,q-80/inventory/banner/390fa522-178d-476c-8ec7-554697406785.png"
    },
    {
      id: 2,
      bgColor: "bg-green-200",
      src: "https://via.placeholder.com/150x100/90EE90/000000?text=Fresh+Vegetables"
    },
    {
      id: 3,
      bgColor: "bg-green-200",
      src: "https://cdn.zeptonow.com/production/tr:w-300,ar-412-304,pr-true,f-auto,q-80/inventory/banner/73959064-73e2-4b87-83f8-a7424ce2ff07.png"
    },
    {
      id: 4,
      bgColor: "bg-green-200",
      src: "https://via.placeholder.com/100x100/90EE90/000000?text=Organic"
    },
    {
      id: 5,
      bgColor: "bg-green-200",
      src: "https://via.placeholder.com/100x100/90EE90/000000?text=Cut+Sprouts"
    }
  ];

  return (
    <div className="p-4 max-w-md mx-auto bg-white">
      {/* Top Row - 2 items */}
      <div className="flex gap-3 mb-3">
        {categories.slice(0, 2).map((category) => (
          <div
            key={category.id}
            className={`flex-1 ${category.bgColor} rounded-2xl min-h-[70px] cursor-pointer hover:shadow-md transition-shadow overflow-hidden`}
          >
            <img 
              src={category.src} 
              alt={`Category ${category.id}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      
      {/* Bottom Row - 3 items */}
      <div className="flex gap-3 mb-6">
        {categories.slice(2, 5).map((category) => (
          <div
            key={category.id}
            className={`flex-1 ${category.bgColor} rounded-2xl min-h-[70px] cursor-pointer hover:shadow-md transition-shadow overflow-hidden`}
          >
            <img 
              src={category.src} 
              alt={`Category ${category.id}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;