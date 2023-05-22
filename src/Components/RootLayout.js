import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';


const RootLayout = () => {
  return (
    <main>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
        </nav>

        <Outlet />
    </main>
  )
}

export default RootLayout
