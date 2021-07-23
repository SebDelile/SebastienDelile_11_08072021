import { Component } from 'react';
import './Host.scss';
import PropTypes from 'prop-types';

/**
 * Render the Host component
 * @extends Component
 * @param {object} props
 * @param {object} props.host - an object containing the name and the picture of the host of the flat
 * @param {string} props.host.picture - the url of the picture of the host
 * @param {string} props.host.name - the name of the host
 */
class Host extends Component {
  /**
   * Render the component
   * @returns {Reactnode} jsx to be injected in the html
   */
  render() {
    const { host } = this.props;
    const { name, picture } = host;
    return (
      <figure className="host">
        <figcaption className="host__name">
          {name.split(' ')[0]}
          <br />
          {name.split(' ')[1]}
        </figcaption>
        <img className="host__picture" src={picture} alt="profil de l'hôte" />
      </figure>
    );
  }
}

Host.propTypes = {
  host: PropTypes.shape({
    name: PropTypes.string,
    picture: PropTypes.string,
  }).isRequired,
};

export default Host;
