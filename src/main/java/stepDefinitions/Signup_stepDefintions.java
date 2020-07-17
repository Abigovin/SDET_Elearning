package stepDefinitions;

import java.util.Random;
import common_functions.*;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class Signup_stepDefintions extends Wrapper{
	static WebDriver driver;
	Random numGenerator = new Random();
	int randomNum= numGenerator.nextInt(1000);
	
	@Given("^navigate to the url \"([^\"]*)\"$")
	public void navigate_to_the_url(String url) throws Throwable {
		System.setProperty("webdriver.chrome.driver", "Drivers//chromedriver.exe");
	    driver= new ChromeDriver();
	    driver.get(url);
	 	}
	@Given("^navigate to the url$")
	public void navigate_to_the_given_url() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "Drivers//chromedriver.exe");
		driver = new ChromeDriver();
		String url = getDataFromExcel(1, 0);
		driver.get(url);
	}


	@When("^I click on SignUp link$")
	public void i_click_on_SignUp_link() throws Throwable {
		driver.findElement(By.xpath("//a[contains(text(),'Sign up!')]")).click();
	   
	}
	
	@When("^Enter valid credential in First name textbox \"([^\"]*)\"$")
	public void enter_valid_credential_in_First_name_textbox(String Firstname) throws Throwable {
		
		driver.findElement(By.name("firstname")).sendKeys(Firstname+randomNum);
	}
	@When("^Enter First name$")
	public void Enter_First_name() throws Throwable
	{
		GenerateRandomNum(100);
		driver.findElement(By.name("firstname")).sendKeys(Wrapper.getDataFromExcel(1, 1)+Wrapper.getDataFromExcel(1, 8));
	}

	@When("^Enter Last name$")
	public void  Enter_Last_name() throws Throwable {
	   
	   driver.findElement(By.name("lastname")).sendKeys(Wrapper.getDataFromExcel(1, 2));
	}
	
	@When("^Enter valid credential in Last name textbox \"([^\"]*)\"$")
	public void enter_valid_credential_in_Last_name_textbox(String Lastname) throws Throwable {
	   
	   driver.findElement(By.name("lastname")).sendKeys(Lastname+randomNum);
	}
	
	
	@When("^Enter valid credential in e-mail textbox \"([^\"]*)\"$")
	public void enter_valid_credential_in_e_mail_textbox(String email) throws Throwable {
	 
	  driver.findElement(By.id("registration_email")).sendKeys(email+randomNum+"@gmail.com");
	}
	
	@When("^Enter e-mail$")
	public void Enter_email() throws Throwable {
	 
	  driver.findElement(By.id("registration_email")).sendKeys(Wrapper.getDataFromExcel(1, 3)+Wrapper.getDataFromExcel(1,8)+"@gmail.com");
	}
	
	@When("^Enter valid credential in username textbox \"([^\"]*)\"$")
	public void enter_valid_credential_in_username_textbox(String Username) throws Throwable {
	   driver.findElement(By.id("username")).sendKeys(Username+randomNum);
	   
	}
	
	@When("^Enter username$")
	public void Enter_username() throws Throwable
	{
		 driver.findElement(By.id("username")).sendKeys(Wrapper.getDataFromExcel(1, 4)+Wrapper.getDataFromExcel(1, 8));
	}

	@When("^Enter valid credential in pass textbox \"([^\"]*)\"$")
	public void enter_valid_credential_in_pass_textbox(String pass) throws Throwable {
	   driver.findElement(By.id("pass1")).sendKeys(pass+randomNum);
	}
	
	@When("^Enter password$")
	public void Enter_password() throws Throwable
	{
		 driver.findElement(By.id("pass1")).sendKeys(Wrapper.getDataFromExcel(1, 5)+Wrapper.getDataFromExcel(1, 8));
		
	}

	@When("^Enter valid credential in confirm password textbox \"([^\"]*)\"$")
	public void enter_valid_credential_in_confirm_password_textbox(String confirmpass) throws Throwable {
		 driver.findElement(By.id("pass2")).sendKeys(confirmpass+randomNum); 
	}
	
	@When("^Enter confirm password$")
	public void Enter_confirm_password() throws Throwable {
		 driver.findElement(By.id("pass2")).sendKeys(Wrapper.getDataFromExcel(1, 5)+Wrapper.getDataFromExcel(1, 8)); 
	}

	@When("^Enter valid credential in phone textbox$")
	public void enter_valid_credential_in_phone_textbox() throws Throwable {
		Random numGenerator = new Random();
		 int phone= numGenerator.nextInt(1000000000);
	    driver.findElement(By.id("registration_phone")).sendKeys(String.valueOf(phone));
	}
	
	@When("^Enter phone number$")
	public void Enter_phone_number() throws Throwable
	{
		Random numGenerator = new Random();
		 int phone= numGenerator.nextInt(1000000000);
		
		 writeDataInExcel(1,6, String.valueOf(phone));
		
		driver.findElement(By.id("registration_phone")).sendKeys(Wrapper.getDataFromExcel(1, 6));
		
	}

	@When("^Selected Valid credentials from Language list box \"([^\"]*)\"$")
	public void selected_Valid_credentials_from_Language_list_box(String Language) throws Throwable {
	    Select dropdown = new Select(driver.findElement(By.id("registration_language")));
	    dropdown.selectByVisibleText(Language);

	}
	
	@When("^Select Language list box$")
	public void Select_Language_list_box() throws Throwable
	{
		Select dropdown = new Select(driver.findElement(By.id("registration_language")));
	    dropdown.selectByVisibleText(Wrapper.getDataFromExcel(1, 7));
		
	}

	@When("^Click Student radio button in Profile$")
	public void click_Student_radio_button_in_Profile() throws Throwable {
	WebElement studentprofilebtn=	driver.findElement(By.xpath("//p[contains(text(),'Follow courses')]"));
	  if(studentprofilebtn.isSelected())
	  {
		  System.out.println("Student profile is selected");
		  
	  }
	  else
	  {
		  studentprofilebtn.click();
	  }
	}

	@When("^Click Teacher radio button in Profile$")
	public void click_Teacher_radio_button_in_Profile() throws Throwable {
		
		WebElement Teacherprofilebtn=	driver.findElement(By.xpath("//p[contains(text(),'Teach courses')]"));
		
		 if(Teacherprofilebtn.isSelected())
		  {
			  System.out.println("Student profile is selected");
			  
		  }
		  else
		  {
			  Teacherprofilebtn.click();
		  }
	   
	}

	@When("^Click on Register button$")
	public void click_on_Register_button() throws Throwable {
	    driver.findElement(By.id("registration_submit")).click();
	}

	
	@Then("^Validate the successful registration message$")
	public void validate_the_successful_registration_message() throws Throwable {
		WebElement message =driver.findElement(By.xpath("//li[contains(text(),'Registration')]"));
		String registration = message.getText().toString();
		//System.out.println(registration);
		if(registration.equalsIgnoreCase("Registration"))
		{
			System.out.println("Registration is successful");
		}
		else
		{
			System.out.println("Registration is not successful");
		}
	 
 
	}

	
	@When("^close the browser$")
	public void close_the_browser() throws Throwable {
	    driver.quit();
	}

}
