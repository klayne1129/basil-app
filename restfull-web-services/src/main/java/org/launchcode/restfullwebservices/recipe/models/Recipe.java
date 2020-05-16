package org.launchcode.restfullwebservices.recipe.models;


import javax.persistence.Entity;
import javax.persistence.Lob;




@Entity
public class Recipe extends AbstractEntity {
	

	private String mealType;
	private String username;
	private String title;
	private String image;
	private String webLink;
	private String tags;
	private String prepTime;
	private String cookTime;
	private String servings;
	
	@Lob
	private String directions;
	
	@Lob
	private String ingredients;
	
	@Lob
	private String notes;

	
	//constructors

	
	
	public Recipe () {
		
	}


	public Recipe(String mealType, String username, String title, String image, String webLink, String tags,
			String prepTime, String cookTime, String servings, String directions, String ingredients, String notes) {
		super();
		this.mealType = mealType;
		this.username = username;
		this.title = title;
		this.image = image;
		this.webLink = webLink;
		this.tags = tags;
		this.prepTime = prepTime;
		this.cookTime = cookTime;
		this.servings = servings;
		this.directions = directions;
		this.ingredients = ingredients;
		this.notes = notes;
	}




	// getters and setters
	
	
	public String getWebLink() {
		return webLink;
	}


	public void setWebLink(String webLink) {
		this.webLink = webLink;
	}


	public String getMealType() {
		return mealType;
	}

	public String getServings() {
		return servings;
	}


	public void setServings(String servings) {
		this.servings = servings;
	}


	public String getPrepTime() {
		return prepTime;
	}


	public void setPrepTime(String prepTime) {
		this.prepTime = prepTime;
	}


	public String getCookTime() {
		return cookTime;
	}


	public void setCookTime(String cookTime) {
		this.cookTime = cookTime;
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


	
}
