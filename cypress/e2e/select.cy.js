describe('Select', () => {
    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
        cy.goTo('/select', 'Select')
    })

    it('Deve selecionar o Cypress', () => {
        cy.contains('label', 'Selecione um Framework de Testes')
            .parent()
            .find('select')
            .select('Cypress')
    })

    it('Deve escolher as linguagens que usam node js', () => {
        const langs = ['JavaScript', 'TypeScript']
        cy.get('input[placeholder^="Linguagens de programação"]')
            .click()
        langs.forEach(lang => {
            cy.contains('.option-item', lang)
                .click()
        })
        cy.get('.language-item')
            .should('have.length', langs.length)
    }) 
    //Esse cenário é para poder usar o contains com uma condição para palavras únicas, mas que 
    //Também aparecem em outras de forma composta
    it('Deve escolher três linguagens', () => {
        const langs = ['Java', 'TypeScript', 'Python']
        cy.get('input[placeholder^="Linguagens de programação"]')
            .click()
        langs.forEach(lang => {
            cy.contains('.option-item', new RegExp("^" + lang + "$"))
                .click()
        })
        cy.get('.language-item')
            .should('have.length', langs.length)
    }) 
})