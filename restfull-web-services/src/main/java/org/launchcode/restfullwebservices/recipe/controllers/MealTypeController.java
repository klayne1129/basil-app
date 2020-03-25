package org.launchcode.restfullwebservices.recipe.controllers;




import org.launchcode.restfullwebservices.recipe.repositories.MealTypeJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;






//controller class

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class MealTypeController {
	

	@Autowired
	private MealTypeJpaRepository mealTypeJpaRepository;
	
	
	   @GetMapping("/jpa/users/{username}/hello")
	   @ResponseBody
	   public String hello() {
		   return "hello mealType page!";
	    
	   }
	
	
}
	
	