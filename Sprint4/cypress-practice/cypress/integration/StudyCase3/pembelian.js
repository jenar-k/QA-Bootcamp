describe('Beli', function () {
    it('TC-01 Beli', function () {
        cy.server();
        cy.route('GET', '/entries').as('loadProducts')
        cy.aksesHalaman();
        cy.url().should('include', 'www.demoblaze.com');
        cy.wait('@loadProducts').its('status').should('eq', 200);        
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click();
        cy.route('GET', '/index.m3u8').as('loadDetail')
        cy.wait('@loadDetail').its('status').should('eq', 200);
        cy.get('.col-sm-12 > .btn').click();
        cy.get('#cartur').click();
        cy.wait(3000);
        cy.get('.col-lg-1 > .btn').click();
        cy.wait(3000);
        cy.get('#name').type('Dojo-arjen1324').should('have.value', 'Dojo-arjen1324');
        cy.wait(3000);
        cy.get('#country').type('Indonesia').should('have.value', 'Indonesia');
        cy.wait(3000);
        cy.get('#city').type('Yogyakarta').should('have.value', 'Yogyakarta');
        cy.wait(3000);
        cy.get('#card').type('121323612813613').should('have.value', '121323612813613');
        cy.wait(3000);
        cy.get('#month').type('August').should('have.value', 'August');
        cy.wait(3000);
        cy.get('#year').type('2022').should('have.value', '2022');;
        cy.wait(3000);
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        cy.get('.sweet-alert > h2').should('have.text', 'Thank you for your purchase!');
        cy.wait(3000);
        cy.get('.confirm').click();
        cy.get('.active > .nav-link').should('be.visible');
    })
})