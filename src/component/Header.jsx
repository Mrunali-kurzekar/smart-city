import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/report">Report Issue</Link></li>
          <li><Link to="/services">City Services</Link></li>
          <li><Link to="/data">Real-Time Data</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
