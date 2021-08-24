// cara penulisan dan rules

/* 
describe ('test suite', function(){
    it ('test case', function (){
        
    })
}) 
*/


describe ('kumpulen test case', function(){
    it ('tc-1', function (){
        // cy.visit('https://demoqa.com/automation-practice-form');
        // cy.get('.bl-link > .pr-4').click();
        // cy.get('.css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click();
        
        // bukalapak
        // cy.visit('https://bukalapak.com');
        // cy.get('.bl-link > .pr-4').click();
        // cy.get('.bl-text-field__input').type('082226733843');
        
        // ultimateqa
        // cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/');
        // cy.get('select').select('opel');
        // cy.get('[value="Bike"]').check();
        // cy.get('[value="male"]').check();

        // Tugas
        cy.visit('https://demoqa.com/automation-practice-form');
        cy.get('#firstName').type('Jenar');
        cy.get('#lastName').type('Kuswidiardi');
        cy.get('#userEmail').type('jenarkuswidiardi@gmail.com');
        // cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').check();
        cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click();
        cy.get('#userNumber').type('082226733843');
        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').click();
        cy.get('#currentAddress').type('Ngaglik, Sleman, D.I Yogyakarta');
        cy.get('#submit').click();
    })

    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })

})