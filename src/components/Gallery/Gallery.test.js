import { render, screen } from '@testing-library/react';
import Gallery from './Gallery.jsx';
import { AllowLinks } from '../../utils/testUtils.js';
import advertSample from '../../data/adverts-sample.json';

describe('GIVEN the Gallery component', () => {
  describe('WHEN it is rendered', () => {
    beforeEach(() =>
      render(<Gallery adverts={advertSample.adverts} />, {
        wrapper: AllowLinks,
      })
    );
    test('it render with 20 thumbnails', () => {
      expect(screen.getAllByRole('link').length).toBe(20);
    });
  });
});
