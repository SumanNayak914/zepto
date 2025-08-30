import React from 'react'
import ProductCarousel from '../../components/Cafe/ProductCarousel' 
import NewlyLaunched  from '../../components/Cafe/NewlyLaunched '
import BestSeller from '../../components/Cafe/BestSeller'
import SnackTime from '../../components/Cafe/SnackTime '
import BreakfastChai from '../../components/Cafe/BreakfastChai'
import HowItWorks from '../../components/Home/HowItWorks'
import PopularCategories from '../../components/Home/PopularCategories'

const Cafe = () => {
  return (
    <div>
      <ProductCarousel/>
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
