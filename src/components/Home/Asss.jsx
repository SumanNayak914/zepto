import React, { useState, useEffect, useRef } from 'react';

const MobileStoreGrid = () => {
  const [activeDot, setActiveDot] = useState(0);
  const gridRef = useRef(null);

  // Corrected and cleaned up data structure
  const topRowStores = [
    {
      name: 'Pooja Store',
      image: 'https://cdn.zeptonow.com/production/tr:w-304,ar-304-440,pr-true,f-auto,q-80/inventory/banner/d24332af-3efa-45a5-b3d2-5c1525dfbc68.png'
    },
    {
      name: 'Monsoon Store',
      image: 'https://cdn.zeptonow.com/production/tr:w-304,ar-304-440,pr-true,f-auto,q-80/inventory/banner/44b5e7d7-2bd3-491e-9801-352d1b5ee5fe.png'
    },
    {
      name: 'Gift Store',
      image: 'https://cdn.zeptonow.com/production/tr:w-304,ar-304-440,pr-true,f-auto,q-80/inventory/banner/94be373f-3849-40c1-b14f-5a63db6946ac.png'
    },
    {
      name: 'Premium Store',
      image: 'https://cdn.zeptonow.com/production/tr:w-304,ar-304-440,pr-true,f-auto,q-80/inventory/banner/927f8f3d-42a6-44a7-8f64-0deeb4cedddd.png'
    },
    {
      name: 'Card Store',
      image: 'https://cdn.zeptonow.com/production/tr:w-304,ar-304-440,pr-true,f-auto,q-80/inventory/banner/65df74a4-de40-4294-83f7-b4abf75f6e2f.png'
    },
    {
      name: 'Game Store',
      image: 'https://cdn.zeptonow.com/production/tr:w-304,ar-304-440,pr-true,f-auto,q-80/inventory/banner/3b6a752a-a76c-474e-b515-826af57e4b64.png'
    },
    {
      name: 'Fashion Store',
      image: 'https://cdn.zeptonow.com/production/tr:w-304,ar-304-440,pr-true,f-auto,q-80/inventory/banner/a1c60527-1f10-4724-a0d8-75bcf4b3e094.png'
    },
    {
      name: 'Tech Store',
      image: 'https://cdn.zeptonow.com/production/tr:w-304,ar-304-440,pr-true,f-auto,q-80/inventory/banner/53430b84-c986-4af3-bf5f-4243e7b7c98e.png'
    }
  ];

  const bottomRowStores = [
    {
      name: 'Gift Card Store',
      image: 'https://cdn.zeptonow.com/production/tr:w-304,ar-304-440,pr-true,f-auto,q-80/inventory/banner/aaa7ff3a-b28b-4e81-86e2-66bb80668166.png'
    },
    {
      name: 'Fitness Store',
      image: 'https://cdn.zeptonow.com/production/tr:w-304,ar-304-440,pr-true,f-auto,q-80/inventory/banner/d24332af-3efa-45a5-b3d2-5c1525dfbc68.png'
    },
    {
      name: 'Book Store',
      image: 'https://cdn.zeptonow.com/production/tr:w-304,ar-304-440,pr-true,f-auto,q-80/inventory/banner/94be373f-3849-40c1-b14f-5a63db6946ac.png'
    },
    {
      name: 'Sports Store',
      image: 'https://cdn.zeptonow.com/production/tr:w-304,ar-304-440,pr-true,f-auto,q-80/inventory/banner/927f8f3d-42a6-44a7-8f64-0deeb4cedddd.png'
    },
    {
      name: 'Music Store',
      image: 'https://cdn.zeptonow.com/production/tr:w-304,ar-304-440,pr-true,f-auto,q-80/inventory/banner/65df74a4-de40-4294-83f7-b4abf75f6e2f.png'
    },
    {
      name: 'Food Store',
      image: 'https://cdn.zeptonow.com/production/tr:w-304,ar-304-440,pr-true,f-auto,q-80/inventory/banner/d24332af-3efa-45a5-b3d2-5c1525dfbc68.png'
    }
  ];

  const handleScroll = () => {
    if (gridRef.current) {
      const scrollLeft = gridRef.current.scrollLeft;
      const maxScroll = gridRef.current.scrollWidth - gridRef.current.clientWidth;
      const scrollPercentage = scrollLeft / maxScroll;
      
      if (scrollPercentage < 0.33) {
        setActiveDot(0);
      } else if (scrollPercentage < 0.66) {
        setActiveDot(1);
      } else {
        setActiveDot(2);
      }
    }
  };

  useEffect(() => {
    const gridElement = gridRef.current;
    if (gridElement) {
      gridElement.addEventListener('scroll', handleScroll);
      return () => gridElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const StoreItem = ({ image, onClick }) => (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-[72px] h-auto bg-transparent 
                 transition-all duration-300 
                 min-w-[72px] flex-shrink-0"
    >
      {/* Image only */}
      <div className="w-36 h-32 flex items-center justify-center">
        <img src={image} alt="store" className="w-full h-full object-contain" />
      </div>
    </button>
  );

  const handleStoreClick = (storeName) => {
    alert(`Opening ${storeName}!`);
  };

  return (
    <div className="p-5">
      {/* Mobile Layout (sm and below) */}
      <div className="block sm:hidden">
        <div className="max-w-full mx-auto">

          {/* Scrollable Grid */}
          <div 
            ref={gridRef}
            className="overflow-x-auto overflow-y-hidden scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex flex-col gap-4 min-w-max">
              
              {/* Top Row - 8 items */}
              <div className="flex gap-4">
                {topRowStores.map((store, index) => (
                  <StoreItem
                    key={`top-${index}`}
                    image={store.image}
                    onClick={() => handleStoreClick(store.name)}
                  />
                ))}
              </div>

              {/* Bottom Row - 6 items */}
              <div className="flex gap-4">
                {bottomRowStores.map((store, index) => (
                  <StoreItem
                    key={`bottom-${index}`}
                    image={store.image}
                    onClick={() => handleStoreClick(store.name)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      
     

      {/* Custom scrollbar hide styles */}
      <style >{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default MobileStoreGrid;