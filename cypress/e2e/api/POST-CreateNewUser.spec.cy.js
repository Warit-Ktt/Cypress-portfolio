/// <reference types="cypress" />

describe('post create new user', () => {
  it.only('case 1', () => {
    cy.request({
      method: 'Post',
      url: '/v1/users',
      headers: {
        'x-api-key': 'a3c45d73e82f09b87cd9f2e41ab1de9682ab36fd'
      },
      body: {
        "username": "testnaja2",
        "age": "15",
        "email": "testnaja@gmail.com"
      }
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body).to.have.property('code', '0000')
    })
  })

  it.skip('case 2', () => {
    cy.fixture('user').then((user) => {
      cy.request({
        method: 'Post',
        url: '/v1/users',
        headers: {
          'x-api-key': 'a3c45d73e82f09b87cd9f2e41ab1de9682ab36fd'
        },
        body: {
          "username": user.username,
          "age": user.age,
          "email": user.email
        }
      }).should((response) => {
        expect(response.status).to.eq(201)
        expect(response.body).to.have.property('code', '0000')
      })

    })
  })
})