import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function ImageSlider() {
  const mainSlides = [
    {
      id: 1,
      img: "https://cdn.zeptonow.com/production/tr:w-640,ar-912-570,pr-true,f-auto,q-80/inventory/banner/07204c27-c4fc-4492-aeed-6ad65ed971f7.png",
    },
    {
      id: 2,
      img: "https://cdn.zeptonow.com/production/tr:w-640,ar-912-570,pr-true,f-auto,q-80/inventory/banner/308cd9cd-4ea1-4ed6-88fa-db6d4e601865-43b33c09-6722-4da1-ba93-99bb91cc4c9b",
    },
    {
      id: 3,
      img: "https://cdn.zeptonow.com/production/tr:w-640,ar-969-558,pr-true,f-auto,q-80/inventory/banner/bd3f69b5-f7a0-4969-8ca4-fe6a180ab1f7.png",
    },
    {
      id: 4,
      img: "https://cdn.zeptonow.com/production/tr:w-640,ar-912-570,pr-true,f-auto,q-80/inventory/banner/a6992b6f-2706-45e7-a4bd-12936f259c33-1c2794cb-f402-4fe0-990b-1728747373cf",
    },
    {
      id: 5,
      img: "https://cdn.zeptonow.com/production/tr:w-640,ar-912-570,pr-true,f-auto,q-80/inventory/banner/c4643355-18ae-45aa-ae5b-f70ec54a2e82.png",
    },
    {
      id: 6,
      img: "https://cdn.zeptonow.com/production/tr:w-640,ar-912-570,pr-true,f-auto,q-80/inventory/banner/dda1a03a-e797-4a92-b359-511ced8b16ee-0d1dec9d-639e-4fa7-85a8-a8e0334e5ad7",
    },
    {
      id: 7,
      img: "https://cdn.zeptonow.com/production/tr:w-640,ar-912-570,pr-true,f-auto,q-80/inventory/banner/3ca5e962-26d2-4957-a3e8-b2c02b14cd9e.png",
    },
    {
      id: 8,
      img: "https://cdn.zeptonow.com/production/tr:w-640,ar-1080-720,pr-true,f-auto,q-80/inventory/banner/c9a4e66f-0bf0-4a3c-aa37-147f728546a8.png",
    },
    {
      id: 9,
      img: "https://cdn.zeptonow.com/production/tr:w-640,ar-1216-760,pr-true,f-auto,q-80/inventory/banner/145c0675-16b0-4ac9-afdc-66625101651d.png",
    },
  ];

  const promoSlides = [
    {
      id: 1,
      logo: "https://cdn.zeptonow.com/production/tr:w-640,ar-1440-128,pr-true,f-auto,q-80/inventory/banner/9fb1341c-b522-41ef-989f-7df16932e0e7.png",
    },
    {
      id: 2,
      logo: "https://cdn.zeptonow.com/production/tr:w-640,ar-1440-128,pr-true,f-auto,q-80/inventory/banner/cc205995-2363-4882-a5b7-8745414d27d7.png",
    },
    {
      id: 3,
      logo: "https://cdn.zeptonow.com/production/tr:w-640,ar-1440-128,pr-true,f-auto,q-80/inventory/banner/f5618955-3f04-4af1-8b78-1ba38efe0ccf.png",
    },
  ];

  const autoplayDelay = 2500;

  return (
    // This parent div now has `md:hidden` to hide both sliders on medium and large screens
    <div className="w-full md:hidden">
      {/* Top banner slider */}
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        loop={promoSlides.length > 2}
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
        }}
      >
        {promoSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="w-full bg-blue-100 text-xs px-2 py-1 flex items-center justify-center space-x-2">
              <img src={slide.logo} alt="Promo Logo" className="h-4" />
              <span>
                {slide.text}{" "}
                <span className="font-bold">Code: {slide.code}</span>
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Main image slider */}
      <div className="sm:w-full mx-auto py-10">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1.2}
          centeredSlides={true}
          loop={promoSlides.length > 2}
          autoplay={{
            delay: autoplayDelay,
            disableOnInteraction: false,
          }}
        >
          {mainSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <img
                src={slide.img}
                alt={`Slide ${slide.id}`}
                className="rounded-2xl shadow-lg w-full h-[200px] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
