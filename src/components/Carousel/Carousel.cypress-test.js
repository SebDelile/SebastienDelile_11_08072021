import { cy, describe, it, expect } from 'local-cypress';

describe('GIVEN I am on the flatsheet page of a random flat', () => {
  describe('WHEN I look at all the pictures in the carousel', () => {
    beforeEach(() => {
      cy.visit('/flatsheet/c67ab8a7');
    });
    it('THEN should not occur any change in the carousel height whatever the picture size is', () => {
      cy.get('.carousel__button__right').as('nextButton');
      cy.get('.carousel__current-image').as('currentImage');
      cy.get('.carousel').then(($el) => {
        const carouselInitialHeight = $el.css('height');
        function RepeatAssert() {
          cy.get('@currentImage').then(($el) => {
            if ($el.text() === '5/5') return;
            else {
              cy.get('@nextButton').click();
              cy.get('.carousel')
                .should(($el) => {
                  expect($el.css('height')).to.equal(carouselInitialHeight);
                })
                .then(() => RepeatAssert());
            }
          });
        }
        RepeatAssert();
      });
    });
  });
  describe('WHEN the carousel contains only one picture', () => {
    beforeEach(() => {
      cy.visit('/flatsheet/cb02d69b');
    });
    it('THEN should not display the button nor current image indicator', () => {
      cy.get('.carousel__button__left').should('not.exist');
      cy.get('.carousel__button__right').should('not.exist');
      cy.get('.carousel__current-image').should('not.exist');
    });
  });
});
