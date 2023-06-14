describe('input-form', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/')
    })
    it('focuses input field on page load', () => {        
        cy.get('[data-cy="inputTextField"]').should('have.focus')
    })
    it.only('allows input text', () => {
        const string = 'Покормить кота'
        cy.get('[data-cy="inputTextField"]').type(string)
            .should('have.value', string)
    })
})