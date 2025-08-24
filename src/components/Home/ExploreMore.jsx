import React from "react";

const categories = [
  { id: 1, img: "https://cdn.zeptonow.com/production/tr:w-336,ar-336-496,pr-true,f-auto,q-80/inventory/banner/36505655-0b0e-4b7c-abdc-92c7a230c267.png" },
  { id: 2, img: "https://cdn.zeptonow.com/production/tr:w-336,ar-336-496,pr-true,f-auto,q-80/inventory/banner/f87c5de9-c5d1-4bc4-8c5f-fd8342f8dde2.png" },
  { id: 3, img: "https://cdn.zeptonow.com/production/tr:w-336,ar-336-496,pr-true,f-auto,q-80/inventory/banner/b230aa9e-39d2-48cf-b70b-62b7345af476.png" },
  { id: 4, img: "https://cdn.zeptonow.com/production/tr:w-336,ar-336-496,pr-true,f-auto,q-80/inventory/banner/690d68be-0302-4138-b48a-b2d2141c092a.png" },
  { id: 5, img: "https://cdn.zeptonow.com/production/tr:w-336,ar-336-496,pr-true,f-auto,q-80/inventory/banner/be289cce-726b-4263-82a3-01c04168467a.png" },
  { id: 6, img: "https://cdn.zeptonow.com/production/tr:w-336,ar-336-496,pr-true,f-auto,q-80/inventory/banner/22ecab4a-1793-4b4c-a125-ba3dd2869398.png" },
  { id: 7, img: "https://cdn.zeptonow.com/production/tr:w-336,ar-336-496,pr-true,f-auto,q-80/inventory/banner/5c143c45-988e-4eb3-a7f8-90245c6d5e12.png" },
  { id: 8, img: "https://cdn.zeptonow.com/production/tr:w-336,ar-336-496,pr-true,f-auto,q-80/inventory/banner/2a1050dd-b821-480a-8661-205fbeecaff9.png" },
  { id: 9, img: "https://cdn.zeptonow.com/production/tr:w-336,ar-336-496,pr-true,f-auto,q-80/inventory/banner/86abb79d-0f88-47c7-814a-4f363d6f780f.png" },
  { id: 10, img: "https://cdn.zeptonow.com/production/tr:w-336,ar-336-496,pr-true,f-auto,q-80/inventory/banner/8a2b7d4f-8e95-4f2e-9007-e65cdaafde88.png" },
  { id: 11, img: "https://cdn.zeptonow.com/production/tr:w-336,ar-336-496,pr-true,f-auto,q-80/inventory/banner/11cbcab8-f25e-49dd-92ba-62de2f8ad7b9.png" },
  { id: 12, img: "https://cdn.zeptonow.com/production/tr:w-336,ar-336-496,pr-true,f-auto,q-80/inventory/banner/609cfe73-8f8d-4700-bb5b-afd4c0851b7e.png" },
  { id: 13, img: "https://cdn.zeptonow.com/production/tr:w-336,ar-336-496,pr-true,f-auto,q-80/inventory/banner/ef68d97b-5786-434b-a554-562be8b5877e.png" },
];

export default function ExploreMore() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-green-50 rounded-2xl">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
        
        {/* Left Section */}
        <div className="md:col-span-1">
          <p className="text-sm uppercase tracking-[0.5em] text-gray-500 mb-2">
            More to love
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Explore more & <br /> uncover hidden gems
          </h2>
        </div>

        {/* Right Section */}
        <div className="md:col-span-3 space-y-6">

          {/* First Slider */}
          <div
            className="
              grid grid-cols-3 sm:grid-cols-4 
              md:flex md:overflow-x-auto md:space-x-4 md:[&>*]:flex-shrink-0
              lg:grid lg:grid-cols-7 lg:overflow-visible lg:space-x-0
            "
          >
            {categories.slice(0, 7).map((cat) => (
              <div
                key={cat.id}
                className="w-24 h-36 overflow-hidden"
              >
                <img
                  src={cat.img}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>

          {/* Second Slider */}
          <div
            className="
              grid grid-cols-3 sm:grid-cols-4 
              md:flex md:overflow-x-auto md:space-x-4 md:[&>*]:flex-shrink-0
              lg:grid lg:grid-cols-7 lg:overflow-visible lg:space-x-0
            "
          >
            {categories.slice(7).map((cat) => (
              <div
                key={cat.id}
                className="w-24 h-36 overflow-hidden"
              >
                <img
                  src={cat.img}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
