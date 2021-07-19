import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Error404.scss';

/**
 * Render the Error404 page
 * @extends Component
 * @hideconstructor
 */
class Error404 extends Component {
  /**
   * Render the component
   * @returns {Reactnode} jsx to be injected in the html
   */
  render() {
    return (
      <div className="error404 container">
        <h2 className="error404__number">404</h2>
        <p className="error404__message">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <p className="error404__link">
          <Link to="/">Retourner sur la page d’accueil</Link>
        </p>
      </div>
    );
  }
}

export default Error404;
