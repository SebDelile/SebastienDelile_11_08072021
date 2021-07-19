import { Component } from 'react';
import './Hero.scss';

/**
 * Render the Hero component
 * @extends Component
 * @param {object} props
 * @param {string} props.image - the url of the background image
 * @param {string} props.title - the title (can be empty)
 * @param {boolean} props.isMask - to apply or not a 30% opacity black mask on the backgruond image
 * @param {boolean} props.isFixedHeight - to know if the height has to be fixed whatever the screen width
 */
class Hero extends Component {
  /**
   * Render the component
   * @returns {Reactnode} jsx to be injected in the html
   */
  render() {
    const { image, title, isMask, isFixedHeight } = this.props;
    const heroBackgroundStyle = `${
      isMask ? 'linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)), ' : ''
    }url(${image})`;
    const heroClassName = `hero${isFixedHeight ? ' hero--fixed-height' : ''}`;
    return (
      <div
        className={heroClassName}
        style={{ backgroundImage: heroBackgroundStyle }}
      >
        {title}
      </div>
    );
  }
}

export default Hero;
