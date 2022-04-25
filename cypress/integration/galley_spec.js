import {
  fetchArtworksResponse,
  fetchArtDetailsResponse
} from '../fixtures/responses.js';

describe('Gallery page', () => {

  beforeEach(() => {
    cy.intercept('GET', `https://api.artic.edu/api/v1/artworks/search?q=abstract?query[term][image_id][must_not]=null`, fetchArtworksResponse)
      .as('fetchArtworks');

    cy.intercept('GET', 'https://api.artic.edu/api/v1/artworks?ids=70374,70125,77615', fetchArtDetailsResponse)
      .as('fetchArtDetails');

    cy.visit('localhost:3000/home');
    cy.get('.card-button')
      .first()
      .click()
    cy.get('.card-button').last()
      .click();
    cy.get('.gallery-button')
      .click();
  })

  it('should display null Gallery in the header with a button to go home', () => {
    cy.get('header')
      .contains('null Gallery')
      .get('.home-button')
  })

  it('home button should change url back to home', () => {
    cy.get('.home-button')
      .click()
    cy.url().should('eq', 'http://localhost:3000/home')
  })

  it('should have two arrows to that can be clicked', () => {
    cy.get('.left-arrow')
      .click()
    cy.get('.right-arrow')
      .click()
  })

  it('image that is displayed should change with each arrow click', () => {
    cy.get('[alt="Painting (Figures with Stars)"]')
    cy.get('.left-arrow')
      .click()
    cy.get('[alt="Visions of Eternity"]')
    cy.get('.right-arrow')
      .click()
    cy.get('[alt="Painting (Figures with Stars)"]')
  })

})
