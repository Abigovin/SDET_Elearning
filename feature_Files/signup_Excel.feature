
@ElearningSignUp
Feature: This feature is to automate the Elearning signup page using Excel
  I want to verify whether application allows user to get registered as Student 

  @Excel_ELSC_001
  Scenario: Student registration 
    Given navigate to the url 
    When I click on SignUp link
    And Enter First name 
    And Enter Last name 
    And Enter e-mail 
    And Enter username 
    And Enter password 
    And Enter confirm password 
    And Enter phone number
    And Select Language list box
    And Click Student radio button in Profile
    And Click on Register button
    Then Validate the successful registration message
    And close the browser
    
    @Excel_ELSC_002
      Scenario: Teacher registration
    Given navigate to the url 
    When I click on SignUp link
    And Enter First name 
    And Enter Last name 
    And Enter e-mail 
    And Enter username 
    And Enter password 
    And Enter confirm password 
    And Enter phone number
    And Select Language list box
    And Click Teacher radio button in Profile
    And Click on Register button
    Then Validate the successful registration message
    And close the browser