import { Component } from 'react';
import './Host.scss';

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
      <div className="host">
        <p className="host__name">
          {name.split(' ')[0]}
          <br />
          {name.split(' ')[1]}
        </p>
        <img className="host__picture" src={picture} alt="profil de l'hôte" />
      </div>
    );
  }
}

export default Host;
