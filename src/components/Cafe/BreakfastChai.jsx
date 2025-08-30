import React from "react";

const BreakfastChai = () => {
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
      id: 1,
      name: "Masala Chai",
      qty: "150 ml",
      price: 29,
      oldPrice: 49,
      image: "https://images.unsplash.com/photo-1601924572658-6d8b8dc5fbd8?w=500",
    },
    {
      id: 2,
      name: "Ginger Tea",
      qty: "150 ml",
      price: 35,
      oldPrice: 55,
      image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=500",
    },
    {
      id: 3,
      name: "Green Tea",
      qty: "150 ml",
      price: 39,
      oldPrice: 59,
      image: "https://images.unsplash.com/photo-1604152135912-04a022e23696?w=500",
    },
    {
      id: 4,
      name: "Lemon Tea",
      qty: "150 ml",
      price: 35,
      oldPrice: 55,
      image: "https://images.unsplash.com/photo-1597484661649-17a3a18188d4?w=500",
    },
    {
      id: 5,
      name: "Cardamom Chai",
      qty: "150 ml",
      price: 39,
      oldPrice: 59,
      image: "https://images.unsplash.com/photo-1592324191678-3f9e4f386327?w=500",
    },
    {
      id: 6,
      name: "Tulsi Tea",
      qty: "150 ml",
      price: 45,
      oldPrice: 65,
      image: "https://images.unsplash.com/photo-1617196039897-bbe3a9c88fc0?w=500",
    },
    {
      id: 7,
      name: "Elaichi Chai",
      qty: "150 ml",
      price: 39,
      oldPrice: 59,
      image: "https://images.unsplash.com/photo-1585238342028-4bcf0e85b3f0?w=500",
    },
    {
      id: 8,
      name: "Kesar Chai",
      qty: "150 ml",
      price: 49,
      oldPrice: 79,
      image: "https://images.unsplash.com/photo-1630348628523-2030fd0a95c0?w=500",
    },
    {
      id: 9,
      name: "Iced Tea",
      qty: "200 ml",
      price: 59,
      oldPrice: 89,
      image: "https://images.unsplash.com/photo-1625944524451-df6a5e9f9a33?w=500",
    },
    {
      id: 10,
      name: "Special Cutting Chai",
      qty: "100 ml",
      price: 20,
      oldPrice: 40,
      image: "https://images.unsplash.com/photo-1625944524656-c53b2e7d1d85?w=500",
    },
  ];

  const renderProducts = (title, items) => (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-3">{title}</h2>
      <div className="flex gap-3 overflow-x-auto no-scrollbar pb-4 snap-x">
        {items.map((item) => (
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

  return (
    <div className="container  w-7xl mx-auto px-3">
      {renderProducts("Breakfast", breakfast)}
      {renderProducts("Chai", chai)}
    </div>
  );
};

export default BreakfastChai;
