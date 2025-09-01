import React from "react";
import PopularCategories from "../../components/Home/PopularCategories";
import HowItWorks from "../../components/Home/HowItWorks";
import ManFashion from "../../components/Fashion/ManFashion";
import WomanFashion from "../../components/Fashion/WomanFashion";

const Fashion = () => {
  return (
    <div>
      <ManFashion />
      <WomanFashion />
      <HowItWorks />
      <PopularCategories />
    </div>
  );
};

export default Fashion;
