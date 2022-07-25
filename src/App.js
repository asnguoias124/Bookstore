import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import Header from './components/Header/Banner';
import Cart from './features/Bookstore/pages/CartPage';
import Detail from './features/Bookstore/pages/detailPage';
import Favorite from './features/Bookstore/pages/FavoritePage';
import MainPage from './features/Bookstore/pages/MainPage';
import Login from './features/Login';
function App() {

  // const dispatch = useDispatch();


  // useEffect(() => {
  //         console.log("hello");
  //         dispatch(fetchAsyncBooks('react'));
  //         dispatch(fetchAsyncMagazine('java'));
  //         dispatch(getTotal())

  //   }, [dispatch])
  

  return (

    <Router>
      <ToastContainer/>
      <Header />
    
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<MainPage />} />
        <Route path="/books/:id" element={<Detail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/favorite' element={<Favorite />} />
      </Routes>
     
    </Router>


  );
}

export default App;
