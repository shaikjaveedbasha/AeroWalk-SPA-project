import React from 'react'
import Highlights from './Highlights'
import { Link } from 'react-router'
const Home = () => {
    return (
        <>
            <div id="mainslider" className="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#mainslider" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#mainslider" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#mainslider" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="banner1" data-bs-interval="2000">
                            <h1>Walk Your Way. Define Your Style.</h1>
                            <p>From the streets to the spotlight — walk with confidence.</p>
                            <p>Discover the STRYDE Urban Collection today.</p>
                            <Link to={'/newarrivals'}>
                                <button className='btn btn-dark'>Explore Collection</button>
                            </Link>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="banner2" data-bs-interval="2000">
                            <h1>Comfort That Never Quits.</h1>
                            <p>Engineered for speed, designed for comfort.</p>
                            <p>Take every step like a champion with <b>STRYDE</b>.</p>
                            <Link to={'/shop'}>
                                <button className='btn btn-dark'>Shop Now</button>
                            </Link>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="banner3" data-bs-interval="2000">
                            <h1>All-Day Comfort. Every Step.</h1>
                            <p>Lightweight design meets ultimate durability.</p>
                            <p>Walk the world in comfort with <b>STRYDE Originals</b>.</p>
                            <Link to={'/offers'}>
                                <button className='btn btn-dark'>Discover More</button>
                            </Link>
                        </div>
                    </div>
                </div>


                <button className="carousel-control-prev" type="button" data-bs-target="#mainslider" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#mainslider" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <Highlights />
        </>
    )
}

export default Home
