import { cy, describe, it, expect } from 'local-cypress';

describe('GIVEN I am on a page implementing a DropdownWrapper on 2-columns display', () => {
  describe('WHEN the dropdown body have different height and both dropdown are open', () => {
    beforeEach(() => {
      cy.visit('/flatsheet/cb02d69b');
      cy.get('.dropdown__header').click({ multiple: true });
      cy.wait(500); //seems it doesn't wait the end of the animation without this
    });
    it('THEN should results in the 2 dropdown having the same height', () => {
      cy.get('.dropdown').should(($els) => {
        expect($els.first().css('height')).to.equal($els.last().css('height'));
        console.log($els.first().css('height'));
      });
    });
  });
});
