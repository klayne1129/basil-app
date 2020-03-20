package org.launchcode.restfullwebservices.recipe.models;


import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;
@Entity
public class MealType extends AbstractEntity{

    private String mealTypeName;
    
    @OneToMany
    @JoinColumn
    private List<Recipe> recipes = new ArrayList<>();

    public MealType(String mealTypeName) {
        this.mealTypeName = mealTypeName;
    }

    public MealType() {
    }

    public String getMealTypeName() {
        return mealTypeName;
    }

    public void setMealTypeName(String mealTypeName) {
        this.mealTypeName = mealTypeName;
    }


}
