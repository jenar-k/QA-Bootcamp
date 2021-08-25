// cara penulisan dan rules

/* 
describe ('test suite', function(){
    it ('test case', function (){
        
    })
}) 
*/


describe ('Test Suite untuk Study Case 2', function(){
    it ('TC-01 Isi nama dan email, lalu klik button “email me!”.', function (){
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
        
        // Tugas Day 1
        // cy.visit('https://demoqa.com/automation-practice-form');
        // cy.get('#firstName').type('Jenar');
        // cy.get('#lastName').type('Kuswidiardi');
        // cy.get('#userEmail').type('jenarkuswidiardi@gmail.com');
        // // cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').check();
        // cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click();
        // cy.get('#userNumber').type('082226733843');
        // // cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').check();
        // cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').click();
        // cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(2) > .custom-control-label').click();
        // cy.get('#currentAddress').type('Ngaglik, Sleman, D.I Yogyakarta');
        // cy.get('#submit').click();

        // cy.visit('https://courses.letskodeit.com/practice');
        // cy.get('h1').contains('Practice Page');

        //belajar contains
        // cy.visit('https://bukalapak.com');
        // // cy.contains('Daftar').click(); // mengandung kata daftar lalu di klik
        // cy.contains('Daftar').click();
        // cy.get('.bl-text-field__input').type('jenar').should('have.value', 'jenar');
        // cy.get('.mv-48').should('have.text', 'Daftar dulu, yuk'); // ('cyner nya apa', 'cari apa')
        // cy.get('.mv-48').should('exist'); // cek elemennya ada atau enggak

        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/');
        cy.get('#et_pb_contact_name_0').type('jenar').should('have.value', 'jenar');
        cy.get('#et_pb_contact_email_0').type('jenarkuswidiardi@gmail.com').should('have.value', 'jenarkuswidiardi@gmail.com');
        cy.get('.et_pb_contact_submit').click();
        

    }),

    it('TC-02 Pilih Jenis Kelamin pada radio button', function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/');
        cy.get('[value="male"]').check().should('be.checked', 'male');
    }),

    it('TC-03 Pilih satu atau semua pada checkbox', function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/');
        cy.get('[value="Bike"]').check().should('exist');
    }),

    it('TC-04 Pilih dropdown Audi', function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/');
        cy.get('select').select('audi').should('have.value', 'audi');
    }),

    it('TC-05 Klik tombol “Click Me” pada bagian simple controls lalu cek apakah terdapat tulisan button success.', function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/');
        cy.get('.et_pb_cta_0 > .et_pb_button_wrapper > .et_pb_button').click();
        cy.get('.entry-title').should('have.text', 'Button success');
        
    }),

    //ignoring error exception
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })

})


















