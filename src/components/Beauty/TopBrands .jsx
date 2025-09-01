import React from "react";

const TopBrands = () => {
  const images = [
    { id: "img-1", url: "https://cdn.zeptonow.com/production/tr:w-160,ar-267-351,pr-true,f-auto,q-80/inventory/banner/1efca896-6c04-49e1-84bc-ca2218be34b8.png" },
    { id: "img-2", url: "https://cdn.zeptonow.com/production/tr:w-160,ar-267-351,pr-true,f-auto,q-80/inventory/banner/1efca896-6c04-49e1-84bc-ca2218be34b8.png" },
    { id: "img-3", url: "https://cdn.zeptonow.com/production/inventory/image3.png" },
    { id: "img-4", url: "https://cdn.zeptonow.com/production/inventory/image4.png" },
    { id: "img-5", url: "https://cdn.zeptonow.com/production/inventory/image5.png" },
    { id: "img-6", url: "https://cdn.zeptonow.com/production/inventory/image6.png" },
    { id: "img-7", url: "https://cdn.zeptonow.com/production/inventory/image7.png" },
    { id: "img-8", url: "https://cdn.zeptonow.com/production/inventory/image8.png" },
    { id: "img-9", url: "https://cdn.zeptonow.com/production/inventory/image9.png" },
    { id: "img-10", url: "https://cdn.zeptonow.com/production/inventory/image10.png" },
    { id: "img-11", url: "https://cdn.zeptonow.com/production/inventory/image11.png" },
    { id: "img-12", url: "https://cdn.zeptonow.com/production/inventory/image12.png" },
  ];

  return (
    <div className="max-w-7xl mx-auto overflow-x-auto py-2 no-scrollbar">
      <div className="flex  gap-3 snap-x snap-mandatory">
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

export default TopBrands;
