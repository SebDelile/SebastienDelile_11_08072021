import { cy, describe, it } from 'local-cypress';

describe('GIVEN I am on the app', () => {
  describe('WHEN I am at the Home page', () => {
    beforeEach(() => {
      cy.visit('/');
    });
    it('THEN should have the link to Home page in the header to be underlined', () => {
      cy.get('.header__link')
        .contains('Accueil')
        .should('have.css', 'text-decoration')
        .and('match', /underline/);
      cy.get('.header__link')
        .contains('A propos')
        .should('have.css', 'text-decoration')
        .and('not.match', /underline/);
    });
  });
  describe('WHEN I am at the About page', () => {
    beforeEach(() => {
      cy.visit('/about');
    });
    it('THEN should have the link to Home page in the header to be underlined', () => {
      cy.get('.header__link')
        .contains('Accueil')
        .should('have.css', 'text-decoration')
        .and('not.match', /underline/);
      cy.get('.header__link')
        .contains('A propos')
        .should('have.css', 'text-decoration')
        .and('match', /underline/);
    });
  });
  describe('WHEN I am at the flatSheet page', () => {
    beforeEach(() => {
      cy.visit('/flatsheet/c67ab8a7');
    });
    it('THEN should have the link to Home page in the header to be underlined', () => {
      cy.get('.header__link')
        .contains('Accueil')
        .should('have.css', 'text-decoration')
        .and('not.match', /underline/);
      cy.get('.header__link')
        .contains('A propos')
        .should('have.css', 'text-decoration')
        .and('not.match', /underline/);
    });
  });
  describe('WHEN I am at the Error page', () => {
    beforeEach(() => {
      cy.visit('/Errorokdfjkwdfkwxn');
    });
    it('THEN should have the link to Home page in the header to be underlined', () => {
      cy.get('.header__link')
        .contains('Accueil')
        .should('have.css', 'text-decoration')
        .and('not.match', /underline/);
      cy.get('.header__link')
        .contains('A propos')
        .should('have.css', 'text-decoration')
        .and('not.match', /underline/);
    });
  });
});
