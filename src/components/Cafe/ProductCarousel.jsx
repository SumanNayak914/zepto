// import React from "react";

// const products = [
//   {
//     id: 1,
//     name: "Adrak Chai (No Sugar)",
//     qty: "250 ml",
//     price: 77,
//     oldPrice: 189,
//     save: 112,
//     image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500",
//   },
//   {
//     id: 2,
//     name: "Chole Kulche",
//     qty: "Serves 1",
//     price: 107,
//     oldPrice: 659,
//     save: 552,
//     image: "https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?w=500",
//   },
//   {
//     id: 3,
//     name: "Plain Maggi",
//     qty: "1 Portion",
//     price: 47,
//     oldPrice: 169,
//     save: 122,
//     image: "https://images.unsplash.com/photo-1626074353762-6b8b63d31589?w=500",
//   },
//   {
//     id: 4,
//     name: "Spanish Coffee",
//     qty: "350 ml",
//     price: 101,
//     oldPrice: 539,
//     save: 438,
//     image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500",
//   },
//   {
//     id: 5,
//     name: "Chocolate Mousse",
//     qty: "1 Piece",
//     price: 71,
//     oldPrice: 329,
//     save: 258,
//     image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500",
//   },
//   {
//     id: 6,
//     name: "Lemon Iced Tea",
//     qty: "450 ml",
//     price: 77,
//     oldPrice: 279,
//     save: 202,
//     image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500",
//   },
//   {
//     id: 7,
//     name: "Egg Maggi",
//     qty: "1 Portion",
//     price: 77,
//     oldPrice: 209,
//     save: 132,
//     image: "https://images.unsplash.com/photo-1626074353441-d5f6f49e87e9?w=500",
//   },
//   {
//     id: 8,
//     name: "Cold Coffee",
//     qty: "300 ml",
//     price: 89,
//     oldPrice: 199,
//     save: 110,
//     image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=500",
//   },
//   {
//     id: 9,
//     name: "Brownie",
//     qty: "1 Piece",
//     price: 59,
//     oldPrice: 149,
//     save: 90,
//     image: "https://images.unsplash.com/photo-1628191011211-87b98d34658f?w=500",
//   },
//   {
//     id: 10,
//     name: "Pasta Arrabbiata",
//     qty: "1 Portion",
//     price: 129,
//     oldPrice: 289,
//     save: 160,
//     image: "https://images.unsplash.com/photo-1627308595216-439b387441b0?w=500",
//   },
//   {
//     id: 11,
//     name: "Cheese Sandwich",
//     qty: "1 Portion",
//     price: 99,
//     oldPrice: 229,
//     save: 130,
//     image: "https://images.unsplash.com/photo-1604908177522-0403180a5b1a?w=500",
//   },
//   {
//     id: 12,
//     name: "Paneer Wrap",
//     qty: "1 Wrap",
//     price: 119,
//     oldPrice: 249,
//     save: 130,
//     image: "https://images.unsplash.com/photo-1586816001966-79b736744398?w=500",
//   },
//   {
//     id: 13,
//     name: "French Fries",
//     qty: "Regular",
//     price: 69,
//     oldPrice: 159,
//     save: 90,
//     image: "https://images.unsplash.com/photo-1541592106381-f3e06cc4cbfd?w=500",
//   },
//   {
//     id: 14,
//     name: "Garlic Bread",
//     qty: "4 Pcs",
//     price: 79,
//     oldPrice: 179,
//     save: 100,
//     image: "https://images.unsplash.com/photo-1604908553728-95a72d0ec92e?w=500",
//   },
//   {
//     id: 15,
//     name: "Mango Shake",
//     qty: "300 ml",
//     price: 99,
//     oldPrice: 229,
//     save: 130,
//     image: "https://images.unsplash.com/photo-1627662167851-5d5d295df1c4?w=500",
//   },
//   {
//     id: 16,
//     name: "Veg Burger",
//     qty: "1 Pc",
//     price: 89,
//     oldPrice: 199,
//     save: 110,
//     image: "https://images.unsplash.com/photo-1603079842081-54cb7ac1917a?w=500",
//   },
//   {
//     id: 17,
//     name: "Oreo Shake",
//     qty: "350 ml",
//     price: 119,
//     oldPrice: 249,
//     save: 130,
//     image: "https://images.unsplash.com/photo-1627662168237-7a4a6c8f2fb1?w=500",
//   },
//   {
//     id: 18,
//     name: "Hot Chocolate",
//     qty: "250 ml",
//     price: 89,
//     oldPrice: 199,
//     save: 110,
//     image: "https://images.unsplash.com/photo-1587732358531-37488e2ac54d?w=500",
//   },
//   {
//     id: 19,
//     name: "Chicken Roll",
//     qty: "1 Pc",
//     price: 129,
//     oldPrice: 269,
//     save: 140,
//     image: "https://images.unsplash.com/photo-1585032226651-759b7e4c5747?w=500",
//   },
//   {
//     id: 20,
//     name: "Veg Pizza Slice",
//     qty: "1 Slice",
//     price: 139,
//     oldPrice: 299,
//     save: 160,
//     image: "https://images.unsplash.com/photo-1601924582975-7f34fa52f86c?w=500",
//   },
// ];

// const CafeCategory = () => {
//   return (
//     <div className="container mx-auto w-7xl">
//       {/* Heading */}
//       <h2 className="text-3xl font-bold text-center mb-6">
//         Handpicked For You!
//       </h2>

//       {/* Horizontal Scroll */}
//       <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
//         {products.map((item) => (
//           <div
//             key={item.id}
//             className="min-w-[160px] max-w-[180px] bg-white rounded-lg relative"
//           >
//             {/* Image - square */}
//             <div className="w-full aspect-square overflow-hidden rounded-lg">
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-full h-full object-cover rounded-lg"
//               />
//             </div>

//             {/* Content */}
//             <div className="p-2 text-sm">
//               <div className="flex items-center gap-2">
//                 <span className="text-lg font-semibold">₹{item.price}</span>
//                 <span className="line-through text-gray-400 text-xs">
//                   ₹{item.oldPrice}
//                 </span>
//                 <span className="text-green-600 text-xs font-bold">
//                   SAVE ₹{item.save}
//                 </span>
//               </div>

//               <p className="text-gray-500">{item.qty}</p>
//               <p className="font-medium">{item.name}</p>
//             </div>

//             {/* ADD Button */}
//             <button className="absolute bottom-2 right-2 bg-white border border-pink-500 text-pink-500 px-3 py-1 rounded-full text-xs font-bold">
//               ADD
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CafeCategory;
import React from "react";

const products = [
  {
    id: 1,
    name: "Adrak Chai (No Sugar)",
    qty: "250 ml",
    price: 77,
    oldPrice: 189,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500",
  },
  {
    id: 2,
    name: "Chole Kulche",
    qty: "Serves 1",
    price: 107,
    oldPrice: 659,
    image: "https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?w=500",
  },
  {
    id: 3,
    name: "Plain Maggi",
    qty: "1 Portion",
    price: 47,
    oldPrice: 169,
    image: "https://images.unsplash.com/photo-1626074353762-6b8b63d31589?w=500",
  },
  {
    id: 4,
    name: "Spanish Coffee",
    qty: "350 ml",
    price: 101,
    oldPrice: 539,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500",
  },
  {
    id: 5,
    name: "Chocolate Mousse",
    qty: "1 Piece",
    price: 71,
    oldPrice: 329,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500",
  },
  {
    id: 6,
    name: "Lemon Iced Tea",
    qty: "450 ml",
    price: 77,
    oldPrice: 279,
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500",
  },
  {
    id: 7,
    name: "Egg Maggi",
    qty: "1 Portion",
    price: 77,
    oldPrice: 209,
    image: "https://images.unsplash.com/photo-1626074353441-d5f6f49e87e9?w=500",
  },
  {
    id: 8,
    name: "Cold Coffee",
    qty: "300 ml",
    price: 89,
    oldPrice: 199,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=500",
  },
  {
    id: 9,
    name: "Brownie",
    qty: "1 Piece",
    price: 59,
    oldPrice: 149,
    image: "https://images.unsplash.com/photo-1628191011211-87b98d34658f?w=500",
  },
  {
    id: 10,
    name: "Pasta Arrabbiata",
    qty: "1 Portion",
    price: 129,
    oldPrice: 289,
    image: "https://images.unsplash.com/photo-1627308595216-439b387441b0?w=500",
  },
];

const CafeCategory = () => {
  return (
    <div className="container mx-auto px-3">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-center mb-4">
        Handpicked For You!
      </h2>

      {/* Horizontal Scroll */}
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

export default CafeCategory;
