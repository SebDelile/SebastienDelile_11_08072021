import App from './App.jsx';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
window.scrollTo = jest.fn(); //not defined in jest environnement, will be tested in functionnal tests

describe('GIVEN the App component', () => {
  describe('WHEN it is rendered with a pathname "/"', () => {
    beforeEach(() => {
      render(
        <MemoryRouter initialEntries={[{ pathname: '/' }]}>
          <App />
        </MemoryRouter>
      );
    });
    test('THEN the Home page should be rendered', () => {
      expect(screen.getByRole('main').classList).toContain('home');
    });
  });
  describe('WHEN it is rendered with a pathname "/about"', () => {
    beforeEach(() => {
      render(
        <MemoryRouter initialEntries={[{ pathname: '/about' }]}>
          <App />
        </MemoryRouter>
      );
    });
    test('THEN the About page should be rendered', () => {
      expect(screen.getByRole('main').classList).toContain('about');
    });
  });
  describe('WHEN it is rendered with a pathname "/flatsheet/id with a valid id"', () => {
    beforeEach(() => {
      render(
        <MemoryRouter initialEntries={[{ pathname: '/flatsheet/c67ab8a7' }]}>
          <App />
        </MemoryRouter>
      );
    });
    test('THEN the FlatSheet page should be rendered', () => {
      expect(screen.getByRole('main').classList).toContain('flat-sheet');
    });
  });
  describe('WHEN it is rendered with a pathname "/flatsheet/id with an erroneous id"', () => {
    beforeEach(() => {
      render(
        <MemoryRouter initialEntries={[{ pathname: '/flatsheet/erroneous' }]}>
          <App />
        </MemoryRouter>
      );
    });
    test('THEN the Error404 page should be rendered', () => {
      expect(screen.getByRole('main').classList).toContain('error404');
    });
  });
  describe('WHEN it is rendered with an erroneous pathname', () => {
    beforeEach(() => {
      render(
        <MemoryRouter initialEntries={[{ pathname: '/erroneous.pathname' }]}>
          <App />
        </MemoryRouter>
      );
    });
    test('THEN the Error404 page should be rendered', () => {
      expect(screen.getByRole('main').classList).toContain('error404');
    });
  });
  describe('WHEN I am on a random page and I click on the link Homepage in the header', () => {
    beforeEach(() => {
      render(
        <MemoryRouter initialEntries={[{ pathname: '/about' }]}>
          <App />
        </MemoryRouter>
      );
      fireEvent.click(screen.getByRole('link', { name: 'Accueil' }));
    });
    test('THEN the Error404 page should be rendered', () => {
      expect(screen.getByRole('main').classList).toContain('home');
    });
  });
  describe('WHEN I am on a random page and I click on the link About in the header', () => {
    beforeEach(() => {
      render(
        <MemoryRouter initialEntries={[{ pathname: '/home' }]}>
          <App />
        </MemoryRouter>
      );
      fireEvent.click(screen.getByRole('link', { name: 'A propos' }));
    });
    test('THEN the Error404 page should be rendered', () => {
      expect(screen.getByRole('main').classList).toContain('about');
    });
  });
  describe('WHEN I am on the Error404 page and I click on the link to the HomePage in the main content', () => {
    beforeEach(() => {
      render(
        <MemoryRouter initialEntries={[{ pathname: '/error404' }]}>
          <App />
        </MemoryRouter>
      );
      fireEvent.click(
        screen.getByRole('link', { name: 'Retourner sur la page d’accueil' })
      );
    });
    test('THEN the Error404 page should be rendered', () => {
      expect(screen.getByRole('main').classList).toContain('home');
    });
  });
  describe('WHEN I am on the Home page and I click on the first Thumbnail', () => {
    beforeEach(() => {
      render(
        <MemoryRouter initialEntries={[{ pathname: '/' }]}>
          <App />
        </MemoryRouter>
      );
      fireEvent.click(
        screen.getAllByRole('link', {
          name: 'Aller sur la page de la location',
        })[0]
      );
    });
    test('THEN the Error404 page should be rendered', () => {
      expect(screen.getByRole('main').classList).toContain('flat-sheet');
      expect(
        screen.getByRole('heading', { name: 'Appartement cosy' })
      ).toBeTruthy();
    });
  });
});
