import { Component } from 'react';
import DropdownWrapper from '../../components/DropdownWrapper/DropdownWrapper.jsx';
import Hero from '../../components/Hero/Hero.jsx';
import heroImage from '../../assets/about-hero.png';
import './About.scss';

/**
 * Render the About page
 * @extends Component
 * @param {Object} props - no props here
 * @property {string} reliabilityText - Text for the dropdown 'reliability'
 * @property {string} respectText - Text for the dropdown 'respect'
 * @property {string} serviceText - Text for the dropdown 'service'
 * @property {string} securityText - Text for the dropdown 'security'
 */
class About extends Component {
  constructor(props) {
    super(props);
    this.reliabilityText = `Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.`;
    this.respectText = `La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.`;
    this.serviceText = `Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.`;
    this.securityText = `La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.`;
  }
  /**
   * Render the component
   * @returns {Reactnode} jsx to be injected in the html
   */
  render() {
    return (
      <main className="about container">
        <h1 className="sr-only">Page A propos</h1>
        <Hero image={heroImage} title="" isFixedHeight={true} />
        <div className="about__dropdown-wrapper-wrapper">
          <DropdownWrapper
            categories={[
              ['Fiabilité', this.reliabilityText],
              ['Respect', this.respectText],
              ['Service', this.serviceText],
              ['Sécurité', this.securityText],
            ]}
            isLargeScreen2columns={false}
          />
        </div>
      </main>
    );
  }
}

export default About;
