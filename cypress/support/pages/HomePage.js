class HomePage {

    clickSearchBar(){
        cy.get('[name = "q"]').click();
    }

    sendKeys(value){
        cy.get('[name = "q"]').clear().type(value);
    }

    clickSearchButton(){
        cy.get('div [jsname= "VlcLAe"] center input[name = "btnK"]').click()
    }

    verifyLogoPresence(){
        cy.get('#hplogo').should('be.visible');
    }
    getLogo(){
        return cy.get('#hplogo')
    }

}

export default HomePage