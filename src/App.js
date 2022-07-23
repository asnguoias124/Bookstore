import './App.css';
import React, { Suspense, useEffect, useState } from 'react';
import {useDispatch} from 'react-redux'
import NotFound from './components/NotFound';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  Outlet,
} from "react-router-dom";
import MainPage from './features/Bookstore/pages/MainPage';
import Login from './features/Login';
import Header from './components/Header/Banner';
import axios from 'axios';
import { bookApiKey } from './api/bookApiKey';
import {fetchAsyncBooks, fetchAsyncMagazine } from './redux/reducers/bookSlice';
import bookApi from './api/bookApi';
import Detail from './features/Bookstore/pages/detailPage';
import Banner from './components/Header/Banner';
import Cart from './features/Bookstore/pages/CartPage';

function App() {

  const [search, setSearch] = useState([]);
  const [bookList, setBookList] = useState([]);
  const dispatch = useDispatch();


  // useEffect(() => {
  //   const fetchProductList = async () => {
  //         dispatch(fetchAsyncBooks('react'));
  //         dispatch(fetchAsyncMagazine('java'));
  //     }
  //   fetchProductList();

  //   }, [dispatch])
  

  return (

    <Router>
      <Header />
    
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<MainPage />} />
        <Route path="/books/:id" element={<Detail />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
     
    </Router>


  );
}

export default App;
