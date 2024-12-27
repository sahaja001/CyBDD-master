import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor'

Given('I am in login page', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com')
  })

When ('I enter valid username and password', () => {
  cy.fixture('users.json').then((users) => {
    cy.get('input[name=username]').type(users.valid.username)
    cy.get('input[name=password]').type(users.valid.password)
  })
})

When ('I click on login button' , () => {
   cy.get('button[type=submit]').click()
})

Then('I should logged in and redirected to dashboard page', () => {
  cy.get('p.oxd-userdropdown-name').should('be.visible')
})

When ('I enter invalid username and password', () => {
  cy.fixtures('users.json').then((users) => {
    cy.get('input[name=username]').type(users.invalid.username)
    cy.get('input[name=password]').type(users.invalid.password)
  })
})

Then('I should see invalid credentials message', () => {
  cy.contains('Invalid credentials').should('be.visible')
})