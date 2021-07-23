import { render, screen } from '@testing-library/react';
import Header from './Header.jsx';
import { AllowLinks } from '../../utils/testUtils.js';

describe('GIVEN the Header component', () => {
  describe('WHEN it is rendered', () => {
    beforeEach(() => render(<Header />, { wrapper: AllowLinks }));
    test('THEN it should contain a logo', () => {
      expect(screen.getByRole('img')).toBeTruthy();
    });
    test('THEN it should contain two links', () => {
      expect(screen.getAllByRole('link').length).toBe(2);
    });
  });
});
