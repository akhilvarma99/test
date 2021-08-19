// libraries
import React, { useState } from 'react';

// files
import Navbar from './Navbar';
import Info from './Info';
import Process from './Process';
import Items from './Items';

// css
import '../../css/login.css';

function Login() {
    const [cart, setCart] = useState([]);


    return (
        <div className='login-wrapper'>
            <Navbar cart={cart} />
            <Info />
            <Process />
            <Items setCart={setCart} />
        </div>
    )
}

export default Login
