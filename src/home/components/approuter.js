import React from 'react';
import { Route } from 'react-router-dom';
import Login from './login'

function Approuter() {
    return (
        <div>
            <Route exact path="/" component={Login} />
        </div>
    )
}

export default Approuter
