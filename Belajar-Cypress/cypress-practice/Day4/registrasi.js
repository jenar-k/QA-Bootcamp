describe ('Registrasi', function() {
    it ('TC-01 Registrasi', function (){
        cy.aksesHalaman();
        cy.url().should('include', 'www.demoblaze.com');
        cy.get('#signin2').click();
        cy.get('#signInModalLabel').should('have.text', 'Sign up');
        cy.wait(3000);
        cy.get('#sign-username').type('Dojo-arjen13244').should('have.value', 'Dojo-arjen13244');
        cy.wait(3000);
        cy.get('#sign-password').type('12345678').should('have.value', '12345678');
        cy.wait(3000);
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        cy.wait(3000);
        cy.get('.active > .nav-link').should('be.visible');
    })
})