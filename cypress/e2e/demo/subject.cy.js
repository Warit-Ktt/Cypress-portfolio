/// <reference types="cypress" />

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://automate-test.stpb-digital.com/login/')

    cy.get('form').as('formLogin')
    cy.get('@formLogin').find('input').first().type('test@gmail.com') // get login form and type email

    // get login form and verify number of input fields within the form
    cy.get('@formLogin').within(() => {
      cy.get('input').its('length').should('be.greaterThan', 1).and('be.lessThan', 3)      
    })

  })
})