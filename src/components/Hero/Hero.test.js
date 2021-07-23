import { render, screen } from '@testing-library/react';
import Hero from './Hero.jsx';

describe('GIVEN the Hero component', () => {
  describe('WHEN it is rendered with a title and fixe height', () => {
    beforeEach(() =>
      render(
        <Hero title="title" image={'path.to.image'} isFixedHeight={true} />
      )
    );
    test('THEN it should contain a background image', () => {
      const hero = document.querySelector('.hero');
      const backgroundImage = window.getComputedStyle(hero).backgroundImage;
      expect(backgroundImage).toBe('url(path.to.image)');
    });
    test('THEN it should have a mask', () => {
      expect(document.querySelector('.hero__mask')).not.toBeNull();
    });
    test('THEN it should not have a heading tag', () => {
      expect(screen.getByRole('heading')).toBeTruthy();
    });
    test('THEN it should have a title', () => {
      expect(screen.getByText(/title/i)).toBeTruthy();
    });
    test('THEN it should have a fixed height whatever the screen width', () => {
      expect(document.querySelector('.hero').classList).toContain(
        'hero--fixed-height'
      );
    });
  });
  describe('WHEN it is rendered with an empty title', () => {
    beforeEach(() =>
      render(<Hero title="" image={'path.to.image'} isFixedHeight={true} />)
    );
    test('THEN it should not have a heading tag', () => {
      expect(screen.queryByRole('heading')).toBeNull();
    });
    test('THEN it should have a mask', () => {
      expect(document.querySelector('.hero__mask')).not.toBeNull();
    });
  });
  describe('WHEN it is rendered without a fixed height parameter', () => {
    beforeEach(() =>
      render(
        <Hero title="title" image={'path.to.image'} isFixedHeight={false} />
      )
    );
    test('THEN it should have a fixed height whatever the screen width', () => {
      expect(document.querySelector('.hero').classList).not.toContain(
        'hero--fixed-height'
      );
    });
  });
});
