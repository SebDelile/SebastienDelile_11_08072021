import { Component } from 'react';
import Thumbnail from '../Thumbnail/Thumbnail';
import './Gallery.scss';

/**
 * Render the Gallery component.
 * To be used with Thumbnail children components inside.
 * @extends Component
 * @param {object} props
 * @param {array} props.adverts - the list of adverts to display
 * @property {object} state - the state of the component
 * @property {array} state.adverts - a list of flat advertisements, will be obtained from a fetch
 */
class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = { adverts: [] };
  }

  /**
   * get the Flat list at the initialization of the component and put it in the state
   */
  componentDidMount() {
    this.setState({ adverts: this.props.adverts });
  }

  /**
   * Render the component
   * @returns {Reactnode} jsx to be injected in the html
   */
  render() {
    if (Object.keys(this.state.adverts).length === 0) return null;
    else
      return (
        <section className="gallery">
          <h2 className="sr-only">Gallery de locations</h2>
          {this.state.adverts.map((advert) => (
            <Thumbnail
              key={advert.id}
              title={advert.title}
              cover={advert.cover}
              id={advert.id}
            />
          ))}
        </section>
      );
  }
}

export default Gallery;
