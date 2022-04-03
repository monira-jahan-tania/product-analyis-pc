import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <Link to='/home'>Home</Link>
            <Link to='/reviews'>Reviews</Link>
            <Link to='/blogs'>Blogs</Link>
            <Link to='/dashboard'>Dash Board</Link>

        </nav>
    );
};

export default Header;