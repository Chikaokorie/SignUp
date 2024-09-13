describe('My First Test', () => {
  it('verify title-positive', () => {
    cy.visit("https://www.Google.com/")
    cy.title().should('eq','Google')
    
  })
  it('verify title-Negative', () => {
    cy.visit("https://www.Google.com/")
    cy.title().should('eq','Googlelove')
    
  })


})










