import React from 'react'
import { Link } from 'react-router-dom'

import './header.styles.scss'

import logo from '../../assets/company_logo.png'

const Header = () => (
    <div className='header-box '>
        <Link to="/">
            <img className='home-logo' alt='alchemy-logo' src={logo} />
        </Link>
        <div className='nav-menu'>
            <Link to="/contact">
                <h3 className='nav-option'>
                    Contact Us
                </h3>
            </Link>
            <Link to="/distributors">
                <h3 className='nav-option'>
                    Distributor List
                </h3>
            </Link>
            
        </div>
    </div>
)

export default Header






