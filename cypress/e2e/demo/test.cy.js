/// <reference types="cypress" />

describe('first', () => {
  it('visit', () => {
    var baseUrl = "https://example.cypress.io"
    cy.visit(baseUrl + '/commands/querying', { timeout: 3000 })
  })
  // it('log', () => {
  //   cy.log('First script')
  // })
})

