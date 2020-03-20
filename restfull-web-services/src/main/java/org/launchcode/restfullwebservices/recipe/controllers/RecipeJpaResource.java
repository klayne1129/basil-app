package org.launchcode.restfullwebservices.recipe.controllers;

import java.net.URI;
import java.util.List;

import org.launchcode.restfullwebservices.recipe.models.Recipe;
import org.launchcode.restfullwebservices.recipe.repositories.RecipeJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;





//controller class

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class RecipeJpaResource {
	

	@Autowired
	private RecipeJpaRepository recipeJpaRepository;
	
	//whatever username you put in, the service will return all the recipes in there (fix in hybirnate)
	@GetMapping("/jpa/users/{username}/recipes")
	public List<Recipe> getAllRecipes(@PathVariable String username) {
		
		return recipeJpaRepository.findByUsername(username);
//		
	
		
	}
	//gets specific recipe
	@GetMapping("/jpa/users/{username}/recipes/{id}")
	public Recipe getRecipe(@PathVariable String username, @PathVariable long id) {
//	
		return recipeJpaRepository.findById(id).get();
	}
	
	//EDIT/Update a recipe
	//PUT /users/{username}/recipes/{id}
	@PutMapping("/jpa/users/{username}/recipes/{id}")
	public ResponseEntity<Recipe> updateRecipe(@PathVariable String username, @PathVariable long id, @RequestBody Recipe recipe){
		
		recipe.setUsername(username);
		Recipe recipeUpdated = recipeJpaRepository.save(recipe);
		
		return new ResponseEntity<Recipe>(recipe, HttpStatus.OK);
	}
	
	//84 53
	//CREATE a new recipe
	//POST /users/{username}/recipes/{id}
	@PostMapping("/jpa/users/{username}/recipes")
	public ResponseEntity<Void> createRecipe(@PathVariable String username, @RequestBody Recipe recipe){
		
		recipe.setUsername(username);
		Recipe createdRecipe = recipeJpaRepository.save(recipe);
		
		//Location
		//Get correct resource URL
		// /users/{username}/recipes{id}
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
		.path("/{id}").buildAndExpand(createdRecipe.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
	}
	
	//DELETE /users/{username/recipes/{id}
	@DeleteMapping("/jpa/users/{username}/recipes/{id}")
	public ResponseEntity<Void> deleteRecipe(@PathVariable String username, @PathVariable long id){
		
		recipeJpaRepository.deleteById(id);
		return ResponseEntity.noContent().build();
	}

}
