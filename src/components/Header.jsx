import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.scss';
import logo from '../assets/logo-full.svg';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <img className="header__logo" src={logo} alt="logo Kasa" />
        <nav className="header__nav">
          <ul className="header__ul">
            <li className="header__li">
              <NavLink
                className="header__link"
                exact
                activeClassName="header__link--active"
                to="/"
              >
                Accueil
              </NavLink>
            </li>
            <li className="header__li">
              <NavLink
                className="header__link"
                activeClassName="header__link--active"
                to="/about"
              >
                A propos
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
