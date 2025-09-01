import React from "react";
import ToySlider from "../../components/Toy/ToySlider";
import TopPickSlider from "../../components/Toy/TopPickSlider";
import WorldOfPlay from "../../components/Toy/WorldOfPlay";
import PopularCategories from "../../components/Home/PopularCategories";
import HowItWorks from "../../components/Home/HowItWorks";


function Toy() {
  return (
    <div>
      <ToySlider />
      <TopPickSlider />
      <WorldOfPlay />
      <HowItWorks />
      <PopularCategories />
    </div>
  );
}

export default Toy;
