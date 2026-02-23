/// <reference types="cypress" />

describe('put update user', () => {
  it('case 1', () => {
    cy.request({
      method: 'Put',
      url: '/v1/users/testnaja1',
      headers: {
        'x-api-key': 'a3c45d73e82f09b87cd9f2e41ab1de9682ab36fd'
      },
      body: {
        "age": "35",
        "email": "testnajaaaa@gmail.com"
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('code', '0000')
      var msg = response.body.message
      expect(msg).to.be.a('string')
    })

  })

  it('case 2', () => {
    cy.request({
      method: 'Put',
      url: '/v1/users/testnaja1',
      headers: {
        'x-api-key': 'a3c45d73e82f09b87cd9f2e41ab1de9682ab36fd'
      },
      body: {
        "age": "35",
        "email": "testnajaaa@gmail.com"
      }
    }).as('res')

    cy.get('@res').its('status').should('eq', 200)

  })


})