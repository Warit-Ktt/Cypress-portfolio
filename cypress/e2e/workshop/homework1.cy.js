describe('Homework', () => {
  before('login', () => {
    cy.visit('https://automate-test.stpb-digital.com/login/')
    cy.get('#__next > div.layout-wrapper.MuiBox-root.css-33gw4 > div > div > div.MuiBox-root.css-15tnlg1 > div > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation0.MuiAlert-root.MuiAlert-standardSuccess.MuiAlert-standard.css-1emx2cy > div > span > strong:nth-child(1)').then(labelUser => {
      var username = labelUser.text()
      console.log(username)
      expect(username).to.contain('user.test@krupbeam.com')
      cy.get('#email').type(username)
    })
    cy.get('#__next > div.layout-wrapper.MuiBox-root.css-33gw4 > div > div > div.MuiBox-root.css-15tnlg1 > div > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation0.MuiAlert-root.MuiAlert-standardSuccess.MuiAlert-standard.css-1emx2cy > div > span > strong:nth-child(2)').then(labelPassword => {
      var password = labelPassword.text()
      console.log(password)
      expect(password).to.contain('jKNsrapwLNV7eBN')
      cy.get('#__next > div.layout-wrapper.MuiBox-root.css-33gw4 > div > div > div.MuiBox-root.css-15tnlg1 > div > div > form > div.MuiFormControl-root.MuiFormControl-fullWidth.css-tzsjye > div > input').type(password)
    })
    cy.get('#btn-login').click()
  })

  it('add user', () => {
    cy.get('#__next a.css-pp3aye').click();
    cy.get('#firstname').type('Warit');
    cy.get('#firstname').should('have.value', 'Warit');
    cy.get('#lastname').type('Khuntontong');
    cy.get('#lastname').should('have.value', 'Khuntontong');
    cy.get('[name="email"]').type('khuntontong.warit@gmail.com');
    cy.get('[name="email"]').should('have.value', 'khuntontong.warit@gmail.com');
    cy.get('#password').type('myHomeWork1');
    cy.get('#password').should('have.value', 'myHomeWork1');
    cy.get('#mobile-phone').type('1234567890');
    cy.get('#mobile-phone').should('have.value', '1234567890');

    cy.get('#__next input[value="male"]').check();
    cy.get('#__next input[value="male"]').should('be.checked');
    cy.get('#__next [name="courses.SQL"]').check();
    cy.get('#__next [name="courses.Test Manual"]').check();
    cy.get('#__next [name="courses.Automate Test"]').check();
    cy.get('#__next [name="courses.Automate Test2"]').check();

    cy.get('#nationality').click();
    cy.get('#menu- > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiMenu-paper.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.css-1u9pw9f > ul > li:nth-child(221)').click();
    cy.get('#nationality').should('have.text', 'Thai');
    cy.get('#select-role').click()
    cy.get('#menu- > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiMenu-paper.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.css-1u9pw9f > ul > li:nth-child(2)').click()
    cy.get('#select-plan').click()
    cy.get('#menu- > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiMenu-paper.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.css-1u9pw9f > ul > li:nth-child(1)').click()

    cy.get('#__next > div.layout-wrapper.css-uinsfl > div.layout-content-wrapper.MuiBox-root.css-34b9xr > main > div > div:nth-child(3) > div > div > div > form > button').click()

    cy.get('body > div.MuiModal-root.MuiDialog-root.css-126xj0f > div.MuiDialog-container.MuiDialog-scrollPaper.css-16u656j > div > div:nth-child(2) > p').should('have.text', 'Register Success')
    cy.get('#btn-ok').should('be.visible').click()
  })

  after('logout',() => {
    cy.get('#__next > div.layout-wrapper.css-uinsfl > div.layout-content-wrapper.MuiBox-root.css-34b9xr > header > div > div > div.actions-right.MuiBox-root.css-70qvj9 > span > div > img').click()
    cy.get('body > div.MuiModal-root.MuiPopover-root.MuiMenu-root.css-hxcdyb > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiMenu-paper.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.css-1u9pw9f > ul > li').click()

  })


})