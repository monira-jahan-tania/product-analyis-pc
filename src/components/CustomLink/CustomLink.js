import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div>
            <Link
                style={{
                    color: match ? 'rgb(3, 74, 3)' : '',
                    textDecoration: match ? 'underLine' : 'none'
                }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div >
    );
};

export default CustomLink;