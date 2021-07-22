import { render, screen } from '@testing-library/react';
import FlatSheet from './FlatSheet.jsx';

describe('GIVEN the FlatSheet component', () => {
  describe('WHEN it is rendered with a valid id', () => {
    beforeEach(() =>
      render(<FlatSheet match={{ params: { id: 'c67ab8a7' } }} />)
    );
    test('THEN it should contain a carousel', () => {
      expect(screen.getByAltText(/photo/i));
    });
    test('THEN it should contain a title', () => {
      expect(screen.getByRole('heading', { name: /Appartement cosy/i }));
    });
    test('THEN it should contain a location', () => {
      expect(screen.getByText(/Ile de France - Paris 17e/i));
    });
    test('THEN it should contain a taglist', () => {
      expect(screen.getByText(/Batignolle/i && /Montmartre/i));
    });
    test('THEN it should contain a ranting', () => {
      expect(screen.getAllByAltText(/etoile/i).length).toBe(5);
    });
    test('THEN it should contain a host', () => {
      expect(screen.getByAltText(/profil de l'hôte/i)).toBeTruthy();
      expect(screen.getByText(/Nathalie/i && /Jean/i)).toBeTruthy();
    });
    test('THEN it should contain 2 Dropdowns with their title', () => {
      expect(screen.getByRole('button', { name: /description/i })).toBeTruthy();
      expect(screen.getByRole('button', { name: /équipement/i })).toBeTruthy();
    });
    test('THEN it should contain the description Dropdown body text', () => {
      expect(screen.getByText(/Votre maison loin de chez vous./i)).toBeTruthy();
    });
    test('THEN it should contain the equipment Dropdown body text', () => {
      expect(screen.getByText(/Équipements de base/i)).toBeTruthy();
    });
  });
});
