import React, { useState } from "react";

const MultiCategorySlider = () => {
  const [addedItems, setAddedItems] = useState({});

  const freshFruits = [
    { id: 1, name: "Apple", qty: "1 Kg", price: 120, oldPrice: 150, image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=500" },
    { id: 2, name: "Banana", qty: "1 Dozen", price: 40, oldPrice: 50, image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500" },
    { id: 3, name: "Orange", qty: "1 Kg", price: 80, oldPrice: 100, image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=500" },
    { id: 4, name: "Mango", qty: "1 Kg", price: 150, oldPrice: 180, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/c5768310-05ea-440e-afec-d96fad90780b.png" },
    { id: 5, name: "Grapes", qty: "500 g", price: 90, oldPrice: 120, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/0bed6ca3-3132-4e18-9f34-2a6fb46102c1.png" },
    { id: 6, name: "Strawberry", qty: "250 g", price: 200, oldPrice: 250, image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=500" },
    { id: 7, name: "Pomegranate", qty: "1 Kg", price: 180, oldPrice: 220, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/fd9126ec-ddc8-4d8d-93f2-4c7935ec46fd.png" },
    { id: 8, name: "Watermelon", qty: "1 Pc", price: 60, oldPrice: 80, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/afaa92b2-1a1a-4f0c-847b-28578fe3d9c1.png" },
  ];

  const leafyHerbsSeasoning = [
    { id: 101, name: "Spinach", qty: "1 Bunch", price: 20, oldPrice: 30, image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500" },
    { id: 102, name: "Mint", qty: "1 Bunch", price: 15, oldPrice: 25, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/f20bf9d3-fe3b-4339-a25d-c8ce092280e2.png" },
    { id: 103, name: "Coriander", qty: "1 Bunch", price: 15, oldPrice: 20, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/b77455ba-c381-4c8a-b170-fe65e5c664fb.png" },
    { id: 104, name: "Fenugreek", qty: "1 Bunch", price: 25, oldPrice: 35, image: "https://cdn.zeptonow.com/production/tr:w-403,ar-1200-1200,pr-true,f-auto,q-80/cms/product_variant/d24f4557-872b-45c1-9a36-bedc8b8f1f5c.jpeg" },
    { id: 105, name: "Basil", qty: "1 Bunch", price: 30, oldPrice: 40, image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/a8e3395a-19df-4cec-8de1-8b754a8d3206.png" },
    { id: 106, name: "Oregano", qty: "50 g", price: 80, oldPrice: 100, image: "https://cdn.zeptonow.com/production/tr:w-403,ar-1063-1063,pr-true,f-auto,q-80/cms/product_variant/8b807e23-0113-4167-8e1f-43ab94afd2d0.jpeg" },
    { id: 107, name: "Thyme", qty: "50 g", price: 90, oldPrice: 120, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/9ecc58ca-7324-4cfd-9a0a-5579918fea7e.png" },
    { id: 108, name: "Rosemary", qty: "50 g", price: 85, oldPrice: 110, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/ba246f2b-a312-4db4-9e0b-d72d6d42808e.png" },
  ];

  const exoticsPremium = [
    { id: 201, name: "Avocado", qty: "1 Pc", price: 150, oldPrice: 200, image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=500" },
    { id: 202, name: "Dragon Fruit", qty: "1 Pc", price: 180, oldPrice: 220, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/a285c923-5a02-459d-b4ca-51cec43ce9b6.png" },
    { id: 203, name: "Kiwi", qty: "4 Pcs", price: 120, oldPrice: 160, image: "https://images.unsplash.com/photo-1585059895524-72359e06133a?w=500" },
    { id: 204, name: "Blueberry", qty: "125 g", price: 300, oldPrice: 380, image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=500" },
    { id: 205, name: "Cherry", qty: "250 g", price: 400, oldPrice: 500, image: "https://images.unsplash.com/photo-1528821128474-27f963b062bf?w=500" },
    { id: 206, name: "Asparagus", qty: "250 g", price: 250, oldPrice: 300, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/9a5dcf7c-6ebb-4794-bcf1-a8a2a40e69a6.png" },
    { id: 207, name: "Zucchini", qty: "500 g", price: 80, oldPrice: 100, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/e937ba2b-ebab-46e3-9fa5-0e295d879967.png" },
    { id: 208, name: "Baby Corn", qty: "250 g", price: 60, oldPrice: 80, image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=500" },
  ];

  const plantsFlowers = [
    { id: 301, name: "Rose Plant", qty: "1 Pot", price: 150, oldPrice: 200, image: "https://cdn.zeptonow.com/production/tr:w-403,ar-1080-1737,pr-true,f-auto,q-80/cms/product_variant/76493a66-d7c5-4e38-8a7e-32e31d0fd768.jpeg" },
    { id: 302, name: "Marigold", qty: "1 Pot", price: 80, oldPrice: 100, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/058b1565-52db-435d-80db-8a8e0da96576.png" },
    { id: 303, name: "Jasmine", qty: "1 Pot", price: 120, oldPrice: 150, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/834f4709-e215-4e95-ace3-7ab68054fd8d.png" },
    { id: 304, name: "Tulsi Plant", qty: "1 Pot", price: 100, oldPrice: 130, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/d5d6004e-592b-4ee4-b0a9-7ccc478935d0.png" },
    { id: 305, name: "Money Plant", qty: "1 Pot", price: 90, oldPrice: 120, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/de5c5fb8-1be4-4fea-aa76-65672c8bec92.png" },
    { id: 306, name: "Cactus", qty: "1 Pot", price: 70, oldPrice: 90, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/61092184-7ed9-4ca9-9a0b-068e4ecef239.png" },
    { id: 307, name: "Succulent", qty: "1 Pot", price: 60, oldPrice: 80, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/3abb076a-680b-4b3a-b52f-e4a804ba8835.png" },
    { id: 308, name: "Aloe Vera", qty: "1 Pot", price: 80, oldPrice: 100, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQMs4UK_52tWtAXb8Du3_u0G87hrGn50KbjFQTNcVm0EqfdzipJv00UNM1v1__Uq2v9tjBETBokZDbDb9Uf_8803nlrnWW2fO7d4BMnE5Sh" },
  ];

  const categories = [
    { title: "Fresh Fruits", data: freshFruits, color: "orange" },
    { title: "Leafy & Herbs & Seasoning", data: leafyHerbsSeasoning, color: "green" },
    { title: "Exotics & Premium", data: exoticsPremium, color: "purple" },
    { title: "Plants & Flowers", data: plantsFlowers, color: "pink" },
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

  const getTitleColorClass = (color) => {
    const colorMap = {
      orange: "text-orange-700",
      green: "text-green-700",
      purple: "text-purple-700",
      pink: "text-pink-700",
    };
    return colorMap[color];
  };

  return (
    <div className="bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto space-y-4">
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            {/* Category Heading */}
            <h2 className={`text-2xl md:text-3xl font-bold text-left mb-4 ${getTitleColorClass(category.color)}`}>
              {category.title}
            </h2>

            {/* Scroll container */}
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-4">
              {category.data.map((item) => (
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
                  {/* Image */}
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
                    className={`absolute bottom-2 right-2 px-2 py-1 rounded-full text-xs font-bold transition-all duration-200 ${getColorClasses(category.color, addedItems[item.id])}`}
                  >
                    {addedItems[item.id] ? "ADDED" : "ADD"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}

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

export default MultiCategorySlider;