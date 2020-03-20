package org.launchcode.restfullwebservices.recipe.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Recipe extends AbstractEntity {

//	@ManyToOne
//	private MealType mealType;

	
	
	@ManyToOne
	private MealType mealType;
	
	private String username;
	private String name;
	private String directions;
	private String ingredients;
	private String notes;

	
	

	public Recipe(MealType mealType, String username, String name, String directions, String ingredients,
			String notes) {
		super();
		this.mealType = mealType;
		this.username = username;
		this.name = name;
		this.directions = directions;
		this.ingredients = ingredients;
		this.notes = notes;
	}

	protected Recipe() {
		
	}

	public MealType getMealType() {
		return mealType;
	}

	public void setMealType(MealType mealType) {
		this.mealType = mealType;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDirections() {
		return directions;
	}

	public void setDirections(String directions) {
		this.directions = directions;
	}

	public String getIngredients() {
		return ingredients;
	}

	public void setIngredients(String ingredients) {
		this.ingredients = ingredients;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}



	
}
