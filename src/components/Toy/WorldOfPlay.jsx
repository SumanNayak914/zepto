// import React, { useState } from "react";

// const WorldOfPlay = () => {
//   const [addedItems, setAddedItems] = useState({});
//   const [activeCategory, setActiveCategory] = useState(0);

//   const testImage =
//     "https://cdn.zeptonow.com/production/tr:w-403,ar-980-980,pr-true,f-auto,q-80/cms/product_variant/2fef1f3e-3a76-42ea-84e6-9751280036e5.jpeg";

//   const categories = [
//     {
//       id: 0,
//       name: "Soft Toys",
//       icon: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
//       color: "pink",
//       data: [
//         { id: 101, name: "Teddy Bear", qty: "1 Pc", price: 299, oldPrice: 499, image: testImage },
//         { id: 102, name: "Panda Plush", qty: "1 Pc", price: 399, oldPrice: 699, image: testImage },
//         { id: 103, name: "Rabbit Plush", qty: "1 Pc", price: 249, oldPrice: 499, image: testImage },
//         { id: 104, name: "Elephant Plush", qty: "1 Pc", price: 459, oldPrice: 699, image: testImage },
//         { id: 105, name: "Lion Plush", qty: "1 Pc", price: 359, oldPrice: 599, image: testImage },
//       ],
//     },
//     {
//       id: 1,
//       name: "Sports & Games",
//       icon: "https://cdn-icons-png.flaticon.com/512/1165/1165187.png",
//       color: "green",
//       data: [
//         { id: 201, name: "Football", qty: "1 Pc", price: 499, oldPrice: 799, image: testImage },
//         { id: 202, name: "Badminton Set", qty: "1 Set", price: 599, oldPrice: 999, image: testImage },
//         { id: 203, name: "Cricket Bat", qty: "1 Pc", price: 699, oldPrice: 999, image: testImage },
//         { id: 204, name: "Chess Board", qty: "1 Pc", price: 199, oldPrice: 299, image: testImage },
//         { id: 205, name: "Carrom Board", qty: "1 Pc", price: 799, oldPrice: 1199, image: testImage },
//       ],
//     },
//     {
//       id: 2,
//       name: "Art & Craft",
//       icon: "https://cdn-icons-png.flaticon.com/512/3595/3595455.png",
//       color: "orange",
//       data: [
//         { id: 301, name: "Painting Kit", qty: "1 Set", price: 249, oldPrice: 399, image: testImage },
//         { id: 302, name: "Origami Papers", qty: "50 Sheets", price: 199, oldPrice: 299, image: testImage },
//         { id: 303, name: "Craft Box", qty: "1 Set", price: 349, oldPrice: 599, image: testImage },
//         { id: 304, name: "Drawing Colors", qty: "12 Pcs", price: 149, oldPrice: 249, image: testImage },
//         { id: 305, name: "Clay Set", qty: "1 Pack", price: 229, oldPrice: 399, image: testImage },
//       ],
//     },
//     {
//       id: 3,
//       name: "Educational Toys",
//       icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
//       color: "purple",
//       data: [
//         { id: 401, name: "Building Blocks", qty: "50 Pcs", price: 399, oldPrice: 699, image: testImage },
//         { id: 402, name: "Puzzle Board", qty: "1 Pc", price: 289, oldPrice: 450, image: testImage },
//         { id: 403, name: "Abacus", qty: "1 Pc", price: 199, oldPrice: 299, image: testImage },
//         { id: 404, name: "Flash Cards", qty: "20 Pcs", price: 149, oldPrice: 249, image: testImage },
//         { id: 405, name: "Learning Tablet", qty: "1 Pc", price: 899, oldPrice: 1299, image: testImage },
//       ],
//     },
//     {
//       id: 4,
//       name: "Electronic Toys",
//       icon: "https://cdn-icons-png.flaticon.com/512/1048/1048949.png",
//       color: "blue",
//       data: [
//         { id: 501, name: "RC Car", qty: "1 Pc", price: 899, oldPrice: 1299, image: testImage },
//         { id: 502, name: "Robot Toy", qty: "1 Pc", price: 1299, oldPrice: 1799, image: testImage },
//         { id: 503, name: "Drone", qty: "1 Pc", price: 2999, oldPrice: 3999, image: testImage },
//         { id: 504, name: "Electronic Gun", qty: "1 Pc", price: 599, oldPrice: 899, image: testImage },
//         { id: 505, name: "Talking Doll", qty: "1 Pc", price: 499, oldPrice: 799, image: testImage },
//       ],
//     },
//   ];

//   const handleAddClick = (itemId) => {
//     setAddedItems((prev) => ({
//       ...prev,
//       [itemId]: !prev[itemId],
//     }));
//   };

//   const getColorClasses = (color, isAdded) => {
//     const colorMap = {
//       orange: isAdded
//         ? "bg-orange-500 text-white border border-orange-500"
//         : "bg-white border border-orange-500 text-orange-500",
//       green: isAdded
//         ? "bg-green-500 text-white border border-green-500"
//         : "bg-white border border-green-500 text-green-500",
//       purple: isAdded
//         ? "bg-purple-500 text-white border border-purple-500"
//         : "bg-white border border-purple-500 text-purple-500",
//       pink: isAdded
//         ? "bg-pink-500 text-white border border-pink-500"
//         : "bg-white border border-pink-500 text-pink-500",
//       blue: isAdded
//         ? "bg-blue-500 text-white border border-blue-500"
//         : "bg-white border border-blue-500 text-blue-500",
//     };
//     return colorMap[color];
//   };

//   const currentCategory = categories[activeCategory];

//   return (
//     <div className="bg-gray-50 p-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Categories */}
//         <div className="flex gap-6 overflow-x-auto no-scrollbar relative mb-6">
//           {categories.map((category, index) => (
//             <button
//               key={category.id}
//               onClick={() => setActiveCategory(index)}
//               className={`relative flex-shrink-0 flex flex-col items-center pb-4 ${
//                 activeCategory === index
//                   ? "text-purple-600"
//                   : "text-gray-600 hover:text-gray-800"
//               }`}
//             >
//               <div className="w-8 h-8 sm:w-10 sm:h-10 mb-1 rounded-full overflow-hidden border-2 border-gray-200">
//                 <img
//                   src={category.icon}
//                   alt={category.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <span className="text-xs sm:text-sm font-medium">
//                 {category.name}
//               </span>

//               {/* Active underline (Thick Rounded) */}
//               {activeCategory === index && (
//                 <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1.5 w-7 bg-purple-600 rounded-full"></div>
//               )}
//             </button>
//           ))}
//         </div>

//         {/* Products → 3 per row */}
//         <div className="flex gap-2 overflow-x-auto no-scrollbar pb-4">
//           {currentCategory.data.map((item) => (
//             <div
//               key={item.id}
//               className="
//                 bg-white relative flex-shrink-0
//                 w-[calc((100vw-48px)/3)] sm:w-[calc((100vw-64px)/3)]
//                 max-w-[180px]
//                 rounded-lg shadow-sm
//               "
//             >
//               {/* Image */}
//               <div className="w-full h-28 sm:h-32 md:h-36 overflow-hidden rounded-t-lg">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Content */}
//               <div className="p-2">
//                 <p className="font-medium text-xs mb-1 truncate">{item.name}</p>
//                 <p className="text-gray-500 text-xs mb-1">{item.qty}</p>
//                 <div className="flex items-center gap-1 mb-2">
//                   <span className="text-sm font-bold text-green-600">
//                     ₹{item.price}
//                   </span>
//                   <span className="line-through text-gray-400 text-xs">
//                     ₹{item.oldPrice}
//                   </span>
//                 </div>
//               </div>

//               {/* ADD btn */}
//               <button
//                 onClick={() => handleAddClick(item.id)}
//                 className={`absolute bottom-2 right-2 px-2 py-1 rounded-full text-xs font-bold transition-all duration-200 ${getColorClasses(
//                   currentCategory.color,
//                   addedItems[item.id]
//                 )}`}
//               >
//                 {addedItems[item.id] ? "ADDED" : "ADD"}
//               </button>
//             </div>
//           ))}
//         </div>

//         <style jsx>{`
//           .no-scrollbar::-webkit-scrollbar {
//             display: none;
//           }
//         `}</style>
//       </div>
//     </div>
//   );
// };

// export default WorldOfPlay;
import React, { useState } from "react";

const WorldOfPlay = () => {
  const [addedItems, setAddedItems] = useState({});
  const [activeCategory, setActiveCategory] = useState(0);

  const testImage =
    "https://cdn.zeptonow.com/production/tr:w-403,ar-980-980,pr-true,f-auto,q-80/cms/product_variant/2fef1f3e-3a76-42ea-84e6-9751280036e5.jpeg";

  const categories = [
    {
      id: 0,
      name: "Soft Toys",
      icon: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
      color: "pink",
      data: [
        { id: 101, name: "Teddy Bear", qty: "1 Pc", price: 299, oldPrice: 499, image: testImage },
        { id: 102, name: "Panda Plush", qty: "1 Pc", price: 399, oldPrice: 699, image: testImage },
        { id: 103, name: "Rabbit Plush", qty: "1 Pc", price: 249, oldPrice: 499, image: testImage },
        { id: 104, name: "Elephant Plush", qty: "1 Pc", price: 459, oldPrice: 699, image: testImage },
        { id: 105, name: "Lion Plush", qty: "1 Pc", price: 359, oldPrice: 599, image: testImage },
      ],
    },
    {
      id: 1,
      name: "Sports & Games",
      icon: "https://cdn-icons-png.flaticon.com/512/1165/1165187.png",
      color: "green",
      data: [
        { id: 201, name: "Football", qty: "1 Pc", price: 499, oldPrice: 799, image: testImage },
        { id: 202, name: "Badminton Set", qty: "1 Set", price: 599, oldPrice: 999, image: testImage },
        { id: 203, name: "Cricket Bat", qty: "1 Pc", price: 699, oldPrice: 999, image: testImage },
        { id: 204, name: "Chess Board", qty: "1 Pc", price: 199, oldPrice: 299, image: testImage },
        { id: 205, name: "Carrom Board", qty: "1 Pc", price: 799, oldPrice: 1199, image: testImage },
      ],
    },
    {
      id: 2,
      name: "Art & Craft",
      icon: "https://cdn-icons-png.flaticon.com/512/3595/3595455.png",
      color: "orange",
      data: [
        { id: 301, name: "Painting Kit", qty: "1 Set", price: 249, oldPrice: 399, image: testImage },
        { id: 302, name: "Origami Papers", qty: "50 Sheets", price: 199, oldPrice: 299, image: testImage },
        { id: 303, name: "Craft Box", qty: "1 Set", price: 349, oldPrice: 599, image: testImage },
        { id: 304, name: "Drawing Colors", qty: "12 Pcs", price: 149, oldPrice: 249, image: testImage },
        { id: 305, name: "Clay Set", qty: "1 Pack", price: 229, oldPrice: 399, image: testImage },
      ],
    },
    {
      id: 3,
      name: "Educational Toys",
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      color: "purple",
      data: [
        { id: 401, name: "Building Blocks", qty: "50 Pcs", price: 399, oldPrice: 699, image: testImage },
        { id: 402, name: "Puzzle Board", qty: "1 Pc", price: 289, oldPrice: 450, image: testImage },
        { id: 403, name: "Abacus", qty: "1 Pc", price: 199, oldPrice: 299, image: testImage },
        { id: 404, name: "Flash Cards", qty: "20 Pcs", price: 149, oldPrice: 249, image: testImage },
        { id: 405, name: "Learning Tablet", qty: "1 Pc", price: 899, oldPrice: 1299, image: testImage },
      ],
    },
    {
      id: 4,
      name: "Electronic Toys",
      icon: "https://cdn-icons-png.flaticon.com/512/1048/1048949.png",
      color: "blue",
      data: [
        { id: 501, name: "RC Car", qty: "1 Pc", price: 899, oldPrice: 1299, image: testImage },
        { id: 502, name: "Robot Toy", qty: "1 Pc", price: 1299, oldPrice: 1799, image: testImage },
        { id: 503, name: "Drone", qty: "1 Pc", price: 2999, oldPrice: 3999, image: testImage },
        { id: 504, name: "Electronic Gun", qty: "1 Pc", price: 599, oldPrice: 899, image: testImage },
        { id: 505, name: "Talking Doll", qty: "1 Pc", price: 499, oldPrice: 799, image: testImage },
      ],
    },
  ];

  const handleAddClick = (itemId) => {
    setAddedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const getColorClasses = (color, isAdded) => {
    const colorMap = {
      orange: isAdded
        ? "bg-orange-500 text-white border border-orange-500"
        : "bg-white border border-orange-500 text-orange-500 hover:bg-orange-50",
      green: isAdded
        ? "bg-green-500 text-white border border-green-500"
        : "bg-white border border-green-500 text-green-500 hover:bg-green-50",
      purple: isAdded
        ? "bg-purple-500 text-white border border-purple-500"
        : "bg-white border border-purple-500 text-purple-500 hover:bg-purple-50",
      pink: isAdded
        ? "bg-pink-500 text-white border border-pink-500"
        : "bg-white border border-pink-500 text-pink-500 hover:bg-pink-50",
      blue: isAdded
        ? "bg-blue-500 text-white border border-blue-500"
        : "bg-white border border-blue-500 text-blue-500 hover:bg-blue-50",
    };
    return colorMap[color];
  };

  const currentCategory = categories[activeCategory];

  return (
    <div className="bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Category Tabs */}
        <div className="flex gap-3 sm:gap-6 overflow-x-auto no-scrollbar mb-6">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(index)}
              className={`flex-shrink-0 flex flex-col items-center pb-2 transition-all duration-200 relative min-w-0 ${
                activeCategory === index ? 'text-purple-600' : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              {/* Category Icon Image */}
              <div className="w-6 h-6 sm:w-8 sm:h-8 mb-2 rounded-full overflow-hidden border-2 border-gray-200">
                <img
                  src={category.icon}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <span className="text-xs sm:text-sm font-medium text-center leading-tight max-w-16 sm:max-w-none">
                {category.name}
              </span>
              
              {/* Active underline */}
              {activeCategory === index && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-500"></div>
              )}
            </button>
          ))}
        </div>

        {/* Selected Category Slider */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-4">
          {currentCategory.data.map((item) => (
            <div
              key={item.id}
              className="
                bg-white relative flex-shrink-0
                w-[calc((100vw-48px)/3)] sm:w-[calc((100vw-64px)/3)]
                max-w-[180px]
                rounded-lg shadow-sm
              "
            >
              {/* Product Image */}
              <div className="w-full h-24 sm:h-32 md:h-36 overflow-hidden rounded-t-lg rounded-b-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Content */}
              <div className="p-2">
                <p className="font-medium text-xs mb-1 truncate">{item.name}</p>
                <p className="text-gray-500 text-xs mb-1">{item.qty}</p>
                <div className="flex items-center gap-1 mb-2">
                  <span className="text-sm font-bold text-green-600">
                    ₹{item.price}
                  </span>
                  <span className="line-through text-gray-400 text-xs">
                    ₹{item.oldPrice}
                  </span>
                </div>
              </div>

              {/* ADD/ADDED Button */}
              <button
                onClick={() => handleAddClick(item.id)}
                className={`absolute bottom-2 right-2 px-2 py-1 rounded-full text-xs font-bold transition-all duration-200 ${getColorClasses(
                  currentCategory.color,
                  addedItems[item.id]
                )}`}
              >
                {addedItems[item.id] ? "ADDED" : "ADD"}
              </button>
            </div>
          ))}
        </div>

        {/* Hide scrollbar */}
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

export default WorldOfPlay;