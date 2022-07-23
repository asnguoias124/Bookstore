import React,{useState} from 'react'
import { 
  Navbar,
  Container,
  NavDropdown,
  Nav,
  Row,
  FormControl,
  Button,
  Badge,


} from 'react-bootstrap';
import styles from './Header.scss';
import axios from "axios";

export const Header2 = ({setBookData}) => {

  const [search,setSearch] =useState("");


  const handleSearchChange = (e) => {
    setSearch(e.target.value)
   
  }

  const searchBook = (evt) =>{
    if(evt.key==="Enter"){
      axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyAyN0T7f9dVCgck01BfjTyk0YonS64aYUs'+'&maxResults=10')
      .then(res=>setBookData(res.data.items))
      .catch(err=>console.log(err))
    }
  }

  return (
    
    <Navbar bg="light" expand="lg" >
    <Container>
      <Navbar.Brand href="/" className=''><div className='header-brand'>NhtDesu.</div></Navbar.Brand>

      <Navbar.Text className='search'>
      
        <div className="box">
        <NavDropdown title="Danh mục" id="basic-nav-dropdown" className='navSearchItem'>
            <NavDropdown.Item >Không có sản phẩm nào</NavDropdown.Item>

        </NavDropdown>
          <input type="text" 
                 name=''
                 placeholder='Nhập tên sách,tác giả...'
                 value={search}
                 onChange={handleSearchChange}
                 onKeyPress={searchBook}
            />

          <div className='searchBtn'>
                <i className="fa-solid fa-magnifying-glass"></i>
          </div>


        </div>

      </Navbar.Text>

        <Nav className="nav-item">
          
          <Nav.Link href="login" className='btn-login'>Đăng nhập</Nav.Link>
          <NavDropdown title="Giỏ hàng" id="basic-nav-dropdown">
            <NavDropdown.Item >Không có sản phẩm nào</NavDropdown.Item>
            
          </NavDropdown>
          <Badge className='CartCount'> 2</Badge>
        </Nav>

     
    </Container>
  </Navbar>
  
  )
}


export default Header2