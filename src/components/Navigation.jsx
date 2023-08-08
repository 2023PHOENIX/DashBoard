import React from 'react'
import { Link } from 'react-router-dom';
import logo from "./../images/logo.png";
const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="u-list">
        <li>
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
          </div>
        </li>
        <li>
          <Link to="/" className="linkStyle">
            Home
          </Link>
        </li>
        <li>
          <Link to="/dash1:" className="linkStyle">
            dashboard1
          </Link>
        </li>
        <li>
          <Link to="/dash2:" className="linkStyle">
            dashboard2
          </Link>
        </li>
        <li>
          <Link to="/input:" className="linkStyle">
            inputForm
          </Link>
        </li>
        <li>
          <Link to="/static:content" className="linkStyle">
            staticTable
          </Link>
        </li>
        <li>
          <Link to="/dynamic:content" className="linkStyle">
            dynamicTable
          </Link>
        </li>

        <li>
          <Link to="/login:" className="linkStyle">
            login
          </Link>
        </li>
        <li>
          <Link to="/register:" className="linkStyle">
            register
          </Link>
        </li>
        <li>
          <Link to="/recover:" className="linkStyle">
            recoveryPassword
          </Link>
        </li>

        <li>
          <Link to="/confirmMail:" className="linkStyle">
            confirmMail
          </Link>
        </li>
        <li>
          <Link to="/LockScreen:" className="linkStyle">
            LockScreen
          </Link>
        </li>
        <li>
          <Link to="/about:" className="linkStyle">
            about
          </Link>
        </li>
        <li>
          <Link to="/invoice:" className="linkStyle">
            invoice
          </Link>
        </li>
        <li>
          <Link to="/404:" className="linkStyle">
            404
          </Link>
        </li>
        <li>
          <Link to="/contact:" className="linkStyle">
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation