import { NavLink, Outlet } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6"

import { css } from '@emotion/react'

const styles = {
    header: css`
    background: #fff;
    box-shadow: 1px 1px 4px 3px rgb(206, 206, 206);
    width: 100%;
    height: 5.5rem;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    position: fixed;

    nav {
        h1 {
            color: #000;
            text-decoration: none;
            font-size: 2.8rem;
            margin-left: 4rem;
        }
    }
        `,
    cartIcon: css`
    position: absolute;
    top: 8px;
    right: 20px;
    border: none;
    background: rgb(104, 93, 255);
    color: #fff;
    padding: .8rem 1.5rem;
    cursor: pointer;
`
}

function Header() {
    return (
        <>
            <div className="app">
                <header css={styles.header}>
                    <nav>
                        <NavLink to='/' style={{ textDecoration: 'none' }}>
                            <h1>Ecommerce</h1>
                        </NavLink>
                        <NavLink to='/cart'>
                            <button css={styles.cartIcon}>Go to cart <FaArrowRight /></button>
                        </NavLink>
                    </nav>
                </header>
                <Outlet />
            </div>
        </>
    )
}

export default Header