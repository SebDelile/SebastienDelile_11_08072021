import { render, screen } from '@testing-library/react';
import Thumbnail from './Thumbnail.jsx';
import { AllowLinks } from '../../utils/testUtils.js';

describe('GIVEN the Thumbnail component', () => {
  describe('WHEN it is rendered', () => {
    beforeEach(() =>
      render(
        <Thumbnail title="title" cover="path.to.picture" id="id-of-the-flat" />,
        { wrapper: AllowLinks }
      )
    );
    test('THEN it should contain a link to the flat', () => {
      expect(screen.getByRole('link')).toBeTruthy();
      expect(screen.getByRole('link').href).toMatch(
        /flatsheet\/id-of-the-flat/i
      );
    });
    test('THEN it should contain an image', () => {
      expect(screen.getByRole('img')).toBeTruthy();
    });
    test('THEN it should contain a title', () => {
      expect(screen.getByRole('heading')).toBeTruthy();
      expect(screen.getByText(/title/i)).toBeTruthy();
    });
    test('THEN it should have a mask', () => {
      expect(document.querySelector('.thumbnail__mask')).not.toBeNull();
    });
  });
});
