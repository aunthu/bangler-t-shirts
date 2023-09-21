import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex gap-3 text-orange-800 font-bold'>
            <Link to='/'>Home</Link>
            <Link to='/review'>OrderReview</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </nav>
    );
};

export default Header;