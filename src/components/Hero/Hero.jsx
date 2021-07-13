import { Component } from 'react';
import './Hero.scss';

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { image, title, isMask } = this.props;
    const heroBackgroundStyle = `${
      isMask ? 'linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)), ' : ''
    }url(${image})`;
    return (
      <div className="hero" style={{ backgroundImage: heroBackgroundStyle }}>
        {title}
      </div>
    );
  }
}

export default Hero;
