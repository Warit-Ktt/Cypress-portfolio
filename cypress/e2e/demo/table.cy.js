/// <reference types="cypress" />

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://automate-test.stpb-digital.com/apps/user/view/1/')
  })

  it('thead', () => {
    // get table, find row ... then get the ... column
    cy.get('thead').find('tr').then((tableRow) => {
      cy.wrap(tableRow).find('th').eq(2).should('contain', 'Progress')
    })
  })

  it('tbody 1 index', () => {
    // get table, find row index ... then get the ... column
    cy.get('tbody tr').eq(1).find('td').then(tableColumns => {
      cy.wrap(tableColumns).eq(2).should('contain', '18%')
    })
  })

  it('tbody 2 name', () => {
    // get table, find row with name ... then get the ... column
    cy.get('tbody').contains('tr','99/109').then(tableRow => {
      cy.wrap(tableRow).find('td').eq(3).should('contain', '342')
    })
  })


})