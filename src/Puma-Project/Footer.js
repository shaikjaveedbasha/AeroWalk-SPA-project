import React from 'react'

const Footer = () => {
    return (
        <footer className="Container-fluid p-5 " style={{backgroundColor:'#f2f6ff'}}>
            <div className="container ">
                <div className="row gy-4">
                    <div className="col-md-6 col-lg-3"><h2 className="text-xl fw-bold  mb-4">Support</h2>
                        <div className=''>
                            <p>Contact us</p>
                            <p>Promotions & Sale</p>
                            <p>Track Order</p>
                            <p>Shoe Care</p>
                            <p>Shoe Care</p>
                            <p>Sneakers</p>
                            <p>Nitro</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 ">
                        <h2 className="text-lg fw-bold  mb-4">About</h2>
                        <p>PUMA GO WILD</p>
                        <p>Corporate News</p>
                        <p>Press Center</p>
                        <p>Investors</p>
                        <p>Sustainability</p>
                        <p>Careers</p>
                        <p>Store Locator</p>
                        <p> PUMA Articles</p>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <h2 className="text-lg fw-bold  mb-4">Contact Us</h2>
                        <p className="text-sm">📍 Hyderabad, India</p>
                        <p className="text-sm">📧 shaikjav3@gmail.com</p>
                        <p className="text-sm">📱 +91 9676110541 </p>
                        <div className=" mt-3">
                            <a href="#" className="hover:text-white">Facebook</a>
                            <br/>
                            <a href="#" className="hover:text-white">Instagram</a>
                             <br/>
                            <a href="#" className="hover:text-white">X</a>
                             <br/>
                            <a href="#" className="hover:text-white">YouTube</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <h2 className="text-lg fw-bold mb-4">Stay up to date</h2>
                        <div className="d-flex gap-3">
                            <a href="" className=" text-danger fs-5"><i class="bi bi-instagram"></i></a>
                            <a href="" className=" text-danger  fs-5"><i class="bi bi-youtube"></i></a>
                            <a href="" className=" fs-5"><i class="bi bi-linkedin"></i></a>
                            <a href="" className=" fs-5"><i class="bi bi-facebook"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="my-4 border-dark"></hr>
            <div className="row last-row ">
                <div className="ab-0 text-center ">
                    © Our mission is simple — to make every step feel lighter. <br />
                     👟 Designed and Developed by javeed.
                </div>
            </div>
        </footer>
    )
}

export default Footer
