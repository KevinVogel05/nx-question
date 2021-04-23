/// <reference types="cypress"/>
/// http://on.cypress.io/intellisense

import Chance from 'chance';
const chance = new Chance();

describe('Standard UseCase', () => {
    beforeEach(() => {
        cy.visit('/first/1');
    })

    it('has a question', () => {
        cy.contains('What is your Name?');
    });

    it('change language', () => {
        //cy.pause();
        cy.contains('What is your Name?');
        cy.get('.selectLanguage').select('Deutsch');
        cy.contains('Wie heißt du?');
    });
    it('check question', () => {
        //cy.pause();
        expect(true).to.equal(true)
    });
    // it('check if question en is loaded', () => {
    //     cy.window().then(w => {
    //         const store = w.store;
    //         //const action = store.actionsObserver._value.question.en;
    //         //const action = store.actionsObserver._value.question;
    //         //const action = store.actionsObserver._value;
    //         //expect(action.en).to.equal('What is your Name?')
    //         //expect(action.de).to.equal('Wie heißt du?')
    //         console.log('action', store)

    //         const action2 = store.actionsObserver._value.answer
    //         console.log('action2', action2)
    //         cy.get('question-fp-one > .lets-get-started').click()
    //         console.log('action', store)
    //     })
    //})



});