import React from "react";
import offer1 from './assets/image-16.avif';
import offer2 from './assets/image-9.avif';
import offer3 from './assets/image-6.avif';
import offer4 from './assets/image-18.avif';
import offer5 from './assets/image-22.avif';
import offer6 from './assets/image-24.avif';
import offer7 from './assets/image-25.avif';
import offer8 from './assets/image-23.avif';
import { Link } from "react-router";

function Offers() {
    const offers = [
        {
            id: 1,
            title: 'Flat 40% Off – Running Collection',
            desc: 'Speed meets comfort with AeroWalk Nitro and Glide series. Perfect for runners and fitness lovers.',
            img: offer1,
            discount: '40% OFF',
        },
        {
            id: 2,
            title: 'Buy 1 Get 1 – Street Collection',
            desc: 'Style up your casual game! Grab any AeroWalk StreetFlex and get another pair free.',
            img: offer2,
            discount: 'BOGO',
        },
        {
            id: 3,
            title: 'Upto 50% Off – Clearance Sale',
            desc: 'Exclusive deals on last season’s bestsellers. Limited sizes left — hurry before they’re gone!',
            img: offer3,
            discount: 'SALE',
        },
        {
            id: 4,
            title: 'Student Special – 25% Off',
            desc: 'Show your student ID and get 25% off on every AeroWalk Originals purchase.',
            img: offer4,
            discount: '25% OFF',
        },
        {
            id: 5,
            title: 'Student Special – 25% Off',
            desc: 'Show your student ID and get 25% off on every AeroWalk Originals purchase.',
            img: offer5,
            discount: '25% OFF',
        },
        {
            id: 6,
            title: 'Student Special – 25% Off',
            desc: 'Show your student ID and get 25% off on every AeroWalk Originals purchase.',
            img: offer6,
            discount: '25% OFF',
        },
        {
            id: 7,
            title: 'Student Special – 25% Off',
            desc: 'Show your student ID and get 25% off on every AeroWalk Originals purchase.',
            img: offer7,
            discount: '25% OFF',
        },
        {
            id: 8,
            title: 'Student Special – 25% Off',
            desc: 'Show your student ID and get 25% off on every AeroWalk Originals purchase.',
            img: offer8,
            discount: '25% OFF',
        },

    ];

    return (
        <section className="py-5 bg-light" id="offers">
            <div className="container" style={{ backgroundColor: '#F5F6FA' }}>
                <div className="text-center mb-5">
                    <h2 className="fw-bold">
                        Exclusive <span className="">Offers</span>
                    </h2>
                    <p className="text-muted">
                        Save big on our latest arrivals, sports shoes, and lifestyle collections.
                    </p>
                </div>

                <div className="row">
                    {offers.map((offer) => (
                        <div className="col-md-6 col-lg-3 mb-4" key={offer.id}>
                            <div className="card border-0 shadow-sm h-100 position-relative overflow-hidden">

                                <div className="position-absolute top-0 start-0 text-center bg-danger px-2 py-1 text-white">
                                    {offer.discount}
                                </div>

                                <img
                                    src={offer.img}
                                    alt={offer.title}
                                    className="w-100"
                                    style={{ height: "220px", objectFit: "cover" }}
                                />

                                <div className="card-body text-center">
                                    <h6 className="fw-bold mb-2">{offer.title}</h6>
                                    <p className="text-muted small">{offer.desc}</p>
                                     <Link to={'/contact'}><button className="btn btn-success btn-sm">Best offer</button></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Offers;
