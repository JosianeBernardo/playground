describe("Input Fields", () => {

    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
    })

    it("deve preencher o campo texto", () => {
        //access page
        cy.goTo('/input-fields', 'Input Fields')
        //Fill out form
        cy.get('[data-cy="fullname"]')
            .type('Josiane Bernardo')
        cy.get('[data-cy="email"]')
            .type('naninhabernardo@gmail.com')
        cy.get('[data-cy="number"]')
            .type('458')
        cy.get('[data-cy="date"]')
            .type('1986-10-01')
    })
})
