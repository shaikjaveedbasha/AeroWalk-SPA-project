import React from 'react'
import { Route, Router, Routes } from 'react-router'
import Home from './Puma-Project/Home'
import About from './Puma-Project/About'
import Shop from './Puma-Project/Shop'
import NewArrivals from './Puma-Project/Arrivals'
import Offers from './Puma-Project/Offers'
import Contact from './Puma-Project/Contact'
import Account from './Puma-Project/Account'
import Confirm from './Puma-Project/Confirm'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/about' Component={About}></Route>
        <Route path='/shop' Component={Shop}></Route>
        <Route path='/newarrivals' Component={NewArrivals}></Route>
        <Route path='/offers' Component={Offers}></Route> 
        <Route path='/contact' Component={Contact}></Route>
        <Route path='/account' Component={Account}></Route>
        <Route path='/confirm' Component={Confirm}></Route>
        
    </Routes>
  )
}

export default Routing
