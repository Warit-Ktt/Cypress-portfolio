/// <reference types="cypress" />

describe('get list user', () => {
  it('case 1', () => {
    cy.request({
        method: 'Get',
        url: '/v1/users',
        headers: {
          'x-api-key': 'a3c45d73e82f09b87cd9f2e41ab1de9682ab36fd'
        }
      }).as('listUser')

      cy.get('@listUser').then((res) => {
        expect(res.status).to.eq(200)
        expect(res.body).to.have.property('code', '0000')
        var users = res.body.users
        cy.log(JSON.stringify(users))
        expect(users[0]).to.have.property('username', 'testnaja1')
      })

    })
})