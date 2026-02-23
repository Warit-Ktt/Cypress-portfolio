/// <reference types="cypress" />

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://automate-test.stpb-digital.com/login/')

    // 1
    cy.get('.MuiTypography-h5').should('contain', 'Welcome')

    // 2
    cy.get('.MuiTypography-h5').then(label => {
      var labelText = label.text()
      console.log(labelText)
      expect(labelText).to.contain('Welcome')
    })

    // 3
    cy.get('.MuiTypography-h5').invoke('text').then(label => {
      expect(label).to.contain('Welcome')
    })

    // 4
    cy.get('#email').type('test@gmail.com')
    cy.get('#email').invoke('prop', 'value').should('eq', 'test@gmail.com').then(email => {
      expect(email).to.contain('test@gmail.com')
    })

  })
})