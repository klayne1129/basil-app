package org.launchcode.restfullwebservices.recipe.repositories;



import org.launchcode.restfullwebservices.recipe.models.MealType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;




@Repository 
public interface MealTypeJpaRepository extends JpaRepository<MealType, Long>{
	

}