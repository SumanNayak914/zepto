import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SuperSonicCategories = () => {
  const superSonicRef = useRef(null);
  const beautyRef = useRef(null);

  // Sample data for Super Sonic deals with images
  const superSonicCategories = [
    { 
      title: 'Audio Gear & Watches', 
      discount: 'UP TO 90% OFF', 
      icon: '🎧',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=150&fit=crop&crop=center'
    },
    { 
      title: 'Home & Kitchen Appliances', 
      discount: 'UP TO 80% OFF', 
      icon: '🏠',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=150&fit=crop&crop=center'
    },
    { 
      title: 'Tech Accessories', 
      discount: 'UP TO 75% OFF', 
      icon: '📱',
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=200&h=150&fit=crop&crop=center'
    },
    { 
      title: 'Charging Needs', 
      discount: 'UP TO 80% OFF', 
      icon: '🔋',
      image: 'https://images.unsplash.com/photo-1609592806800-3df0eb5ba4d7?w=200&h=150&fit=crop&crop=center'
    },
    { 
      title: 'Personal Care & Grooming', 
      discount: 'UP TO 80% OFF', 
      icon: '✂️',
      image: 'https://images.unsplash.com/photo-1570554886111-e80fcac6c96d?w=200&h=150&fit=crop&crop=center'
    },
    { 
      title: 'Gaming Accessories', 
      discount: 'UP TO 85% OFF', 
      icon: '🎮',
      image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=200&h=150&fit=crop&crop=center'
    }
  ];

  // Sample data for Beauty Lit Fest with images
  const beautyCategories = [
    { 
      title: 'Luscious Lips', 
      discount: 'UP TO 40% OFF', 
      icon: '💄',
      image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=200&h=150&fit=crop&crop=center'
    },
    { 
      title: 'Flawless Face', 
      discount: 'UP TO 45% OFF', 
      icon: '✨',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&h=150&fit=crop&crop=center'
    },
    { 
      title: 'Dazzling Eyes', 
      discount: 'UP TO 60% OFF', 
      icon: '👁️',
      image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=200&h=150&fit=crop&crop=center'
    },
    { 
      title: 'Nails & more', 
      discount: 'UP TO 50% OFF', 
      icon: '💅',
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=200&h=150&fit=crop&crop=center'
    },
    { 
      title: 'Korean Beauty', 
      discount: 'UP TO 60% OFF', 
      icon: '🌸',
      image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=200&h=150&fit=crop&crop=center'
    },
    { 
      title: 'Skincare', 
      discount: 'UP TO 55% OFF', 
      icon: '🧴',
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=200&h=150&fit=crop&crop=center'
    }
  ];

  const scrollLeft = (ref) => {
    if (ref.current) {
      const itemWidth = ref.current.children[0]?.offsetWidth || 120;
      ref.current.scrollBy({
        left: -itemWidth,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = (ref) => {
    if (ref.current) {
      const itemWidth = ref.current.children[0]?.offsetWidth || 120;
      ref.current.scrollBy({
        left: itemWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6 hidden md:flex">
      <div className="grid grid-cols-2 lg:grid-cols-2 gap-6">
        
        {/* Box 1: Super Sonic Deals */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden md:h-60 lg:h-72">
          <div className="bg-black lg:h-36 md:h-22 relative">
            <img 
              src="https://cdn.zeptonow.com/production/tr:w-1280,ar-2368-528,pr-true,f-auto,q-80/inventory/banner/eaff67d6-aa53-40fe-a6ba-38793acdd518.png" 
              alt="Super Sonic Deals - Up to 90% Off" 
              className="w-full h-full object-cover "
            />
          </div>
          
          <div className="p-4 relative bg-[#000000]">
            <div 
              ref={superSonicRef}
              className="flex overflow-x-auto scrollbar-hide gap-2 scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {superSonicCategories.map((category, index) => (
                <div key={index} className="flex-none w-[100px] p-1">
                  <div className="bg-gray-800 rounded-lg overflow-hidden text-center text-white h-28 flex flex-col justify-between transition-transform hover:scale-105 cursor-pointer relative">
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center opacity-30"
                      style={{ backgroundImage: `url(${category.image})` }}
                    />
                    
                    {/* Content overlay */}
                    <div className="relative z-10 p-2 flex flex-col justify-between h-full bg-black bg-opacity-50">
                      <div className="text-lg mb-1">{category.icon}</div>
                      <div>
                        <div className="text-[10px] font-bold text-yellow-300">{category.discount}</div>
                        <div className="text-[8px] mt-1 text-gray-200 leading-tight">
                          {category.title.replace('\n', ' ')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation buttons */}
            <div className="absolute inset-y-0 left-0 flex items-center">
              <button 
                onClick={() => scrollLeft(superSonicRef)}
                className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 opacity-80 z-10"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button 
                onClick={() => scrollRight(superSonicRef)}
                className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 opacity-80 z-10"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>
        </div>

        {/* Box 2: Beauty Lit Fest */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden md:h-60 lg:h-72">
          <div className="bg-pink-200 lg:h-36 md:h-22 relative">
            <img 
              src="https://cdn.zeptonow.com/production/tr:w-1280,ar-2368-528,pr-true,f-auto,q-80/inventory/banner/874d9674-2f4f-4f60-bc5b-9fb52084a738.png" 
              alt="Beauty LIT Fest - Up to 60% Off" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-4 relative bg-[#FDD2D2]">
            <div 
              ref={beautyRef}
              className="flex overflow-x-auto scrollbar-hide gap-2 scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {beautyCategories.map((category, index) => (
                <div key={index} className="flex-none w-[100px] p-1">
                  <div className="bg-pink-500 rounded-lg overflow-hidden text-center text-white h-28 flex flex-col justify-between transition-transform hover:scale-105 cursor-pointer relative">
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center opacity-40"
                      style={{ backgroundImage: `url(${category.image})` }}
                    />
                    
                    {/* Content overlay */}
                    <div className="relative z-10 p-2 flex flex-col justify-between h-full bg-pink-600 bg-opacity-60">
                      <div className="text-lg mb-1">{category.icon}</div>
                      <div>
                        <div className="text-[10px] font-bold text-yellow-200">{category.discount}</div>
                        <div className="text-[8px] mt-1 text-pink-100 leading-tight">
                          {category.title}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation buttons */}
            <div className="absolute inset-y-0 left-0 flex items-center">
              <button 
                onClick={() => scrollLeft(beautyRef)}
                className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 opacity-80 z-10"
              >
                <ChevronLeft className="w-5 h-5 text-pink-700" />
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button 
                onClick={() => scrollRight(beautyRef)}
                className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 opacity-80 z-10"
              >
                <ChevronRight className="w-5 h-5 text-pink-700" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style >{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default SuperSonicCategories;