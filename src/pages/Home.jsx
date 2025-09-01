import React from 'react'
import ProductCategories from '../components/Home/ProductCategories'
import SuperSonicCategories from '../components/Home/SuperSonicCategories'
import CoffeeProduct from '../components/Home/CoffeeProduct'
import PopularCategories from '../components/Home/PopularCategories'
import HowItWorks from '../components/Home/HowItWorks'
import ExploreMore from '../components/Home/ExploreMore'
import ProductSlider from '../components/Home/ProductSlider'
import Categories from '../components/Home/Categories'
import MobilePromoSlider from '../components/Home/MobilePromoSlider'
import RecipeSlider from '../components/Home/RecipeSlider'
import Asss from '../components/Home/Asss'
import SnackTime from '../components/Cafe/SnackTime '
const Home = () => {
  return (
    <div>
      < ProductCategories />
      < SuperSonicCategories />
      < CoffeeProduct/>
      < MobilePromoSlider/>
      <ProductSlider/>
      < ExploreMore/>
      <SnackTime/>
      < Categories/>
      < RecipeSlider/>
      < Asss/>
      < HowItWorks/>
      < PopularCategories/>

    </div>
  )
}

export default Home
