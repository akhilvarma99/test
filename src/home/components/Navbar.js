// libraries
import React from 'react';

// css files
import '../../css/navbar.css';

// images
import logo from '../../assets/logo_black_horizontal_360x.png'
import search from '../../assets/svgexport-2.svg'
import user from '../../assets/svgexport-4.svg'
import basket from '../../assets/svgexport-5.svg'

function Navbar(props) {
    return (
        <div className='site-header'>
            <div class="container  site-header-inner">
                <div class="row">
                    <div class="col-6 col-md-3">
                        <img className='main-logo' src={logo} alt='logo' />
                    </div>
                    <div class="col-7 d-none d-md-block list-wrapper">
                        <ul className='navbar-list'>
                            <li>
                                <span>Order</span>
                            </li>
                            <li>
                                <span>Support a Cause</span>
                            </li>
                            <li>
                                <span>Patner With Us</span>
                            </li>
                            <li>
                                <span> Gallery</span>
                            </li>
                            <li>
                                <span> Blog</span>
                            </li>
                            <li>
                                <span>Our Story</span>
                            </li>
                        </ul>
                    </div>
                    <div class="col-6 col-md-2 icons-div">
                        <ul className='navbar-icons'>
                            <li>
                                <img src={search} alt='search' />
                            </li>
                            <li>
                                <img src={user} alt='user' />
                            </li>
                            <li className='basket-wrapper'>
                                <img src={basket} alt='basket' />
                                <span className='cart-count'>{props.cart.length}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
