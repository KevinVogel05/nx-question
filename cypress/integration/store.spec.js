/// <reference types="cypress"/>
/// http://on.cypress.io/intellisense

describe('Standard Use Case with Store testing', () => {
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
    it('go to next page (/first)', () => {
        cy.get('.lets-get-started').click();
    })
    it('go to next page (first/1)', () => {
        cy.get('.lets-get-started').click();
    })
    it('check if question are loaded', () => {
        cy.window().then(w => {
            const store = w.store;
            const action = store.actionsObserver._value.question;
            expect(action).not.null
            console.log('Output: ', action)
        })
    })
    it('change language to german', () => {
        cy.get('.selectLanguage').select('Deutsch');
        cy.window().then(w => {
            const store = w.store;
            const action = store.actionsObserver._value.language.lang;
            expect(action).to.equal('de')
            console.log('Output: ', action)
        })
    })
    it('input name', () => {
        cy.get('input').type('Hilton Blade')
        cy.get('body').click()
            //cy.get('.lets-get-started').click()
    })
    it('check if name got changed', () => {
        cy.window().then(w => {
            const store = w.store;
            const action = store.actionsObserver._value.answer;
            expect(action.name).to.equal('Hilton Blade')
            console.log('Output: ', action)
        })
    })
    it('go to next page (first/2)', () => {
        cy.get('.lets-get-started').click();
    })
    it('check if second question is loaded', () => {
        cy.window().then(w => {
            const store = w.store;
            const action = store.actionsObserver._value.question;
            expect(action).not.null
            expect(action.de).to.equal('Wie alt bist du?')
            console.log('Output: ', action)
        })
    })
    it('input age', () => {
        cy.get('input').type('22')
    })
    it('go to next page (first/3)', () => {
        cy.get('.lets-get-started').click();
    })
    it('input intrests, hates, job', () => {
        cy.get('.questions > :nth-child(2)').type('reading')
        cy.get('.questions > :nth-child(4)').type('testing')
        cy.get('.questions > :nth-child(6)').type('Police Officer')
    })
    it('go to next page (second)', () => {
        cy.get('.lets-get-started').click();
    })
    it('change language back to english', () => {
        cy.get('.selectLanguage').select('English');
        cy.window().then(w => {
            const store = w.store;
            const action = store.actionsObserver._value.language.lang;
            expect(action).to.equal('en')
            console.log('Output: ', action)
        })
    })
    it('go to next page (second/1)', () => {
        cy.get('.lets-get-started').click();
    })
    it('select Green', () => {
        cy.get('.questions > select').select('Green')
    })
    it('go to next page (second/2)', () => {
        cy.get('.lets-get-started').click();
    })
    it('select Female', () => {
        cy.get(':nth-child(3) > input').click()
    })
    it('check if gender got changed to Female', () => {
        cy.window().then(w => {
            const store = w.store;
            const action = store.actionsObserver._value.answer;
            expect(action.gender).to.equal('Female')
            console.log('Output: ', action)
        })
    })
    it('select Male', () => {
        cy.get(':nth-child(2) > input').click()
    })
    it('check if gender got changed to Male', () => {
        cy.window().then(w => {
            const store = w.store;
            const action = store.actionsObserver._value.answer;
            expect(action.gender).to.equal('Male')
            console.log('Output: ', action)
        })
    })
    it('go to next page (second/3)', () => {
        cy.get('.lets-get-started').click();
    })
    it('select No', () => {
        cy.get(':nth-child(3) > input').click()
    })
    it('check if like got changed to false', () => {
        cy.window().then(w => {
            const store = w.store;
            const action = store.actionsObserver._value.answer;
            expect(action.like).to.equal(false)
            console.log('Output: ', action)
        })
    })
    it('select Yes', () => {
        cy.get(':nth-child(2) > input').click()
    })
    it('check if like got changed to true', () => {
        cy.window().then(w => {
            const store = w.store;
            const action = store.actionsObserver._value.answer;
            expect(action.like).to.equal(true)
            console.log('Output: ', action)
        })
    })
    it('go to next page (final)', () => {
        cy.get('.lets-get-started').click();
    })
    it('check your final answers', () => {
        cy.window().then(w => {
            const store = w.store;
            const action = store.actionsObserver._value.answer;
            expect(action.name).not.to.empty
                //assert.isNumber(action.age, '')
            expect(action.intrests).not.to.empty
            expect(action.hates).not.to.empty
            expect(action.job).not.to.empty
            expect(action.color).not.to.empty
            expect(action.gender).not.to.empty
            expect(action.like).not.to.false
            console.log('Output: ', action)
        })
    })
    it('submit answers', () => {
        cy.get('.lets-get-started').click()
    })
});
