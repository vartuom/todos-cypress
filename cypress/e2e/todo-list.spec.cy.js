describe('input-form', () => {    
    const string1 = 'Покормить кота'
    const string2 = 'Выгулять собаку'
    beforeEach(() => {
        cy.visit('http://localhost:5173/')
        cy.get('[data-cy="inputTextField"]').type(string1).type('{enter}')
        cy.get('[data-cy="inputTextField"]').type(string2).type('{enter}')
        cy.contains(string2).within(() => {
            cy.get('[type="checkbox"]').click()
        })                
    })
    it.only('pending button renders only pending tasks', () => {
        cy.contains('Активные').click()
        cy.contains(string1).within(() => {
            cy.get('[type="checkbox"]').should('exist')
        })
        cy.contains(string2).should('not.exist')        
    })
})