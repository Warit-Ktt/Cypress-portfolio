/// <reference types="cypress" />

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://automate-test.stpb-digital.com/apps/user/view/1/')
    cy.get('#__next > div.layout-wrapper.css-uinsfl > div.layout-content-wrapper.MuiBox-root.css-34b9xr > main > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-md-5.MuiGrid-grid-lg-4.css-6h7pcw > div > div:nth-child(1) > div > div.MuiCardActions-root.MuiCardActions-spacing.css-64os0l > button.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButtonBase-root.css-szmkj8').click()

  })

  it('1', () => {
    cy.get('body > div.MuiModal-root.MuiDialog-root.css-1td2lxy > div.MuiDialog-container.MuiDialog-scrollPaper.css-16u656j > div').within(() => {
      cy.get('input').should('have.length.greaterThan', 8)
    })
  })

  it('2', () => {
    cy.get('form').submit()
  })

  it.only('3', () => {
    cy.visit('https://letcode.in/alert')
    cy.get('#accept').click()
    cy.on('window:alert', (msg) => {
      expect(msg).to.contain('Welcome')
      expect(msg).to.equal('Hey! Welcome to LetCode')
    })
  })

})