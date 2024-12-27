Feature: Login features
  Scenario: Verify valid login 
    Given I am in login page
    When I enter valid username and password
    And I click on login button
    Then I should logged in and redirected to dashboard page
    
  Scenario: Verify invalid login
    Given I am in login page
    When I enter invalid username and password
	  And I click on login button
    Then I should see invalid credentials message