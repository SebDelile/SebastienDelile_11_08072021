import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Error404.scss';
class Error404 extends Component {
  render() {
    return (
      <div className="error404">
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
