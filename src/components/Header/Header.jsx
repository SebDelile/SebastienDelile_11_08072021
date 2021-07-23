import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import logo from '../../assets/logo-full.svg';

/**
 * Render the Header component
 * @extends Component
 * @hideconstructor
 */
class Header extends Component {
  /**
   * Render the component
   * @returns {Reactnode} jsx to be injected in the html
   */
  render() {
    return (
      <header className="header container">
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
