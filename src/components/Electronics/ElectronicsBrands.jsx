import React from "react";

const ElectronicsBrands = () => {
  const images = [
    { id: "elec-1", url: "https://cdn.zeptonow.com/production/tr:w-160,ar-397-510,pr-true,f-auto,q-80/inventory/banner/a8db8ea7-0e4f-40b8-9712-d3a9560d7cb6.png" },
    { id: "elec-2", url: "https://cdn.zeptonow.com/production/inventory/electronics2.png" },
    { id: "elec-3", url: "https://cdn.zeptonow.com/production/inventory/electronics3.png" },
    { id: "elec-4", url: "https://cdn.zeptonow.com/production/inventory/electronics4.png" },
    { id: "elec-5", url: "https://cdn.zeptonow.com/production/inventory/electronics5.png" },
    { id: "elec-6", url: "https://cdn.zeptonow.com/production/inventory/electronics6.png" },
    { id: "elec-7", url: "https://cdn.zeptonow.com/production/inventory/electronics7.png" },
    { id: "elec-8", url: "https://cdn.zeptonow.com/production/inventory/electronics8.png" },
    { id: "elec-9", url: "https://cdn.zeptonow.com/production/inventory/electronics9.png" },
    { id: "elec-10", url: "https://cdn.zeptonow.com/production/inventory/electronics10.png" },
    { id: "elec-11", url: "https://cdn.zeptonow.com/production/inventory/electronics11.png" },
    { id: "elec-12", url: "https://cdn.zeptonow.com/production/inventory/electronics12.png" },
  ];

  return (
    <div className="max-w-7xl mx-auto overflow-x-auto pt-6 no-scrollbar">
      <div className="flex gap-3 snap-x snap-mandatory">
        {images.map((img) => (
          <div
            key={img.id}
            className="flex-shrink-0 w-1/4 sm:w-1/6 md:w-1/8 snap-center"
          >
            <img
              id={img.id}
              src={img.url}
              className="w-full h-auto rounded-lg object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ElectronicsBrands;
