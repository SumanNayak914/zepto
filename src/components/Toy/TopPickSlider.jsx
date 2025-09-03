import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const defaultTopPicks = [
  {
    id: 1,
    name: "Chocolate Box",
    qty: "250 g",
    price: 299,
    oldPrice: 399,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/2e5b71c8-2413-4a50-97c0-23c7d201060e.png",
  },
  {
    id: 2,
    name: "Premium Coffee",
    qty: "200 g",
    price: 499,
    oldPrice: 649,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/08ea0ced-f128-437b-8316-28a139a279cd.png",
  },
  {
    id: 3,
    name: " Noise Buds Wireless Earbuds",
    qty: "1 Set",
    price: 1499,
    oldPrice: 1999,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/daabd2f1-dd2f-4b09-96c9-1985b52db9a4.png",
  },
  {
    id: 4,
    name: " boAt Storm Fitness Watch",
    qty: "Smart Band",
    price: 1999,
    oldPrice: 2499,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/adc73b9f-35af-441d-b2f0-271e4447458e.png",
  },
  {
    id: 5,
    name: "Scented Candles",
    qty: "6 pcs",
    price: 599,
    oldPrice: 799,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/0bc3ffc9-b80a-4459-9e70-061b179c8e9e.png",
  },
  {
    id: 6,
    name: " boat Bluetooth Speaker",
    qty: "Mini",
    price: 1299,
    oldPrice: 1799,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/39b142e2-f39c-4171-8c25-38bf8f4c3944.png",
  },
  {
    id: 7,
    name: "Mylo Gentle Baby Wipes",
    qty: "3 packets",
    price: 299,
    oldPrice: 599,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/d00a77cb-9fb6-4d1b-9dc8-f2193873c1ea.png",
  },
  {
    id: 8,
    name: "Coca-Cola Soft Drink (300 ml)",
    qty: "300ml",
    price: 39,
    oldPrice: 69,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/0c9817d0-2643-4097-98b7-7059ba21e760.png",
  },
  {
    id: 9,
    name: "Bisleri Packaged Water (1l)",
    qty: "1 L",
    price: 19,
    oldPrice: 29,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/2faf253a-7e5b-4d53-9774-350add8d50b5.png",
  },
  {
    id: 10,
    name: "Maggi Masala - 2 Minutes Instant Noodles Made With Quality Spices",
    qty: "Mini",
    price: 59,
    oldPrice: 79,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/552b96c3-d2de-42ec-acc2-d41b8cde518c.png",
  },
  {
    id: 11,
    name: "Amul Vanilla Magic Ice Cream Tub",
    qty: "1 ltr",
    price: 199,
    oldPrice: 279,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/dd61e14d-e3f6-47fd-9448-23c4c33c20e5.png",
  },
];

const TopPickSlider = ({ title = "Top Picks", items = defaultTopPicks }) => {
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

export default TopPickSlider;