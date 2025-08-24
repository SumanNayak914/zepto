import React from "react";
export default function Categories() {
 const groceryCategories = [
    { name: "Fruits & Vegetables", img: "https://cdn.zeptonow.com/production/tr:w-420,ar-486-333,pr-true,f-auto,q-80/cms/category/2b5f2be5-cada-4cd7-b0af-e46c0c065f71.png", big: true },
    { name: "Dairy, Bread & Eggs", img: "https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/474e6e58-1894-4378-86f1-168cc7266d1a.png" },
    { name: "Atta, Rice, Oil & Dals", img: "https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/dc4a299d-521f-4a64-8205-c5ba8e1d13e3.png" },
    { name: "Meat, Fish & Eggs", img: "https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/1237afd6-40bf-4942-a266-25f23025e86c.png" },
    { name: "Masala & Dry Fruits", img: "https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/8d4d3977-5197-49d9-9867-8a670524e48b.png" },
    { name: "Breakfast & Sauces", img: "https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/ab241d87-da5b-4830-b38f-1a6cd30d0d41.png" },
    { name: "Packaged Food", img: "https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/3b0ce887-3b38-4450-b7da-9da0ad8b799d.png" },
  ];
  const snacksCategories = [
    { name: "Zepto Cafe", img: "https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/031c2a24-d40f-4272-8c71-8a566252495e.png" },
    { name: "Tea, Coffee & More", img: "https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/f078a8dc-a9b6-41a6-9c6f-721d4892b8ee.png" },
    { name: "Ice Creams & More", img: "https://cdn.zeptonow.com/production/tr:w-210,ar-225-334,pr-true,f-auto,q-80/cms/category/db346f5e-644f-426a-85af-92d707e086ac.png" },
    { name: "Frozen Food", img: "https://cdn.zeptonow.com/production/tr:w-210,ar-226-334,pr-true,f-auto,q-80/cms/category/366e5b7d-2028-4935-b9f1-75bfa085c3d7.png" },
    { name: "Sweet Cravings", img: "https://cdn.zeptonow.com/production/tr:w-210,ar-300-444,pr-true,f-auto,q-80/cms/category/ec7b14c6-2640-4165-b3ae-68c09a249ae0.png" },
    { name: "Cold Drinks & Juices", img: "https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/59d2c0cc-e776-407c-9142-7e69898d9eab.png" },
    { name: "Munchies", img: "https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/90b2faee-1461-465a-a8c6-8c84716dd7dc.png" },
    { name: "Biscuits & Cookies", img: "https://cdn.zeptonow.com/production/tr:w-210,ar-226-334,pr-true,f-auto,q-80/cms/category/9b88fff5-73f5-46fd-999f-1622db4203d7.png" },
  ];
  const beautyCategories = [
    { name: "Makeup", img: "https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/91b5ee91-38a4-4654-93db-ba948f6265ea.png" },
    { name: "skincare", img: "https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/b1909dfd-726c-412b-beb7-9553bc909363.png" },
    { name: "protien", img: "https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/0da227bf-f9c1-4688-b26a-8ee28dcdaa8e.png" },
    { name: "baby care", img: "https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/227b70d5-d1cf-428b-a276-1392c5067eb3.png" },
    { name: "Body & bath", img: "https://cdn.zeptonow.com/production/tr:w-210,ar-226-334,pr-true,f-auto,q-80/cms/category/e4fe52ef-96d9-4289-afb1-1c1ca7efd85b.png" },
    { name: "hair care", img: "https://cdn.zeptonow.com/production/tr:w-210,ar-226-334,pr-true,f-auto,q-80/cms/category/eb6fe22a-f8b8-4189-8d9a-deb32ff659c9.png" },
    { name: "jewellery", img: "https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/20d9687b-58a4-4bf7-a561-99198b4d5ca1.png" },
    { name: "apparel", img: "https://cdn.zeptonow.com/production/tr:w-210,ar-229-349,pr-true,f-auto,q-80/cms/category/498eea73-358c-42c1-b482-158e80669be9.png" },
    { name: "fragrances", img: "https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/a4d7f18e-3a58-4c85-b912-f15f0be533ab.png" },
    { name: "pharmacy", img: "https://cdn.zeptonow.com/production/tr:w-210,ar-304-464,pr-true,f-auto,q-80/cms/category/bc5f6b57-fa3a-4a71-b498-7b8cb83323f9.png" },
    { name: "feminine", img: "https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/2b267097-f22b-4269-be34-1ea534ced3d4.png" },
    { name: "sexual wellness", img: "https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/f4371151-d6ed-42d6-9338-8f7391d03fec.png" },
  ];
  const householdCategories = [
    { name: "Home Needs", img: "https://cdn.zeptonow.com/production/tr:w-210,ar-226-334,pr-true,f-auto,q-80/cms/category/b322b3db-e75e-45e5-a11d-7ee37561c426.png" },
    { name: "Cleaning Supplies", img: "https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/c42610fc-a94c-40f6-9e74-d30c4a1f5895.png" },
    { name: "Pooja Needs", img: "https://cdn.zeptonow.com/production/tr:w-210,ar-225-334,pr-true,f-auto,q-80/cms/category/acfa1279-d46b-408c-8f74-6fcd71bd89f9.png" },
    { name: "Disposables", img: "https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/c084c75c-82ca-497f-857c-5069c6723194.png" },
    { name: "Pest Control", img: "https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/e6336a1b-eead-42d5-9c4d-23e22e3ebf2d.png" },
    { name: "Stationery", img: "https://cdn.zeptonow.com/production/tr:w-210,ar-226-334,pr-true,f-auto,q-80/cms/category/8d4fb022-bae0-432d-92c8-2b12d97ee6cc.png" },
    { name: "Pet Care", img: "https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/b5cfc944-9611-4f08-b4f9-a071d07b1aad.png" },
    { name: "Car Care", img: "https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/6d26710a-1dd8-4d53-9884-33bbaebc4bf4.png" },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6">
      <h2 className="text-lg font-semibold mb-4">Grocery & Kitchen</h2>
      <div className="flex flex-wrap">
        {groceryCategories.map((cat, i) => (
          <div
            key={i}
            className={`
              flex items-center justify-center p-2
              ${i === 0 
                ? "w-1/2 md:w-1/2 lg:w-1/4" 
                : "w-1/4 md:w-1/4 lg:w-1/8"}
            `}
          >
            <img
              src={cat.img}
              alt={cat.name}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>
      <h2 className="text-lg font-semibold mt-10 mb-4">Snacks & Drinks</h2>
      <div className="flex flex-wrap">
        {snacksCategories.map((cat, i) => (
          <div
            key={i}
            className="flex items-center justify-center p-2 w-1/4 md:w-1/4 lg:w-1/8"
          >
            <img
              src={cat.img}
              alt={cat.name}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>
      <h2 className="text-lg font-semibold mt-10 mb-4">Beauty & Personal Care</h2>
      <div className="flex flex-wrap">
        {beautyCategories.map((cat, i) => (
          <div
            key={i}
            className="flex items-center justify-center p-2 w-1/4 md:w-1/4 lg:w-1/8"
          >
            <img
              src={cat.img}
              alt={cat.name}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>
      <h2 className="text-lg font-semibold mt-10 mb-4">Household Essentials</h2>
      <div className="flex flex-wrap">
        {householdCategories.map((cat, i) => (
          <div
            key={i}
            className="flex items-center justify-center p-2 w-1/4 md:w-1/4 lg:w-1/8"
          >
            <img
              src={cat.img}
              alt={cat.name}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}