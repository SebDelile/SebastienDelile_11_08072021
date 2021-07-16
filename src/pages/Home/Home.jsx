import { Component } from 'react';
import Hero from '../../components/Hero/Hero';
import Gallery from '../../components/Gallery/Gallery';
import './Home.scss';
import heroImage from '../../assets/home-hero.png';

class Home extends Component {
  render() {
    return (
      <main className="home container">
        <Hero
          title="Chez vous, partout et ailleurs"
          image={heroImage}
          isMask={true}
          isFixedHeight={false}
        />
        <Gallery />
      </main>
    );
  }
}

export default Home;
