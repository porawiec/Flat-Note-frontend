import React from 'react';
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {

    return(
        <ul className='right'>
            {/* will fix navlink routing later */}
            <li><NavLink to='/'>Create New Note</NavLink></li>
            <li><NavLink to='/'>Logout</NavLink></li>

            {/* user icon logged in initials*/}
            <li><NavLink to='/' className='btn btn-floating cyan lighten-1'>PO</NavLink></li>
        </ul>
    )
}

export default SignedInLinks