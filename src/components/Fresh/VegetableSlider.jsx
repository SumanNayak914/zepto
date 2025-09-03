
import React, { useState } from "react";

const VegetableSlider = () => {
  const [addedItems, setAddedItems] = useState({});

  const vegetables = [
    { id: 1, name: "Tomato", qty: "1 Kg", price: 45, oldPrice: 60, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/4ea129f5-d31b-4c96-8825-3680f77f4c5c.png" },
    { id: 2, name: "Potato", qty: "1 Kg", price: 30, oldPrice: 40, image: "https://cdn.zeptonow.com/production/tr:w-403,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/d544e910-2ee7-44ab-b3a4-7a0b48e37de4.jpeg" },
    { id: 3, name: "Onion", qty: "1 Kg", price: 35, oldPrice: 50, image: "https://cdn.zeptonow.com/production/tr:w-403,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/74325fc4-5b13-4bbb-98a8-cd25df7167e6.jpeg" },
    { id: 4, name: "Carrot", qty: "500 g", price: 25, oldPrice: 35, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/00f0d26a-7b61-4e84-8903-abed0e2c4f69.png" },
    { id: 5, name: "Cauliflower", qty: "1 Pc", price: 40, oldPrice: 55, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/9cb3146c-eaf7-434d-9743-99708a9d9b15.png" },
    { id: 6, name: "Broccoli", qty: "250 g", price: 60, oldPrice: 80, image: "https://cdn.zeptonow.com/production/tr:w-403,ar-1200-1200,pr-true,f-auto,q-80/cms/product_variant/b1ee4ed5-9953-433e-b88c-11b0f85a805a.jpg" },
    { id: 7, name: "Spinach", qty: "1 Bunch", price: 20, oldPrice: 30, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/27edc027-ff1a-45aa-a0f6-837d214bad78.png" },
    { id: 8, name: "Capsicum", qty: "500 g", price: 50, oldPrice: 65, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/4d24ce65-de90-4b2c-93a9-d1a564aa2b5d.png" },
    { id: 9, name: "Cucumber", qty: "1 Kg", price: 35, oldPrice: 45, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/e29ff4ab-7a96-4b90-b251-0489fa0416a2.png" },
    { id: 10, name: "Brinjal", qty: "1 Kg", price: 40, oldPrice: 55, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/49ac30ac-04bd-4e2e-b4bd-84f3594fe2ed.png" },
    { id: 11, name: "Beans", qty: "500 g", price: 35, oldPrice: 50, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/fd03d723-50c0-43be-bb43-e9c80467ed8a.png" },
    { id: 12, name: "Peas", qty: "500 g", price: 55, oldPrice: 70, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/7d82028c-c189-4e8d-bff8-a31f197f5cdd.png" },
    { id: 13, name: "Ginger", qty: "250 g", price: 30, oldPrice: 40, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/e7c9461c-4a81-46cc-8215-5f9155026a6e.png" },
    { id: 14, name: "Garlic", qty: "250 g", price: 35, oldPrice: 50, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/4fcbc1fe-5a04-465f-9558-7ea73e9f8b1f.png" },
    { id: 15, name: "Mushroom", qty: "200 g", price: 70, oldPrice: 90, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/9bc0b3fd-3aac-4f5f-a8f7-0c0b63cef1bb.png" },
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
        <h2 className="text-2xl md:text-3xl font-bold text-left mb-6 text-gray-800">
          Fresh Vegetables
        </h2>

        {/* Scroll container */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-4">
          {vegetables.map((item) => (
            <div
              key={item.id}
              className="
                bg-white relative flex-shrink-0
                w-[calc((100vw-48px)/3)]
                sm:min-w-[140px] sm:max-w-[140px]
                md:min-w-[160px] md:max-w-[160px]
                rounded-lg 
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

export default VegetableSlider;
