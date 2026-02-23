/// <reference types="cypress" />

describe('check box and radio', () => {
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

  it('goto', () => {
    cy.visit('https://automate-test.stpb-digital.com/apps/user/view/1/')
    cy.contains('Notification').click()
  })

  it('check', () => {
    cy.get('tbody tr:nth-child(1) td:nth-child(2) span:nth-child(1) input:nth-child(1)').should('not.be.disabled')
    cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) input:nth-child(1)').should('not.be.disabled')
    
    cy.get('tbody tr:nth-child(1) td:nth-child(2) span:nth-child(1) input:nth-child(1)').uncheck()
    cy.get('tbody tr:nth-child(1) td:nth-child(3) span:nth-child(1) input:nth-child(1)').check()
    // cy.contains('tr', 'New for you').find('input[type="checkbox"]').eq(0).uncheck({ force: true });
    // cy.contains('tr', 'New for you').find('input[type="checkbox"]').eq(1).check({ force: true });

  })

  it('checkall', () => {
    cy.get('.MuiTableContainer-root [type="checkbox"]').check()
  })

  it('radio', () => {
    cy.visit('https://automate-test.stpb-digital.com/user/form/')
    cy.get('input[value="female"]').check()
    cy.get('input[value="male"]').check()
  })

  after('logout',() => {
    cy.get('#__next > div.layout-wrapper.css-uinsfl > div.layout-content-wrapper.MuiBox-root.css-34b9xr > header > div > div > div.actions-right.MuiBox-root.css-70qvj9 > span > div > img').click()
    cy.get('body > div.MuiModal-root.MuiPopover-root.MuiMenu-root.css-hxcdyb > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiMenu-paper.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.css-1u9pw9f > ul > li').click()

  })

})