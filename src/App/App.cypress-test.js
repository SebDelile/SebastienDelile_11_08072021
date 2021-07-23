import { cy, describe, it, expect } from 'local-cypress';

describe('GIVEN I have a standard screensize (1440*1024)', () => {
  describe('WHEN I land on the application', () => {
    beforeEach(() => {
      cy.visit('/');
    });
    it('THEN should render the app with a header and footer', () => {
      cy.get('.app').should('exist');
      cy.get('.header').should('exist');
      cy.get('.footer').should('exist');
    });
  });
});
describe('WHEN I have very large viewport height (1440*2048)', () => {
  describe('WHEN I am on the application in a random page (/about is a short one)', () => {
    beforeEach(() => {
      cy.viewport(1440, 2048);
      cy.visit('/about');
    });
    it('THEN should render the app on full screen', () => {
      cy.get('.app').should((app) =>
        expect(app[0].getBoundingClientRect().bottom).to.equal(2048)
      );
    });
  });
});
