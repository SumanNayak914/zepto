import React from "react";
import ElectronicsBrands from "../../components/Electronics/ElectronicsBrands";
import PopularCategories from "../../components/Home/PopularCategories";
import HowItWorks from "../../components/Home/HowItWorks";
import Kitchen from "../../components/Electronics/Kitchen ";
import GroomingNeeds from "../../components/Electronics/GroomingNeeds";

const Electronics = () => {
  return (
    <div>
      <ElectronicsBrands />
      <Kitchen />
      <GroomingNeeds />
      <HowItWorks />
      <PopularCategories />
    </div>
  );
};

export default Electronics;
