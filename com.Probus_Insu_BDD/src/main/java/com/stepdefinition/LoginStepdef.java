package com.stepdefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class LoginStepdef {
	
	WebDriver driver=null;
	
	@Given("^User should enter URl$")
	public void user_should_enter_URl() throws Throwable {
	    driver = new ChromeDriver();
	    driver.manage().window().maximize();
	    driver.get("https://buy.probusinsurance.com/Account/Login");
	    driver.manage().deleteAllCookies();
	}

	@Then("^User navigate to login page$")
	public void user_navigate_to_login_page() throws Throwable {
	    
	}

}
