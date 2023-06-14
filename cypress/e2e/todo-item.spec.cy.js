describe('input-form', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/')
        const string = 'Покормить кота'
        cy.get('[data-cy="inputTextField"]').type(string).type('{enter}')
    })
    it.only('changes checkbox value on element click', () => {
        cy.get('[type="checkbox"]').should('not.be.checked')
        cy.get('[data-cy="todo-label"]').click()
        cy.get('[type="checkbox"]').should('be.checked')
    })
    it.only('deletes todo entry on delete button click', () => {
        cy.get('[type="checkbox"]').should('exist')
        cy.get('[data-cy="delete-button"]').click()
        cy.get('[type="checkbox"]').should('not.exist')
    })
})