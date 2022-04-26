import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({searchHandler}) => {
    return(
        <div style={{backgroundColor: '#e3f2fd', height: '80px'}}>
            <nav className="navbar navbar-expand-lg navbar-light" >
                <div className="container">
                    <Link className="navbar-brand" to="/">Product Review Website</Link>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input onChange={(e) => searchHandler(e.target.value)} className="form-control me-2" type="search" placeholder="Search Product" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;