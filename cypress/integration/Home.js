
describe('this are tests for my home page', () => {
    it('im checking the page loads well', () => {
        cy.visit('/')
        cy.get('#title').should('exist')
    })
    it('check if my input empty', () => {
        cy.visit('/')
        cy.get('input').should('have.length', 0)
    })
    it('check if i can start writing in my input', ()=>{
        cy.visit('/')
        cy.get('input').type('this is a new todo').invoke('val').should('length', 18)
    })

    it('check if button exist', ()=> {
        cy.visit('/')
        cy.get('button').should('exist')
    })

    it('lets check if we can add new todo', () => {
        cy.visit('/');
        cy.get('input').type('newtodo').invoke('val').should('length', 7);
        cy.get('button').click();
        cy.get('[data-cy=0]').should('exist');
    })

    it('check if i can remove after adding a new todo', () => {
        cy.visit('/');
        cy.get('input').type('todo').invoke('val').should('length', 4);
        cy.get('[data-cy=addTodo]').click();
        cy.get('[data-cy=0]').should('exist');
        cy.get('[data-cy=btn0]').click();
        cy.get('[data-cy=0]').should('not.exist');
    })
}) 