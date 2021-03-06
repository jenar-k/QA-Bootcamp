describe('Beli', function () {
    it('TC-01 Beli', function () {
        cy.visit('https://www.demoblaze.com/index.html');
        cy.url().should('include', 'www.demoblaze.com');
        cy.get('#login2').click();
        cy.get('#logInModal');
        cy.get('#loginusername').type('Dojo-arjen1324',{force:true}).should('have.value', 'Dojo-arjen1324');
        cy.get('#loginpassword').type('12345678',{force:true}).should('have.value', '12345678');
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        cy.get('#nameofuser').should('have.text', 'Welcome Dojo-arjen1324');
        cy.contains('HTC One M9',{force:true}).click();
        cy.get('.col-sm-12 > .btn',{force:true}).click();
        cy.get(':nth-child(4) > .nav-link',{force:true}).click();
        cy.get('.active > .nav-link',{force:true}).click();
        cy.contains('Laptops').click();
        cy.contains('Dell i7 8gb',{force:true}).click();
        cy.get('.col-sm-12 > .btn',{force:true}).click();
        cy.get(':nth-child(4) > .nav-link',{force:true}).click();
        cy.get('.active > .nav-link',{force:true}).click();
        cy.contains('Monitors').click();
        cy.contains('Apple monitor 24',{force:true}).click();
        cy.get('.col-sm-12 > .btn',{force:true}).click();
        cy.get(':nth-child(4) > .nav-link',{force:true}).click();
        cy.get('.col-lg-1 > .btn',{force:true}).click();
        cy.wait(3000);
        cy.get('#orderModalLabel',{force:true}).should('have.text', 'Place order');
        cy.get('#name',{force:true}).type('Dojo-arjen1324').should('have.value', 'Dojo-arjen1324');
        cy.get('#country',{force:true}).type('Indonesia').should('have.value', 'Indonesia');
        cy.get('#city',{force:true}).type('Yogyakarta').should('have.value', 'Yogyakarta');
        cy.get('#card',{force:true}).type('121323612813613').should('have.value', '121323612813613');
        cy.get('#month',{force:true}).type('August').should('have.value', 'August');
        cy.get('#year',{force:true}).type('2022').should('have.value', '2022');
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary',{force:true}).click();
        cy.get('.sweet-alert > h2',{force:true}).should('have.text', 'Thank you for your purchase!');
        cy.get('.confirm',{force:true}).click();
    })
})