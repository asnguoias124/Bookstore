import React from 'react'
import { useSelector } from 'react-redux'
import { getAllBooks, getAllMagazines } from '../../../../../redux/reducers/bookSlice'
import Product from './Product/Product'
import './ProductList.scss'

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
       <h1 className="heading"> <span>Sach tim kiem</span> </h1>
      <div className='productContainer'>
        <div className='productBox'>
          <>
            {renderBooks}
          </>
        </div>

      </div>

      <h1 className="heading"> <span>featured books</span> </h1>
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