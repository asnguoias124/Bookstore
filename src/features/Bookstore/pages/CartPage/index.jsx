import React,{useEffect} from 'react'
import './index.scss'
import Images from '../../../../constants/images'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseCart, getCart, removeFromCart, addBooks, clearCart, Checkout, getTotal } from '../../../../redux/reducers/bookSlice'
import Button from 'react-bootstrap/esm/Button'
import { ToastContainer } from 'react-toastify'
import { Link } from 'react-router-dom'

function Cart() {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)
 
    useEffect(()=>{
        dispatch(getTotal())
    },[cart])

    const handleRemoveFromCart = (cartItem) =>{
        dispatch(removeFromCart(cartItem))
    }

    const handleDecreeCart=(cartItem) =>{
        dispatch(decreaseCart(cartItem))
    }
    
    const handleAddToCart=(cartItem) =>{
        dispatch(addBooks(cartItem))
    }

    const handleClearCart=() =>{
        dispatch(clearCart())
    }
    const handleCheckout=() =>{
        dispatch(Checkout())
    }
    return (
        <div className='small-container cart-page'>
            <table>
                <tbody>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>

                    <>
                        {cart.cart?.map(cartItem => (
                            <tr key={cartItem?.id}> 
                                <td>
                                    <div className="cart-info" >
                                        <img src={cartItem?.volumeInfo?.imageLinks?.smallThumbnail} alt="" />
                                        <div className='cart-items'>
                                            <p>
                                                {cartItem?.volumeInfo?.title}
                                            </p>
                                            <small>Giá: {(cartItem?.saleInfo?.listPrice?.amount)?.toLocaleString("en-US")} VND</small>
                                            <br />
                                            <Button variant="danger" onClick={() => handleRemoveFromCart(cartItem)}>Remove</Button>
                                        </div>
                                    </div>
                                </td>
                                <td> 
                                    <button onClick={() => handleDecreeCart(cartItem)}>-</button>
                                    <input type="text" id="quantity" name="quantity" min="1" max="5" value={cartItem?.cartQty}/>
                                    <button onClick={() => handleAddToCart(cartItem)}>+</button>
                                </td>
                                <td>{((cartItem?.saleInfo?.listPrice?.amount) * (cartItem?.cartQty)).toLocaleString("en-US")} VND</td>
                            </tr>
                        ))}
                    </>


                </tbody>

            </table>

            <div className="total-price">
                <table>
                    <tbody>
                        <tr>
                            <td>Total</td>
                            <td>{(cart.cartTotalAmount).toLocaleString("en-US")} VND</td>
                        </tr>
                        <tr>
                            <td><Button variant='danger' onClick={() => handleClearCart()}>Clear Cart</Button></td>
                            <td><Link to='/'><Button onClick={() => handleCheckout()}>Checkout</Button></Link></td>
                        </tr>
                        
                    </tbody>
                    
                </table>
            </div>
        </div>

    )
}

export default Cart