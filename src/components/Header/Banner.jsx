import React,{useState} from 'react'
import './Banner.scss';
import './script.js'
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { fetchAsyncBooks } from '../../redux/reducers/bookSlice';

function Header() {

  const [term,setTerm] = useState("")
  const dispatch = useDispatch();
  const submitHandler = (e) =>{
    e.preventDefault();
    dispatch(fetchAsyncBooks(term));
  }
  return (
    <>
    <header className='header'>
      <div className="header-1">  
       <a href='/' className='logo'> <i className="fa-solid fa-book"></i> NhtDesu.</a>

        <form className='search-form' onSubmit={submitHandler}>
          <input type="search" name='' placeholder='Nhap ten tac gia, sach...' value={term} onChange={(e) => setTerm(e.target.value)} />
          <i className="fa-solid fa-magnifying-glass"></i>
        </form>

        <div className="icons">
          <a href='/'><i className="fa-solid fa-heart"></i></a>
          <a href='/'><i className="fa-solid fa-cart-shopping"></i></a>
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
        <a></a>
    </nav>
    </>
  )
}

export default Header