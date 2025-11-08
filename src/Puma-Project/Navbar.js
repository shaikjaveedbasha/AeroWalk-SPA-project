import React from 'react'
import { Link } from 'react-router'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg  sticky-top">
            <div className="container">
                <Link className="navbar-brand fw-bold" style={{ color: "#007BFF", textDecoration: "none" }} to="/">AEROWALK</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav  ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/" style={{ color: "#000000", fontWeight: "790" }}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about" style={{ color: "#000000", fontWeight: "790" }}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/shop" style={{ color: "#000000", fontWeight: "790" }}>Shop</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/newarrivals" style={{ color: "#000000", fontWeight: "790" }}>NewArrivals</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/offers" style={{ color: "#000000", fontWeight: "790" }}>Offers</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact" style={{ color: "#000000", fontWeight: "790" }}>Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/account" style={{ color: "#000000", fontWeight: "790" }}>Account</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
