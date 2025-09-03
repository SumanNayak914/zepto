
import React, { useState } from "react";

const CategorySlider = () => {
  const [addedItems, setAddedItems] = useState({});
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      id: 0,
      name: "Leafy, Herbs & Seasoning",
      icon: "https://cdn.zeptonow.com/production/tr:w-72,ar-192-192,pr-true,f-auto,q-80/inventory/banner/008443f2-c12a-4967-9013-acd1897a6a94.png",
      color: "green",
      data: [
        { id: 101, name: "Spinach", qty: "1 Bunch", price: 20, oldPrice: 30, image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500" },
        { id: 102, name: "Mint", qty: "1 Bunch", price: 15, oldPrice: 25, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/f20bf9d3-fe3b-4339-a25d-c8ce092280e2.png" },
        { id: 103, name: "Coriander", qty: "1 Bunch", price: 15, oldPrice: 20, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/b77455ba-c381-4c8a-b170-fe65e5c664fb.png" },
        { id: 104, name: "Fenugreek", qty: "1 Bunch", price: 25, oldPrice: 35, image: "https://cdn.zeptonow.com/production/tr:w-403,ar-1200-1200,pr-true,f-auto,q-80/cms/product_variant/d24f4557-872b-45c1-9a36-bedc8b8f1f5c.jpeg" },
        { id: 105, name: "Basil", qty: "1 Bunch", price: 30, oldPrice: 40, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/a8e3395a-19df-4cec-8de1-8b754a8d3206.png" },
        { id: 106, name: "Oregano", qty: "50 g", price: 80, oldPrice: 100, image: "https://cdn.zeptonow.com/production/tr:w-403,ar-1063-1063,pr-true,f-auto,q-80/cms/product_variant/8b807e23-0113-4167-8e1f-43ab94afd2d0.jpeg" },
        { id: 107, name: "Thyme", qty: "50 g", price: 90, oldPrice: 120, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/9ecc58ca-7324-4cfd-9a0a-5579918fea7e.png" },
        { id: 108, name: "Rosemary", qty: "50 g", price: 85, oldPrice: 110, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/ba246f2b-a312-4db4-9e0b-d72d6d42808e.png" },
      ]
    },
    {
      id: 1,
      name: "Exotics & Premium",
      icon: "https://cdn.zeptonow.com/production/tr:w-72,ar-192-192,pr-true,f-auto,q-80/inventory/banner/7c937588-c90b-414e-8c08-82172e3dfa47.png",
      color: "purple",
      data: [
        { id: 201, name: "Avocado", qty: "1 Pc", price: 150, oldPrice: 200, image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=500" },
        { id: 202, name: "Dragon Fruit", qty: "1 Pc", price: 180, oldPrice: 220, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/a285c923-5a02-459d-b4ca-51cec43ce9b6.png" },
        { id: 203, name: "Kiwi", qty: "4 Pcs", price: 120, oldPrice: 160, image: "https://images.unsplash.com/photo-1585059895524-72359e06133a?w=500" },
        { id: 204, name: "Blueberry", qty: "125 g", price: 300, oldPrice: 380, image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=500" },
        { id: 205, name: "Cherry", qty: "250 g", price: 400, oldPrice: 500, image: "https://images.unsplash.com/photo-1528821128474-27f963b062bf?w=500" },
        { id: 206, name: "Asparagus", qty: "250 g", price: 250, oldPrice: 300, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/9a5dcf7c-6ebb-4794-bcf1-a8a2a40e69a6.png" },
        { id: 207, name: "Zucchini", qty: "500 g", price: 80, oldPrice: 100, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/e937ba2b-ebab-46e3-9fa5-0e295d879967.png" },
        { id: 208, name: "Baby Corn", qty: "250 g", price: 60, oldPrice: 80, image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=500" },
      ]
    },
    {
      id: 2,
      name: "Cuts & Sprouts",
      icon: "https://cdn.zeptonow.com/production/tr:w-72,ar-192-192,pr-true,f-auto,q-80/inventory/banner/16aab6dd-31b7-460c-bba9-d3c0143aae33.png",
      color: "orange",
      data: [
        { id: 301, name: "Bean Sprouts", qty: "250 g", price: 30, oldPrice: 40, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/5b817cea-9c04-4699-8ab2-02de62e13f3e.png" },
        { id: 302, name: "Alfalfa Sprouts", qty: "200 g", price: 40, oldPrice: 55, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/cbc357af-38c8-45c8-8afa-a1a5703dc1af.png" },
        { id: 303, name: "Cut Beans", qty: "500 g", price: 45, oldPrice: 60, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/5554a571-723e-4d4e-ac0b-14ece7df3876.png" },
        { id: 304, name: "Cut Carrots", qty: "500 g", price: 35, oldPrice: 50, image: "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=500" },
        { id: 305, name: "Diced Onions", qty: "500 g", price: 40, oldPrice: 55, image: "https://images.unsplash.com/photo-1508747703725-719777637510?w=500" },
        { id: 306, name: "Sliced Mushrooms", qty: "250 g", price: 80, oldPrice: 100, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/9bc0b3fd-3aac-4f5f-a8f7-0c0b63cef1bb.png" },
        { id: 307, name: "Chopped Garlic", qty: "200 g", price: 45, oldPrice: 60, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/d3dc6f2b-7d67-4e41-8da8-40d08967796e.png" },
        { id: 308, name: "Ginger Paste", qty: "200 g", price: 50, oldPrice: 70, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/de2a6121-86a7-4d0b-ae0f-242d68f0fa98.png" },
      ]
    },
    {
      id: 3,
      name: "Organics",
      icon: "https://cdn.zeptonow.com/production/tr:w-72,ar-192-192,pr-true,f-auto,q-80/inventory/banner/982d3548-c430-40b7-8870-e026bb18f9b2.png",
      color: "green",
      data: [
        { id: 401, name: "Organic Tomato", qty: "1 Kg", price: 80, oldPrice: 100, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/f211607a-bad3-4d1b-87c3-d2471356db7c.png" },
        { id: 402, name: "Organic Potato", qty: "1 Kg", price: 60, oldPrice: 75, image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500" },
        { id: 403, name: "Organic Spinach", qty: "1 Bunch", price: 35, oldPrice: 50, image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500" },
        { id: 404, name: "Organic Carrot", qty: "1 Kg", price: 70, oldPrice: 90, image: "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=500" },
        { id: 405, name: "Organic Onion", qty: "1 Kg", price: 55, oldPrice: 70, image: "https://images.unsplash.com/photo-1508747703725-719777637510?w=500" },
        { id: 406, name: "Organic Apple", qty: "1 Kg", price: 180, oldPrice: 220, image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500" },
        { id: 407, name: "Organic Banana", qty: "1 Dozen", price: 60, oldPrice: 80, image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500" },
        { id: 408, name: "Organic Grapes", qty: "500 g", price: 150, oldPrice: 180, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/0bed6ca3-3132-4e18-9f34-2a6fb46102c1.png" },
      ]
    },
    {
      id: 4,
      name: "Fresh Fruits",
      icon: "https://cdn.zeptonow.com/production/tr:w-72,ar-192-192,pr-true,f-auto,q-80/inventory/banner/ab477d3c-7032-447f-ad9a-53b4aad716db.png",
      color: "orange",
      data: [
        { id: 501, name: "Apple", qty: "1 Kg", price: 120, oldPrice: 150, image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500" },
        { id: 502, name: "Banana", qty: "1 Dozen", price: 40, oldPrice: 50, image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500" },
        { id: 503, name: "Orange", qty: "1 Kg", price: 80, oldPrice: 100, image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=500" },
        { id: 504, name: "Mango", qty: "1 Kg", price: 150, oldPrice: 180, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/c5768310-05ea-440e-afec-d96fad90780b.png" },
        { id: 505, name: "Grapes", qty: "500 g", price: 90, oldPrice: 120, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/0bed6ca3-3132-4e18-9f34-2a6fb46102c1.png" },
        { id: 506, name: "Strawberry", qty: "250 g", price: 200, oldPrice: 250, image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=500" },
        { id: 507, name: "Pomegranate", qty: "1 Kg", price: 180, oldPrice: 220, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/fd9126ec-ddc8-4d8d-93f2-4c7935ec46fd.png" },
        { id: 508, name: "Watermelon", qty: "1 Pc", price: 60, oldPrice: 80, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/afaa92b2-1a1a-4f0c-847b-28578fe3d9c1.png" },
      ]
    },
    {
      id: 5,
      name: "Fresh Vegetables",
      icon: "https://cdn.zeptonow.com/production/tr:w-72,ar-192-192,pr-true,f-auto,q-80/inventory/banner/d68419b9-cd18-4f8d-8c2a-fc7258417d12.png",
      color: "green",
      data: [
        { id: 601, name: "Tomato", qty: "1 Kg", price: 45, oldPrice: 60, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/4ea129f5-d31b-4c96-8825-3680f77f4c5c.png" },
        { id: 602, name: "Potato", qty: "1 Kg", price: 30, oldPrice: 40, image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500" },
        { id: 603, name: "Onion", qty: "1 Kg", price: 35, oldPrice: 50, image: "https://images.unsplash.com/photo-1508747703725-719777637510?w=500" },
        { id: 604, name: "Carrot", qty: "500 g", price: 25, oldPrice: 35, image: "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=500" },
        { id: 605, name: "Cauliflower", qty: "1 Pc", price: 40, oldPrice: 55, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/9cb3146c-eaf7-434d-9743-99708a9d9b15.png" },
        { id: 606, name: "Broccoli", qty: "250 g", price: 60, oldPrice: 80, image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=500" },
        { id: 607, name: "Capsicum", qty: "500 g", price: 50, oldPrice: 65, image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=500" },
        { id: 608, name: "Cucumber", qty: "1 Kg", price: 35, oldPrice: 45, image: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=500" },
        { id: 609, name: "Brinjle", qty: "1 Kg", price: 45, oldPrice: 75, image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/49ac30ac-04bd-4e2e-b4bd-84f3594fe2ed.png" },
        { id: 609, name: "Peas", qty: "250 gm", price: 37, oldPrice: 55, image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/7d82028c-c189-4e8d-bff8-a31f197f5cdd.png" },
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