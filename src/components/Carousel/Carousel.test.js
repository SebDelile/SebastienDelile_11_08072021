import { render, screen, fireEvent } from '@testing-library/react';
import Carousel from './Carousel.jsx';

const flatDataPictures = [
  'path.to.picture.1',
  'path.to.picture.2',
  'path.to.picture.3',
  'path.to.picture.4',
  'path.to.picture.5',
];

describe('GIVEN the Carousel component', () => {
  describe('WHEN it is rendered with several pictures', () => {
    beforeEach(() => render(<Carousel pictures={flatDataPictures} />));
    test('THEN it should contain an image', () => {
      expect(screen.getByAltText(/Photo/i)).toBeTruthy();
    });
    test('THEN the displayed image should be the first of the list of pictures', () => {
      expect(screen.getByAltText(/Photo/i).src).toMatch(flatDataPictures[0]);
    });
    test('THEN it should contain 2 buttons', () => {
      expect(screen.getAllByRole('button').length).toBe(2);
    });
    test('THEN it should contain a image number position indicator', () => {
      expect(screen.getByText(/\/\d+/)).toBeTruthy();
    });
    test('THEN the image number position indicator should be 1/length', () => {
      expect(screen.getByText(/\/\d+/)).toHaveTextContent('1/5');
    });
  });
  describe('WHEN it is rendered with only one picture', () => {
    beforeEach(() => render(<Carousel pictures={[flatDataPictures[0]]} />));
    test('THEN it should not contain buttons', () => {
      expect(screen.queryByRole('button')).toBeNull();
    });
    test('THEN it should not contain a image number position indicator', () => {
      expect(screen.queryByText(/\/\d+/)).toBeNull();
    });
  });
  describe('WHEN it is rendered and I am on the first picture and I click on the next button', () => {
    beforeEach(() => {
      render(<Carousel pictures={flatDataPictures} />);
      fireEvent.click(screen.getByAltText(/suivant/));
    });
    test('THEN the second picture should be displayed', () => {
      expect(screen.getByAltText(/Photo/i).src).toMatch(flatDataPictures[1]);
    });
    test('THEN the image number position indicator should be 2/length', () => {
      expect(screen.getByText(/\/\d+/)).toHaveTextContent('2/5');
    });
  });
  describe('WHEN it is rendered and I am on the first picture and I click on the previous button', () => {
    beforeEach(() => {
      render(<Carousel pictures={flatDataPictures} />);
      fireEvent.click(screen.getByAltText(/précédent/));
    });
    test('THEN the last picture should be displayed', () => {
      expect(screen.getByAltText(/Photo/i).src).toMatch(
        flatDataPictures[flatDataPictures.length - 1]
      );
    });
    test('THEN the image number position indicator should be length/length', () => {
      expect(screen.getByText(/\/\d+/)).toHaveTextContent('5/5');
    });
  });
  describe('WHEN it is rendered and I am on the last picture and I click on the next button', () => {
    beforeEach(() => {
      render(<Carousel pictures={flatDataPictures} />);
      fireEvent.click(screen.getByAltText(/précédent/));
      fireEvent.click(screen.getByAltText(/suivant/));
    });
    test('THEN the first picture should be displayed', () => {
      expect(screen.getByAltText(/Photo/i).src).toMatch(flatDataPictures[0]);
    });
    test('THEN the image number position indicator should be 1/length', () => {
      expect(screen.getByText(/\/\d+/)).toHaveTextContent('1/5');
    });
  });
  describe('WHEN it is rendered and I am on the last picture and I click on the previous button', () => {
    beforeEach(() => {
      render(<Carousel pictures={flatDataPictures} />);
      fireEvent.click(screen.getByAltText(/précédent/));
      fireEvent.click(screen.getByAltText(/précédent/));
    });
    test('THEN the second to last picture should be displayed', () => {
      expect(screen.getByAltText(/Photo/i).src).toMatch(
        flatDataPictures[flatDataPictures.length - 2]
      );
    });
    test('THEN the image number position indicator should be (length-1)/length', () => {
      expect(screen.getByText(/\/\d+/)).toHaveTextContent('4/5');
    });
  });
});
