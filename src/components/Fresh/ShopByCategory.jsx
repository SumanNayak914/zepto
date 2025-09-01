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
      src: "https://cdn.zeptonow.com/production/tr:w-300,ar-640-304,pr-true,f-auto,q-80/inventory/banner/61277d55-05df-4912-a227-a3bc9cb05c01.png"
    },
    {
      id: 3,
      bgColor: "bg-green-200",
      src: "https://cdn.zeptonow.com/production/tr:w-300,ar-412-304,pr-true,f-auto,q-80/inventory/banner/73959064-73e2-4b87-83f8-a7424ce2ff07.png"
    },
    {
      id: 4,
      bgColor: "bg-green-200",
      src: "https://cdn.zeptonow.com/production/tr:w-300,ar-412-304,pr-true,f-auto,q-80/inventory/banner/3763d2b2-6a2c-4e02-b067-1633de29fa21.png"
    },
    {
      id: 5,
      bgColor: "bg-green-200",
      src: "https://cdn.zeptonow.com/production/tr:w-300,ar-412-304,pr-true,f-auto,q-80/inventory/banner/f61c0725-f6b0-4d9d-be64-10982980b072.png"
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