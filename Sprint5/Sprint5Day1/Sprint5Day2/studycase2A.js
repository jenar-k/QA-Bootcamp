describe('Admin PKH', function () {
    it('TC-01 Admin PKH Coba Upload', function () {
        cy.visit('https://demoqa.com/automation-practice-form');
        cy.url().should('include', 'demoqa.com');
        cy.get('#firstName').type('Jenar').should('have.value', 'Jenar');
        cy.get('#lastName').type('JenarLagi').should('have.value', 'JenarLagi');
        cy.get('#userEmail').type('jenar@email.com').should('have.value', 'jenar@email.com');
        cy.get('#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').click()
        cy.get('#userNumber').type('080989999').should('have.value', '080989999');

        // cy.get('#dateOfBirthInput').click();
        // cy.get('.react-datepicker__month-select').select('January');
        // cy.get('.react-datepicker__year-select').select('1998');
        // cy.get('class=[react-datepicker__day react-datepicker__day--013]').click();

        // cy.get('.subjects-auto-complete__value-container').type('daftar',{force:true}).should('have.value', 'daftar');
        // cy.get('.subjects-auto-complete__input').type('daftar').should('have.value', 'daftar');
        cy.get('.subjects-auto-complete__input',{force:true}).type('daftar').should('have.value', '');
        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').click();
        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(2) > .custom-control-label').click();

        cy.get('#uploadPicture').attachFile('testgambar.jpg');

        cy.get('#currentAddress').type('Ngaglik, Yogyakarta').should('have.value', 'Ngaglik, Yogyakarta');
        cy.get('#state > .css-yk16xz-control > .css-1hwfws3 > .css-1wa3eu0-placeholder').click();
        cy.get('#react-select-3-option-2').click();
        cy.get('#city > .css-yk16xz-control > .css-1hwfws3').click();
        cy.get('#react-select-4-option-0').click();
        cy.get('#submit').click();
    })
})