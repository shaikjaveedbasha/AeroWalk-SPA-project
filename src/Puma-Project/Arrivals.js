import React from 'react'
import shoe1 from "./assets/image-1.avif";
import shoe2 from "./assets/image-10.avif";
import shoe3 from "./assets/image-12.avif";
import shoe4 from "./assets/image-13.avif";
import shoe5 from "./assets/image-15.avif";
import shoe6 from './assets/image-16.avif';
import shoe7 from './assets/image-17.avif';
import shoe8 from './assets/image-21.avif';
import { Link } from 'react-router';

const Arrivals = () => {
    const newArrivals = [
        {
            id: 1,
            name: "AeroWalk Nitro Zoom",
            price: 5499,
            img: shoe1,
        },
        {
            id: 2,
            name: "AeroWalk StreetWave",
            price: 4599,
            img: shoe2,
        },
        {
            id: 3,
            name: "AeroWalk AirFlex Pro",
            price: 4999,
            img: shoe3,
        },
        {
            id: 4,
            name: "AeroWalk Glide X Edition",
            price: 5799,
            img: shoe4,
        },
        {
            id: 5,
            name: "AeroWalk Glide 3000",
            price: 4850,
            img: shoe5,
        },
        {
            id: 6,
            name: "Puma Velocity Nitro 2",
            price: 8299,
            img: shoe6,

        },
        {
            id: 7,
            name: "AeroWalk AirPulse",
            price: 4999,
            img: shoe7,
        },
        {
            id: 8,
            name: "Puma Deviate Elite",
            price: 5999,
            img: shoe8,
        }
    ];

    return (
        <>
            <section className="container-fluid py-5" id="newArrivals"   style={{backgroundColor:'#F5F6FA'}} >
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold">
                            New <span className="">Arrivals</span>
                        </h2>
                        <p className="text-muted">Fresh styles, latest designs, and new colors — just dropped!</p>
                    </div>

                    <div className='row'>
                        {newArrivals.map((item) => {
                            return (
                                <div className='col-lg-3 mb-4' key={item.id}>
                                    <div className='card shadow h-100 text-center'>
                                        <img src={item.img} alt={item.name} className='w-100' />
                                        <div className="card-body">
                                            <h6 className="fw-semibold mb-2">{item.name}</h6>
                                            <p className="text-muted mb-2">₹{item.price}</p>
                                            <Link to={'/contact'}><button className="btn btn-success btn-sm">Shop Now</button></Link>
                                        </div>
                                    </div>
                                </div>)
                        })}
                    </div>
                   
                </div>
            </section>

        </>
    )
}

export default Arrivals
