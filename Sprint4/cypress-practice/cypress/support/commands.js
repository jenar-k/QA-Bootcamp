// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })




/* Cypress.Commands.add('login', () => {
    cy.visit('https://bukalapak.com')
    cy.contains('Daftar').click()
}) // nama fungsi dan fungsinya
 */

Cypress.Commands.add('aksesHalaman', () => {
    cy.visit('https://www.demoblaze.com/index.html')
})

/* 
Cypress.Commands.add('webURL', () => {
    cy.visit('https://www.demoblaze.com/index.html')
})
 */

const delay = (subject, ms = 10000) => {
    cy.wait(ms, { log: false })
    if (subject) {
        cy.wrap(subject, {
            log: false,
        })
    }
}

Cypress.Commands.add('delay', { prevSubject: 'optional' }, delay)