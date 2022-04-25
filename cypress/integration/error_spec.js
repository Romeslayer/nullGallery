describe('Error page', () => {
  beforeEach(() => {
    cy.intercept('GET', `https://api.artic.edu/api/v1/artworks/search?q=abstract?query[term][image_id][must_not]=null`,{
      statusCode: 500,
      ok: false,
      body: {
        message: 'There was an Error'
      }
    })
      .as('fetchArtworks');
      cy.visit('localhost:3000/home');
  })

  it('should redirect to error', () => {
    cy.url()
      .should('eq', 'http://localhost:3000/error')
  })

  it('header should have title a home button that trys to go home', () => {
    cy.get('header')
      .contains('null Gallery')
      .get('.home-button')
        .click();
      cy.url()
        .should('eq', 'http://localhost:3000/home')
  })

  it('should display that there is an Error and the message', () => {
    cy.get('h2')
      .contains('Sorry there was an error.')
      cy.get('p')
        .contains('Sorry server malfunction')
  })
})
