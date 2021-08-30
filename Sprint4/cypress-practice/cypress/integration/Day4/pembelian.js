describe('Beli', function () {
    it('TC-01 Beli', function () {
        cy.visit('https://www.demoblaze.com/index.html')
        // cy.get(':nth-child(2) > .card > .card-block > .card-title > .hrefch').click();
        cy.contains('Samsung galaxy s6').click();
        cy.wait(3000);
        cy.get('.col-sm-12 > .btn').click();
        cy.wait(3000);
        cy.get('#cartur').click();
        cy.wait(3000);
        cy.get('.col-lg-1 > .btn').click();
        cy.wait(3000);
        cy.get('#name').type('arjen9756');
        cy.wait(3000);
        cy.get('#country').type('Indonesia');
        cy.wait(3000);
        cy.get('#city').type('Yogyakarta');
        cy.wait(3000);
        cy.get('#card').type('121323612813613');
        cy.wait(3000);
        cy.get('#month').type('August');
        cy.wait(3000);
        cy.get('#year').type('2022');
        cy.wait(3000);
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    })
})