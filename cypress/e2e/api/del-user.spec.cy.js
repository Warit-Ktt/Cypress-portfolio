/// <reference types="cypress" />

describe('delete user', () => {
  it('case 1', () => {
    cy.request({
      method: 'Delete',
      url: '/v1/users/testnaja1',
      headers: {
        'x-api-key': 'a3c45d73e82f09b87cd9f2e41ab1de9682ab36fd'
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('code', '0000')
      assert.isString(response.body.message, 'User deleted successfully')
    })
  })



})