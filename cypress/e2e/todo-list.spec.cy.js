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
    it.only('submit action renders right amount of tasks', () => {
        cy.get('[data-cy="inputTextField"]').type(string1).type('{enter}')
        cy.get('[data-cy="inputTextField"]').type(string1).type('{enter}')
        cy.get('[data-cy="inputTextField"]').type(string1).type('{enter}')
        cy.get('[type="checkbox"]').should('have.length', 5)
    })
    it.only('both button triggers all tasks list', () => {
        cy.contains('Завершенные').click()
        cy.contains('Все').click()
        cy.contains(string1).should('exist')    
        cy.contains(string2).should('exist')    
    })
    it.only('pending button triggers pending tasks list', () => {
        cy.contains('Активные').click()
        cy.contains(string1).within(() => {
            cy.get('[type="checkbox"]').should('exist')
        })
        cy.contains(string2).should('not.exist')        
    })
    it.only('completed button triggers completed tasks list', () => {
        cy.contains('Завершенные').click()
        cy.contains(string2).within(() => {
            cy.get('[type="checkbox"]').should('exist')
        })
        cy.contains(string1).should('not.exist')        
    })
    it.only('clear button deletes all completed tasks', () => {
        cy.contains('Удалить сделанные').click()
        cy.contains(string1).within(() => {
            cy.get('[type="checkbox"]').should('exist')
        })
        cy.contains(string2).should('not.exist')        
    })
    it.only('clear button appears only at All and Completed lists and only when completed tasks exists', () => {
        cy.contains('Завершенные').click()        
        cy.contains('Удалить сделанные').should('exist')
        cy.contains('Активные').click()        
        cy.contains('Удалить сделанные').should('not.exist')
        cy.contains('Все').click()        
        cy.contains('Удалить сделанные').should('exist')
        cy.contains(string2).click()   
        cy.contains('Удалить сделанные').should('not.exist')
        cy.contains('Активные').click()     
        cy.contains('Удалить сделанные').should('not.exist')   
        cy.contains('Завершенные').click()        
        cy.contains('Удалить сделанные').should('not.exist')  
    })
    it.only('tabs renders proper amount of tasks in button captions', () => {
        cy.contains('Все (2)').should('exist')
        cy.contains('Активные (1)').should('exist')
        cy.contains('Завершенные (1)').should('exist')
        cy.contains(string2).click()
        cy.contains('Все (2)').should('exist')
        cy.contains('Активные (2)').should('exist')
        cy.contains('Завершенные (0)').should('exist')
        cy.contains('Активные (1)').should('not.exist')
        cy.contains('Завершенные (1)').should('not.exist')
    })
})