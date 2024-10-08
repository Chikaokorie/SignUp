describe('Onboarding Sunscription flow', () => {
  it('landing page', () => {
    cy.visit("https://qa.apps.timbaapps.com/")

  }) 
  it('Onboarding flow', () => {
    cy.visit("https://qa.timbaapps.com/pricing")
    cy.url().should('include','timbaapps.com')
    cy.url().should('include','https://qa.timbaapps.com/pricing')
    cy.url().should('contain','timbaapps')
    cy.url().should('not.contain','peace')
    
    cy.title({ timeout: 60000 }).should('include', 'Timba | Time Tracking and Productivity App')
    cy.get('.css-bry4is > .css-1n7jzfy > .chakra-image').should('exist')
    cy.get('.css-waryyy > :nth-child(3) > .chakra-button').click()
    cy.get('.css-9tjmdg').click()
    cy.get('input[id="field-:r0:"]', { timeout: 10000 }).click()
    .type('John');
    cy.get('input[id="field-:r1:"]', { timeout: 6000 }).click()
    .type('John');
    cy.get('input[id="field-:r2:"]', { timeout: 6000 }).click()
    .type('Harmonics');
    cy.get('input[id="field-:r3:"]', { timeout: 6000 }).click()
    .type('Qeen.v12alidmail12345@mailinator.com');
    cy.get('input[id="field-:r4:"]', { timeout: 6000 }).click()  
    .type('08164545594');
    cy.get('select', { timeout: 6000 }).select('Nigeria');
    cy.get('input[id="field-:r6:"]', { timeout: 6000 }).click()
    .type('22,Love street');
    cy.get('.css-prqpkh > .chakra-button').click()
    cy.get('.css-17maohs').click() 
    cy.get('.css-mnqf94 > .chakra-button',{ timeout: 10000 }).click()
    cy.get('.__PrivateStripeElement > iframe')
    .its('0.contentDocument').should('exist')
    .then(cy.wrap)
    
    
  
    
    
})


})