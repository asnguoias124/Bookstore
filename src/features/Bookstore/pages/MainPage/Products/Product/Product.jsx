import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addBooks } from '../../../../../../redux/reducers/cartSlice';
import { addFavoriteBooks } from '../../../../../../redux/reducers/FavoriteSlice';
import './Product.scss';

function Product(props) {
    const { data } = props;
  
    const dispatch = useDispatch();

	const handleAddToCart = (book) =>{
		dispatch(addBooks(book))

	}

    const handleAddFavorite = (FavBook) =>{
        dispatch(addFavoriteBooks(FavBook))
    }

    return (
        <>
     
            <div className='card'>
                
                <div className="imgBx">
                    <img src={data.volumeInfo.imageLinks.smallThumbnail} alt="" />
                    <ul className="action">
                        <li onClick={() => handleAddFavorite(data)}>
                            <i className="fa-solid fa-heart"></i>
                            <span>Thêm vào mục ưa thích</span>
                        </li>
                    
                        <li onClick={() => handleAddToCart(data)}>
                            <i className="fa-solid fa-cart-shopping"></i>
                            <span>Thêm vào giỏ hàng</span>
                        </li>
                        <Link to ={`/books/${data.id}`} style={{ color: 'white'  }} >
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
                            {data.volumeInfo.title}
                        </h3>
                    </div>
                    <div className="price_rating">
                        <h2>
                            {(data?.saleInfo?.listPrice?.amount)?.toLocaleString("en-US")}đ
                        </h2>
                    </div>
                </div>
              
            </div>
        
        </>
    )
}

export default Product