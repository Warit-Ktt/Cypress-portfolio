/// <reference types="cypress" />

// Have parameter string path variable
describe('get user by username', () => {
  // pre function at commands.js
  beforeEach('getToken', () => {
    cy.getToken()
  })

  it('case 1', () => {
    cy.request({
      method: 'Get',
      url: '/v1/users/testnaja1',
      headers: {
        'x-api-key': 'a3c45d73e82f09b87cd9f2e41ab1de9682ab36fd'
      }
    }).then((res) => {
      expect(res.status).to.eq(200)
      
      expect(res.body).to.have.property('code', '0000')

      var user = res.body.user
      cy.log(JSON.stringify(user))
      expect(user).to.have.property('username', 'testnaja1')
    })

  })

  var username = 'testnaja2'
  it.only('case 2', () => {
    // Get api key from cypress.env.json
    cy.log(Cypress.env('apiKey'))
    cy.request({
      method: 'Get',
      url: '/v1/users/' + username,
      headers: {
        // 'x-api-key': 'a3c45d73e82f09b87cd9f2e41ab1de9682ab36fd'
        'x-api-key': Cypress.env('apiKey')

      }
    }).then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body).to.have.property('code', '0000')
      var user = res.body.user
      cy.log(JSON.stringify(user))
      expect(user).to.have.property('username', username)
    })

  })

  it('case 3', async () => {
    var token;
    // await cy.request('Get', 'v1/auth/key').then((res) => {
    //   token = res.body.token
    // })
    await cy.get('@apiKey').then((Key) => {
      token = Key
    })

    cy.request({
      method: 'Get',
      url: '/v1/users/' + username,
      headers: {
        'x-api-key': 'a3c45d73e82f09b87cd9f2e41ab1de9682ab36fd'

      }
    }).then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body).to.have.property('code', '0000')
      var user = res.body.user
      cy.log(JSON.stringify(user))
      expect(user).to.have.property('username', username)
    })

  })


})