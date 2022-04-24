import { fetchArtworksResponse, fetchArtDetailsResponse } from '../fixtures/responses.js';

describe('null Gallery home page', () => {

  beforeEach(() => {
    cy.visit('localhost:3000/')
    cy.intercept('GET', `https://api.artic.edu/api/v1/artworks/search?q=abstract?query[term][image_id][must_not]=null`,fetchArtworksResponse)
      .as('fetchArtworks');

    cy.intercept('GET', 'https://api.artic.edu/api/v1/artworks?ids=70374,70125,77615',fetchArtDetailsResponse)
      .as('fetchArtDetails');
  })

  it('url should be redirected from / to /home', () => {
    cy.url().should('eql', 'http://localhost:3000/home')
  })

  it('should load with the title null Gallery', () => {
    cy.get('header').contains('null Gallery');
  });

  it('should load with three images')
})
