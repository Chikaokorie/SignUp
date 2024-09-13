
describe('My First Test', () => {
  it('landing page', () => {
    cy.visit("www.Google.com")
  })

  it('verify title-positive', () => {
    cy.visit("https://www.Google.com/")
    cy.title().should('eq','Google')
    
  })

  it('verify title-Negative', () => {
    cy.visit("https://www.Google.com/")
    cy.title().should('eq','Googlelove')
    
  })

  
})

