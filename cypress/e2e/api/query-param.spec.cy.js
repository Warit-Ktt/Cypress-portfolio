/// <reference types="cypress" />

describe('param other', () => {
  it('case 1', () => {
    cy.request('Get','https://petstore.swagger.io/v2/user/login', {
      'username': 'test',
      'password': '1111'
    }).then((response) => {
      expect(response.status).to.eq(200)
      cy.log(JSON.stringify(response.body))
      // expect(response.body).to.include('logged in user session:')
    })

  })

  it('case 2', () => {
    cy.request({
      method: 'Get',
      url: 'https://petstore.swagger.io/v2/user/login',
      qr:{
        'username': 'test',
        'password': '1111'
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
      cy.log(JSON.stringify(response.body))
      // expect(response.body).to.include('logged in user session:')
    })

  })

  it('case 3 pet', () => {
    cy.request({
      method: 'Post',
      url: 'https://petstore.swagger.io/v2/pet/1',
      qr:{
        'name': 'test',
        'status': '1111'
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
      cy.log(JSON.stringify(response.body))
      // expect(response.body).to.include('logged in user session:')
    })

  })


})