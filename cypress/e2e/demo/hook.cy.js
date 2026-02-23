/// <reference types="cypress" />

describe('template spec', () => {

  before(() => {
    // runs once before all tests in the block (Mostly use for login)
    cy.log('==== before all ====')
  })

  beforeEach(() => {
    // runs before each test in the block (run when start คำสั่ง it)
    cy.log('==== before each ====')
  })

  // skip this test case
  it.skip('test case 1', () => {
    cy.visit('https://example.cypress.io')
    cy.log('==== test case 1 ====')
  })

  it.only('test case 2', () => {
    cy.visit('https://example.cypress.io')
    cy.log('==== test case 2 ====')
  })

  afterEach(() => {
    // runs after each test in the block (run when finish คำสั่ง it)
    cy.log('==== after each ====')
  })

  after(() => {
    // runs once after all tests in the block (run when finish คำสั่ง it ทั้งหมด / describe จบ) (Mostly use for logout)
    cy.log('==== after all ====')
  })

})

// Only run this context block (Not show other describe block)
context.only('context', () => {

  it('test case 3', () => {
    cy.visit('https://example.cypress.io')
    cy.log('==== test case 3 ====')
  })
})