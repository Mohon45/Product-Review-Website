import React, { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Navbar from "../Home/Navber/Navber";
import './Review.css';
import {useDispatch, useSelector} from "react-redux";
import {addReview} from "../../Store/Actions/ProductsActions";

const Review = () => {
    const [singleProduct, setSingleProduct] = useState('');
    const {id} = useParams();
    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch()

    const reviews = useSelector(({product}) => {
        if(product.customerReviews.length > 0)
            return product.customerReviews.filter(r => r.id === id);
        return [];
    })

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(data  => setSingleProduct(data));
      }, []);

      const submitHandler = (data, e) => {
          dispatch(addReview({
             id: id,
             name: data.name,
             review: data.review
         }));

          e.target.reset();
      };

      const {title, image, price, description, category, } = singleProduct;
      
    return(
        <Fragment>
            <Navbar/>
            <div className="container body-style mt-5 mb-5">
                <div className="row">
                    <div className="col-md-6 details-left-side ps-4">
                        <img src={image} alt="" />
                    </div>
                    <div className="col-md-6 ps-5">
                        <h1>{title}</h1>
                        <h3>Category: {category}</h3>
                        <h3>Price: ${price}</h3>
                        <p>Description: {description}</p>
                    </div>
                </div>
                <hr />
                <div className="row mt-3">
                    <div className="col-md-6">
                        <h4>Our Customer Reviews</h4>
                        {reviews.map(({review, name}, index) => (
                            <div className="card mt-2" key={index}>
                                <div className="card-body">
                                    <p>{review}</p>
                                    <p className="card-text"><small className="text-muted"><i>{name}</i></small></p>
                                </div>
                            </div>
                        ))}
                        
                    </div>
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit(submitHandler)}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                <input type="text" {...register("name", { required: true})} className="form-control" id="exampleInputEmail1"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Your Review</label>
                                <textarea className="form-control" {...register("review")} id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            
        </Fragment>
    );
};

export default Review;