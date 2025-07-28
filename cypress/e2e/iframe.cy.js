describe("Iframe", () => {
    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
        cy.goTo('/iframe', 'IFrame')
    })

    it("Deve preencher o nome em uma página que tem Iframe", () => {
    cy.get('[data-cy="iframe-inputs"]')
        .its('0.contentDocument.body').should('not.be.empty')
        .then(cy.wrap)
        .within(() => {
            cy.get('#fullname').should('be.visible').type('Josiane Bernardo')
        })
    })
})