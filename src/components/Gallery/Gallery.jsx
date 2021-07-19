import { Component } from 'react';
import Thumbnail from '../Thumbnail/Thumbnail';
import './Gallery.scss';

/**
 * Render the Gallery component.
 * To be used with Thumbnail children components inside.
 * @extends Component
 * @param {object} props - no props here
 * @property {object} state - the state of the component
 * @property {array} state.adverts - a list of flat advertisements, will be obtained from a fetch
 */
class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = { adverts: [] };
  }

  /**
   * Fetch the Flat data at the initialization of the component and put it in the state
   */
  componentDidMount() {
    const fetchData = async () => {
      const response = await fetch('adverts-sample.json');
      const jsonResponse = await response.json();
      if (jsonResponse && jsonResponse.adverts) {
        this.setState({ adverts: jsonResponse?.adverts });
      }
    };
    fetchData();
  }

  /**
   * Render the component
   * @returns {Reactnode} jsx to be injected in the html
   */
  render() {
    return (
      <div className="gallery">
        {this.state.adverts.map((advert) => (
          <Thumbnail
            key={advert.id}
            title={advert.title}
            cover={advert.cover}
            id={advert.id}
          />
        ))}
      </div>
    );
  }
}

export default Gallery;
