import React from 'react'
import VegetableSlider from '../../components/Fresh/VegetableSlider'
import MultiCategorySlider from '../../components/Fresh/MultiCategorySlider'  
import CategorySlider from '../../components/Fresh/CategorySlider'  
import ShopByCategory from '../../components/Fresh/ShopByCategory'
const Fresh = () => {
  return (
    <div>
      <VegetableSlider />
      <ShopByCategory/>
      <MultiCategorySlider/>
      <CategorySlider />
      
    </div>
  )
}

export default Fresh
