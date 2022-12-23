/// <reference types="Cypress" />

import Homepage from '../support/pages/HomePage'
import ResultsPage from '../support/pages/ResultsPage'

describe('Google Search Page', ()=>{

    const homePage = new Homepage();
    const resultsPage = new ResultsPage();

    beforeEach(function(){
        cy.fixture('searchItems').then((items)=>{
            this.items=items ;
        })
        cy.visit('/');
    })

    it('Verify that google search is showing results', function(){
        homePage.verifyLogoPresence();
        homePage.clickSearchBar();
        homePage.sendKeys(this.items.item)
        homePage.clickSearchButton();
        resultsPage.verifyResultsPage();
        resultsPage.clickElementByIndex(3);
        const text = resultsPage.getElementTextByIndex(3)
    })

})