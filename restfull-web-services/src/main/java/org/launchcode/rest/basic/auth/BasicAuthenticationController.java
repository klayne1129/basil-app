package org.launchcode.rest.basic.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

//http://localhost:4200/ CrossOrigin allows access to specified URLs

@RestController 
@CrossOrigin(origins="http://localhost:4200")
public class BasicAuthenticationController {
	
	//connect to AuthenticationService.js in React using path
	@GetMapping(path= "/basicauth")
	public AuthenticationBean helloWorldBean() {
		return new AuthenticationBean("You are authenticated");
	}
	


}
