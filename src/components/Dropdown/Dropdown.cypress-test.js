import { cy, describe, it } from 'local-cypress';

describe('GIVEN I am on a page containing dropdowns', () => {
  describe('WHEN I land on the page', () => {
    beforeEach(() => {
      cy.visit('/about');
    });
    it('THEN should render with all dropdown being close', () => {
      cy.get('.dropdown__body').should('not.be.visible');
    });
  });
  describe('WHEN I land on the page and click to a dropdown', () => {
    beforeEach(() => {
      cy.visit('/about');
      cy.get('.dropdown').first().click();
    });
    it('THEN should open the dropdown to let the body text to be visible', () => {
      cy.get('.dropdown').first().find('.dropdown__body').should('be.visible');
    });
  });
});
