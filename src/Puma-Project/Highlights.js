import React from 'react'
import comfort from './assets/image-1.avif'
import Feather from './assets/image-2.avif'
import Durable from './assets/image-3.avif'
import Bold from './assets/image-4.avif'
import Peak from './assets/image-5.avif'
import Friendly from './assets/image-6.avif'
import Range from './assets/image-7.avif'
import Trusted from './assets/image-8.avif'

const Highlights = () => {
  return (
    <section className=" container-fluid py-4 " id="highlights" style={{backgroundColor:'#F5F6FA'}}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">
            Why Choose <span>AeroWalk</span>
          </h2>
          <p className="text-muted">
            Because every step deserves comfort, confidence, and style.
          </p>
        </div>

        <div className="row whychoose">
          <div className="col-md-6 col-lg-3 mb-3"  >
            <div className="card border-0 shadow h-100 text-center">
              <img src={comfort} className="w-100" alt="" />
              <div className="mb-3 text-primary fs-1">
                <i className="bi bi-cloud-fill"></i>
              </div>
              <h5 className="fw-semibold mb-2">All-Day Comfort</h5>
              <p className="text-muted">
                Soft cushioning and breathable fabric that make every step effortless.
              </p>
            </div>
          </div>


          <div className="col-md-6 col-lg-3 mb-3">
            <div className="card border-0 shadow h-100 text-center">
              <img src={Feather} className="w-100" alt="" />
              <div className="mb-3 text-primary fs-1">
                <i className="bi bi-wind"></i>
              </div>
              <h5 className="fw-semibold mb-2">Feather-Light Design</h5>
              <p className="text-muted">
                Experience the air-light feel of AeroWalk’s advanced lightweight build.
              </p>
            </div>
          </div>


          <div className="col-md-6 col-lg-3 mb-3">
            <div className="card border-0 shadow h-100 text-center">
              <img src={Durable} className="w-100" alt="" />
              <div className="mb-3 text-primary fs-1">
                <i className="bi bi-shield-check"></i>
              </div>
              <h5 className="fw-semibold mb-2">Durable Build</h5>
              <p className="text-muted">
                Designed to last longer, no matter how tough your journey gets.
              </p>
            </div>
          </div>


          <div className="col-md-6 col-lg-3 mb-3">
            <div className="card border-0 shadow h-100 text-center">
              <img src={Bold} className="w-100" alt="" />
              <div className="mb-3 text-primary fs-1">
                <i className="bi bi-lightning-charge-fill"></i>
              </div>
              <h5 className="fw-semibold mb-2">Bold Style</h5>
              <p className="text-muted">
                Sleek, modern designs that make every outfit stand out effortlessly.
              </p>
            </div>
          </div>


          <div className="col-md-6 col-lg-3 mb-3">
            <div className="card border-0 shadow h-100 text-center">
              <img src={Peak} className="w-100" alt="" />
              <div className="mb-3 text-primary fs-1">
                <i className="bi bi-speedometer2"></i>
              </div>
              <h5 className="fw-semibold mb-2">Peak Performance</h5>
              <p className="text-muted">
                Built for running, training, or everyday wear — performance meets comfort.
              </p>
            </div>
          </div>


          <div className="col-md-6 col-lg-3 mb-3">
            <div className="card border-0 shadow h-100 text-center">
              <img src={Friendly} className="w-100" alt="" />
              <div className="mb-3 text-primary fs-1">
                <i className="bi bi-recycle"></i>
              </div>
              <h5 className="fw-semibold mb-2">Eco-Friendly</h5>
              <p className="text-muted">
                Sustainable materials that care for your feet — and the planet.
              </p>
            </div>
          </div>


          <div className="col-md-6 col-lg-3 mb-3">
            <div className="card border-0 shadow h-100 text-center">
              <img src={Range} className="w-100" alt="" />
              <div className="mb-3 text-primary fs-1">
                <i className="bi bi-grid-3x3-gap-fill"></i>
              </div>
              <h5 className="fw-semibold mb-2">Wide Range</h5>
              <p className="text-muted">
                From sports to casual to lifestyle — we have a pair for every step.
              </p>
            </div>
          </div>


          <div className="col-md-6 col-lg-3 mb-3">
            <div className="card border-0 shadow h-100 text-center">
              <img src={Trusted} className="w-100" alt="" />
              <div className="mb-3 text-primary fs-1">
                <i className="bi bi-star-fill"></i>
              </div>
              <h5 className="fw-semibold mb-2">Trusted Quality</h5>
              <p className="text-muted">
                Loved by thousands for unbeatable comfort, performance, and design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Highlights
