import { render, screen } from '@testing-library/react';
import About from './About.jsx';

describe('GIVEN the About component', () => {
  describe('WHEN it is rendered ', () => {
    beforeEach(() => render(<About />));
    test('THEN it should contain a hero', () => {
      expect(document.querySelector('.hero')).not.toBeNull();
    });
    test('THEN it should contain the 4 Dropdowns with their title', () => {
      expect(screen.getByRole('button', { name: /fiabilité/i })).toBeTruthy();
      expect(screen.getByRole('button', { name: /respect/i })).toBeTruthy();
      expect(screen.getByRole('button', { name: /service/i })).toBeTruthy();
      expect(screen.getByRole('button', { name: /sécurité/i })).toBeTruthy();
    });
    test('THEN it should contain the reliability Dropdown body text', () => {
      expect(
        screen.getByText(
          /Les annonces postées sur Kasa garantissent une fiabilité totale./i
        )
      ).toBeTruthy();
    });
    test('THEN it should contain the respect Dropdown body text', () => {
      expect(
        screen.getByText(
          /La bienveillance fait partie des valeurs fondatrices de Kasa./i
        )
      ).toBeTruthy();
    });
    test('THEN it should contain the service Dropdown body text', () => {
      expect(
        screen.getByText(
          /Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite./i
        )
      ).toBeTruthy();
    });
    test('THEN it should contain the security Dropdown body text', () => {
      expect(
        screen.getByText(/La sécurité est la priorité de Kasa./i)
      ).toBeTruthy();
    });
  });
});
