import React from 'react';

const CoffeeLoversSection = () => {
  const coffeeProducts = [
    {
      id: 1,
      name: "Classic Espresso",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&h=200&fit=crop",
      currentPrice: 149,
      originalPrice: 199,
      volume: "200 ml",
      rating: 4.5,
      reviews: "2.1k"
    },
    {
      id: 2,
      name: "Creamy Latte",
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=200&fit=crop",
      currentPrice: 189,
      originalPrice: 249,
      volume: "300 ml",
      rating: 4.3,
      reviews: "1.8k"
    },
    {
      id: 3,
      name: "Rich Cappuccino",
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=300&h=200&fit=crop",
      currentPrice: 199,
      originalPrice: 259,
      volume: "280 ml",
      rating: 4.6,
      reviews: "3.2k"
    },
    {
      id: 4,
      name: "Chocolate Mocha",
      image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=300&h=200&fit=crop",
      currentPrice: 219,
      originalPrice: 299,
      volume: "320 ml",
      rating: 4.4,
      reviews: "2.5k"
    },
    {
      id: 5,
      name: "Cold Brew",
      image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=300&h=200&fit=crop",
      currentPrice: 179,
      originalPrice: 229,
      volume: "400 ml",
      rating: 4.7,
      reviews: "1.9k"
    },
    {
      id: 6,
      name: "Caramel Macchiato",
      image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=300&h=200&fit=crop",
      currentPrice: 169,
      originalPrice: 219,
      volume: "250 ml",
      rating: 4.5,
      reviews: "2.8k"
    }
  ];

  const handleAddToCart = (product) => {
    console.log(`Added ${product.name} to cart`);
    // Add your cart logic here
  };

  return (
    <div className="bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-4 md:p-8 relative overflow-hidden">
          {/* Main Content Container */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-7">
            {/* Text Content - Full width on mobile, 1/4 width on desktop */}
            <div className="w-full md:w-1/4 flex-shrink-0 flex flex-col justify-center text-center md:text-left">
              <div className="text-amber-700 text-sm font-semibold tracking-widest uppercase mb-3">
                COFFEE ENTHUSIASTS
              </div>
              <h1 className="text-2xl md:text-4xl font-bold text-amber-800 leading-tight mb-6">
                Explore the<br />
                world of premium<br />
                blends
              </h1>
              <button className="bg-gradient-to-r from-amber-600 to-amber-800 text-white px-6 py-3 rounded-full font-semibold  w-fit mx-auto md:mx-0">
                View Collection →
              </button>
            </div>

            {/* Cards Container - Full width on mobile, 3/4 width on desktop */}
            <div className="w-full md:w-3/4 relative">
              {/* Cards */}
              <div 
                className="overflow-x-auto overflow-y-hidden pb-4"
                style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none'
                }}
              >
                <style>
                  {`
                    .scroll-container::-webkit-scrollbar {
                      display: none;
                    }
                  `}
                </style>
                <div className="flex gap-4 scroll-container" style={{width: 'max-content'}}>
                  {coffeeProducts.map((product) => (
                    <div
                      key={product.id}
                      className="min-w-[200px] md:min-w-[230px] flex-shrink-0 bg-white rounded-xl p-3 md:p-4 shadow-lg  "
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-28 md:h-32 object-cover rounded-lg mb-3"
                      />
                      
                      {/* Price Section */}
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-base md:text-lg font-bold text-gray-800">
                          ₹{product.currentPrice}
                        </span>
                        <span className="text-gray-500 line-through text-xs md:text-sm">
                          ₹{product.originalPrice}
                        </span>
                        <span className="bg-green-100 text-green-700 px-1.5 py-0.5 rounded text-xs font-semibold">
                          SAVE ₹{product.originalPrice - product.currentPrice}
                        </span>
                      </div>

                      {/* Volume */}
                      <div className="text-gray-600 text-xs mb-1">
                        {product.volume}
                      </div>

                      {/* Product Name */}
                      <h3 className="text-sm font-semibold text-gray-800 mb-2">
                        {product.name}
                      </h3>

                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-3">
                        <span className="text-green-500 text-sm">★</span>
                        <span className="text-green-600 font-semibold text-xs">
                          {product.rating} ({product.reviews})
                        </span>
                      </div>

                      {/* Add Button */}
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-2 rounded-lg font-semibold  text-sm"
                      >
                        ADD
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeLoversSection;