import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Thumbnail.scss';
import PropTypes from 'prop-types';

/**
 * Render the Thumbnail component.
 * To be used as children of a gallery component.
 * @extends Component
 * @param {object} props
 * @param {string} props.title - the title of the flat advert
 * @param {string} props.cover - the url of the cover picture of the flat advert
 * @param {string} props.id - the id of the flat, to be used for the link to the corresponding flat sheet
 */
class Thumbnail extends Component {
  /**
   * Render the component
   * @returns {Reactnode} jsx to be injected in the html
   */
  render() {
    const { title, cover, id } = this.props;
    return (
      <Link
        className="thumbnail"
        to={'/flatsheet/' + id}
        aria-label="Aller sur la page de la location"
      >
        <h3 className="thumbnail__title thumbnail__mask">{title}</h3>
        <img
          className="thumbnail__img"
          src={cover}
          alt="couverture du logement"
        />
      </Link>
    );
  }
}

Thumbnail.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Thumbnail;
