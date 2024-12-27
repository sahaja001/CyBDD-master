Feature: Users filter
  Scenario: Verify filter users by username
    Given I am logged in
    And I am in admin page 
    When I put "admin" in user filter field
    Then the list should contain 1 record

  Scenario: Verify filter users by role
    Given I am logged in
    And I am in admin page
    When I select "admin" from role filter 
    Then the list should contain 6 record