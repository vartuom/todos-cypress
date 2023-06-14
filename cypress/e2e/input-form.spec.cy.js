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
    it.only('disables submit button when input field is empty', () => {
        const string = ''
        cy.get('[data-cy="inputTextField"]').clear()
        cy.get(('[data-cy="submitButton"]')).should('be.disabled')
    })
    it.only('disables submit button when input field consist only of spaces', () => {
        const string = '    '
        cy.get('[data-cy="inputTextField"]').type(string)
        cy.get('[data-cy="submitButton"]').should('be.disabled')
    }) 
    it.only('clears input after submit', () => {
        const string = 'Покормить кота'
        cy.get('[data-cy="inputTextField"]').type(string).type('{enter}').should('have.value', '')
    })  
    it.only('submits todo with Enter keypress', () => {
        const string = 'Покормить кота'
        cy.get('[data-cy="inputTextField"]').type(string).type('{enter}')
        cy.get('[data-cy="todo-label"]').should('have.text', string)
    })
    it.only('submits todo with submit button click', () => {
        const string = 'Покормить кота'
        cy.get('[data-cy="inputTextField"]').type(string)
        cy.get('[data-cy="submitButton"]').click()
        cy.get('[data-cy="todo-label"]').should('have.text', string)
    })
})