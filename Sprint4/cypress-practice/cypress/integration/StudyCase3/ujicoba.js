describe ('Test', function() {
    it ('Test', function (){
        cy.visit('https://bukalapak.com')
        // cy.get
        // class="pr-4 sigil-header__nav-action bl-text bl-text--body-small bl-text--semi-bold
        // cy.get('.bl-link > .pr-4').should('have.class', '[class="pr-4 sigil-header__nav-action bl-text bl-text--body-small bl-text--semi-bold]')
        cy.get('.bl-link > .pr-4').should('have.class', 'pr-4 sigil-header__nav-action bl-text bl-text--body-small bl-text--semi-bold')
    })
})
