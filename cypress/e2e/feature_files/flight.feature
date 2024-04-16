Feature: Search Flight from Orbitz Website

Scenario: Flight Search

Given User should be able to load the home screen
When User enter source as "Toronto"
And User enter destination as "Delhi"
And User enter TO and FROM dates
And User click on Search button
Then A list of flight be displayed to user