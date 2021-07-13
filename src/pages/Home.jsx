import { Component } from 'react';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import '../styles/Home.scss';
import heroImage from '../assets/home-hero.png';

class Home extends Component {
  render() {
    return (
      <main className="home container">
        <Hero
          title="Chez vous, partout et ailleurs"
          image={heroImage}
          isMask={true}
        />
        <Gallery />
      </main>
    );
  }
}

export default Home;
