import React from 'react';
import {Outlet, NavLink} from 'react-router-dom';
import Faq from './Faq';
import Contact from './Contact';

const HelpLayout = () => {
  return (
    <div className='help--layout--container'>
        <h4>This is a help Section where you can contact us or search for frequently asked question</h4>
        <nav className='help--layout--container--links'>
            <NavLink to="faq">Faq</NavLink>
            <NavLink to="Contact">Contact</NavLink>
        </nav>
    <Outlet />
    </div>
  )
}

export default HelpLayout
