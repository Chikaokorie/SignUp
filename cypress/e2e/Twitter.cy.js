describe('My learnpracticeTest', () => {
  it('landing page', () => {
    cy.visit("www.Twitter.com")

  }) 
  
  it('Verify Title -Positive', () => {
    cy.visit("www.Twitter.com")
    cy.title().should('eq','X')

  }) 

  it('Verify Title -Negative', () => {
    cy.visit("www.Twitter.com")
    cy.title().should('eq', 'Twitter')

  }) 

  it('login tab clicking', () => {
    cy.visit("www.Twitter.com")
    cy.get('[data-testid="loginButton"] > .css-146c3p1 > .r-dnmrzs > .css-1jxf684')
  .click();
  cy.get('.r-30o5oe', { timeout: 60000 }) // 
  .click()
  .type('Amalawoman@mailinator.com');
    cy.get('#layers > div:nth-child(2) > div > div > div > div > div > div.css-175oi2r.r-1ny4l3l.r-18u37iz.r-1pi2tsx.r-1777fci.r-1xcajam.r-ipm5af.r-g6jmlv.r-1awozwy > div.css-175oi2r.r-1wbh5a2.r-htvplk.r-1udh08x.r-1867qdf.r-kwpbio.r-rsyp9y.r-1pjcn9w.r-1279nm1 > div > div > div.css-175oi2r.r-1ny4l3l.r-6koalj.r-16y2uox.r-kemksi.r-1wbh5a2 > div.css-175oi2r.r-16y2uox.r-1wbh5a2.r-f8sm7e.r-13qz1uu.r-1ye8kvj > div > div > div > button:nth-child(6) > div > span > span')
    .click()
    cy.get('input[type="text"]', { timeout: 300000 }) 
  .type('Okorie92'); // 
  cy.get('#layers > div:nth-child(2) > div > div > div > div > div > div.css-175oi2r.r-1ny4l3l.r-18u37iz.r-1pi2tsx.r-1777fci.r-1xcajam.r-ipm5af.r-g6jmlv.r-1awozwy > div.css-175oi2r.r-1wbh5a2.r-htvplk.r-1udh08x.r-1867qdf.r-kwpbio.r-rsyp9y.r-1pjcn9w.r-1279nm1 > div > div > div.css-175oi2r.r-1ny4l3l.r-6koalj.r-16y2uox.r-kemksi.r-1wbh5a2 > div.css-175oi2r.r-16y2uox.r-1wbh5a2.r-f8sm7e.r-13qz1uu.r-1ye8kvj > div.css-175oi2r.r-1f0wa7y > div > div > div > button > div > span > span') .click()
  
  
  }) 


})