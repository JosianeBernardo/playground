describe('Date Picker', ()=> {
    beforeEach(() => {
        cy.goHome()
        cy.login('papito@cyskills.com.br', 'showtime')
        cy.userLoggedIn()
        cy.goTo('/date-picker', 'Date Picker')
    })

    it('Deve adicionar minha data de aniversário', ()=> {
        cy.get('input[placeholder="Escolha uma data"][readonly]')
            .click()
        cy.get('select[aria-label="Month"]')
            .select('Outubro')
        cy.get('input[aria-label="Year"]')
            .type(1986)
        cy.get('span[aria-label="Outubro 1, 1986"]')
            .click()
    })
})