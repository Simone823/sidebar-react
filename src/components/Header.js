import React, {useState, createContext} from 'react';

// import sidebar
import Sidebar from './Sidebar';

function Header() {
    // isOpen menu
    const [isOPenMenu, setIsOpenMenu] = useState(false);  

    // open menu
    const openMenu = () => (e) => {
        // set isOPenMenu true
        setIsOpenMenu(true);
    }

    // close menu
    const closeMenu = () => (e) => {
        // set isOPenMenu false
        setIsOpenMenu(false);
    }

    return (
        // header
        <header>
            <div className='container'>
                <div className='wrapper'>

                    {/* brand */}
                    <a href='/' className='nav-brand'>NavBar</a>

                    {/* links */}
                    <ul className='list-links-menu'>
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
                    <ul className='social-list'>
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

                    {/* btn hamburger menu */}
                    <button onClick={openMenu()} type='button' className='btn-menu'>
                        <i className="fas fa-bars"></i>
                    </button>

                    {/* sidebar */}
                    <Sidebar/>

                </div>
            </div>
        </header>
    )
}

export default Header