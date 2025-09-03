
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
        { id: 101, name: "Teddy Bear", qty: "1 Pc", price: 299, oldPrice: 499, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/a5c791de-9e8d-4306-81f6-83967ee3757d.png" },
        { id: 102, name: "Panda Plush", qty: "1 Pc", price: 399, oldPrice: 699, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/90232c93-bb26-453d-8deb-25cfbd198a9c.png" },
        { id: 103, name: "Rabbit Plush", qty: "1 Pc", price: 249, oldPrice: 499, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/c890f2fe-f389-48ed-84ff-1f94d8ca3de3.png" },
        { id: 104, name: "Elephant Plush", qty: "1 Pc", price: 459, oldPrice: 699, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/03aa17c1-3ceb-4d65-98e1-7939a555df71.png" },
        { id: 105, name: "Lion Plush", qty: "1 Pc", price: 359, oldPrice: 599, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/a8ddf055-38a3-473d-b1f3-9880b08226f0.png" },
        { id: 106, name: "Ameeha Labubu Doll", qty: "1 Pc", price: 359, oldPrice: 599, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/dd24b37b-12c0-47d9-adbb-ec892e487f97.png" },
        { id: 107, name: "Bunny Soft ToY", qty: "1 Pc", price: 399, oldPrice: 599, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/55d9a77f-b198-457a-9949-0a41d8914f0a.png" },
        { id: 108, name: "Dog Soft Toy", qty: "1 Pc", price: 359, oldPrice: 599, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/1eca55d8-6619-490a-9bbd-7fda197d954d.png" },
        { id: 109, name: "Toyshine Moon Ball ", qty: "1 Pc", price: 99, oldPrice: 159, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/04cc3eee-d860-408e-b677-036a1deec537.png" },
        { id: 110, name: "Elephant Plush Soft Toy", qty: "1 Pc", price: 359, oldPrice: 599, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/03aa17c1-3ceb-4d65-98e1-7939a555df71.png" },
      ],
    },
    {
      id: 1,
      name: "Sports & Games",
      icon: "https://cdn-icons-png.flaticon.com/512/1165/1165187.png",
      color: "green",
      data: [
        { id: 201, name: "Football", qty: "1 Pc", price: 499, oldPrice: 799, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/cf6c9077-c95a-4cff-a93f-20be8c31e42c.png" },
        { id: 202, name: "Badminton Set", qty: "1 Set", price: 599, oldPrice: 999, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/6ddd3317-aefc-432a-82fd-1d9c340dfa26.png" },
        { id: 203, name: "Cricket Bat", qty: "1 Pc", price: 699, oldPrice: 999, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/b160eddd-9e26-4f37-9fbb-7de560d07b91.png" },
        { id: 204, name: "Chess Board", qty: "1 Pc", price: 199, oldPrice: 299, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/1bf69add-0410-4dc4-998a-e66f8fe3a5b5.png" },
        { id: 205, name: "Carrom Board", qty: "1 Pc", price: 799, oldPrice: 1199, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/ef17678d-21b9-4c48-a8a2-fcf2eebc2e97.png" },
        { id: 206, name: "Slovic Tennis Cricket Ball", qty: "6 Pc", price: 359, oldPrice: 599, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/2dd327c6-aa1d-42e2-94c6-afe60f0a3ffa.png" },
        { id: 207, name: "Toyshine Big Size Bow & Arrow Set", qty: "1 Pc", price: 359, oldPrice: 599, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/9ca8063d-d97b-4e65-9448-a7b7a6777e97.png" },
        { id: 208, name: "Boldfit Stumps with Stand ", qty: "1 Pc", price: 359, oldPrice: 599, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/a77da7b8-c4a9-4c49-b207-08cebcd6efa8.png" },
        { id: 209, name: "Wicket Keeping Gloves", qty: "1 Pc", price: 359, oldPrice: 599, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/a361d9ad-6060-47c4-b37a-d0d598f305f1.png" },
        { id: 210, name: "Lifelong Cricket Bat Grip", qty: "1 Pc", price: 359, oldPrice: 599, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/0b5fe1af-9dcd-4667-bac6-837e2c976c4f.png" },
      ],
    },
    {
      id: 2,
      name: "Art & Craft",
      icon: "https://cdn-icons-png.flaticon.com/512/3595/3595455.png",
      color: "orange",
      data: [
        { id: 301, name: "Painting Kit", qty: "1 Set", price: 249, oldPrice: 399, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/1cf5111b-5993-4feb-90d5-1b15d7b09028.png" },
        { id: 302, name: "Origami Papers", qty: "50 Sheets", price: 199, oldPrice: 299, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/4f75bd27-fadc-4924-a453-598bdfc46033.png" },
        { id: 303, name: "Craft Box", qty: "1 Set", price: 349, oldPrice: 599, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/46cfd6f5-ca71-4cea-8785-b780d3538d37.png" },
        { id: 304, name: "Drawing Colors", qty: "12 Pcs", price: 149, oldPrice: 249, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/6252bd18-72cf-4eb4-80fd-13bed2d5ad20.png" },
        { id: 305, name: "DOMS Junior Art Kit", qty: "1 Pack", price: 229, oldPrice: 399, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/7978ab1e-dec1-4f57-8b56-a6d366012885.png"},
        { id: 306, name: "Creatures Origami Puzzle Book", qty: "1 Pack", price: 129, oldPrice: 399, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/0c2f7176-d37f-486d-ba89-4369d6ff6559.png" },
        { id: 307, name: "Handycrafts Sand Art Kit", qty: "1 Pack", price: 329, oldPrice: 399, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/e8e7c8db-ab55-4ae5-bbba-24f665bc8095.png" },
        { id: 308, name: "Funskool Fairy World Art Kit", qty: "1 Pack", price: 299, oldPrice: 399, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/f1936df6-feb5-42a5-a04e-45509b350ea7.png" },
        { id: 309, name: "Alia Fashion Art Doll Set", qty: "1 Pack", price: 229, oldPrice: 399, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/feef2c16-d900-480b-98a4-466baf836b95.png" },
      ],
    },
    {
      id: 3,
      name: "Educational Toys",
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      color: "purple",
      data: [
        { id: 401, name: "Building Blocks", qty: "50 Pcs", price: 399, oldPrice: 699, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/6bb9026e-4edf-48d8-ab32-08f749747472.png" },
        { id: 402, name: "Puzzle Board", qty: "1 Pc", price: 289, oldPrice: 450, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/a991a3f0-d783-4c84-9ded-802530379735.png" },
        { id: 403, name: "Abacus", qty: "1 Pc", price: 199, oldPrice: 299, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/968755d6-0e19-4b90-97f5-14de0a039e5a.png" },
        { id: 404, name: "Flash Cards", qty: "20 Pcs", price: 149, oldPrice: 249, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/905954b9-2554-40e5-9122-433a939ec778.png" },
        { id: 405, name: "Learning Tablet", qty: "1 Pc", price: 899, oldPrice: 1299, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/f8528dd6-2493-4990-915f-2565409ae00a.png" },
        { id: 406, name: "Play & Learn India Map  ", qty: "1 Pc", price: 499, oldPrice: 799, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/9e0f0d4f-b0df-47a9-8403-ebf435a6378a.png" },
        { id: 407, name: "TANTRUMS Wooden Clock Time  ", qty: "1 Pc", price: 499, oldPrice: 799, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/b66c2b2c-6a07-4c57-a32f-2ee1e5ff70c5.png" },
      ],
    },
    {
      id: 4,
      name: "Electronic Toys",
      icon: "https://cdn-icons-png.flaticon.com/512/1048/1048949.png",
      color: "blue",
      data: [
        { id: 501, name: "RC Car", qty: "1 Pc", price: 899, oldPrice: 1299, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/621e325d-cd94-4b82-b116-57feb57c469b.png" },
        { id: 502, name: "Robot Toy", qty: "1 Pc", price: 1299, oldPrice: 1799, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/98182fe2-2be3-44bf-8ee4-2d962e037ab4.png" },
        { id: 503, name: "Drone", qty: "1 Pc", price: 2999, oldPrice: 3999, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/7af2d50b-8358-4f1e-b5e4-8a8dd1148ce0.png" },
        { id: 504, name: "Electronic Gun", qty: "1 Pc", price: 599, oldPrice: 899, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/6e338eed-09f3-4099-933e-fb8678f66c57.png" },
        { id: 505, name: "Talking Doll", qty: "1 Pc", price: 499, oldPrice: 799, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/27eac583-664a-4769-ae3c-1ea284f2a204.png" },
        { id: 506, name: "Sonpal Dancing Cactus Talking Toy", qty: "1 Pc", price: 499, oldPrice: 799, image: "https://rukminim2.flixcart.com/image/612/612/xif0q/musical-toy/7/w/2/dancing-cactus-talking-toy-kids-children-plush-electronic-toys-original-imagzum8ymt6cmmz.jpeg?q=70" },
        { id: 507, name: "Electronic Keyboard Piano Musical Toy", qty: "1 Pc", price: 499, oldPrice: 799, image: "https://rukminim2.flixcart.com/image/612/612/xif0q/musical-toy/c/n/e/multi-function-portable-electronic-keyboard-piano-musical-toy39-original-imaghkhfqsf8fd9c.jpeg?q=70" },
        { id: 508, name: "Toyshine Bot Pioneer Dancing Robot ", qty: "1 Pc", price: 499, oldPrice: 799, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/98182fe2-2be3-44bf-8ee4-2d962e037ab4.png" },
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