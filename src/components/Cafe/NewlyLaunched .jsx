import React from "react";

const NewlyLaunched = () => {
  const products = [
    {
      id: 1,
      name: "Blueberry Cheesecake",
      qty: "1 Slice",
      price: 149,
      oldPrice: 229,
      image: "https://images.unsplash.com/photo-1612197527762-642165a9e0a8?w=500",
    },
    {
      id: 2,
      name: "Cold Brew Coffee",
      qty: "300 ml",
      price: 99,
      oldPrice: 159,
      image: "https://images.unsplash.com/photo-1604909052743-94e9f2d7c4f9?w=500",
    },
    {
      id: 3,
      name: "Strawberry Shake",
      qty: "300 ml",
      price: 119,
      oldPrice: 169,
      image: "https://images.unsplash.com/photo-1587734195503-904fca47e0c7?w=500",
    },
    {
      id: 4,
      name: "Chocolate Muffin",
      qty: "1 Pc",
      price: 79,
      oldPrice: 119,
      image: "https://images.unsplash.com/photo-1605475122323-04e03f8c0c7d?w=500",
    },
    {
      id: 5,
      name: "Mango Smoothie",
      qty: "250 ml",
      price: 139,
      oldPrice: 189,
      image: "https://images.unsplash.com/photo-1590080875831-95d9f4f6c2d5?w=500",
    },
    {
      id: 6,
      name: "Red Velvet Pastry",
      qty: "1 Slice",
      price: 129,
      oldPrice: 179,
      image: "https://images.unsplash.com/photo-1599785209793-2a7f8ab0b8ff?w=500",
    },
    {
      id: 7,
      name: "Hot Chocolate",
      qty: "250 ml",
      price: 89,
      oldPrice: 139,
      image: "https://images.unsplash.com/photo-1587734195503-904fca47e0c7?w=500",
    },
    {
      id: 8,
      name: "Oreo Shake",
      qty: "300 ml",
      price: 129,
      oldPrice: 189,
      image: "https://images.unsplash.com/photo-1580910051074-3d732b5c36a9?w=500",
    },
    {
      id: 9,
      name: "Classic Donut",
      qty: "1 Pc",
      price: 59,
      oldPrice: 89,
      image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500",
    },
    {
      id: 10,
      name: "Lemon Iced Tea",
      qty: "300 ml",
      price: 99,
      oldPrice: 149,
      image: "https://images.unsplash.com/photo-1627662187938-9ff9b8db6f5f?w=500",
    },
  ];

  return (
    <div className="container mx-auto px-3 mb-8">
      <h2 className="text-xl font-bold mb-3">Newly Launched</h2>
      <div className="flex gap-3 overflow-x-auto no-scrollbar pb-4 snap-x">
        {products.map((item) => (
          <div
            key={item.id}
            className="min-w-[90px] sm:min-w-[110px] max-w-[120px] bg-white rounded-lg relative snap-start"
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
            <div className="p-2 text-[11px] sm:text-sm">
              <div className="flex items-center gap-1">
                <span className="text-sm font-semibold">₹{item.price}</span>
                <span className="line-through text-gray-400 text-[10px]">
                  ₹{item.oldPrice}
                </span>
              </div>
              <p className="text-gray-500 text-[10px]">{item.qty}</p>
              <p className="font-medium truncate">{item.name}</p>
            </div>

            {/* ADD Button */}
            <button className="absolute bottom-2 right-2 bg-white border border-pink-500 text-pink-500 px-2 py-[1px] rounded-full text-[10px] font-bold">
              ADD
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewlyLaunched;
