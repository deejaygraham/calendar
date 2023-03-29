import React from 'react';
import DeskCalendar from '../../src/DeskCalendar';

describe('DeskCalendar component', () => {
    it('Shows a count of the current day in the month', () => {
        cy.mount(<DeskCalendar />);
        
        cy.get('.day-of-month').should('contain', '28');
    });

    it('Shows the day of the week', () => {
        cy.mount(<DeskCalendar />);
        
        cy.get('.day-of-week').should('contain', 'Tuesday');
    });

    it('Pressing the previous button shows yesterdays date', () => {
        cy.mount(<DeskCalendar />);
        
        cy.get('#prev').click();

        cy.get('.calendar').contains('Monday');
        cy.get('.calendar').contains('27');
    });

    it('Pressing the next button multiple times shows date in the future', () => {
        cy.mount(<DeskCalendar />);
        
        cy.get('#next').click().click();
        
        cy.get('.calendar').contains('Thursday');
        cy.get('.calendar').contains('30');
    });
});


//beforeEach(() => {
//    cy.viewport(1280, 720);
//  });
