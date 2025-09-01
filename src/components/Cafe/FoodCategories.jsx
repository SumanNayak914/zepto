import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // arrow icons

const FoodCategories = () => {
  const categories = [
    { id: 1, image: "https://cdn.zeptonow.com/production/tr:w-160,ar-332-412,pr-true,f-auto,q-80/inventory/banner/a9a4e615-c8aa-42c9-bf08-f4c8614168b3.png" },
    { id: 2, image: "https://cdn.zeptonow.com/production/tr:w-160,ar-332-412,pr-true,f-auto,q-80/inventory/banner/7184569d-cf3f-4e54-996e-dd52e34d58b7.png" },
    { id: 3, image: "https://cdn.zeptonow.com/production/tr:w-160,ar-332-412,pr-true,f-auto,q-80/inventory/banner/e8009b77-79cf-4801-9ef3-de5b5cb6af1f.png" },
    { id: 4, image: "https://cdn.zeptonow.com/production/tr:w-160,ar-332-412,pr-true,f-auto,q-80/inventory/banner/01c1836a-8317-40c0-a93d-e8f73e7c77bc.png" },
    { id: 5, image: "https://cdn.zeptonow.com/production/tr:w-160,ar-332-412,pr-true,f-auto,q-80/inventory/banner/21062416-36f9-450d-aad0-dee47154fccc.png" },
    { id: 6, image: "https://cdn.zeptonow.com/production/tr:w-160,ar-332-412,pr-true,f-auto,q-80/inventory/banner/6998d6df-bfc1-4506-978c-58104395cabf.png" },
    { id: 7, image: "https://cdn.zeptonow.com/production/tr:w-160,ar-332-412,pr-true,f-auto,q-80/inventory/banner/9de2fb1d-1063-49c9-a180-7f0fff25508c.png" },
    { id: 8, image: "https://cdn.zeptonow.com/production/tr:w-160,ar-332-412,pr-true,f-auto,q-80/inventory/banner/c798236e-cdf5-43bd-a32d-8f9b03a5e0a6.png" },
    { id: 9, image: "https://cdn.zeptonow.com/production/tr:w-160,ar-332-412,pr-true,f-auto,q-80/inventory/banner/3d0f65aa-9272-494a-b394-dbf07068aad3.png" },
    { id: 10, image: "https://cdn.zeptonow.com/production/tr:w-160,ar-356-435,pr-true,f-auto,q-80/inventory/banner/e63b6d81-e6b4-4268-bbb5-1fbee68111eb.png" },
    { id: 11, image: "https://cdn.zeptonow.com/production/tr:w-160,ar-332-412,pr-true,f-auto,q-80/inventory/banner/7da19bef-7a98-4a04-bdde-5f3fb653881a.png" },
    { id: 12, image: "https://cdn.zeptonow.com/production/tr:w-160,ar-333-412,pr-true,f-auto,q-80/inventory/banner/c8528c5c-b678-436b-befd-49557c9d2856.png" },
    { id: 13, image: "https://cdn.zeptonow.com/production/tr:w-160,ar-333-412,pr-true,f-auto,q-80/inventory/banner/94a86a07-7393-4678-bf9a-b7b320e43ff4.png" },
    { id: 14, image: "https://cdn.zeptonow.com/production/tr:w-160,ar-333-422,pr-true,f-auto,q-80/inventory/banner/1e8e7903-5fbb-43c6-876f-de21f6ddfc0d.png" },
    { id: 15, image: "https://cdn.zeptonow.com/production/tr:w-160,ar-333-412,pr-true,f-auto,q-80/inventory/banner/3ba3942b-7bb7-4d6a-86b9-7332aa1369ca.png" },
    { id: 16, image: "https://cdn.zeptonow.com/production/tr:w-160,ar-332-412,pr-true,f-auto,q-80/inventory/banner/cab8374a-78a2-4e3e-9149-94ff8e21b485.png" },
    { id: 17, image: "https://cdn.zeptonow.com/production/tr:w-160,ar-332-416,pr-true,f-auto,q-80/inventory/banner/e89010d7-056b-435e-89fd-ecc78a377fa1.png" },
    { id: 18, image: "https://cdn.zeptonow.com/production/tr:w-160,ar-332-412,pr-true,f-auto,q-80/inventory/banner/dc161f7f-5018-4ab5-a6d1-4f92e89e9654.png" }
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
