import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // arrow icons

const FoodCategories = () => {
  const categories = [
    { id: 1, image: "https://cdn.zeptonow.com/production/tr:w-160,ar-332-412,pr-true,f-auto,q-80/inventory/banner/a9a4e615-c8aa-42c9-bf08-f4c8614168b3.png" },
    { id: 2, image: "/path/to/your/image2.jpg" },
    { id: 3, image: "/path/to/your/image3.jpg" },
    { id: 4, image: "/path/to/your/image4.jpg" },
    { id: 5, image: "/path/to/your/image5.jpg" },
    { id: 6, image: "/path/to/your/image6.jpg" },
    { id: 7, image: "/path/to/your/image7.jpg" },
    { id: 8, image: "/path/to/your/image8.jpg" },
    { id: 9, image: "/path/to/your/image9.jpg" },
    { id: 10, image: "/path/to/your/image10.jpg" },
    { id: 11, image: "/path/to/your/image11.jpg" },
    { id: 12, image: "/path/to/your/image12.jpg" },
    { id: 13, image: "/path/to/your/image13.jpg" },
    { id: 14, image: "/path/to/your/image14.jpg" },
    { id: 15, image: "/path/to/your/image15.jpg" },
    { id: 16, image: "/path/to/your/image16.jpg" },
    { id: 17, image: "/path/to/your/image17.jpg" },
    { id: 18, image: "/path/to/your/image18.jpg" }
  ];

  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  // check scroll position
  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setShowLeft(scrollLeft > 0);
    setShowRight(scrollLeft + clientWidth < scrollWidth - 5);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll);
    }
    return () => {
      if (el) el.removeEventListener("scroll", checkScroll);
    };
  }, []);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const scrollAmount = 300; // adjust speed
    scrollRef.current.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full bg-white py-6">
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 px-4">
          What's On Your Mind?
        </h2>

        {/* Mobile: 2 rows with synchronized horizontal scroll */}
        <div className="block md:hidden px-4">
          <div
            className="overflow-x-auto scrollbar-hide pb-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="flex flex-col gap-4" style={{ minWidth: "max-content" }}>
              {/* First Row */}
              <div className="flex gap-3">
                {categories.slice(0, 9).map((category) => (
                  <div
                    key={category.id}
                    className="cursor-pointer hover:scale-105 transition-transform duration-200 flex-shrink-0"
                  >
                    <div className="w-18 h-22 rounded-lg overflow-hidden">
                      <img
                        src={category.image}
                        alt={`Category ${category.id}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Second Row */}
              <div className="flex gap-3">
                {categories.slice(9, 18).map((category) => (
                  <div
                    key={category.id}
                    className="cursor-pointer hover:scale-105 transition-transform duration-200 flex-shrink-0"
                  >
                    <div className="w-18 h-22 rounded-lg overflow-hidden ">
                      <img
                        src={category.image}
                        alt={`Category ${category.id}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <style jsx>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>

        {/* Desktop: Single horizontal row with scroll + arrows */}
        <div className="hidden md:block relative">
          {/* Left Arrow */}
          {showLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Scrollable Categories */}
          <div
            ref={scrollRef}
            className="flex gap-6 px-8 overflow-x-auto scrollbar-hide flex-nowrap"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {categories.map((category) => (
              <div
                key={category.id}
                className="cursor-pointer  flex-shrink-0"
              >
                <div className="w-28 h-32 rounded-lg overflow-hidden ">
                  <img
                    src={category.image}
                    alt={`Category ${category.id}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          {showRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Hide scrollbar for webkit */}
          <style jsx>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default FoodCategories;
