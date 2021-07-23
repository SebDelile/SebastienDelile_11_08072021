import { Component } from 'react';
import './Footer.scss';
import logo from '../../assets/logo-full-white.svg';

/**
 * Render the Footer component
 * @extends Component
 * @hideconstructor
 */
class Footer extends Component {
  /**
   * Render the component
   * @returns {Reactnode} jsx to be injected in the html
   */
  render() {
    return (
      <footer className="footer__wrapper">
        <div className="footer container">
          <img className="footer__logo" src={logo} alt="logo Kasa" />
          <p className="footer__disclaimer">© 2020 Kasa. All rights reserved</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
