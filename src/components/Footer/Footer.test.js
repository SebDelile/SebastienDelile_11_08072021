import { render, screen } from '@testing-library/react';
import Footer from './Footer.jsx';

describe('GIVEN the Footer component', () => {
  describe('WHEN it is rendered', () => {
    beforeEach(() => render(<Footer />));
    test('THEN it should contain a logo', () => {
      expect(screen.getByRole('img')).toBeTruthy();
    });
    test('THEN it should contain a disclaimer', () => {
      expect(screen.getByText(/©/i && /All rights reserved/i)).toBeTruthy();
    });
  });
});
