describe('My learnpracticeTest', () => {
  it('landing page', () => {
    cy.visit("www.Google.com")
    
  })

  it('Verify title-Positive', () => {
    cy.visit("www.Google.com")
    cy.title().should('eq','Google')
    
  })

  it('Verify title-Negative', () => {
    cy.visit("www.Google.com")
    cy.title().should('eq','Google111')
    
  }) 
  


})