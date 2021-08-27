describe ('Test', function() {
    it ('Test', function (){
        cy.server();
        cy.route('GET', '/entries').as('loadProducts')
        cy.aksesHalaman();
        cy.url().should('include', 'www.demoblaze.com');
        cy.wait('@loadProducts').its('status').should('eq', 200);
        cy.get('#login2').click();
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-body').should('be.visible');
        cy.wait(3000)
        cy.get('#loginusername').type('Dojo-arjen1324').should('have.value', 'Dojo-arjen1324');
        cy.wait(3000)
        cy.get('#loginpassword').type('12345678').should('have.value', '12345678');
        cy.wait(3000)
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        cy.wait(3000);
        cy.get('.active > .nav-link').should('be.visible');
        cy.wait(3000);
        cy.get('#logout2').click();
        cy.wait(3000);
        cy.get('.active > .nav-link').should('be.visible');
    })
})


/* describe ('Test', function() {
    it ('Test', function (){
        cy.server();
        cy.route('GET', '/entries').as('loadProducts')
        cy.aksesHalaman();
        cy.url().should('include', 'www.demoblaze.com');
        cy.wait('@loadProducts').its('status').should('eq', 200);
        cy.get('#login2').click();
        cy.wait(5000)
        cy.get('#loginusername').type('Dojo-arjen1324');
        cy.wait(5000)
    })
}) */
