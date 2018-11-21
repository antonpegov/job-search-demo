Feature: Jobs Page

  Background: User opens Jobs Page
    Given I navigate to jobs page
    # Then I can see jobs loaded in the left panel
    And I can see main title
    And I can see tooltip in the right panel

  Scenario: User can see job details
    When I choose second job in the first panel
    Then I see job details in the second panel
