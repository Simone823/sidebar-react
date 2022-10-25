import React, {useContext} from 'react';

// import header context
import {HeaderContext} from './Header';

function Sidebar() {

    // info header context
    const {isOPenMenu, closeMenu} = useContext(HeaderContext);

    return (
        <div className={`sidebar ${isOPenMenu === true ? 'show' : 'hide'}`}>
            <div className='container'>

                {/* header */}
                <div className='header-sidebar'>
                    {/* brand */}
                    <a href='/' className='nav-brand'>Sidebar</a>

                    {/* btn */}
                    <button onClick={closeMenu()} type='button' className='btn-menu-close'>
                        <i className="fas fa-times-circle"></i>
                    </button>
                </div>

                {/* list links */}
                <ul className='list-links'>
                    <li>
                        <a href='/' className='nav-link'>Home</a>
                    </li>
                    <li>
                        <a href='/' className='nav-link'>Chi Siamo</a>
                    </li>
                    <li>
                        <a href='/' className='nav-link'>Progetti</a>
                    </li>
                    <li>
                        <a href='/' className='nav-link'>Contattaci</a>
                    </li>
                </ul>

                {/* social list */}
                <ul className='socials'>
                    <li>
                        <a href='/'><i className="fab fa-twitter"></i></a>
                    </li>
                    <li>
                        <a href='/'><i className="fab fa-facebook"></i></a>
                    </li>
                    <li>
                        <a href='/'><i className="fab fa-linkedin-in"></i></a>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default Sidebar