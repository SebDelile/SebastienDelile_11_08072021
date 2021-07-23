import { render, screen } from '@testing-library/react';
import Rating from './Rating.jsx';

describe('GIVEN the Rating component', () => {
  describe('WHEN it is rendered with a rating of 0', () => {
    beforeEach(() => render(<Rating rating="0" />));
    test('THEN it should contain 5 colorless stars', () => {
      expect(screen.getAllByAltText(/Etoile vide/i).length).toBe(5);
    });
  });
  describe('WHEN it is rendered with a rating of 5', () => {
    beforeEach(() => render(<Rating rating="5" />));
    test('THEN it should contain 5 colorful stars', () => {
      expect(screen.getAllByAltText(/Etoile pleine/i).length).toBe(5);
    });
  });
  describe('WHEN it is rendered with a rating of 3', () => {
    beforeEach(() => render(<Rating rating="3" />));
    test('THEN it should contain 3 colorful stars and 2 colorless stars', () => {
      expect(screen.getAllByAltText(/Etoile pleine/i).length).toBe(3);
      expect(screen.getAllByAltText(/Etoile vide/i).length).toBe(2);
    });
  });
});
