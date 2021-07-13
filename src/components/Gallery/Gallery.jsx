import { Component } from 'react';
import Thumbnail from '../Thumbnail/Thumbnail';
import './Gallery.scss';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = { adverts: [] };
  }

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
