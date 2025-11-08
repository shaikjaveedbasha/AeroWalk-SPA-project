import React from 'react'
import PumaRS from './assets/image-14.avif'
import PumaFutureRider from './assets/image-11.avif'
import PumaCali from './assets/image-12.avif'
import PumaSuede from './assets/image-13.avif'
import Velocity from './assets/image-1.avif'
import Ignite from './assets/image-2.avif'
import Sprint from './assets/image-3.avif'
import Flyer from './assets/image-4.avif'
import ZoomCore from './assets/image-5.avif'
import Softride from './assets/image-6.avif'
import Glide from './assets/image-7.avif'
import AirPulse from './assets/image-8.avif'
const Shop = () => {
    return (
        <>
            <section className='container-fluid' style={{ backgroundColor: '#F5F6FA' }}>
                <section className='container'>
                    <div className='row aboutimg shop'>
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
                        {/* ---------second-row---------- */}
                        <div className="col-md-6 col-lg-3 mb-3">
                            <div className="card shadow text-center h-100">
                                <img src={Velocity} alt='' className='w-100 h-100' />
                                <div className="card-body">
                                    <h5 className="fw-semibold mb-2">AeroWalk Velocity Pro</h5>
                                    <p className="text-muted mb-2">Lightweight comfort and premium cushioning for daily runs.</p>
                                    <p className="fw-bold text-success fs-5">₹4,499</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-3">
                            <div className="card shadow text-center h-100">
                                <img src={Ignite} alt='' className='w-100 h-100' />
                                <div className="card-body">
                                    <h5 className="fw-semibold mb-2">Puma Ignite Nitro XT</h5>
                                    <p className="text-muted mb-2">Designed for performance and street style,</p>
                                    <p className="fw-bold text-success fs-5">₹6,999</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-3">
                            <div className="card shadow text-center h-100">
                                <img src={Sprint} alt='' className='w-100 h-100' />
                                <div className="card-body">
                                    <h5 className="fw-semibold mb-2">AeroWalk Sprint Flex</h5>
                                    <p className="text-muted mb-2">A bold remix of Puma’s classic RS line, the RS-X³ features exaggerated details,</p>
                                    <p className="fw-bold text-success fs-5">₹3,999</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-3">
                            <div className="card shadow text-center h-100">
                                <img src={Flyer} alt='' className='w-100 h-100' />
                                <div className="card-body">
                                    <h5 className="fw-semibold mb-2">Puma Flyer Runner V2</h5>
                                    <p className="text-muted mb-2">A bold remix of Puma’s classic RS line, the RS-X³ features exaggerated details.</p>
                                    <p className="fw-bold text-success fs-5">₹5,499</p>
                                </div>
                            </div>
                        </div>
                        {/* ---------------------third-row-----------------                   */}
                        <div className="col-md-6 col-lg-3 mb-3">
                            <div className="card shadow text-center h-100">
                                <img src={ZoomCore} alt='' className='w-100 h-100' />
                                <div className="card-body">
                                    <h5 className="fw-semibold mb-2">AeroWalk ZoomCore</h5>
                                    <p className="text-muted mb-2">Lightweight comfort and premium cushioning for daily runs.</p>
                                    <p className="fw-bold text-success fs-5">₹4,299</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-3">
                            <div className="card shadow text-center h-100">
                                <img src={Softride} alt='' className='w-100 h-100' />
                                <div className="card-body">
                                    <h5 className="fw-semibold mb-2">Puma Softride Premier</h5>
                                    <p className="text-muted mb-2">Lightweight comfort and premium cushioning for daily runs.</p>
                                    <p className="fw-bold text-success fs-5">₹7,499</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-3">
                            <div className="card shadow text-center h-100">
                                <img src={Glide} alt='' className='w-100 h-100' />
                                <div className="card-body">
                                    <h5 className="fw-semibold mb-2">AeroWalk Glide 3000</h5>
                                    <p className="text-muted mb-2">Lightweight comfort and premium cushioning for daily runs.</p>
                                    <p className="fw-bold text-success fs-5">₹3,799</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-3">
                            <div className="card shadow text-center h-100">
                                <img src={AirPulse} alt='' className='w-100 h-100' />
                                <div className="card-body">
                                    <h5 className="fw-semibold mb-2">AeroWalk AirPulse</h5>
                                    <p className="text-muted mb-2">Lightweight comfort and premium cushioning for daily runs.</p>
                                    <p className="fw-bold text-success fs-5">₹4,999</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Shop
