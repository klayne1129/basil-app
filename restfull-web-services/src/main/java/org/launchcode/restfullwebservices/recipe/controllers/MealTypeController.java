//package org.launchcode.restfullwebservices.recipe.controllers;
//
//import java.net.URI;
//import java.util.List;
//
//import org.launchcode.restfullwebservices.recipe.models.Recipe;
//import org.launchcode.restfullwebservices.recipe.repositories.MealTypeJpaRepository;
//import org.launchcode.restfullwebservices.recipe.repositories.RecipeJpaRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
//
//
//
//
//
////controller class
//
//@RestController
//@CrossOrigin(origins="http://localhost:4200")
//@RequestMapping("mealType")
//public class MealTypeController {
//	
//
//	@Autowired
//	private MealTypeJpaRepository mealTypeJpaRepository;
//	
//	//whatever username you put in, the service will return all the recipes in there (fix in hybirnate)
//	@GetMapping("/jpa/users/{username}/recipes")
//	public List<Recipe> getAllRecipes(@PathVariable String username) {
//		
//		return recipeJpaRepository.findByUsername(username);
////		
//	
//		
//	}
//	//gets specific recipe
//	@GetMapping("/jpa/users/{username}/recipes/{id}")
//	public Recipe getRecipe(@PathVariable String username, @PathVariable long id) {
////	
//		return recipeJpaRepository.findById(id).get();
//	}
//	
//	//EDIT/Update a recipe
//	//PUT /users/{username}/recipes/{id}
//	@PutMapping("/jpa/users/{username}/recipes/{id}")
//	public ResponseEntity<Recipe> updateRecipe(@PathVariable String username, @PathVariable long id, @RequestBody Recipe recipe){
//		
//		recipe.setUsername(username);
//		Recipe recipeUpdated = recipeJpaRepository.save(recipe);
//		
//		return new ResponseEntity<Recipe>(recipe, HttpStatus.OK);
//	}
//	
//	//84 53
//	//CREATE a new recipe
//	//POST /users/{username}/recipes/{id}
//	@PostMapping("/jpa/users/{username}/recipes")
//	public ResponseEntity<Void> createRecipe(@PathVariable String username, @RequestBody Recipe recipe){
//		
//		recipe.setUsername(username);
//		Recipe createdRecipe = recipeJpaRepository.save(recipe);
//		
//		//Location
//		//Get correct resource URL
//		// /users/{username}/recipes{id}
//		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
//		.path("/{id}").buildAndExpand(createdRecipe.getId()).toUri();
//		
//		return ResponseEntity.created(uri).build();
//	}
//	
//	//DELETE /users/{username/recipes/{id}
//	@DeleteMapping("/jpa/users/{username}/recipes/{id}")
//	public ResponseEntity<Void> deleteRecipe(@PathVariable String username, @PathVariable long id){
//		
//		recipeJpaRepository.deleteById(id);
//		return ResponseEntity.noContent().build();
//	}
//	
////	 @Autowired
////	    private EmployerRepository employerRepository;
////
////	    @GetMapping("add")
////	    public String displayAddEmployerForm(Model model) {
////	        model.addAttribute(new Employer());
////	        return "employers/add";
////	    }
////
////	    @PostMapping("add")
////	    public String processAddEmployerForm(@ModelAttribute @Valid Employer newEmployer,
////	                                    Errors errors, Model model) {
////
////	        if (errors.hasErrors()) {
////	            model.addAttribute(new Employer());
////	            return "employers/add";
////	        }
////	        employerRepository.save(newEmployer);
////	        return displayViewEmployer(model, newEmployer.getId());
////	    }
////
////	    @GetMapping("view/{employerId}")
////	    public String displayViewEmployer(Model model, @PathVariable int employerId) {
////
////	        Optional optEmployer = employerRepository.findById(employerId);
////	        if (optEmployer.isPresent()) {
////	            Employer employer = (Employer) optEmployer.get();
////	            model.addAttribute("employer", employer);
////	            return "employers/view";
////	        } else {
////	            return "redirect:../";
////	        }
////	    }
//
//}
