import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Thumbnail.scss';

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
    const thumbnailBackground = `linear-gradient(180deg, rgba(255,255,255,0),rgba(0,0,0,0.5)), url("${cover}")`;
    return (
      <Link to={'/flatsheet/' + id}>
        <div
          className="thumbnail"
          style={{ backgroundImage: thumbnailBackground }}
        >
          {title}
        </div>
      </Link>
    );
  }
}

export default Thumbnail;
