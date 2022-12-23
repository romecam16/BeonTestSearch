class ResultsPage{

    verifyResultsPage(){
        cy.get('[aria-current="page"]').should('be.visible');
        cy.get('[data-hveid="CAEQAw"]').should('be.visible');
    }

    getResultsItems(){
        return cy.get('div a br + h3');
    }

    clickElementByIndex(index){
        cy.xpath(`(//div/a/br/following-sibling::h3)[${index}]`).click();
    }

    getElementTextByIndex(index){
        const itemsText = []
        cy.xpath(`//div/a/br/following-sibling::h3`).each(($el) =>itemsText.push($el.text))
        return itemsText[index]
    }
}

export default ResultsPage