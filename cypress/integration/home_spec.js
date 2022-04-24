import { fetchArtworksResponse, fetchArtDetailsResponse } from '../fixtures/responses.js';

describe('null Gallery home page', () => {

  beforeEach(() => {
    cy.intercept('GET', `https://api.artic.edu/api/v1/artworks/search?q=abstract?query[term][image_id][must_not]=null`, fetchArtworksResponse)
      .as('fetchArtworks');

    cy.intercept('GET', 'https://api.artic.edu/api/v1/artworks?ids=70374,70125,77615', fetchArtDetailsResponse)
      .as('fetchArtDetails');

      cy.visit('localhost:3000/');
  })

  it('url should be redirected from / to /home', () => {
    cy.url()
      .should('eql', 'http://localhost:3000/home');
  })

  it('should load with the title null Gallery', () => {
    cy.get('header')
      .contains('null Gallery');
  });

  it('should load with three images', () => {
    cy.get('.card-display')
      .children()
        .should('have.length', 3)
    cy.get('[alt="Painting (Figures with Stars)"]')
    cy.get('[alt="The Key"]')
    cy.get('[alt="Visions of Eternity"]')


  })

  it('should be able to add a image to the gallery by clicking an empty heart', () => {
    cy.get('.card-button')
      .first()
        .click();
  })

  it('should be able to add a different image to the gallery by clicking an two hearts', () => {
    cy.get('.card-button')
      .first()
        .click();
    cy.get('.card-button').last()
        .click();
  })

  it('after adding images to the gallery the footer should appear with the saved images and button to the gallery', () => {
    cy.get('.card-button')
      .first()
        .click()
      cy.get('.card-button').last()
        .click();
      cy.get('.mini-img-display')
        .children()
          .should('have.length', 2);
      cy.get('.mini-img[alt="Painting (Figures with Stars)"]')
      cy.get('.mini-img[alt="Visions of Eternity"]')
  })

  it('should be taken to gallery page when clicking the gallery button' , () => {
    cy.get('.card-button')
      .first()
        .click()
      cy.get('.card-button').last()
        .click();
    cy.get('.gallery-button')
      .click();

      cy.url().should('eq', 'http://localhost:3000/gallery')
  })
})
