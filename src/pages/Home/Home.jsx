import { Component } from 'react';
import Hero from '../../components/Hero/Hero';
import Gallery from '../../components/Gallery/Gallery';
import './Home.scss';
import heroImage from '../../assets/home-hero.png';
import advertSample from '../../data/adverts-sample.json';

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
        <h1 className="sr-only">Page d'accueil</h1>
        <Hero
          title="Chez vous, partout et ailleurs"
          image={heroImage}
          isFixedHeight={false}
        />
        <Gallery advertAddress={advertSample} />
      </main>
    );
  }
}

export default Home;
