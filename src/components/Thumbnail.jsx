import { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Thumbnail.scss';

class Thumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
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
