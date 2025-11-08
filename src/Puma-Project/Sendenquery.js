import React, { Component } from 'react'
import { Link } from 'react-router';
import Confirm from './Confirm';

export default class SendEnquiry extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            mobile: '',
            email: '',
            shoe: ''
        }
    }
    changeData = (e) => {
        console.log(e.target.name, e.target.value);

        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        const nameError = document.getElementById('nameError');
        const mobileError = document.getElementById('mobileError');
        const emailError = document.getElementById('emailError');
        const shoeError = document.getElementById('shoeError');
        const alphaExp = /^[a-zA-Z\s]+$/;
        const numExp = /^[0-9]+$/;
        const emailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const ModelExp = /^[A-Za-z0-9\s]+$/;
        console.log(this.state);

        const { name, mobile, email } = this.state;


        //Name Validation
        if (name === '') {
            nameError.textContent = 'Name is mandatory!'
        } else {
            if (Number(mobile)) {
                nameError.textContent = ''
            }
            else {
                nameError.textContent = 'Name should be alphabatics only'
            }
        }


        //mobile validation
        if (mobile === '') {
            mobileError.textContent = 'Mobile Number is Mandatory!'
        }
        else {
            if (mobile.match(numExp)) {
                if (mobile.length === 10) {
                    mobileError.textContent = ''
                } else {
                    mobileError.textContent = 'Mobile Number should be 10 Digits only'
                }

            }
            else {
                mobileError.textContent = 'Mobile Number should be in digits only'
            }
        }

        //Email  Address validations

        if (email === '') {
            emailError.textContent = ' Email Address is Mandatory!'
        } else {
            if (email.match(emailExp)) {
                emailError.textContent = ''
            }
            else {
                emailError.textContent = 'Invalid Email Address!'
            }
        }

        //Model Validations  

    }


    render() {
        return (

            <form onSubmit={this.submitHandler}>
                <div className='row g-3'>
                    <div className="col-md-6">
                        <label for="name" className="form-label fw-semibold">Full Name</label>
                        <input type='text' name='name' onChange={this.changeData} placeholder='Enter Name' className='form-control' />
                        <p id='nameError'></p>
                    </div>

                    <div className='col-md-6'>
                        <label for='mobile' className='form-lable fw-semibold my-1'>Mobile Number</label>
                        <input type='text' name='mobile' onChange={this.changeData} placeholder='Mobile Number' className='form-control' />
                        <p id='mobileError'></p>
                    </div>

                    <div className='col-md-6'>
                        <label for='email' className='form-lable fw-semibold'>Email Address</label>
                        <input type='text' name='email' onChange={this.changeData} placeholder='Email Address' className='form-control' />
                        <p id='emailError'></p>
                    </div>
                    <div className='col-md-6'>
                        <label for='email' className='form-lable fw-semibold'>Shoe Model</label>
                        <input type='text' name='shoes' placeholder='e.g. Air Max 2025, Puma RS-X...' className='form-control' />
                    </div>

                    <div className='col-lg-6'>
                        <label htmlFor="size" className="form-label fw-semibold">Shoe Size</label>
                        <select className="form-select" id="size" required>
                            <option value="">Select size</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                        </select>
                    </div>
                    <div className="col-lg-6 mb-3">
                        <label htmlFor="message" className="form-label fw-semibold">Message</label>
                        <textarea className="form-control" id="message" rows="3" placeholder="Any specific request or delivery info?"></textarea>
                    </div>
                    <div className="text-center">
                        <Link to={'/Confirm'}><button type="submit" className="btn btn-primary px-4 py-2">Book Now </button></Link>
                    </div>
                </div>
            </form>
        )
    }
}