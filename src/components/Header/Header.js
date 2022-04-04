import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <CustomLink to='/home'>Home</CustomLink>
            <CustomLink to='/reviews'>Reviews</CustomLink>
            <CustomLink to='/blogs'>Blogs</CustomLink>
            <CustomLink to='/dashboard'>Dash Board</CustomLink>

        </nav>
    );
};

export default Header;