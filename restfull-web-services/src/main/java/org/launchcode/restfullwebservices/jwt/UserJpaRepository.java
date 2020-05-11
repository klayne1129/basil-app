package org.launchcode.restfullwebservices.jwt;


import java.util.Optional;

// repository for the user table

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;





@Repository 
public interface UserJpaRepository extends JpaRepository<Users, Long>{
	Optional<Users> findByUsername(String username);

}