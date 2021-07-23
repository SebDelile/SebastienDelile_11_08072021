import { render, screen } from '@testing-library/react';
import Home from './Home.jsx';
import { AllowLinks } from '../../utils/testUtils.js';

describe('GIVEN the Home component', () => {
  describe('WHEN it is rendered ', () => {
    beforeEach(() => render(<Home />, { wrapper: AllowLinks }));
    test('THEN it should contain a hero', () => {
      expect(document.querySelector('.hero')).not.toBeNull();
    });
    test('THEN it should contain a gallery with 20 thumbnail', () => {
      expect(screen.getAllByRole('img').length).toBe(20);
    });
  });
});
