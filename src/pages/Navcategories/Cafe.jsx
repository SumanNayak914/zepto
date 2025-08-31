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
      < HowItWorks/>
      < PopularCategories/>
    </div>
  )
}

export default Cafe
