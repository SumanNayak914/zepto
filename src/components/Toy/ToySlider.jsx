import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const defaultToys = [
  {
    id: 1,
    name: "Remote Car",
    qty: "1 Pc",
    price: 499,
    oldPrice: 699,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/5ce092d9-564d-4fb7-b269-61357ccf7f91.png",
  },
  {
    id: 2,
    name: "Teddy Bear",
    qty: "30 cm",
    price: 349,
    oldPrice: 499,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/a5c791de-9e8d-4306-81f6-83967ee3757d.png",
  },
  {
    id: 3,
    name: "Building Blocks",
    qty: "60 pcs",
    price: 599,
    oldPrice: 799,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/6bb9026e-4edf-48d8-ab32-08f749747472.png",
  },
  {
    id: 4,
    name: "Rubik's Cube",
    qty: "3x3",
    price: 199,
    oldPrice: 299,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/e2f59024-8f36-4ba1-b20b-085bbf1621b2.png",
  },
  {
    id: 5,
    name: "Doll House",
    qty: "Mini Set",
    price: 899,
    oldPrice: 1199,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/b9eaf5a1-01ce-4cd1-94c8-f222639ea8c8.png",
  },
  {
    id: 6,
    name: "Cricket Bat (Kids)",
    qty: "Size 3",
    price: 399,
    oldPrice: 549,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/1286785f-d840-4ac8-9041-ff75dbe7e1cc.png",
  },
  {
    id: 7,
    name: "Action Figure(Iron Man)",
    qty: "1 Pc",
    price: 449,
    oldPrice: 599,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/2280feee-f8c3-4c94-9b9c-3ed10636b780.png",
  },
  {
    id: 8,
    name: "Kitchen Set",
    qty: "12 pcs",
    price: 529,
    oldPrice: 749,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/bc710dc2-afe0-4c37-bf27-66729dcd1a5f.png",
  },
  {
    id: 9,
    name: "Puzzle Board",
    qty: "A-Z",
    price: 259,
    oldPrice: 349,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/a991a3f0-d783-4c84-9ded-802530379735.png",
  },
  {
    id: 10,
    name: "Ludo Board",
    qty: "1 pcs",
    price: 159,
    oldPrice: 249,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/1e104413-4c5d-47f4-8fd4-befd678dae4e.png",
  },
  {
    id: 11,
    name: "King Krab Round Magnetic Dart Game",
    qty: "1 pcz",
    price: 299,
    oldPrice: 349,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/6d8e7a82-444c-430b-a1c0-c416bd766aba.png",
  },
  {
    id: 12,
    name: "Centzy Toy Car",
    qty: "1 pcs",
    price: 299,
    oldPrice: 349,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/ec09225f-62a7-4d68-a18a-d6a2476e161d.png",
  },
];

const ToySlider = ({ title = "Popular Toys", items = defaultToys }) => {
  const [addedItems, setAddedItems] = useState({});
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const scrollContainerRef = useRef(null);

  const handleAddClick = (itemId) => {
    setAddedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    checkScrollPosition();
  }, [items]);

  return (
    <div className="bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-left mb-6 text-gray-800">
          {title}
        </h2>

        {/* Scroll container with arrows */}
        <div className="relative">
          {/* Left Arrow - Hidden on mobile */}
          {showLeftArrow && (
            <button
              onClick={scrollLeft}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 transition-all duration-200 border border-gray-200 hidden md:block"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} className="text-gray-600" />
            </button>
          )}

          {/* Right Arrow - Hidden on mobile */}
          {showRightArrow && (
            <button
              onClick={scrollRight}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 transition-all duration-200 border border-gray-200 hidden md:block"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} className="text-gray-600" />
            </button>
          )}

          {/* Scroll container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-1 overflow-x-auto no-scrollbar pb-4"
            onScroll={checkScrollPosition}
          >
            {items.map((item) => (
              <div
                key={item.id}
                className="
                  bg-white relative flex-shrink-0
                  w-[calc((100vw-32px-8px)/3)]
                  sm:w-[140px]
                  md:w-[160px]
                  lg:w-[180px]
                  rounded-lg shadow-sm
                "
              >
                {/* Image Container with Fixed Height */}
                <div className="w-full h-24 sm:h-32 md:h-36 overflow-hidden rounded-lg bg-white">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-lg"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Content */}
                <div className="p-2 pb-10">
                  <p className="font-medium text-xs sm:text-sm mb-1 truncate">{item.name}</p>
                  <p className="text-gray-500 text-xs mb-1">{item.qty}</p>
                  <div className="flex items-center gap-1 mb-2">
                    <span className="text-sm font-bold text-green-600">
                      ₹{item.price}
                    </span>
                    {item.oldPrice ? (
                      <span className="line-through text-gray-400 text-xs">
                        ₹{item.oldPrice}
                      </span>
                    ) : null}
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

export default ToySlider;