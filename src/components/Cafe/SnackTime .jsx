import React from "react";

const SnackTime = () => {
  const products = [
    {
      id: 1,
      name: "French Fries",
      qty: "Medium",
      price: 99,
      oldPrice: 139,
      image: "https://images.unsplash.com/photo-1585238342028-4bcf0e85b3f0?w=500",
    },
    {
      id: 2,
      name: "Nachos with Dip",
      qty: "1 Plate",
      price: 129,
      oldPrice: 169,
      image: "https://images.unsplash.com/photo-1601924572658-6d8b8dc5fbd8?w=500",
    },
    {
      id: 3,
      name: "Cheese Garlic Bread",
      qty: "2 Pc",
      price: 119,
      oldPrice: 159,
      image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=500",
    },
    {
      id: 4,
      name: "Spring Rolls",
      qty: "6 Pc",
      price: 149,
      oldPrice: 199,
      image: "https://images.unsplash.com/photo-1630348628523-2030fd0a95c0?w=500",
    },
    {
      id: 5,
      name: "Masala Corn",
      qty: "1 Bowl",
      price: 79,
      oldPrice: 109,
      image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=500",
    },
    {
      id: 6,
      name: "Potato Wedges",
      qty: "1 Plate",
      price: 119,
      oldPrice: 159,
      image: "https://images.unsplash.com/photo-1625944524656-c53b2e7d1d85?w=500",
    },
    {
      id: 7,
      name: "Cheese Sticks",
      qty: "5 Pc",
      price: 139,
      oldPrice: 189,
      image: "https://images.unsplash.com/photo-1625944524859-93a8966b68d2?w=500",
    },
    {
      id: 8,
      name: "Samosa",
      qty: "2 Pc",
      price: 59,
      oldPrice: 89,
      image: "https://images.unsplash.com/photo-1625944524451-df6a5e9f9a33?w=500",
    },
    {
      id: 9,
      name: "Chilli Paneer",
      qty: "1 Plate",
      price: 179,
      oldPrice: 229,
      image: "https://images.unsplash.com/photo-1625944524743-6b8aef9d8b74?w=500",
    },
    {
      id: 10,
      name: "Veg Cutlet",
      qty: "2 Pc",
      price: 99,
      oldPrice: 139,
      image: "https://images.unsplash.com/photo-1625944524552-59d7c41c5a58?w=500",
    },
  ];

  return (
    <div className="container mx-auto px-3 mb-8">
      <h2 className="text-xl font-bold mb-3">Snack Time</h2>
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

export default SnackTime;
