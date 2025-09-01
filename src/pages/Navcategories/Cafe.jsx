import React from 'react'
import ProductCarousel from '../../components/Cafe/ProductCarousel' 
import NewlyLaunched  from '../../components/Cafe/NewlyLaunched '
import BestSeller from '../../components/Cafe/BestSeller'
import SnackTime from '../../components/Cafe/SnackTime '
import BreakfastChai from '../../components/Cafe/BreakfastChai'
import HowItWorks from '../../components/Home/HowItWorks'
import PopularCategories from '../../components/Home/PopularCategories'
import Banner from '../../components/Cafe/Banner'
import FoodCategories from '../../components/Cafe/FoodCategories'
import Meals from '../../components/Cafe/Meals'
import Under99 from '../../components/Cafe/Under99'
import FingerFood from '../../components/Cafe/FingerFood'
const Cafe = () => {
  return (
    <div>
      <Banner/>
      <ProductCarousel/>
      <FoodCategories/>
      <NewlyLaunched/>
      <BestSeller/>
      <SnackTime />
      <BreakfastChai/>
      <Meals/>
      <Under99/>
      <FingerFood/>
      < HowItWorks/>
      < PopularCategories/>
    </div>
  )
}

export default Cafe
