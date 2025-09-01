import React from "react";
import VegetableSlider from "../../components/Fresh/VegetableSlider";
import MultiCategorySlider from "../../components/Fresh/MultiCategorySlider";
import CategorySlider from "../../components/Fresh/CategorySlider";
import ShopByCategory from "../../components/Fresh/ShopByCategory";
import PopularCategories from "../../components/Home/PopularCategories";
import HowItWorks from "../../components/Home/HowItWorks";
const Fresh = () => {
  return (
    <div>
      <VegetableSlider />
      <ShopByCategory />
      <MultiCategorySlider />
      <CategorySlider />
      <HowItWorks />
      <PopularCategories />
    </div>
  );
};

export default Fresh;
