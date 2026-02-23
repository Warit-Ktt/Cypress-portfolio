/// <reference types="cypress" />

describe('First script', () => {
  it('Get check', () => {
    cy.request('Get', '/v1/auth/health').then((response) => {
      expect(response.status).to.eq(200)
      cy.log(response.status)
      expect(response.body).to.have.property('data')
      cy.log(response.body)
    })
  })
})