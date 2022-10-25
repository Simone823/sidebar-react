import React from 'react'

function Header() {
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
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/'>Chi Siamo</a>
                    </li>
                    <li>
                        <a href='/'>Progetti</a>
                    </li>
                    <li>
                        <a href='/'>Contattaci</a>
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
                <button type='button' className='btn-menu'>
                    <i className="fas fa-bars"></i>
                </button>

            </div>
        </div>
    </header>
  )
}

export default Header