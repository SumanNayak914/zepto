import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, Autoplay } from 'swiper/modules'; 

const recipes = [
  { id: 1, name: "Rasgulla", label: "Dessert", time: "30 mins", image: "https://cdn.zeptonow.com/production/tr:w-350,ar-100-100,pr-true,f-auto,q-80/web/recipes/rasgulla.png" },
  { id: 2, name: "Gulab Jamun", label: "Dessert", time: "45 mins", image: "https://cdn.zeptonow.com/production/tr:w-350,ar-100-100,pr-true,f-auto,q-80/web/recipes/gulab-jamun.png" },
  { id: 3, name: "Aloo Paratha", label: "Breakfast", time: "45 mins", image: "https://cdn.zeptonow.com/production/tr:w-350,ar-100-100,pr-true,f-auto,q-80/web/recipes/aloo-paratha.png" },
   { id: 4, name: "Baingan Bharta", label: "Lunch", time: "45 mins", image: "https://cdn.zeptonow.com/production/tr:w-350,ar-100-100,pr-true,f-auto,q-80/web/recipes/baingan-bharta.png" },
  { id: 5, name: "Naan", label: "Lunch", time: "18 mins", image: "https://cdn.zeptonow.com/production/tr:w-350,ar-100-100,pr-true,f-auto,q-80/web/recipes/naan.png" },
  { id: 6, name: "Palak Paneer", label: "Lunch", time: "40 mins", image: "https://cdn.zeptonow.com/production/tr:w-350,ar-100-100,pr-true,f-auto,q-80/web/recipes/palak-paneer.png" },
  { id: 7, name: "Vada Pav", label: "Snacks", time: "45 mins", image: "https://cdn.zeptonow.com/production/tr:w-350,ar-100-100,pr-true,f-auto,q-80/web/recipes/vada-pav.png" },
  { id: 8, name: "Rajma", label: "Lunch", time: "90 mins", image: "https://cdn.zeptonow.com/production/tr:w-350,ar-100-100,pr-true,f-auto,q-80/web/recipes/rajma.png" },
  { id: 9, name: "dhokla", label: "Lunch", time: "90 mins", image: "https://cdn.zeptonow.com/production/tr:w-350,ar-100-100,pr-true,f-auto,q-80/web/recipes/dhokla.png" },
  { id: 10, name: "paneer tikka", label: "Lunch", time: "90 mins", image: "https://cdn.zeptonow.com/production/tr:w-350,ar-100-100,pr-true,f-auto,q-80/web/recipes/paneer-tikka.png" },
  { id: 11, name: "rice", label: "Lunch", time: "90 mins", image: "https://cdn.zeptonow.com/production/tr:w-350,ar-100-100,pr-true,f-auto,q-80/web/recipes/rajma.png" },
];

const labelColors = {
  dessert: 'bg-green-500',
  breakfast: 'bg-amber-400',
  lunch: 'bg-blue-500',
  snacks: 'bg-purple-600',
};

const RecipeSlider = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Recipe Ideas</h2>
        <a href="#" className="text-red-500 font-semibold text-sm whitespace-nowrap">Explore All Recipes &gt;</a>
      </div>

      <Swiper
        slidesPerView={2.3} 
        spaceBetween={12} 
        grabCursor={true}
        loop={true} // यह स्लाइडर को लूप करेगा
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 3.2,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 32,
          },
        }}
        className="mySwiper"
      >
        {recipes.map((recipe) => (
          <SwiperSlide key={recipe.id} className="rounded-xl overflow-hidden shadow-md transition-all duration-200 hover:-translate-y-1">
            <div className="relative">
              <img src={recipe.image} alt={recipe.name} className="w-full h-48 object-cover rounded-t-xl" />
              <div className={`absolute top-4 left-4 text-white text-xs font-semibold px-2 py-1 rounded-md ${labelColors[recipe.label.toLowerCase()]}`}>
                {recipe.label}
              </div>
            </div>
            <div className="p-4 bg-white">
              <h3 className="font-semibold text-gray-700 text-lg mb-1">{recipe.name}</h3>
              <div className="text-gray-500 text-sm">
                <span>{recipe.time}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RecipeSlider;