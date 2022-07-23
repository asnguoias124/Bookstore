import React, { useState, useEffect } from 'react'
import './ProductList.scss'
import Images from '../../../../../constants/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Product from './Product/Product'
import { useSelector } from 'react-redux'
import { getAllBooks, getAllMagazines } from '../../../../../redux/reducers/bookSlice'

function ProductList() {
  const books = useSelector(getAllBooks)
  const magazines = useSelector(getAllMagazines)
  let renderBooks = "";
  let renderMagazines= "";




  renderBooks = books.map((book, index) => {

    return (

      <Product key={index} data={book} />

    )
  })

  renderMagazines = magazines.map((book, index) => {

    return (

      <Product key={index} data={book} />

    )
  })
  return (

    <div className='Book-wrapper'> 
       <h1 class="heading"> <span>Sach tim kiem</span> </h1>
      <div className='productContainer'>
        <div className='productBox'>
          <>
            {renderBooks}
          </>
        </div>

      </div>

      <h1 class="heading"> <span>featured books</span> </h1>
      <div className='productContainer'>
        <div className='productBox'>
          <>
            {renderMagazines}
          </>
        </div>

      </div>
    </div>
  )
}

export default ProductList