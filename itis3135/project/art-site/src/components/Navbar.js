import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
/*navbar will have logo, home, about,  */

const Navbar = () => {
    // logo goes to intro.js, home goes to home.js, about goes to about.js, contact goes to contact.js
    //change property of navbar when hovering over links

    const [toggle, setToggle] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const toggleNav = () => {
        setToggle(!toggle);
    }

    useEffect(() => {
        window.addEventListener('resize', () => {
            setScreenWidth(window.innerWidth);
        });
    }, [])
    return (
        <nav>
            {(toggle || screenWidth > 500) && (


                <div className="navbar-links">
                    <Link className='item' to="/">Home</Link>
                    <Link className='item' to='/gallery'>Gallery</Link>
                    <Link className='item' to="/about">About</Link>
                    <Link className='item' to="/contact">Contact</Link>
                </div>

            )}
            <button onClick={toggleNav}
                className="burger-menu"><img src="" alt="btn" /></button>
        </nav>
    )
}

export default Navbar