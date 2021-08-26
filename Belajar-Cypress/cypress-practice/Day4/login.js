describe ('Login', function() {
    it ('TC-01 Login', function (){
        cy.visit('https://www.demoblaze.com/index.html');
        cy.get('#login2').click();
        cy.wait(3000);
        cy.get('#logInModalLabel').should('have.text', 'Log in');
        cy.get('#loginusername').type('arjen9756').should('have.value', 'arjen9756');
        cy.wait(3000);
        cy.get('#loginpassword').type('12345678').should('have.value', '12345678');
        cy.wait(3000);
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    })
})