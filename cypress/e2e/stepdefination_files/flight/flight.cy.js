require("cypress-xpath");

import flightHomeLocator from "../../../support/PageObject/flight/flightHomeLocator.json"
import actions from "../../../support/commomMediator/actions";

const performAction = new actions()

Given('User should be able to load the home screen', () => {
    cy.visit("https://www.orbitz.com/")
    performAction.cypressXpathClick(flightHomeLocator.flightab);
    performAction.cypressCssClick(flightHomeLocator.onewayLink);
    performAction.cypressCssClick(flightHomeLocator.multiCityLink);
    performAction.cypressCssClick(flightHomeLocator.roundtripLink);
});

When('User enter source as {string}', (source) => {
    performAction.cypressCssClick(flightHomeLocator.leavingFromBtn);
    performAction.cypressCssType(flightHomeLocator.leavingFromTextbox,source);
    cy.wait(1000);
    performAction.cypressCssType(flightHomeLocator.leavingFromTextbox,'{downArrow}');
    performAction.cypressCssType(flightHomeLocator.leavingFromTextbox,'{enter}');
});

And('User enter destination as {string}', (destination) => {
    performAction.cypressCssClick(flightHomeLocator.goingToBtn);
    performAction.cypressCssType(flightHomeLocator.goingToTextbox,destination);
    cy.wait(1000);
    performAction.cypressCssType(flightHomeLocator.goingToTextbox,'{downArrow}');
    performAction.cypressCssType(flightHomeLocator.goingToTextbox,'{enter}');
});

And('User enter TO and FROM dates', () => {

});

And('User click on Search button', () => {

});

Then('A list of flight be displayed to user', () => {

});