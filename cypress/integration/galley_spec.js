import { fetchArtworksResponse, fetchArtDetailsResponse } from '../fixtures/responses.js';

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

  it('should have two arrows to that can be clicked')
})
