import React, { useEffect, useState } from 'react';
import Badge from 'react-bootstrap/esm/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAsyncBooks } from '../../redux/reducers/bookSlice';
import { getTotal } from '../../redux/reducers/cartSlice';
import './Banner.scss';
import './script.js';

function Header() {
  const cart = useSelector((state) => state.cart)
  const [term,setTerm] = useState("")
  const dispatch = useDispatch();
  const submitHandler = (e) =>{
    e.preventDefault();
    dispatch(fetchAsyncBooks(term));
  }

  useEffect(() => {
    dispatch(getTotal())
  

  }, [cart,dispatch])
  
  return (
    <>
    <header className='header'>
      <div className="header-1">  
       <Link to='/' className='logo'><i className="fa-solid fa-book"></i> NhtDesu.</Link>

        <form className='search-form' onSubmit={submitHandler}>
          <input type="search" name='' placeholder='Nhap ten tac gia, sach...' value={term} onChange={(e) => setTerm(e.target.value)} />
          <i className="fa-solid fa-magnifying-glass"></i>
        </form>

        <div className="icons">
        <Link to ={`/favorite`} ><i className="fa-solid fa-heart"></i></Link>
          <Link to="/cart"><i className="fa-solid fa-cart-shopping">
              <Badge className='book-count'>{cart.TotalQuantity}</Badge>
            </i></Link>
           <a href='/'><i className="fa-solid fa-user"></i></a>
        </div>
      </div>

      <div className="header-2">
          <nav className='navbar'>
              <Link to='/'>Trang chu</Link>
              <Link to='/'>Sach moi</Link>
              <Link to="/">Tu sach</Link>
          </nav>  
      </div>



    </header>
    </>
  )
}

export default Header