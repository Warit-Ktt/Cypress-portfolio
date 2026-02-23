/// <reference types="cypress" />

describe('view', () => {
  it('1280', () => {
    cy.viewport(1280, 720)
    cy.visit('https://example.cypress.io')
    cy.wait(3000)
  })


  it('1980', () => {
    cy.viewport(1980, 1080)
    cy.visit('https://example.cypress.io')
    cy.wait(3000)
  })

  it.skip('iphoneX', () => {
    cy.viewport('iphone-x')
    cy.visit('https://example.cypress.io')
    cy.screenshot({capture: 'fullPage'})
    cy.get('body > div.banner > div ').screenshot('banner-iphoneX')
  })

})