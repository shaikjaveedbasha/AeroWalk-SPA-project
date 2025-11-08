import React from 'react'
import sideimage from './assets/modelwomen.jpg'
import PumaRS from './assets/image-14.avif'
import PumaFutureRider from './assets/image-11.avif'
import PumaCali from './assets/image-12.avif'
import PumaSuede from './assets/image-13.avif'
import model from './assets/model-6.jpg'
import left from './assets/image-20.avif'
import right from './assets/image-22.avif'
import third from './assets/image-3.avif'
import one from './assets/one.jpg'
import two from './assets/two.jpg'
import mudu from './assets/three.jpg'
import four from './assets/four.webp'
import five from './assets/five.jpg'
import six from './assets/six.webp'
import { Link } from 'react-router'

const About = () => {
    return (
        <>
            <section className='container-fluid' style={{ backgroundColor: '#F5F6FA' }}>
                <div className='container'>
                    <div className='row '>
                        <div className='col-md-6 col-lg-6 p-5 text-center'>
                            <h3 className='fw-bold'>Make Really Cool And High-Quality Poducts</h3>
                            <p className="text-start">
                                At AeroWalk, we believe that movement should feel light, smooth, and natural.
                                Our shoes are engineered with air-cushioned soles and breathable fabric
                                — designed to keep you moving with confidence all day long.
                            </p>

                            <div className='row'>
                                <div className='col-lg-4  text-center'>
                                    <img src={left} className='w-100' calt='' />
                                </div>
                                <div className='col-lg-8'>
                                    <h5 className='fw-bold text-start'>Best Quality Shoes</h5>
                                    <p>Whether you're hitting the streets, the gym, or your next adventure,
                                    </p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-lg-4  text-center'>
                                    <img src={right} className='w-100' calt='' />
                                </div>
                                <div className='col-lg-8'>
                                    <h5 className='fw-bold text-center'>long Lasting Shoes</h5>
                                    <p className='text-start'>I love how they hug my feet without feeling tight, and the breathable design keeps my feet cool.
                                        I’ve tried many brands, but Puma wins on comfort and support hands down.”.”
                                    </p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-lg-8'>
                                    <h5 className='fw-bold text-center'>👟For Everyday Comfort</h5>
                                    <p className='text-start'>“I bought the Puma Cali sneakers, and they’ve become my go-to for every outfit.
                                        They’re not just stylish — they’re super comfy for daily wear..”
                                    </p>
                                </div>
                                <div className='col-lg-4  text-center'>
                                    <img src={third} className='w-100' calt='' />
                                </div>
                            </div>

                            <Link to={'/shop'}><button className="  btn btn-success px-4 mt-5">Shop Now</button></Link>
                        </div>
                        <div className='col-lg-6 p-5'>
                            <img src={sideimage} className='w-100 h-100 rounded-1 shadow' alt='image-shoe' />
                        </div>
                    </div>
                </div>

                <section className='container '>
                    <div className='row aboutimg'>
                        <h2 className='fw-bold text-center pb-5'>Our Best Collection Shoes.</h2>
                        <div className="col-md-6 col-lg-3 mb-3">
                            <div className="card shadow text-center h-100">
                                <img src={PumaRS} alt='' className='w-100 h-100' />
                                <div className="card-body">
                                    <h5 className="fw-semibold mb-2">Puma RS-X</h5>
                                    <p className="text-muted mb-2">Lightweight comfort and premium cushioning for daily runs.</p>
                                    <p className="fw-bold text-success fs-5">₹12,000</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-3">
                            <div className="card shadow text-center h-100">
                                <img src={PumaFutureRider} alt='' className='w-100 h-100' />
                                <div className="card-body">
                                    <h5 className="fw-semibold mb-2">Puma Future Rider</h5>
                                    <p className="text-muted mb-2">Designed for performance and street style,</p>
                                    <p className="fw-bold text-success fs-5">₹9,120</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-3">
                            <div className="card shadow text-center h-100">
                                <img src={PumaCali} alt='' className='w-100 h-100' />
                                <div className="card-body">
                                    <h5 className="fw-semibold mb-2">Puma Cali Dream</h5>
                                    <p className="text-muted mb-2">A bold remix of Puma’s classic RS line, the RS-X³ features exaggerated details,</p>
                                    <p className="fw-bold text-success fs-5">₹11,880</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-3">
                            <div className="card shadow text-center h-100">
                                <img src={PumaSuede} alt='' className='w-100 h-100' />
                                <div className="card-body">
                                    <h5 className="fw-semibold mb-2">Puma Suede Classic</h5>
                                    <p className="text-muted mb-2">A bold remix of Puma’s classic RS line, the RS-X³ features exaggerated details.</p>
                                    <p className="fw-bold text-success fs-5">₹10,120</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='container'>
                    <div className='row '>
                        <div className='col-lg-6 p-5'>
                            <img src={model} className='w-100 h-100' alt='modelimage' />
                        </div>
                        <div className='col-lg-6 p-5'>
                            <h2 className='fw-bold text-center'>These Guys Make Really Cool And High-Quality Poducts.</h2>
                            <p>“Puma has completely changed my running experience!
                                The grip, balance, and cushioning are just perfect.
                                I’ve been running in the Velocity Nitro series for months now, and it still feels brand new.
                                Lightweight, durable, and unbelievably comfortable — exactly what I needed for long runs.”
                                — Rahul Mehta, Fitness Enthusiast</p>
                            <div className='row'>
                                <div className="col-md-6">
                                    <div className="card shadow text-center ">
                                        <img src={PumaSuede} alt='' className='w-100 h-100' />
                                        <div className="card-body">
                                            <h5 className="fw-semibold mb-2">Puma Suede Classic</h5>
                                            <p className="fw-bold text-success fs-5">₹9,920</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card shadow text-center ">
                                        <img src={PumaCali} alt='' className='w-100 h-100' />
                                        <div className="card-body">
                                            <h5 className="fw-semibold mb-2">Puma Cali Dream</h5>
                                            <p className="fw-bold text-success fs-5">₹8,120</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='container text-center'>
                    <h4 className='fw-bold'>Let's Out Photo Gallery</h4>
                    <div className='row collection p-5'>
                        <div className='colmd-6 col-lg-4 p-0'>
                            <img src={one} className='w-100' alt='' />
                        </div>
                        <div className='colmd-6 col-lg-4 p-0' >
                            <img src={two} className='w-100' alt='' />
                        </div>
                        <div className='colmd-6 col-lg-4 p-0'>
                            <img src={mudu} className='w-100' alt='' />
                        </div>
                        <div className='colmd-6 col-lg-4 p-0'>
                            <img src={four} className='w-100' alt='' />
                        </div>
                        <div className='colmd-6 col-lg-4 p-0' >
                            <img src={five} className='w-100' alt='' />
                        </div>
                        <div className='colmd-6 col-lg-4 p-0'>
                            <img src={six} className='w-100' alt='' />
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default About
