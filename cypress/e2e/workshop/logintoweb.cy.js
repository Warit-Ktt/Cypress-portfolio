/// <reference types="cypress" />

describe.skip('My work', () => {
  it('passes', () => {
    cy.visit('https://automate-test.stpb-digital.com/login/')

    cy.get('.MuiTypography-h5').should('contain.text', 'Welcome')

    cy.get('#__next > div.layout-wrapper.MuiBox-root.css-33gw4 > div > div > div.MuiBox-root.css-15tnlg1 > div > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation0.MuiAlert-root.MuiAlert-standardSuccess.MuiAlert-standard.css-1emx2cy > div > span > strong:nth-child(1)').then(label => {
      var labelUser = label.text()
      console.log(labelUser)
      expect(labelUser).to.contain('user.test@krupbeam.com')
      cy.get('#email').type(labelUser)
    })

    cy.get('#__next > div.layout-wrapper.MuiBox-root.css-33gw4 > div > div > div.MuiBox-root.css-15tnlg1 > div > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation0.MuiAlert-root.MuiAlert-standardSuccess.MuiAlert-standard.css-1emx2cy > div > span > strong:nth-child(2)').then(label => {
      var labelPassword = label.text()
      console.log(labelPassword)
      expect(labelPassword).to.contain('jKNsrapwLNV7eBN')

      cy.get('form').as('formLogin')
      cy.get('@formLogin').find('input').last().type(labelPassword)
    })

    cy.get('#btn-login').click()
    cy.get('#__next > div.layout-wrapper.css-uinsfl > div.layout-content-wrapper.MuiBox-root.css-34b9xr > main > div > div:nth-child(1) > div > div.MuiCardHeader-root.css-1lbhvlm > div > span').should('contain.text', 'Search Filters')

  })
})


context('Solution', () => {

  it('test case 3', () => {
    cy.visit('https://automate-test.stpb-digital.com/login/')
    cy.get('#__next > div.layout-wrapper.MuiBox-root.css-33gw4 > div > div > div.MuiBox-root.css-15tnlg1 > div > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation0.MuiAlert-root.MuiAlert-standardSuccess.MuiAlert-standard.css-1emx2cy > div > span > strong:nth-child(1)').then(label => {
      var email = label.text()
      expect(email).to.eq('user.test@krupbeam.com')
      cy.get('#email').type(email)
    })
    cy.get('#__next > div.layout-wrapper.MuiBox-root.css-33gw4 > div > div > div.MuiBox-root.css-15tnlg1 > div > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation0.MuiAlert-root.MuiAlert-standardSuccess.MuiAlert-standard.css-1emx2cy > div > span > strong:nth-child(2)').then(pwdLabel => {
      var password = pwdLabel.text()
      expect(password).to.eq('jKNsrapwLNV7eBN')
      cy.get('#__next > div.layout-wrapper.MuiBox-root.css-33gw4 > div > div > div.MuiBox-root.css-15tnlg1 > div > div > form > div.MuiFormControl-root.MuiFormControl-fullWidth.css-tzsjye > div > input').type(password)
    })
    cy.get('#btn-login').should('be.visible').and('have.text', 'Login')
    cy.contains('Login').click()

  })

})