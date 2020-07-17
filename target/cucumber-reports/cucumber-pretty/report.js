$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("signup.feature");
formatter.feature({
  "line": 2,
  "name": "This feature is to automate the Elearning signup page",
  "description": "I want to verify whether application allows user to get registered as Student",
  "id": "this-feature-is-to-automate-the-elearning-signup-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ElearningSignUp"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "Student registration",
  "description": "",
  "id": "this-feature-is-to-automate-the-elearning-signup-page;student-registration",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@ELSC_001"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "navigate to the url \"http://elearningm1.upskills.in/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on SignUp link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Enter valid credential in First name textbox \"manzoor\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Enter valid credential in Last name textbox \"mehadi\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Enter valid credential in e-mail textbox \"manzoor\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Enter valid credential in username textbox \"manzoor\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Enter valid credential in pass textbox \"manzoor\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Enter valid credential in confirm password textbox \"manzoor\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Enter valid credential in phone textbox",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Selected Valid credentials from Language list box \"English\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Click Student radio button in Profile",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Validate the successful registration message",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://elearningm1.upskills.in/",
      "offset": 21
    }
  ],
  "location": "Signup_stepDefintions.navigate_to_the_url(String)"
});
formatter.result({
  "duration": 10405460700,
  "status": "passed"
});
formatter.match({
  "location": "Signup_stepDefintions.i_click_on_SignUp_link()"
});
formatter.result({
  "duration": 2237766000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "manzoor",
      "offset": 46
    }
  ],
  "location": "Signup_stepDefintions.enter_valid_credential_in_First_name_textbox(String)"
});
formatter.result({
  "duration": 255784400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mehadi",
      "offset": 45
    }
  ],
  "location": "Signup_stepDefintions.enter_valid_credential_in_Last_name_textbox(String)"
});
formatter.result({
  "duration": 186854500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "manzoor",
      "offset": 42
    }
  ],
  "location": "Signup_stepDefintions.enter_valid_credential_in_e_mail_textbox(String)"
});
formatter.result({
  "duration": 244728600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "manzoor",
      "offset": 44
    }
  ],
  "location": "Signup_stepDefintions.enter_valid_credential_in_username_textbox(String)"
});
formatter.result({
  "duration": 155419300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "manzoor",
      "offset": 40
    }
  ],
  "location": "Signup_stepDefintions.enter_valid_credential_in_pass_textbox(String)"
});
formatter.result({
  "duration": 206390300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "manzoor",
      "offset": 52
    }
  ],
  "location": "Signup_stepDefintions.enter_valid_credential_in_confirm_password_textbox(String)"
});
formatter.result({
  "duration": 161866000,
  "status": "passed"
});
formatter.match({
  "location": "Signup_stepDefintions.enter_valid_credential_in_phone_textbox()"
});
formatter.result({
  "duration": 263122400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "English",
      "offset": 51
    }
  ],
  "location": "Signup_stepDefintions.selected_Valid_credentials_from_Language_list_box(String)"
});
formatter.result({
  "duration": 130161900,
  "status": "passed"
});
formatter.match({
  "location": "Signup_stepDefintions.click_Student_radio_button_in_Profile()"
});
formatter.result({
  "duration": 117983200,
  "status": "passed"
});
formatter.match({
  "location": "Signup_stepDefintions.click_on_Register_button()"
});
formatter.result({
  "duration": 1674245800,
  "status": "passed"
});
formatter.match({
  "location": "Signup_stepDefintions.validate_the_successful_registration_message()"
});
formatter.result({
  "duration": 60405000,
  "status": "passed"
});
formatter.match({
  "location": "Signup_stepDefintions.close_the_browser()"
});
formatter.result({
  "duration": 988555100,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Teacher registration",
  "description": "",
  "id": "this-feature-is-to-automate-the-elearning-signup-page;teacher-registration",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@ELSC_002"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "navigate to the url \"http://elearningm1.upskills.in/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I click on SignUp link",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Enter valid credential in First name textbox \"manzoor\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Enter valid credential in Last name textbox \"mehadi\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Enter valid credential in e-mail textbox \"manzoor\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Enter valid credential in username textbox \"manzoor\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Enter valid credential in pass textbox \"manzoor\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Enter valid credential in confirm password textbox \"manzoor\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Enter valid credential in phone textbox",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Selected Valid credentials from Language list box \"English\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Click Teacher radio button in Profile",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Validate the successful registration message",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://elearningm1.upskills.in/",
      "offset": 21
    }
  ],
  "location": "Signup_stepDefintions.navigate_to_the_url(String)"
});
formatter.result({
  "duration": 8439911800,
  "status": "passed"
});
formatter.match({
  "location": "Signup_stepDefintions.i_click_on_SignUp_link()"
});
formatter.result({
  "duration": 2039617800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "manzoor",
      "offset": 46
    }
  ],
  "location": "Signup_stepDefintions.enter_valid_credential_in_First_name_textbox(String)"
});
formatter.result({
  "duration": 240435200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mehadi",
      "offset": 45
    }
  ],
  "location": "Signup_stepDefintions.enter_valid_credential_in_Last_name_textbox(String)"
});
formatter.result({
  "duration": 206131800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "manzoor",
      "offset": 42
    }
  ],
  "location": "Signup_stepDefintions.enter_valid_credential_in_e_mail_textbox(String)"
});
formatter.result({
  "duration": 254287300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "manzoor",
      "offset": 44
    }
  ],
  "location": "Signup_stepDefintions.enter_valid_credential_in_username_textbox(String)"
});
formatter.result({
  "duration": 170039200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "manzoor",
      "offset": 40
    }
  ],
  "location": "Signup_stepDefintions.enter_valid_credential_in_pass_textbox(String)"
});
formatter.result({
  "duration": 201336900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "manzoor",
      "offset": 52
    }
  ],
  "location": "Signup_stepDefintions.enter_valid_credential_in_confirm_password_textbox(String)"
});
formatter.result({
  "duration": 159340100,
  "status": "passed"
});
formatter.match({
  "location": "Signup_stepDefintions.enter_valid_credential_in_phone_textbox()"
});
formatter.result({
  "duration": 159919500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "English",
      "offset": 51
    }
  ],
  "location": "Signup_stepDefintions.selected_Valid_credentials_from_Language_list_box(String)"
});
formatter.result({
  "duration": 74828000,
  "status": "passed"
});
formatter.match({
  "location": "Signup_stepDefintions.click_Teacher_radio_button_in_Profile()"
});
formatter.result({
  "duration": 93570100,
  "status": "passed"
});
formatter.match({
  "location": "Signup_stepDefintions.click_on_Register_button()"
});
formatter.result({
  "duration": 1590315200,
  "status": "passed"
});
formatter.match({
  "location": "Signup_stepDefintions.validate_the_successful_registration_message()"
});
formatter.result({
  "duration": 39349000,
  "status": "passed"
});
formatter.match({
  "location": "Signup_stepDefintions.close_the_browser()"
});
formatter.result({
  "duration": 794947400,
  "status": "passed"
});
formatter.uri("signup_Excel.feature");
formatter.feature({
  "line": 3,
  "name": "This feature is to automate the Elearning signup page using Excel",
  "description": "I want to verify whether application allows user to get registered as Student",
  "id": "this-feature-is-to-automate-the-elearning-signup-page-using-excel",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@ElearningSignUp"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "Student registration",
  "description": "",
  "id": "this-feature-is-to-automate-the-elearning-signup-page-using-excel;student-registration",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@Excel_ELSC_001"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "navigate to the url",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on SignUp link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Enter First name",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Enter Last name",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Enter e-mail",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Enter username",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Enter password",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Enter confirm password",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Enter phone number",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Select Language list box",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click Student radio button in Profile",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Validate the successful registration message",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Signup_stepDefintions.navigate_to_the_given_url()"
});
formatter.result({
  "duration": 9097108900,
  "status": "passed"
});
formatter.match({
  "location": "Signup_stepDefintions.i_click_on_SignUp_link()"
});
formatter.result({
  "duration": 2204130500,
  "status": "passed"
});
formatter.match({
  "location": "Signup_stepDefintions.Enter_First_name()"
});
formatter.result({
  "duration": 99402500,
  "error_message": "java.io.FileNotFoundException: C:\\Users\\AbinayaGovindarajan\\eclipse-workspace\\Elearning_BDD\\resource\\testdata.xlsx (The process cannot access the file because it is being used by another process)\r\n\tat java.base/java.io.FileOutputStream.open0(Native Method)\r\n\tat java.base/java.io.FileOutputStream.open(FileOutputStream.java:292)\r\n\tat java.base/java.io.FileOutputStream.\u003cinit\u003e(FileOutputStream.java:235)\r\n\tat java.base/java.io.FileOutputStream.\u003cinit\u003e(FileOutputStream.java:124)\r\n\tat common_functions.Wrapper.writeDataInExcel(Wrapper.java:33)\r\n\tat common_functions.Wrapper.GenerateRandomNum(Wrapper.java:65)\r\n\tat stepDefinitions.Signup_stepDefintions.Enter_First_name(Signup_stepDefintions.java:50)\r\n\tat ✽.And Enter First name(signup_Excel.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Signup_stepDefintions.Enter_Last_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Signup_stepDefintions.Enter_email()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Signup_stepDefintions.Enter_username()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Signup_stepDefintions.Enter_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Signup_stepDefintions.Enter_confirm_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Signup_stepDefintions.Enter_phone_number()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Signup_stepDefintions.Select_Language_list_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Signup_stepDefintions.click_Student_radio_button_in_Profile()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Signup_stepDefintions.click_on_Register_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Signup_stepDefintions.validate_the_successful_registration_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Signup_stepDefintions.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 24,
  "name": "Teacher registration",
  "description": "",
  "id": "this-feature-is-to-automate-the-elearning-signup-page-using-excel;teacher-registration",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@Excel_ELSC_002"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "navigate to the url",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I click on SignUp link",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Enter First name",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Enter Last name",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Enter e-mail",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Enter username",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Enter password",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Enter confirm password",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Enter phone number",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Select Language list box",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Click Teacher radio button in Profile",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Validate the successful registration message",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Signup_stepDefintions.navigate_to_the_given_url()"
});
formatter.result({
  "duration": 8592570900,
  "status": "passed"
});
formatter.match({
  "location": "Signup_stepDefintions.i_click_on_SignUp_link()"
});
formatter.result({
  "duration": 2832717500,
  "status": "passed"
});
formatter.match({
  "location": "Signup_stepDefintions.Enter_First_name()"
});
formatter.result({
  "duration": 113444800,
  "error_message": "java.io.FileNotFoundException: C:\\Users\\AbinayaGovindarajan\\eclipse-workspace\\Elearning_BDD\\resource\\testdata.xlsx (The process cannot access the file because it is being used by another process)\r\n\tat java.base/java.io.FileOutputStream.open0(Native Method)\r\n\tat java.base/java.io.FileOutputStream.open(FileOutputStream.java:292)\r\n\tat java.base/java.io.FileOutputStream.\u003cinit\u003e(FileOutputStream.java:235)\r\n\tat java.base/java.io.FileOutputStream.\u003cinit\u003e(FileOutputStream.java:124)\r\n\tat common_functions.Wrapper.writeDataInExcel(Wrapper.java:33)\r\n\tat common_functions.Wrapper.GenerateRandomNum(Wrapper.java:65)\r\n\tat stepDefinitions.Signup_stepDefintions.Enter_First_name(Signup_stepDefintions.java:50)\r\n\tat ✽.And Enter First name(signup_Excel.feature:27)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Signup_stepDefintions.Enter_Last_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Signup_stepDefintions.Enter_email()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Signup_stepDefintions.Enter_username()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Signup_stepDefintions.Enter_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Signup_stepDefintions.Enter_confirm_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Signup_stepDefintions.Enter_phone_number()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Signup_stepDefintions.Select_Language_list_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Signup_stepDefintions.click_Teacher_radio_button_in_Profile()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Signup_stepDefintions.click_on_Register_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Signup_stepDefintions.validate_the_successful_registration_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Signup_stepDefintions.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});