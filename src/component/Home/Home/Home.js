import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navber/Navber";
import './Home.css';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [searchResult, setSearchResult] = useState([]);
    const [searchProduct, setSearchProduct] = useState('');
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const searchHandler = (searchValue) => {
        setSearchProduct(searchValue);
        if(searchProduct !== ''){
            const filteredProduct = products.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchProduct.toLowerCase());
            });
            setSearchResult(filteredProduct);
        }
        else{
            setSearchResult(products);
        }
        
    }
    // console.log(products)
    return(
        <Fragment>
            <Navbar searchHandler={searchHandler}/>
            
            <div className="container body-style">
                {/* Product section */}
                <h1 className="text-center pt-2">Our Products</h1>
                <div className="my-5">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {searchProduct.length > 1 ? (
                            searchResult.map((item, index) => (
                                <div className="col" key={index}>
                                    <div className="card h-100 hover-effect single-card">
                                        <img src={item.image} className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title.slice(0, 20)}...</h5>
                                            <h5 className="card-title category">Category: {item.category}</h5>
                                            <p className="card-text description">{item.description.slice(0, 150)}</p>
                                            <div className="d-flex justify-content-between">
                                                <h5 className="price">Price: $ {item.price}</h5>
                                                <div className="me-3">
                                                    <Link className="btn-style" to={`/${item.title}/${item.id}`}>Buy Now</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ): (
                            products.map((product, index) => (
                                // console.log(product.rating.rate)
                                <div className="col" key={index}>
                                    <div className="card hover-effect h-100 single-card">
                                        <img src={product.image} className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                            <h5 className="card-title">{product.title.slice(0, 20)}...</h5>
                                            <h5 className="card-title category">Category: {product.category}</h5>
                                            <p className="card-text description">{product.description.slice(0, 150)}</p>
                                            <div className="d-flex justify-content-between">
                                                <h5 className="price">Price: $ {product.price}</h5>
                                                <div className="me-3">
                                                    <Link className="btn-style" to={`/${product.title}/${product.id}`}>Buy Now</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
                
            </div>
            <hr />
            <footer className="text-center">
                <p>&copy; CopyRight-2022. Develop By Md.Mohon</p>
            </footer>
        </Fragment>
    );
};

export default Home;