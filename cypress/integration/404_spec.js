describe('Error page', () => {
  it('should route to /404 if the url is incorrect', () => {
    cy.visit('localhost:3000/hotgarbage')
      cy.url().should('eq', 'http://localhost:3000/404')
  })

  it('should tell user that there is no page', () => {
    cy.visit('localhost:3000/hotgarbage')
      cy.get('h2')
        .contains('404 page not found')
  })

  it('should have a header with button to go home', () => {
    cy.visit('localhost:3000/hotgarbage')
      cy.get('header')
        .contains('null Gallery')
      cy.get('.home-button')
        .click()
      cy.url().should('eq', 'http://localhost:3000/home');
  })
})
