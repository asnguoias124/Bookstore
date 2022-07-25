import React,{useEffect} from 'react'
import Picture from '../../../../components/Picture'
import ProductList from './Products/ProductList'
import { useDispatch } from 'react-redux'
import { fetchAsyncBooks, fetchAsyncMagazine } from '../../../../redux/reducers/bookSlice'
import { getTotal } from '../../../../redux/reducers/cartSlice'
const MainPage = () => {
  

  const dispatch = useDispatch();


  useEffect(() => {
          console.log("hello");
          dispatch(fetchAsyncBooks('react'));
          dispatch(fetchAsyncMagazine('java'));
          dispatch(getTotal())

    }, [])

  return (
   
     <div>  
      <Picture  />
      <ProductList />
      
    </div>
  )
}




export default MainPage