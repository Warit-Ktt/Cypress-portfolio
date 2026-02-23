/// <reference types="cypress" />

describe('template spec', () => {
  it('1', () => {
    cy.visit('https://letcode.in/calendar')
    // cy.get('#birthday').click('right');
    const date = new Date();
    const dateStr = date.toISOString().slice(0, 10); // e.g. "2025-11-23"
    cy.get('#birthday').clear().type(dateStr);

    cy.get('body > app-root > app-calendar > section > div > div > div.column.is-6-desktop.is-8-tablet > div > div > div > p').should('have.text', dateStr);

  })

  it.skip('2', () => {
    cy.visit('https://letcode.in/calendar')

    function formatLocalDate(d) {
      const yyyy = d.getFullYear();
      const mm = String(d.getMonth() + 1).padStart(2, '0'); // months are 0-based
      const dd = String(d.getDate()).padStart(2, '0');
      return `${yyyy}-${mm}-${dd}`;
    }

    // freeze to Nov 23, 2025 (month is 0-based)
    const fixed = new Date(2025, 10, 23);
    cy.clock(fixed.getTime());

    cy.visit('https://letcode.in/calendar');
    const dateStr = formatLocalDate(fixed);
    cy.get('#birthday').clear().type(dateStr);

  })


})