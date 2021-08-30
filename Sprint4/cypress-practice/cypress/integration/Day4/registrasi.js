describe ('Registrasi', function() {
    it ('TC-01 Registrasi', function (){
        cy.visit('https://www.demoblaze.com/index.html');
        cy.get('#signin2').click();
        cy.wait(3000);
        cy.get('#signInModalLabel').should('have.text', 'Sign up');
        cy.wait(3000);
        cy.get('#sign-username').type('arjen9756').should('have.value', 'arjen9756');
        cy.wait(3000);
        cy.get('#sign-password').type('12345678').should('have.value', '12345678');
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        cy.get('.active > .nav-link').should('have.text', 'Home');
    })
})