package org.launchcode.restfullwebservices.jwt;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import org.springframework.stereotype.Service;


//implements UserDetailsService and calls method loadByUsername
@Service
public class JwtInMemoryUserDetailsService implements UserDetailsService {

//  static List<JwtUserDetails> inMemoryUserList = new ArrayList<>();
//
//  //need to create a function that adds new users to the database instead of hardcoding them here
//  static {
//    inMemoryUserList.add(new JwtUserDetails(1L, "basil",
//        "$2a$10$3zHzb.Npv1hfZbLEU5qsdOju/tk2je6W6PnNnY.c1ujWPcZh4PL6e", "ROLE_USER_2"));
//  }
//  
//  static {
//	    inMemoryUserList.add(new JwtUserDetails(2L, "admin",
//	        "$2a$10$jLVKXX/gIuC1DPaton7H7OPwJM5NJtY57WUqPrZNxbR/FfWiQ/C4C", "ROLE_USER_2"));
//	  }
	
	@Autowired
	UserJpaRepository userJpaRepository;
	
	 

 
	
  	
 
  	

 
//Original code:
  //when  spring security gives you a username it finds the details of the user 
  //from the static list above and return it back in the form of JwtUserDetails
  //reminder JwtUserDetail implements UserDetails interface by springSecurity
  
	
  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    Optional<Users> findFirst = userJpaRepository.findByUsername(username);

    findFirst.orElseThrow(()-> new UsernameNotFoundException("Not Found: " + username));

    return findFirst.map(JwtUserDetails::new).get();
  }

}


