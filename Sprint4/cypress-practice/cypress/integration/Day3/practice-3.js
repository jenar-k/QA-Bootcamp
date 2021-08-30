
// describe ('Test Suite untuk Study Case 2', function(){
//     it ('TC-01 Isi nama dan email, lalu klik button “email me!”.', function (){
//         cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/');
//         cy.get('#et_pb_contact_name_0').type('jenar').should('have.value', 'jenar');
//         cy.get('#et_pb_contact_email_0').type('jenarkuswidiardi@gmail.com').should('have.value', 'jenarkuswidiardi@gmail.com');
//         cy.get('.et_pb_contact_submit').click();
//     }),

//     it('TC-02 Pilih Jenis Kelamin pada radio button', function(){
//         cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/');
//         cy.get('[value="male"]').check().should('be.checked', 'male');
//     }),

//     it('TC-03 Pilih satu atau semua pada checkbox', function(){
//         cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/');
//         // cy.get('[value="Bike"]').check().should('exist');
//         cy.get('[value="Bike"]').check().should('be.checked', 'Bike');
//         cy.get('[value="Car"]').check().should('have.value', 'Car');
//     }),

//     it('TC-04 Pilih dropdown Audi', function(){
//         cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/');
//         cy.get('select').select('audi').should('have.value', 'audi');
//     }),

//     it('TC-05 Klik tombol “Click Me” pada bagian simple controls lalu cek apakah terdapat tulisan button success.', function(){
//         cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/');
//         cy.get('.et_pb_cta_0 > .et_pb_button_wrapper > .et_pb_button').click();
//         cy.get('.entry-title').should('have.text', 'Button success');
        
//     }),

//     //ignoring error exception
//     Cypress.on('uncaught:exception', (err, runnable)=>{
//         return false
//     })

// })




// commands
describe ('Test', function() {
    it ('Test', function (){
        cy.login();
    })
})




/* 
// Before
describe ('Test', function() {
    before(() => {
        cy.visit('https://bukalapak.com')
    })

    it ('Test-1', function (){
        cy.contains('Daftar').click();
    })

    it ('Test-2', function (){
        cy.contains('Daftar').click();
    })
})
 */




/* 
// Before each
describe ('Test', function() {
    beforeEach(() => {
        cy.visit('https://bukalapak.com')
    })

    it ('Test-1', function (){
        cy.contains('Daftar').click();
    })

    it ('Test-2', function (){
        cy.contains('Daftar').click();
    })
})
 */




/* 
// Visit 1
describe ('Test', function() {
    it ('Test-1', function (){
        cy.visit('https://bukalapak.com')
        cy.wait(10000)
        cy.contains('Daftar').click();
    })

    it ('Test-2', function (){
        cy.contains('Daftar').click();
    })
})
 */



/* 
// Visit 2
describe ('Test', function() {
    beforeEach(() => {
        cy.visit('https://bukalapak.com')
        cy.wait(10000)
    })

    it ('Test-1', function (){
        cy.contains('Daftar').click();
    })

    it ('Test-2', function (){
        cy.contains('Daftar').click();
    })
})
 */





/* 
// Go back dan go forward
describe ('Test', function() {
    it ('Test-1', function (){
        cy.visit('https://bukalapak.com');
        cy.contains('Daftar').click();
        cy.go('back');
        cy.wait(10000);
        cy.go('forward');
        cy.wait(10000);
    })
}) 
*/