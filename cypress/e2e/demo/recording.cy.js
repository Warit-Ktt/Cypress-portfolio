/// <reference types="cypress" />

describe('record', () => {
  it('visit ex', () => {
    cy.visit('https://example.cypress.io')
    cy.get('div:nth-child(4) li:nth-child(1) ul li:nth-child(1) a').click();
    cy.get('#query-btn').click();
    cy.get('#querying div:nth-child(6) div:nth-child(1) pre code.javascript span:nth-child(1)').click();
    cy.get('#querying div:nth-child(6) div:nth-child(1) pre code.javascript span:nth-child(1)').click();
    cy.get('#querying div:nth-child(6) div:nth-child(1) pre code.javascript').click();
    cy.get('#querying li.fourth').click();
    cy.get('#querying li.fourth').click();
    cy.get('#querying button.btn-default span').click();
    cy.get('#querying > div:nth-child(6)').click();
    cy.get('#root a').click();
  });

  it.skip('login', () => {
    cy.visit('https://automate-test.stpb-digital.com/login/')
    cy.get('#__next span.css-96dvgb').click();
    cy.get('[name="email"]').click();
    cy.get('[name="email"]').type('user.test@krupbeam.com');
    cy.get('#__next span.css-96dvgb').click();
    cy.get('#__next [name="password"]').click();
    cy.get('#__next [name="password"]').type('jKNsrapwLNV7eBN');
    cy.get('#btn-login').click();
  })

  it.only('recAssert', function() {
    cy.visit('https://example.cypress.io')
    cy.get('h1').should('be.visible');
    cy.get('h1').should('have.text', 'Kitchen Sink');
    cy.get('div:nth-child(4) li:nth-child(1) ul li:nth-child(1) a').click();
    cy.get('h1').should('be.visible');
    cy.get('h1').should('have.text', 'Querying');
    cy.get('#querying li.first').should('have.text', 'apples');
    cy.get('#querying button.btn-default span').should('have.text', 'Save Form');
    cy.get('#querying button.btn-default span').click();
  });
})