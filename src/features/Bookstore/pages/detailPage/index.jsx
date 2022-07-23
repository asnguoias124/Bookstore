import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncBookDetail, getSelectedBook, removeSelectedBook, addBooks, decreaseCart } from '../../../../redux/reducers/bookSlice';
import './detail.scss'
import Images from '../../../../constants/images';

const Detail = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const [isLoading, setIsLoading] = useState(true)
	const data = useSelector(getSelectedBook);
	const cart = useSelector((state) => state.cart)

	const handleAddToCart = (book) =>{
		console.log(book);
		dispatch(addBooks(book))

	}

	const handleDecreeCart=(cartItem) =>{
        dispatch(decreaseCart(cartItem))
    }

	useEffect(() => {


		dispatch(fetchAsyncBookDetail(id))
		return () => {
			dispatch(removeSelectedBook());
		}


	}, [id])


	return (
		
			<div className="pd-wrap">
				{Object.keys(data).length === 0 ?
				(<div className='loaded-container'><img src={Images.GIF} /></div>)	
			 :(
				<>
				<div className="container">
					
					<div className="heading-section">
						<h2>{data?.volumeInfo?.title}</h2>
					</div>
					<div className="row">
						<div className="col-md-6">
							<div id="slider" className="owl-carousel product-slider">
								<div className="item">
									<img src={data?.volumeInfo?.imageLinks?.smallThumbnail} />
								</div>
							</div>

						</div>
						<div className="col-md-6">
							<div className="product-dtl">
								<div className="product-info">
									<div className="product-name">{data?.volumeInfo?.title}</div>
									<p>{data?.volumeInfo?.subtitle}</p>
									<div className="reviews-counter">
										<div className="rate">
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
											<i className="fa-solid fa-star"></i>
										</div>
										<span>3 Reviews</span>
									</div>
									<div className="product-price-discount"><span>{(data?.saleInfo?.listPrice?.amount)?.toLocaleString("en-US")}đ</span><span className="line-through">{((data?.saleInfo?.listPrice?.amount) + 50000)?.toLocaleString("en-US")}đ</span></div>
								</div>
								<h4>Tac gia:</h4> <h5>{data?.volumeInfo?.authors}</h5>
								<h4>Danh muc: </h4><h5>{data?.volumeInfo?.categories}</h5>
								<>
								{cart.cart?.map(cartItem => (
								<div className="product-count" key={cartItem?.id}>
									

									<label htmlFor="size">Quantity</label>
									<form action="#" className="display-flex">
										<div className="qtyminus" onClick={() => handleDecreeCart(data)}>-</div>
										<input type="text" name="quantity" className="qty" value={cartItem?.cartQty} />
										<div className="qtyplus" onClick={() => handleAddToCart(data)} >+</div>
									</form>
									<Link to="/cart">
									<a className="round-black-btn" onClick={() => handleAddToCart(data)}>Add to Cart</a>
									</Link>
									
								</div>
								))}
								</>
							</div>
							
						</div>
					</div>
					<div className="product-info-tabs">

						<div className="tab-content" id="myTabContent">
							<div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">

								{(data?.volumeInfo?.description)?.split("<p>")?.join()?.split("<b>")?.join()?.split("</p>")?.join()?.split("</b>")?.join()?.split("<i>")?.join()?.split("</i>")}

							</div>
							<div className="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
								<div className="review-heading">REVIEWS</div>
								<p className="mb-20">There are no reviews yet.</p>

							</div>
						</div>
					</div>


				</div>
				</>
				)}
			</div>
		
	)
}

export default Detail