import { render, screen } from '@testing-library/react';
import Error404 from './Error404.jsx';
import { AllowLinks } from '../../utils/testUtils.js';

describe('GIVEN the Error404 component', () => {
  describe('WHEN it is rendered ', () => {
    beforeEach(() => render(<Error404 />, { wrapper: AllowLinks }));
    test('THEN it should contain a 404 annoucement', () => {
      expect(screen.getByRole('heading', { name: /404/ })).toBeTruthy();
    });
    test('THEN it should contain an error message', () => {
      expect(
        screen.getByText(/Oups! La page que vous demandez n'existe pas/)
      ).toBeTruthy();
    });
    test('THEN it should contain a link to the Home Page', () => {
      expect(screen.getByRole('link')).toBeTruthy();
      expect(screen.getByRole('link').href).toMatch(/http:\/\/.+\//i);
    });
  });
});
