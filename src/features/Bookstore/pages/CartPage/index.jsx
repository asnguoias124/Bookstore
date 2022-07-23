import React from 'react'
import './index.scss'
import Images from '../../../../constants/images'

function Cart() {
    return (
        <div className='small-container cart-page'>
            <table>
                <tbody>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                    <tr>
                        <td>
                            <div className="cart-info">
                                <img src={Images.BOOK1} alt="" />
                                <div className='cart-items'>
                                    <p>
                                        Cach nghi de thanh cong
                                    </p>
                                    <small>Price: 50.000 VND</small>
                                    <br />
                                    <a href=''>Remove</a>
                                </div>
                            </div>
                        </td>
                        <td> <input type="number" id="quantity" name="quantity" min="1" max="5" /></td>
                        <td>$50.00</td>
                    </tr>

                    <tr>
                        <td>
                            <div className="cart-info">
                                <img src={Images.BOOK3} alt="" />
                                <div className='cart-items'>
                                    <p>
                                        Cach nghi de thanh cong
                                    </p>
                                    <small>Price: 50.000 VND</small>
                                    <br />
                                    <a href=''>Remove</a>
                                </div>
                            </div>
                        </td>
                        <td> <input type="number" id="quantity" name="quantity" min="1" max="5" /></td>
                        <td>$50.00</td>
                    </tr>

                    <tr>
                        <td>
                            <div className="cart-info">
                                <img src={Images.BOOK2} alt="" />
                                <div className='cart-items'>
                                    <p>
                                        Cach nghi de thanh cong
                                    </p>
                                    <small>Price: 50.000 VND</small>
                                    <br />
                                    <a href=''>Remove</a>
                                </div>
                            </div>
                        </td>
                        <td> <input type="number" id="quantity" name="quantity" min="1" max="5" /></td>
                        <td>$50.00</td>
                    </tr>

                </tbody>

            </table>

            <div className="total-price">
                <table>
                    <tbody>
                        <tr>
                            <td>SubTotal</td>
                            <td>$200.00</td>
                        </tr>
                        <tr>
                            <td>Tax</td>
                            <td>$15.00</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>$215.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default Cart