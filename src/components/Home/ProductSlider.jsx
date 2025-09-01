// import { useRef, useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const products = [
//   {
//     id: 1,
//     img: "https://cdn.zeptonow.com/production/tr:w-520,ar-1200-1200,pr-true,f-auto,q-80/cms/product_variant/895f32cb-609c-45a6-80fa-ccd9f32d4962.jpg",
//     title: "Portronics Type-A To Type-C Cable",
//     price: "₹169",
//     oldPrice: "₹599",
//     save: "SAVE ₹430",
//   },
//   {
//     id: 2,
//     img: "https://cdn.zeptonow.com/production/tr:w-520,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/9b8420a7-c81a-4d85-9233-a5f69d6d0613.jpg",
//     title: "Agaro Dual Channel Tens Massager",
//     price: "₹1839",
//     oldPrice: "₹4999",
//     save: "SAVE ₹3.2K",
//   },
//   {
//     id: 3,
//     img: "https://cdn.zeptonow.com/production/tr:w-520,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/383d8261-caef-4a8a-b076-945988464177.jpg",
//     title: "Agaro Rejoice Foot Massager",
//     price: "₹13559",
//     oldPrice: "₹37999",
//     save: "SAVE ₹24.4K",
//   },
//   {
//     id: 4,
//     img: "https://cdn.zeptonow.com/production/tr:w-520,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/d03426f4-c376-4e02-a732-cbabadb25ebf.jpg",
//     title: "Agaro Amaze Foot Massager",
//     price: "₹12059",
//     oldPrice: "₹25900",
//     save: "SAVE ₹13.8K",
//   },
//   {
//     id: 5,
//     img: "https://cdn.zeptonow.com/production/tr:w-520,ar-1000-1000,pr-true,f-auto,q-80/inventory/product/c0b348d8-9b48-4878-ac72-914ebb1e11a6-/tmp/20230918-1639481.jpeg",
//     title: "Lifelong Head & Body Massager",
//     price: "₹699",
//     oldPrice: "₹2300",
//     save: "SAVE ₹1.6K",
//   },
//   {
//     id: 6,
//     img: "https://cdn.zeptonow.com/production/tr:w-520,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/aa788591-e22b-441d-9b2a-3bc3093b9981.jpg",
//     title: "Portronics 65W Fast Charger",
//     price: "₹2999",
//   },
//   {
//     id: 7,
//     img: "https://cdn.zeptonow.com/production/tr:w-520,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/2a6af98b-7be6-429e-8848-057d2b5b6747.jpg",
//     title: "Agaro Magma Air Compression Leg",
//     price: "₹6759",
//     oldPrice: "₹19995",
//     save: "SAVE ₹13.2K",
//   },
//   {
//     id: 8,
//     img: "https://cdn.zeptonow.com/production/tr:w-520,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/e1480b2c-b934-4da2-9840-df1831c15b8d.jpg",
//     title: "Agaro Foot Massager Black",
//     price: "₹4759",
//     oldPrice: "₹11499",
//     save: "SAVE ₹6.7K",
//   },
//   {
//     id: 9,
//     img: "https://cdn.zeptonow.com/production/tr:w-520,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/7cd05b06-9186-4e89-8cdc-2172d10409e3.jpg",
//     title: "Agaro Foot Massager Black",
//     price: "₹4759",
//     oldPrice: "₹11499",
//     save: "SAVE ₹6.7K",
//   },
//   {
//     id: 10,
//     img: "https://cdn.zeptonow.com/production/tr:w-520,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/8ff77e56-fcb8-4d78-bac3-2e9c00323588.jpg",
//     title: "Agaro Foot Massager Black",
//     price: "₹4759",
//     oldPrice: "₹11499",
//     save: "SAVE ₹6.7K",
//   },
// ];

// export default function ProductSlider() {
//   const sliderRef = useRef(null);
//   const [showLeft, setShowLeft] = useState(false);
//   const [showRight, setShowRight] = useState(true);

//   const slide = (direction) => {
//     if (!sliderRef.current) return;
//     const { scrollLeft, clientWidth } = sliderRef.current;
//     const scrollAmount = clientWidth;

//     sliderRef.current.scrollTo({
//       left:
//         direction === "left"
//           ? scrollLeft - scrollAmount
//           : scrollLeft + scrollAmount,
//       behavior: "smooth",
//     });
//   };

//   // update arrow visibility on scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       if (!sliderRef.current) return;
//       const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
//       setShowLeft(scrollLeft > 5);
//       setShowRight(scrollLeft + clientWidth < scrollWidth - 5);
//     };

//     const slider = sliderRef.current;
//     if (slider) {
//       slider.addEventListener("scroll", handleScroll);
//       handleScroll();
//     }
//     return () => {
//       if (slider) slider.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className="w-full lg:w-7xl mx-auto px-4 py-6 md:px-6">
//       {/* Heading */}
//       <div className="flex items-center justify-between mb-4">
//         <h2 className="text-xl font-bold">Elevate Yourself</h2>
//         <a
//           href="#"
//           className="text-pink-500 text-sm font-semibold hover:underline"
//         >
//           See All →
//         </a>
//       </div>

//       <div className="relative">
//         {/* Left Arrow */}
//         {showLeft && (
//           <button
//             onClick={() => slide("left")}
//             className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10"
//           >
//             <ChevronLeft />
//           </button>
//         )}

//         {/* Slider */}
//         <div
//           ref={sliderRef}
//           className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar"
//         >
//           {products.map((p) => (
//             <div
//               key={p.id}
//               className="min-w-[200px] max-w-[200px] bg-white border rounded-lg shadow p-3 flex flex-col items-start text-left"
//             >
//               {/* Image Center */}
//               <img
//                 src={p.img}
//                 alt={p.title}
//                 className="w-32 h-32 object-contain mb-2 mx-auto"
//               />

//               {/* Title Left */}
//               <p className="text-sm font-medium line-clamp-2">{p.title}</p>

//               {/* Price Left */}
//               <p className="text-lg font-bold text-green-700">{p.price}</p>

//               {/* Old Price Left */}
//               {p.oldPrice && (
//                 <p className="text-gray-500 text-xs line-through">
//                   {p.oldPrice}
//                 </p>
//               )}

//               {/* Save Text Left */}
//               {p.save && (
//                 <p className="text-pink-600 text-xs font-semibold">{p.save}</p>
//               )}

//               {/* Button Left */}
//               <button className="mt-2 px-3 py-1 rounded-lg bg-pink-500 text-white text-sm">
//                 ADD
//               </button>
//             </div>
//           ))}
//         </div>

//         {/* Right Arrow */}
//         {showRight && (
//           <button
//             onClick={() => slide("right")}
//             className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10"
//           >
//             <ChevronRight />
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";

const ProductSlider = () => {
  const [addedItems, setAddedItems] = useState({});

  const products = [
    {
      id: 1,
      img: "https://cdn.zeptonow.com/production/tr:w-520,ar-1200-1200,pr-true,f-auto,q-80/cms/product_variant/895f32cb-609c-45a6-80fa-ccd9f32d4962.jpg",
      title: "Portronics Type-A To Type-C Cable",
      price: 169,
      oldPrice: 599,
    },
    {
      id: 2,
      img: "https://cdn.zeptonow.com/production/tr:w-520,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/9b8420a7-c81a-4d85-9233-a5f69d6d0613.jpg",
      title: "Agaro Dual Channel Tens Massager",
      price: 1839,
      oldPrice: 4999,
    },
    {
      id: 3,
      img: "https://cdn.zeptonow.com/production/tr:w-520,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/383d8261-caef-4a8a-b076-945988464177.jpg",
      title: "Agaro Rejoice Foot Massager",
      price: 13559,
      oldPrice: 37999,
    },
    {
      id: 4,
      img: "https://cdn.zeptonow.com/production/tr:w-520,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/d03426f4-c376-4e02-a732-cbabadb25ebf.jpg",
      title: "Agaro Amaze Foot Massager",
      price: 12059,
      oldPrice: 25900,
    },
    {
      id: 5,
      img: "https://cdn.zeptonow.com/production/tr:w-520,ar-1000-1000,pr-true,f-auto,q-80/inventory/product/c0b348d8-9b48-4878-ac72-914ebb1e11a6-/tmp/20230918-1639481.jpeg",
      title: "Lifelong Head & Body Massager",
      price: 699,
      oldPrice: 2300,
    },
    {
      id: 6,
      img: "https://cdn.zeptonow.com/production/tr:w-520,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/aa788591-e22b-441d-9b2a-3bc3093b9981.jpg",
      title: "Portronics 65W Fast Charger",
      price: 2999,
    },
    {
      id: 7,
      img: "https://cdn.zeptonow.com/production/tr:w-520,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/2a6af98b-7be6-429e-8848-057d2b5b6747.jpg",
      title: "Agaro Magma Air Compression Leg",
      price: 6759,
      oldPrice: 19995,
    },
    {
      id: 8,
      img: "https://cdn.zeptonow.com/production/tr:w-520,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/e1480b2c-b934-4da2-9840-df1831c15b8d.jpg",
      title: "Agaro Foot Massager Black",
      price: 4759,
      oldPrice: 11499,
    },
    {
      id: 9,
      img: "https://cdn.zeptonow.com/production/tr:w-520,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/7cd05b06-9186-4e89-8cdc-2172d10409e3.jpg",
      title: "Agaro Foot Massager Black",
      price: 4759,
      oldPrice: 11499,
    },
    {
      id: 10,
      img: "https://cdn.zeptonow.com/production/tr:w-520,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/8ff77e56-fcb8-4d78-bac3-2e9c00323588.jpg",
      title: "Agaro Foot Massager Black",
      price: 4759,
      oldPrice: 11499,
    },
  ];

  const handleAddClick = (itemId) => {
    setAddedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  return (
    <div className="bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-left mb-2 text-gray-800">
          Elevate Yourself
        </h2>

        {/* Scroll container */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-4">
          {products.map((item) => (
            <div
              key={item.id}
              className="
                bg-white relative flex-shrink-0
                w-[calc((100vw-48px)/3)]
                sm:min-w-[140px] sm:max-w-[140px]
                md:min-w-[104px] md:max-w-[140px]
                rounded-lg 
              "
            >
              {/* Image */}
              <div className="w-full h-28 sm:h-32 md:h-38 overflow-hidden rounded-t-lg rounded-b-lg flex items-center justify-center bg-gray-100 border border-gray-100">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Content */}
              <div className="p-2">
                <p className="font-medium text-xs mb-1 truncate">{item.title}</p>
                <div className="flex items-center gap-1 mb-2">
                  <span className="text-sm font-bold text-green-600">
                    ₹{item.price}
                  </span>
                  {item.oldPrice && (
                    <span className="line-through text-gray-400 text-xs">
                      ₹{item.oldPrice}
                    </span>
                  )}
                </div>
              </div>

              {/* ADD/ADDED Button */}
              <button
                onClick={() => handleAddClick(item.id)}
                className={`absolute bottom-2 right-2 px-2 py-1 rounded-full text-xs font-bold transition-all duration-200 ${
                  addedItems[item.id]
                    ? "bg-green-500 text-white border border-green-500"
                    : "bg-white border border-pink-500 text-pink-500 hover:bg-pink-50"
                }`}
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

export default ProductSlider;