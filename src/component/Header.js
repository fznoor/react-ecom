import React from 'react'
import './Header.scss'
import { NavLink, Outlet } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6"
import Footer from './Footer'

function Header() {
    return (
        <>
            <div className="app">
                <header>
                    <nav>
                        <NavLink to='/' style={{ textDecoration: 'none' }}>
                            <h1>Ecommerce</h1>
                        </NavLink>
                        <NavLink to='/cart'>
                            <button className='cartIcon'>Go to cart <FaArrowRight /></button>
                        </NavLink>
                    </nav>
                </header>
                <Outlet />
                <Footer />
            </div>
        </>
    )
}

export default Header