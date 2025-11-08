import React from 'react'
import SendEnquiry from './Sendenquery'

const Contact = () => {
    return (
        <>
            <section className="py-5" id="contact">
                <div className="container" style={{backgroundColor:'#F5F6FA'}}>
                    {/* Heading */}
                    <div className="text-center mb-5">
                        <h2 className="fw-bold">
                            Book Your <span className=""> 👟 Shoes</span>
                        </h2>
                        <p className="text-muted">
                            Have questions or want to book your favorite pair? Fill out the form below — we’ll get back to you shortly.
                        </p>
                    </div>
                    <SendEnquiry/>
                
                </div>
            </section>

        </>
    )
}

export default Contact
