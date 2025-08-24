import React from "react";

export default function PopularCategories() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Popular Searches */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Popular Searches</h2>

        {/* Products */}
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Products :</span>{" "}
          Avocado | Strawberry | Pomegranate | Beetroot | Ash gourd | Bottle gourd | Lady finger | Potato | Lemon | Dalchini | Fennel seeds | Blueberry | Papaya | Dragon fruit | Mushroom | Lettuce
        </p>

        {/* Brands */}
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Brands :</span>{" "}
          Yakult | My Muse | Aashirvaad Atta | Too Yumm | Lays | Figaro Olive Oil | Nandini Milk | Amul | Mother Dairy Near Me | Fortune Oil | Superyou | Durex Condoms | Ferns and Petals
        </p>

        {/* Categories */}
        <p className="text-gray-700 mb-6">
          <span className="font-semibold">Categories :</span>{" "}
          Grocery | Cigarettes | Chips | Curd | Hukka flavour | Paan shop near me | Eggs price | Cheese slice | Fresh fruits | Fresh vegetables | Refined oil | Butter price | Paneer price
        </p>
      </div>

      {/* Categories */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 text-gray-800">
          <p>Fruits & Vegetables</p>
          <p>Atta, Rice, Oil & Dals</p>
          <p>Masala & Dry Fruits</p>
          <p>Sweet Cravings</p>
          <p>Frozen Food & Ice Creams</p>

          <p>Baby Food</p>
          <p>Dairy, Bread & Eggs</p>
          <p>Cold Drinks & Juices</p>
          <p>Munchies</p>
          <p>Meats, Fish & Eggs</p>

          <p>Breakfast & Sauces</p>
          <p>Tea, Coffee & More</p>
          <p>Biscuits</p>
          <p>Makeup & Beauty</p>
          <p>Bath & Body</p>

          <p>Cleaning Essentials</p>
          <p>Home Needs</p>
          <p>Electricals & Accessories</p>
          <p>Hygiene & Grooming</p>
          <p>Health & Baby Care</p>

          <p>Homegrown Brands</p>
          <p>Paan Corner</p>
        </div>
      </div>
    </div>
  );
}
