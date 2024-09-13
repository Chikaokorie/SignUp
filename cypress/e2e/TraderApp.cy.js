describe('My learnpracticeTest', () => {
  it('landing page', () => {
    cy.visit("https://web-dashboard-dev.traderapp.finance/auth/login")

  }) 
  it('login tab clicking', () => {
    cy.visit("https://web-dashboard-dev.traderapp.finance/auth/login")
    cy.get('input[type="text"][placeholder="Enter your email address"]').type("okoriepaul92@gmail.com");
      cy.get('input[type="password"][placeholder="-------------"]').type("Test12345@");
      cy.get('button[type="button"]').click();
 
  
})
  

})