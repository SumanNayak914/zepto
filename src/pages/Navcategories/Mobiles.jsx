import React from "react";
import PopularCategories from "../../components/Home/PopularCategories";
import HowItWorks from "../../components/Home/HowItWorks";
import MobileBrands from "../../components/Mobiles/MobileBrands";
const Mobiles = () => {
  return (
    <div>
      <MobileBrands />
      <HowItWorks />
      <PopularCategories />
    </div>
  );
};

export default Mobiles;
