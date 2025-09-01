// import React, { useState } from "react";

// const CategorySlider = () => {
//   const [addedItems, setAddedItems] = useState({});
//   const [activeCategory, setActiveCategory] = useState(0);

//   const categories = [
//     {
//       id: 0,
//       name: "Leafy, Herbs & Seasoning",
//       icon: "🥬",
//       color: "green",
//       data: [
//         { id: 101, name: "Spinach", qty: "1 Bunch", price: 20, oldPrice: 30, image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500" },
//         { id: 102, name: "Mint", qty: "1 Bunch", price: 15, oldPrice: 25, image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=500" },
//         { id: 103, name: "Coriander", qty: "1 Bunch", price: 15, oldPrice: 20, image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500" },
//         { id: 104, name: "Fenugreek", qty: "1 Bunch", price: 25, oldPrice: 35, image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500" },
//         { id: 105, name: "Basil", qty: "1 Bunch", price: 30, oldPrice: 40, image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=500" },
//         { id: 106, name: "Oregano", qty: "50 g", price: 80, oldPrice: 100, image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500" },
//         { id: 107, name: "Thyme", qty: "50 g", price: 90, oldPrice: 120, image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=500" },
//         { id: 108, name: "Rosemary", qty: "50 g", price: 85, oldPrice: 110, image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500" },
//       ]
//     },
//     {
//       id: 1,
//       name: "Exotics & Premium",
//       icon: "🥑",
//       color: "purple",
//       data: [
//         { id: 201, name: "Avocado", qty: "1 Pc", price: 150, oldPrice: 200, image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=500" },
//         { id: 202, name: "Dragon Fruit", qty: "1 Pc", price: 180, oldPrice: 220, image: "https://images.unsplash.com/photo-1526318472351-c75fcf070305?w=500" },
//         { id: 203, name: "Kiwi", qty: "4 Pcs", price: 120, oldPrice: 160, image: "https://images.unsplash.com/photo-1585059895524-72359e06133a?w=500" },
//         { id: 204, name: "Blueberry", qty: "125 g", price: 300, oldPrice: 380, image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=500" },
//         { id: 205, name: "Cherry", qty: "250 g", price: 400, oldPrice: 500, image: "https://images.unsplash.com/photo-1528821128474-27f963b062bf?w=500" },
//         { id: 206, name: "Asparagus", qty: "250 g", price: 250, oldPrice: 300, image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=500" },
//         { id: 207, name: "Zucchini", qty: "500 g", price: 80, oldPrice: 100, image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=500" },
//         { id: 208, name: "Baby Corn", qty: "250 g", price: 60, oldPrice: 80, image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=500" },
//       ]
//     },
//     {
//       id: 2,
//       name: "Cuts & Sprouts",
//       icon: "🌱",
//       color: "orange",
//       data: [
//         { id: 301, name: "Bean Sprouts", qty: "250 g", price: 30, oldPrice: 40, image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500" },
//         { id: 302, name: "Alfalfa Sprouts", qty: "200 g", price: 40, oldPrice: 55, image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500" },
//         { id: 303, name: "Cut Beans", qty: "500 g", price: 45, oldPrice: 60, image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=500" },
//         { id: 304, name: "Cut Carrots", qty: "500 g", price: 35, oldPrice: 50, image: "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=500" },
//         { id: 305, name: "Diced Onions", qty: "500 g", price: 40, oldPrice: 55, image: "https://images.unsplash.com/photo-1508747703725-719777637510?w=500" },
//         { id: 306, name: "Sliced Mushrooms", qty: "250 g", price: 80, oldPrice: 100, image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=500" },
//         { id: 307, name: "Chopped Garlic", qty: "200 g", price: 45, oldPrice: 60, image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=500" },
//         { id: 308, name: "Ginger Paste", qty: "200 g", price: 50, oldPrice: 70, image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=500" },
//       ]
//     },
//     {
//       id: 3,
//       name: "Organics",
//       icon: "🌿",
//       color: "green",
//       data: [
//         { id: 401, name: "Organic Tomato", qty: "1 Kg", price: 80, oldPrice: 100, image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500" },
//         { id: 402, name: "Organic Potato", qty: "1 Kg", price: 60, oldPrice: 75, image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500" },
//         { id: 403, name: "Organic Spinach", qty: "1 Bunch", price: 35, oldPrice: 50, image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500" },
//         { id: 404, name: "Organic Carrot", qty: "1 Kg", price: 70, oldPrice: 90, image: "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=500" },
//         { id: 405, name: "Organic Onion", qty: "1 Kg", price: 55, oldPrice: 70, image: "https://images.unsplash.com/photo-1508747703725-719777637510?w=500" },
//         { id: 406, name: "Organic Apple", qty: "1 Kg", price: 180, oldPrice: 220, image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500" },
//         { id: 407, name: "Organic Banana", qty: "1 Dozen", price: 60, oldPrice: 80, image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500" },
//         { id: 408, name: "Organic Grapes", qty: "500 g", price: 150, oldPrice: 180, image: "https://images.unsplash.com/photo-1537640538966-79f369143b8f?w=500" },
//       ]
//     },
//     {
//       id: 4,
//       name: "Fresh Fruits",
//       icon: "🍊",
//       color: "orange",
//       data: [
//         { id: 501, name: "Apple", qty: "1 Kg", price: 120, oldPrice: 150, image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500" },
//         { id: 502, name: "Banana", qty: "1 Dozen", price: 40, oldPrice: 50, image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500" },
//         { id: 503, name: "Orange", qty: "1 Kg", price: 80, oldPrice: 100, image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=500" },
//         { id: 504, name: "Mango", qty: "1 Kg", price: 150, oldPrice: 180, image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=500" },
//         { id: 505, name: "Grapes", qty: "500 g", price: 90, oldPrice: 120, image: "https://images.unsplash.com/photo-1537640538966-79f369143b8f?w=500" },
//         { id: 506, name: "Strawberry", qty: "250 g", price: 200, oldPrice: 250, image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=500" },
//         { id: 507, name: "Pomegranate", qty: "1 Kg", price: 180, oldPrice: 220, image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=500" },
//         { id: 508, name: "Watermelon", qty: "1 Pc", price: 60, oldPrice: 80, image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500" },
//       ]
//     },
//     {
//       id: 5,
//       name: "Fresh Vegetables",
//       icon: "🥕",
//       color: "green",
//       data: [
//         { id: 601, name: "Tomato", qty: "1 Kg", price: 45, oldPrice: 60, image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500" },
//         { id: 602, name: "Potato", qty: "1 Kg", price: 30, oldPrice: 40, image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500" },
//         { id: 603, name: "Onion", qty: "1 Kg", price: 35, oldPrice: 50, image: "https://images.unsplash.com/photo-1508747703725-719777637510?w=500" },
//         { id: 604, name: "Carrot", qty: "500 g", price: 25, oldPrice: 35, image: "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=500" },
//         { id: 605, name: "Cauliflower", qty: "1 Pc", price: 40, oldPrice: 55, image: "https://images.unsplash.com/photo-1568584711075-3d021a58d1ad?w=500" },
//         { id: 606, name: "Broccoli", qty: "250 g", price: 60, oldPrice: 80, image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=500" },
//         { id: 607, name: "Capsicum", qty: "500 g", price: 50, oldPrice: 65, image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=500" },
//         { id: 608, name: "Cucumber", qty: "1 Kg", price: 35, oldPrice: 45, image: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=500" },
//       ]
//     }
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
//         : "bg-white border border-orange-500 text-orange-500 hover:bg-orange-50",
//       green: isAdded 
//         ? "bg-green-500 text-white border border-green-500" 
//         : "bg-white border border-green-500 text-green-500 hover:bg-green-50",
//       purple: isAdded 
//         ? "bg-purple-500 text-white border border-purple-500" 
//         : "bg-white border border-purple-500 text-purple-500 hover:bg-purple-50",
//       pink: isAdded 
//         ? "bg-pink-500 text-white border border-pink-500" 
//         : "bg-white border border-pink-500 text-pink-500 hover:bg-pink-50",
//     };
//     return colorMap[color];
//   };

//   const currentCategory = categories[activeCategory];

//   return (
//     <div className="bg-gray-50 p-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Top Image Section */}
//         <div className="h-auto w-full p-2 mb-4">
//           {/* You can add your image here */}
//           <div className="bg-gray-200 h-32 flex items-center justify-center rounded">
//             <span className="text-gray-500">Image placeholder</span>
//           </div>
//         </div>
//         {/* Category Tabs */}
//         <div className="flex gap-3 sm:gap-6 overflow-x-auto no-scrollbar mb-6">
//           {categories.map((category, index) => (
//             <button
//               key={category.id}
//               onClick={() => setActiveCategory(index)}
//               className={`flex-shrink-0 flex flex-col items-center pb-2 transition-all duration-200 relative min-w-0 ${
//                 activeCategory === index ? 'text-purple-600' : 'text-gray-600 hover:text-gray-800'
//               }`}
//             >
//               {/* Icon placeholder - you can add your image here */}
//               <div className="w-6 h-6 sm:w-8 sm:h-8 mb-2 bg-gray-200 flex items-center justify-center">
//                 <span className="text-xs text-gray-400">Icon</span>
//               </div>
              
//               <span className="text-xs sm:text-sm font-medium text-center leading-tight max-w-16 sm:max-w-none">
//                 {category.name}
//               </span>
              
//               {/* Active underline */}
//               {activeCategory === index && (
//                 <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-500"></div>
//               )}
//             </button>
//           ))}
//         </div>

//         {/* Selected Category Slider */}
//         <div className="flex gap-2 overflow-x-auto no-scrollbar pb-4">
//           {currentCategory.data.map((item) => (
//             <div
//               key={item.id}
//               className="
//                 bg-white relative flex-shrink-0
//                 w-[calc((100vw-48px)/3)]
//                 sm:min-w-[140px] sm:max-w-[140px]
//                 md:min-w-[160px] md:max-w-[160px]
//                 rounded-lg 
//                 shadow-sm
//               "
//             >
//               {/* Image */}
//               <div className="w-full h-24 sm:h-32 md:h-36 overflow-hidden rounded-t-lg rounded-b-lg">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-full h-full object-cover"
//                   loading="lazy"
//                   decoding="async"
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

//               {/* ADD/ADDED Button */}
//               <button
//                 onClick={() => handleAddClick(item.id)}
//                 className={`absolute bottom-2 right-2 px-2 py-1 rounded-full text-xs font-bold transition-all duration-200 ${getColorClasses(currentCategory.color, addedItems[item.id])}`}
//               >
//                 {addedItems[item.id] ? "ADDED" : "ADD"}
//               </button>
//             </div>
//           ))}
//         </div>

//         {/* Hide scrollbar */}
//         <style jsx>{`
//           .no-scrollbar {
//             -ms-overflow-style: none;
//             scrollbar-width: none;
//           }
//           .no-scrollbar::-webkit-scrollbar {
//             display: none;
//           }
//         `}</style>
//       </div>
//     </div>
//   );
// };

// export default CategorySlider;
import React, { useState } from "react";

const CategorySlider = () => {
  const [addedItems, setAddedItems] = useState({});
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      id: 0,
      name: "Leafy, Herbs & Seasoning",
      icon: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=100&h=100&fit=crop",
      color: "green",
      data: [
        { id: 101, name: "Spinach", qty: "1 Bunch", price: 20, oldPrice: 30, image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500" },
        { id: 102, name: "Mint", qty: "1 Bunch", price: 15, oldPrice: 25, image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=500" },
        { id: 103, name: "Coriander", qty: "1 Bunch", price: 15, oldPrice: 20, image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500" },
        { id: 104, name: "Fenugreek", qty: "1 Bunch", price: 25, oldPrice: 35, image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500" },
        { id: 105, name: "Basil", qty: "1 Bunch", price: 30, oldPrice: 40, image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=500" },
        { id: 106, name: "Oregano", qty: "50 g", price: 80, oldPrice: 100, image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500" },
        { id: 107, name: "Thyme", qty: "50 g", price: 90, oldPrice: 120, image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=500" },
        { id: 108, name: "Rosemary", qty: "50 g", price: 85, oldPrice: 110, image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500" },
      ]
    },
    {
      id: 1,
      name: "Exotics & Premium",
      icon: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=100&h=100&fit=crop",
      color: "purple",
      data: [
        { id: 201, name: "Avocado", qty: "1 Pc", price: 150, oldPrice: 200, image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=500" },
        { id: 202, name: "Dragon Fruit", qty: "1 Pc", price: 180, oldPrice: 220, image: "https://images.unsplash.com/photo-1526318472351-c75fcf070305?w=500" },
        { id: 203, name: "Kiwi", qty: "4 Pcs", price: 120, oldPrice: 160, image: "https://images.unsplash.com/photo-1585059895524-72359e06133a?w=500" },
        { id: 204, name: "Blueberry", qty: "125 g", price: 300, oldPrice: 380, image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=500" },
        { id: 205, name: "Cherry", qty: "250 g", price: 400, oldPrice: 500, image: "https://images.unsplash.com/photo-1528821128474-27f963b062bf?w=500" },
        { id: 206, name: "Asparagus", qty: "250 g", price: 250, oldPrice: 300, image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=500" },
        { id: 207, name: "Zucchini", qty: "500 g", price: 80, oldPrice: 100, image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=500" },
        { id: 208, name: "Baby Corn", qty: "250 g", price: 60, oldPrice: 80, image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=500" },
      ]
    },
    {
      id: 2,
      name: "Cuts & Sprouts",
      icon: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=100&h=100&fit=crop",
      color: "orange",
      data: [
        { id: 301, name: "Bean Sprouts", qty: "250 g", price: 30, oldPrice: 40, image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500" },
        { id: 302, name: "Alfalfa Sprouts", qty: "200 g", price: 40, oldPrice: 55, image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500" },
        { id: 303, name: "Cut Beans", qty: "500 g", price: 45, oldPrice: 60, image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=500" },
        { id: 304, name: "Cut Carrots", qty: "500 g", price: 35, oldPrice: 50, image: "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=500" },
        { id: 305, name: "Diced Onions", qty: "500 g", price: 40, oldPrice: 55, image: "https://images.unsplash.com/photo-1508747703725-719777637510?w=500" },
        { id: 306, name: "Sliced Mushrooms", qty: "250 g", price: 80, oldPrice: 100, image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=500" },
        { id: 307, name: "Chopped Garlic", qty: "200 g", price: 45, oldPrice: 60, image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=500" },
        { id: 308, name: "Ginger Paste", qty: "200 g", price: 50, oldPrice: 70, image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=500" },
      ]
    },
    {
      id: 3,
      name: "Organics",
      icon: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=100&h=100&fit=crop",
      color: "green",
      data: [
        { id: 401, name: "Organic Tomato", qty: "1 Kg", price: 80, oldPrice: 100, image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500" },
        { id: 402, name: "Organic Potato", qty: "1 Kg", price: 60, oldPrice: 75, image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500" },
        { id: 403, name: "Organic Spinach", qty: "1 Bunch", price: 35, oldPrice: 50, image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500" },
        { id: 404, name: "Organic Carrot", qty: "1 Kg", price: 70, oldPrice: 90, image: "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=500" },
        { id: 405, name: "Organic Onion", qty: "1 Kg", price: 55, oldPrice: 70, image: "https://images.unsplash.com/photo-1508747703725-719777637510?w=500" },
        { id: 406, name: "Organic Apple", qty: "1 Kg", price: 180, oldPrice: 220, image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500" },
        { id: 407, name: "Organic Banana", qty: "1 Dozen", price: 60, oldPrice: 80, image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500" },
        { id: 408, name: "Organic Grapes", qty: "500 g", price: 150, oldPrice: 180, image: "https://images.unsplash.com/photo-1537640538966-79f369143b8f?w=500" },
      ]
    },
    {
      id: 4,
      name: "Fresh Fruits",
      icon: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=100&h=100&fit=crop",
      color: "orange",
      data: [
        { id: 501, name: "Apple", qty: "1 Kg", price: 120, oldPrice: 150, image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500" },
        { id: 502, name: "Banana", qty: "1 Dozen", price: 40, oldPrice: 50, image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500" },
        { id: 503, name: "Orange", qty: "1 Kg", price: 80, oldPrice: 100, image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=500" },
        { id: 504, name: "Mango", qty: "1 Kg", price: 150, oldPrice: 180, image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=500" },
        { id: 505, name: "Grapes", qty: "500 g", price: 90, oldPrice: 120, image: "https://images.unsplash.com/photo-1537640538966-79f369143b8f?w=500" },
        { id: 506, name: "Strawberry", qty: "250 g", price: 200, oldPrice: 250, image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=500" },
        { id: 507, name: "Pomegranate", qty: "1 Kg", price: 180, oldPrice: 220, image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=500" },
        { id: 508, name: "Watermelon", qty: "1 Pc", price: 60, oldPrice: 80, image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500" },
      ]
    },
    {
      id: 5,
      name: "Fresh Vegetables",
      icon: "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=100&h=100&fit=crop",
      color: "green",
      data: [
        { id: 601, name: "Tomato", qty: "1 Kg", price: 45, oldPrice: 60, image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500" },
        { id: 602, name: "Potato", qty: "1 Kg", price: 30, oldPrice: 40, image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500" },
        { id: 603, name: "Onion", qty: "1 Kg", price: 35, oldPrice: 50, image: "https://images.unsplash.com/photo-1508747703725-719777637510?w=500" },
        { id: 604, name: "Carrot", qty: "500 g", price: 25, oldPrice: 35, image: "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=500" },
        { id: 605, name: "Cauliflower", qty: "1 Pc", price: 40, oldPrice: 55, image: "https://images.unsplash.com/photo-1568584711075-3d021a58d1ad?w=500" },
        { id: 606, name: "Broccoli", qty: "250 g", price: 60, oldPrice: 80, image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=500" },
        { id: 607, name: "Capsicum", qty: "500 g", price: 50, oldPrice: 65, image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=500" },
        { id: 608, name: "Cucumber", qty: "1 Kg", price: 35, oldPrice: 45, image: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=500" },
      ]
    }
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
    };
    return colorMap[color];
  };

  const currentCategory = categories[activeCategory];

  return (
    <div className="bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Top Banner Image Section */}
        <div className="h-auto w-full px-2 mb-4">
          <div className="relative  overflow-hidden rounded-lg ">
            <img
              src="https://cdn.zeptonow.com/production/tr:w-640,ar-1440-88,pr-true,f-auto,q-80/inventory/banner/b11ca9ae-7168-4564-aeb2-2e59c1d49cb9.png"
              alt="Fresh groceries banner"
              className="w-full h-auto object-contain"
            />
           
          </div>
        </div>

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
              <div className="w-8 h-8 sm:w-10 sm:h-10 mb-2 rounded-full overflow-hidden border-2 border-gray-200">
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
                w-[calc((100vw-48px)/3)]
                sm:min-w-[140px] sm:max-w-[140px]
                md:min-w-[160px] md:max-w-[160px]
                rounded-lg 
                shadow-sm
              "
            >
              {/* Product Image */}
              <div className="w-full h-24 sm:h-32 md:h-36 overflow-hidden rounded-t-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
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
                className={`absolute bottom-2 right-2 px-2 py-1 rounded-full text-xs font-bold transition-all duration-200 ${getColorClasses(currentCategory.color, addedItems[item.id])}`}
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

export default CategorySlider;