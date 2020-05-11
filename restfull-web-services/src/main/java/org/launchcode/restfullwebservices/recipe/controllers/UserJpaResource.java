package org.launchcode.restfullwebservices.recipe.controllers;

import java.net.URI;

import org.launchcode.restfullwebservices.jwt.UserJpaRepository;
import org.launchcode.restfullwebservices.jwt.Users;
import org.launchcode.restfullwebservices.recipe.models.Recipe;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;


@RestController
@CrossOrigin(origins="http://localhost:4200")
public class UserJpaResource {
	
	
	 @Autowired
	 private UserJpaRepository userJpaRepository;
	  
	 @Autowired
	 private BCryptPasswordEncoder bCryptPasswordEncoder;
	  
	  
	 
	 //get a user
	 @GetMapping("/jpa/users/{id}")
	 public Users getUser(@PathVariable long id) {
		 	
		 return userJpaRepository.findById(id).get();
			}
	 
	//create a user
	 @PostMapping("/jpa/users/")
	 public ResponseEntity<Void> createUser(@RequestBody Users user) {
	    
		 user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
	        Users createdUser = userJpaRepository.save(user);
	        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
	        		.path("/{id}").buildAndExpand(createdUser.getId()).toUri();
	        		
	        		return ResponseEntity.created(uri).build();
	    }
		
}
