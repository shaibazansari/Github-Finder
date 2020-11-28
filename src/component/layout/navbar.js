import React from 'react';
import PropType from 'prop-types';
import { Link } from 'react-router-dom';

function navbar(props) {
  return (
    <nav className='navbar bg-primary'>
        {props.title}
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
    </nav>
  );
}

navbar.propType= {
    title : PropType.string.isRequired
}

export default navbar;