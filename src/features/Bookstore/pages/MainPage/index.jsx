import React from 'react'
import Picture from '../../../../components/Picture'
import Images from '../../../../constants/images'
import ProductList from './Products/ProductList'
import StickyHeader from '../../../../components/StickyHeader'





const MainPage = () => {
  


  return (
   
     <div>  
      <Picture title="Your awsome books" desc="Nulla vitae elit libero, a pharetra augue mollis interdum." backgroundUrl={Images.BOOK1} />
      <ProductList />
      
    </div>
  )
}




export default MainPage