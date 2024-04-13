import React from 'react';
import { NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav>
           <NavLink to="/">ALL</NavLink>
           <NavLink to="/fullstack">FULLSTACK</NavLink>
           <NavLink to="/Datascience">DATA SCIENCE</NavLink>
           <NavLink to="/cybersecurity">CYBER SECURITY</NavLink>
           <NavLink to="/career">CAREER</NavLink>
           </nav>
        </div>
    );
};

export default Navbar;