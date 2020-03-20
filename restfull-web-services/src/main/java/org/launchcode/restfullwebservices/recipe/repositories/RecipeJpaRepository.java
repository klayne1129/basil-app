package org.launchcode.restfullwebservices.recipe.repositories;

import java.util.List;

import org.launchcode.restfullwebservices.recipe.models.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;




@Repository 
public interface RecipeJpaRepository extends JpaRepository<Recipe, Long>{
	List<Recipe> findByUsername(String username);

}
