import React,{useState, useEffect} from 'react'
import './Banner.scss';
import './script.js'
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncBooks, getTotal } from '../../redux/reducers/bookSlice';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/esm/Badge';

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
  

  }, [cart])
  
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
          <a href='/'><i className="fa-solid fa-heart"></i></a>
          <Link to="/cart"><i className="fa-solid fa-cart-shopping">
              <Badge className='book-count'>{cart.TotalQuantity}</Badge>
            </i></Link>
           <a href='/'><i className="fa-solid fa-user"></i></a>
        </div>
      </div>

      <div className="header-2">
          <nav className='navbar'>
              <a href='/'>Trang chu</a>
              <a href='#'>Sach moi</a>
              <a href="#">Tu sach</a>
          </nav>  
      </div>



    </header>

    <nav className='bottom-nav'>
          <a href='/'><i className="fa-solid fa-house"></i></a>
          <a href='#'><i className="fa-solid fa-lines-leaning"></i></a>
          <a href="#"><i className="fa-solid fa-comment"></i></a>
    </nav>
    </>
  )
}

export default Header