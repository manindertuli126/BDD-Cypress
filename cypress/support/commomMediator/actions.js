class actions{

    cypressCssClick (clickElement)
    {
     cy.get(clickElement).click();
    }

    cypressXpathClick (clickElement)
    {
    cy.xpath(clickElement).click();
    }

    cypressCssType (elementLocate, enterText)
    {
     cy.get(elementLocate).type(enterText);
    }

    cypressXpathType (elementLocate, enterText)
    {
     cy.xpath(elementLocate).type(enterText);
    }
}

export default actions
