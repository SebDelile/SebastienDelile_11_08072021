import { Component } from 'react';
import './Footer.scss';
import logo from '../../assets/logo-full-white.svg';

class Footer extends Component {
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
