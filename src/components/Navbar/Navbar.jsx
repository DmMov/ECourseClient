import React from 'react';
import { oneOf, string } from 'prop-types';

// * Components
import { Link } from '../Link/Link';

// * Styles
import './Navbar.scss';

export const Navbar = ({ role }) => {
  return <nav className="navbar">
    <Link exact to="/courses">courses</Link>
    {
      role === 'admin' && <>
        <Link exact to="/admin">admin panel</Link>
        <Link exact to="/add-course">add course</Link>
      </>
    }
  </nav>;
}

Navbar.propTypes = {
  role: string.isRequired,
  color: oneOf(['white', 'black']).isRequired
};