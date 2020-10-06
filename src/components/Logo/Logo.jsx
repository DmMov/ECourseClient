import React from 'react';
import { oneOf } from 'prop-types';

// * Components
import { Link } from '../Link/Link';

// * Files
import cell from '../../images/cell.svg';

// * Styles
import './Logo.scss';

export const Logo = ({ color }) =>
  <Link to="/" classes={['logo', color]}>
    <img src={cell} alt="e-course logo" className="logo__img"/>
    <p className="logo__text lt1 text">e</p>
    <p className="logo__text lt2 text">course</p>
  </Link>;

Logo.propTypes = {
  color: oneOf(['white', 'black']).isRequired
};