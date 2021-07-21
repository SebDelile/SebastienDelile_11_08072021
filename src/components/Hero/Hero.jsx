import { Component } from 'react';
import './Hero.scss';

/**
 * Render the Hero component
 * @extends Component
 * @param {object} props
 * @param {string} props.image - the url of the background image
 * @param {string} props.title - the title (can be empty)
 * @param {boolean} props.isFixedHeight - to know if the height has to be fixed whatever the screen width
 */
class Hero extends Component {
  /**
   * Render the component
   * @returns {Reactnode} jsx to be injected in the html
   */
  render() {
    const { image, title, isFixedHeight } = this.props;
    const heroClassName = `hero${isFixedHeight ? ' hero--fixed-height' : ''}`;
    return (
      <div
        className={heroClassName}
        style={{ backgroundImage: `url(${image})` }}
      >
        {title ? (
          <h2 className="hero__title hero__mask">{title}</h2>
        ) : (
          <div className="hero__mask"></div>
        )}
      </div>
    );
  }
}

export default Hero;
