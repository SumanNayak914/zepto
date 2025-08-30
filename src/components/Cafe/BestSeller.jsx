import React from "react";

const BestSeller = () => {
  const products = [
    {
      id: 1,
      name: "Cappuccino",
      qty: "250 ml",
      price: 129,
      oldPrice: 179,
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500",
    },
    {
      id: 2,
      name: "Veg Sandwich",
      qty: "1 Pc",
      price: 149,
      oldPrice: 199,
      image: "https://images.unsplash.com/photo-1604908177453-d7f8e68cf8f3?w=500",
    },
    {
      id: 3,
      name: "Mocha",
      qty: "250 ml",
      price: 139,
      oldPrice: 189,
      image: "https://images.unsplash.com/photo-1581349486303-2b6d9f42c1b8?w=500",
    },
    {
      id: 4,
      name: "Paneer Wrap",
      qty: "1 Pc",
      price: 169,
      oldPrice: 229,
      image: "https://images.unsplash.com/photo-1625944524656-c53b2e7d1d85?w=500",
    },
    {
      id: 5,
      name: "Espresso",
      qty: "60 ml",
      price: 89,
      oldPrice: 119,
      image: "https://images.unsplash.com/photo-1579992394782-69f4a1a7f191?w=500",
    },
    {
      id: 6,
      name: "Veg Puff",
      qty: "1 Pc",
      price: 59,
      oldPrice: 89,
      image: "https://images.unsplash.com/photo-1604908813010-1e49fbaac2ff?w=500",
    },
    {
      id: 7,
      name: "Caramel Latte",
      qty: "250 ml",
      price: 159,
      oldPrice: 219,
      image: "https://images.unsplash.com/photo-1558877385-81a1c7e98e0d?w=500",
    },
    {
      id: 8,
      name: "Veg Burger",
      qty: "1 Pc",
      price: 179,
      oldPrice: 249,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
    },
    {
      id: 9,
      name: "Brownie",
      qty: "1 Pc",
      price: 99,
      oldPrice: 149,
      image: "https://images.unsplash.com/photo-1599785209793-2a7f8ab0b8ff?w=500",
    },
    {
      id: 10,
      name: "Cafe Latte",
      qty: "250 ml",
      price: 139,
      oldPrice: 199,
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500",
    },
  ];

  return (
    <div className="container w-7xl mx-auto px-3 mb-8">
      <h2 className="text-xl font-bold mb-3">Best Seller</h2>
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

export default BestSeller;
