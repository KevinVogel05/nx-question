/// <reference types="cypress"/>
/// http://on.cypress.io/intellisense

describe('Store in depth testing', () => {
    before(() => {
        cy.visit('/');
    })
    beforeEach(() => {
        //cy.pause()
    })
    it('check if store loaded', () => {
        cy.window().then(w => {
            const store = w.store;
            const action = store.actionsObserver._value;
            console.log('Output: ', action)
        })
    })
    it('test', () => {

    })
});