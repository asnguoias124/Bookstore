import React from 'react'
import PropTypes from 'prop-types'
import {  useSelector } from 'react-redux'
import './favorite.scss'
import { Link } from 'react-router-dom'

function Favorite() {
    const favoriteBooks = useSelector((state) => state.favoriteBook)

  return (
    <>
          <div className='productContainer'>
        <div className='productBox'>
       {favoriteBooks.favoriteBook?.map(favoriteItem => (
            <div className='card' key={favoriteItem?.id}>
                
                <div className="imgBx">
                    <img src={favoriteItem?.volumeInfo?.imageLinks?.smallThumbnail} alt="" />
                    <ul className="action">
                        <Link to ={`/books/${favoriteItem?.id}`} style={{ color: 'white'  }} >
                        <li>
                            <i className="fa-solid fa-eye"></i>
                          
                            
                             <span>Xem chi tiết</span>
                           
                         
                            
                        </li>
                        </Link>
                    </ul>
                </div>
                <div className="content">
                    <div className="productName">
                        <h3>
                            {favoriteItem?.volumeInfo?.title}
                        </h3>
                    </div>
                    <div className="price_rating">
                        <h2>
                            {(favoriteItem?.saleInfo?.listPrice?.amount)?.toLocaleString("en-US")}đ
                        </h2>
                    </div>
                </div>
              
            </div>
            
        ))}
                </div>
    </div>
        </>

  )
}



export default Favorite
