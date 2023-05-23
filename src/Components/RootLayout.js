import {NavLink, Outlet} from 'react-router-dom';

import React from 'react'
import HelpLayout from './HelpLayout';
import Faq from './Faq';
import Contact from './Contact';


// <NavLink to="help" element = {<HelpLayout />}>
// <NavLink to="faq" element={<Faq />}>Faq</NavLink>
// <NavLink to="Contact" element={<Contact />}>Contact</NavLink>

const RootLayout = () => {
  return (
    <div className="root--layout--container">
        <main className='navbar--container'>
            <div>
                <h1>Jobarouter</h1>
            </div>
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to='careers'>Careers</NavLink>
                <NavLink to="help">Help</NavLink>
            </div>
        </main>
    
        <section className="component--display--container">
            <Outlet />
        </section>
    </div>
  )
}

export default RootLayout
