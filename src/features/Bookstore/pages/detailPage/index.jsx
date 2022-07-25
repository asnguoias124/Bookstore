import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Images from '../../../../constants/images';
import {fetchAsyncBookDetail, getSelectedBook, removeSelectedBook } from '../../../../redux/reducers/bookSlice';
import './detail.scss';

import { addBooks, decreaseCart } from '../../../../redux/reducers/cartSlice';

const Detail = () => {
	const dispatch = useDispatch();

	const { id } = useParams();

	const data = useSelector(getSelectedBook);

	const [qty, setQty] = useState(1)

	const handleAddToCart = (book) => {
		dispatch(addBooks(book))

	}

	const updateChange = (book, Todo) => {
		console.log(Todo);
		if (Todo === "plus") {
			dispatch(addBooks(book))
			setQty(qty + 1)
		} else if (Todo === "minus") {
			dispatch(decreaseCart(book))
			setQty(qty - 1 < 1? 1 : qty-1)
		}
	}

	useEffect(() => {


		dispatch(fetchAsyncBookDetail(id))
		return () => {
			dispatch(removeSelectedBook());
		}


	}, [id, dispatch])

	return (

		<div className="pd-wrap">
			{Object.keys(data).length === 0 ?
				(<div className='loaded-container'><img src={Images.GIF} alt="" /></div>)
				: (
					<>
						<div className="container">

							<div className="heading-section">
								<h2>{data?.volumeInfo?.title}</h2>
							</div>
							<div className="row">
								<div className="col-md-6">
									<div id="slider" className="owl-carousel product-slider">
										<div className="item">
											<img src={data?.volumeInfo?.imageLinks?.smallThumbnail} alt="" />
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

										<div className="product-count" >

											<label htmlFor="size">Quantity</label>
											<form action="#" className="display-flex">
												<div className="qtyminus" onClick={() => updateChange(data, "minus")}>-</div>

												<input type="text" className="qty" value={qty} />

												<div className="qtyplus" onClick={() => updateChange(data, "plus")} >+</div>
											</form>
											<Link to="/cart">
												<button className="round-black-btn" onClick={() => handleAddToCart(data)}>Add to Cart</button>
											</Link>

										</div>
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