import { render, screen } from '@testing-library/react';
import Taglist from './Taglist.jsx';

describe('GIVEN the Taglist component', () => {
  describe('WHEN it is rendered with a list of 3 tags', () => {
    beforeEach(() => render(<Taglist tags={['tag 1', 'tag 2', 'tag 3']} />));
    test('THEN it should contain a list tag', () => {
      expect(screen.getByRole('list')).toBeTruthy();
    });
    test('THEN it should contain all the tags', () => {
      expect(screen.getByText(/tag 1/i && /tag 2/i && /tag 3/i)).toBeTruthy();
    });
  });
});
