import React from 'react';
import { Link } from "react-router-dom";




function NavBar(){
const home= 'Home'
const about= 'About'
const social='Social impact'
const invest='Invest'
const venture='Venture Labs'
const brand='Brands'
const careers='Careers'
const contract='Contact'

    return(
        <div className='nav-container'>
        <div className='logo'>
            <img src='' alt='elewa-logo'></img>
        </div>
        <div className='nav-links'>
        <Link exact to="/">{home}</Link>
        <Link exact to="/">{about}</Link>
        <Link exact to="/">{social}</Link>
        <Link exact to="/">{invest}</Link>
        <Link exact to="/">{venture}</Link>
        <Link exact to="/">{brand}</Link>
        <Link exact to="/">{careers}</Link>
        <Link exact to="/">{contract}</Link>
        </div>
        </div>
    )
}

export default NavBar