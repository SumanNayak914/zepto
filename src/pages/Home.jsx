import React from 'react'
import ProductCategories from '../components/Home/ProductCategories'
import SuperSonicCategories from '../components/Home/SuperSonicCategories'
import CoffeeProduct from '../components/Home/CoffeeProduct'
import PopularCategories from '../components/Home/PopularCategories'
import HowItWorks from '../components/Home/HowItWorks'
import ExploreMore from '../components/Home/ExploreMore'
const Home = () => {
  return (
    <div>
      < ProductCategories />
      < SuperSonicCategories />
      < CoffeeProduct/>
      < ExploreMore/>
      < HowItWorks/>
      < PopularCategories/>

    </div>
  )
}

export default Home
