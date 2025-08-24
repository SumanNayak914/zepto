import React from 'react';
import { ChevronRight } from 'lucide-react';

const ProductCategoriesCarousel = () => {
  const categories = [
    {
      id: 1,
      title: "Fruits &\nVegetables",
      image: "https://cdn.zeptonow.com/production/cms/category/38047553-95f3-47c6-a1ff-4794e1227d3a.png"
    },
    {
      id: 2,
      title: "Atta, Rice,\nOil & Dals",
      image: "https://cdn.zeptonow.com/production/cms/category/dc4a299d-521f-4a64-8205-c5ba8e1d13e3.png"
    },
    {
      id: 3,
      title: "Masala &\nDry Fruits",
      image: "https://cdn.zeptonow.com/production/cms/category/8d4d3977-5197-49d9-9867-8a670524e48b.png"
    },
    {
      id: 4,
      title: "Zepto\nCafe",
      image: "https://cdn.zeptonow.com/production/cms/category/031c2a24-d40f-4272-8c71-8a566252495e.png"
    },
    {
      id: 5,
      title: "Sweet\nCravings",
      image: "https://cdn.zeptonow.com/production/cms/category/ec7b14c6-2640-4165-b3ae-68c09a249ae0.png"
    },
    {
      id: 6,
      title: "Toys &\nSports",
      image: "https://cdn.zeptonow.com/production/cms/category/8d4fb022-bae0-432d-92c8-2b12d97ee6cc.png"
    },
    {
      id: 7,
      title: "Apparel &\nLifestyle",
      image: "https://cdn.zeptonow.com/production/cms/category/498eea73-358c-42c1-b482-158e80669be9.png"
    },
    {
      id: 8,
      title: "Jewellery &\nAccessories",
      image: "https://cdn.zeptonow.com/production/cms/category/20d9687b-58a4-4bf7-a561-99198b4d5ca1.png"
    },
    {
      id: 9,
      title: "Frozen\nFood",
      image: "https://cdn.zeptonow.com/production/cms/category/366e5b7d-2028-4935-b9f1-75bfa085c3d7.png"
    },
    {
      id: 10,
      title: "Ice Creams\n& More",
      image: "https://cdn.zeptonow.com/production/cms/category/db346f5e-644f-426a-85af-92d707e086ac.png"
    },
    {
      id: 11,
      title: "Packaged\nFood",
      image: "https://cdn.zeptonow.com/production/cms/category/3b0ce887-3b38-4450-b7da-9da0ad8b799d.png"
    }
  ];

  return (
    <div className="w-full bg-white p-4">
      <div className="max-w-7xl mx-auto relative hidden md:flex">
        <div className="flex gap-8 overflow-x-auto scrollbar-hide pb-2">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="flex-shrink-0 w-24 text-center cursor-pointer "
            >
              <div className="w-28 h-38 mx-auto rounded-lg overflow-hidden ">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-lg p-2 cursor-pointer hover:bg-gray-50 z-10">
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </div>
      </div>

       {/* Desktop / Tablet banner */}
<div className="mt-6 max-w-7xl mx-auto hidden sm:block px-0">
  <img
    src="https://cdn.zeptonow.com/production/tr:w-640,ar-9600-1887,pr-true,f-auto,q-80/inventory/banner/42aa0b53-0a9e-46e5-8aa6-41448fc4643b.png"
    alt="Desktop Banner"
    className="w-full h-auto rounded-xl object-cover"
  />
</div>

{/* Mobile banner */}
<div className="mt-2 block sm:hidden ">
  <img
    src="https://cdn.zeptonow.com/production/tr:w-640,ar-656-320,pr-true,f-auto,q-80/inventory/banner/4886843c-efcf-4f11-8bd0-e05555250ec1.png"
    alt="Mobile Banner"
    className="w-full h-auto rounded-xl object-cover"
  />
</div>


      <style >{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
    
  );
};

export default ProductCategoriesCarousel;


