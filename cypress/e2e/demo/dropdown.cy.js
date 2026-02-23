/// <reference types="cypress" />

describe('List and Dropdown', () => {
  it('visit', () => {
    cy.visit('https://automate-test.stpb-digital.com/user/list/')
  })
  it('login', () => {
    cy.visit('https://automate-test.stpb-digital.com/login/')

    cy.get('#__next > div.layout-wrapper.MuiBox-root.css-33gw4 > div > div > div.MuiBox-root.css-15tnlg1 > div > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation0.MuiAlert-root.MuiAlert-standardSuccess.MuiAlert-standard.css-1emx2cy > div > span > strong:nth-child(1)').then(label => {
      var Uname = label.text()
      console.log(Uname)
      expect(Uname).to.eq('user.test@krupbeam.com')

      cy.get('#email').type(Uname)
    })
    // cy.get('#email').type('user.test@krupbeam.com')
    cy.get('#__next > div.layout-wrapper.MuiBox-root.css-33gw4 > div > div > div.MuiBox-root.css-15tnlg1 > div > div > form > div.MuiFormControl-root.MuiFormControl-fullWidth.css-tzsjye > div > input').type('jKNsrapwLNV7eBN')
    cy.get('#btn-login').click()


  })

  it('List', () => {
    cy.get('#select-status').click()
    cy.get('#option-select-status-1').should('have.text', 'Pending')
    cy.get('#option-select-status-1').click()
    cy.get('#select-status').should('have.text', 'Pending')
  })

  it('List', () => {
    cy.get('#select-status').click()
    cy.get('[role="option"]').each((listItem, index) => {
      var optionText = listItem.text()
      cy.log(optionText)
      if (index == 2) {
        cy.wrap(listItem).click()
      }
    })
  })


  it.skip('visit Facebook', () => {
    // cy.visit('www.facebook.com/')
    // cy.get('[data-testid="open-registration-form-button"]').click()

    // select dropdown value - month
    // select by visible text
    // cy.get('#month').select('Jun')

    // select by value attribute
    // cy.get('#month').select('1')

    // select by index
    // cy.get('#month').select(7).should('have.value', '8')

    // cy.get('#month').within(() => {
    //   cy.get('option').each((listItem, index) => {
    //     var text = listItem.text()
    //     cy.log(text)
    //   })

    // })

  })

  after('logout',() => {
    cy.get('#__next > div.layout-wrapper.css-uinsfl > div.layout-content-wrapper.MuiBox-root.css-34b9xr > header > div > div > div.actions-right.MuiBox-root.css-70qvj9 > span > div > img').click()
    cy.get('body > div.MuiModal-root.MuiPopover-root.MuiMenu-root.css-hxcdyb > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiMenu-paper.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.css-1u9pw9f > ul > li').click()

  })
})