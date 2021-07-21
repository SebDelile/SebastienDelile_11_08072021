import { Component } from 'react';
import Hero from '../../components/Hero/Hero';
import Gallery from '../../components/Gallery/Gallery';
import './Home.scss';
import heroImage from '../../assets/home-hero.png';

/**
 * Render the Home page
 * @extends Component
 * @hideconstructor
 */
class Home extends Component {
  /**
   * Render the component
   * @returns {Reactnode} jsx to be injected in the html
   */
  render() {
    return (
      <main className="home container">
        <Hero
          title="Chez vous, partout et ailleurs"
          image={heroImage}
          isFixedHeight={false}
        />
        <Gallery />
      </main>
    );
  }
}

export default Home;
