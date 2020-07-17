@ElearningSignUp
Feature: This feature is to automate the Elearning signup page
  I want to verify whether application allows user to get registered as Student 

  @ELSC_001
  Scenario: Student registration 
    Given navigate to the url "http://elearningm1.upskills.in/"
    When I click on SignUp link
    And Enter valid credential in First name textbox
    And Enter valid credential in Last name textbox
    And Enter valid credential in e-mail textbox
    And Enter valid credential in username textbox
    And Enter valid credential in pass textbox
    And Enter valid credential in confirm password textbox
    And Enter valid credential in phone textbox
    And Selected Valid credentials from Language list box
    And Click Student radio button in Profile
    And Click on Register button
    Then Validate the successful registration message
    And close the browser
    
    @ELSC_002
      Scenario: Teacher registration
    Given navigate to the url "http://elearningm1.upskills.in/"
    When I click on SignUp link
    And Enter valid credential in First name textbox
    And Enter valid credential in Last name textbox
    And Enter valid credential in e-mail textbox
    And Enter valid credential in username textbox
    And Enter valid credential in pass textbox
    And Enter valid credential in confirm password textbox
    And Enter valid credential in phone textbox
    And Selected Valid credentials from Language list box
    And Click Teacher radio button in Profile
    And Click on Register button
    Then Validate the successful registration message
    And close the browser