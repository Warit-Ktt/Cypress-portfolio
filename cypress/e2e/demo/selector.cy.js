/// <reference types="cypress" />

// NOTE: get('#id'), get('.class'), get('tag')

describe('first', () => {
  it('visit', () => {
    var baseUrl = "https://example.cypress.io"
    cy.visit(baseUrl)
    cy.get('h1').should('contain.text', 'Kitchen Sink')
    cy.contains("get").click()

    cy.get('h1').should('contain.text', 'Querying')
    cy.contains("Best Practices Guide").focus()//.click()

    cy.get('.query-list').contains('bananas').should('have.class', 'third')

    // cy.get('#contains').should('contain.text', 'cy.contains()').contains("cy.contains()").click()

    // cy.get('h1').should('contain.text', 'Contains')
  })

})
