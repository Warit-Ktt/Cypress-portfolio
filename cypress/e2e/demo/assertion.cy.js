/// <reference types="cypress" />

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')

    // cy.get('#utilities > h2').should('be.visible').and('have.text', 'Commands')
    // cy.get('#utilities > h2').should('have.text', 'Commands')
    // cy.get('#utilities > h2').should('have.text', 'CommandsUtilitiesCypress API')
    
    // cy.get('#utilities > h2').should('have.text', 'CommandsUtilitiesCypress API')
    // cy.get('#utilities > h2').should('be.visible').and('have.text', 'CommandsUtilitiesCypress API')
    // cy.get('#utilities > h2').should('be.visible').should('have.text', 'CommandsUtilitiesCypress API')
    cy.get('#utilities > h2').should('be.visible').should('include.text', 'Commands')
    cy.get('body > div:nth-child(4) > div > div > ul > li:nth-child(1) > a').should('have.text', 'Querying')
    cy.get('#utilities > h2').should('be.visible').should('contain.text', 'Commands')
    
    // cy.get('body > div:nth-child(4) > div > div > ul > li:nth-child(1)').within(() => {
      //   cy.get('li').should('have.length', 4)
      // })
  })
})