package org.launchcode.restfullwebservices.recipe.models;


import javax.persistence.Entity;
import javax.persistence.Lob;




@Entity
public class Recipe extends AbstractEntity {
	
	private String mealType;
	private String username;
	private String title;
	private String image;
	private String tags;
	
	@Lob
	private String directions;
	
	@Lob
	private String ingredients;
	
	@Lob
	private String notes;

	
	//constructors

	
	
	public Recipe () {
		
	}




	public Recipe(String mealType, String username, String title, String image, String tags, String directions,
			String ingredients, String notes) {
		super();
		this.mealType = mealType;
		this.username = username;
		this.title = title;
		this.image = image;
		this.tags = tags;
		this.directions = directions;
		this.ingredients = ingredients;
		this.notes = notes;
	}




	// getters and setters
	

	public String getMealType() {
		return mealType;
	}


	public void setMealType(String mealType) {
		this.mealType = mealType;
	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getTitle() {
		return title;
	}


	public void setTitle(String title) {
		this.title = title;
	}


	public String getImage() {
		return image;
	}


	public void setImage(String image) {
		this.image = image;
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
	
	public String getTags() {
		return tags;
	}




	public void setTags(String tags) {
		this.tags = tags;
	}



//	public Recipe(String mealType, String username, String title, String directions, String ingredients, String notes) {
//		super();
//		this.mealType = mealType;
//		this.username = username;
//		this.title = title;
//		this.directions = directions;
//		this.ingredients = ingredients;
//		this.notes = notes;
//	}
	




	
}
