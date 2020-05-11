package org.launchcode.restfullwebservices.jwt;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;



public class JwtUserDetails implements UserDetails {

  private static final long serialVersionUID = 5155720064139820502L;

// tutorials implementation of UserDetails
  private Long id;
  
  private String username;
  private String password;
  private String role;
  private  Collection<? extends GrantedAuthority> authorities;

//  public JwtUserDetails(Long id, String username, String password, String role) {
//    this.username = "";
//	this.id = id;
//    this.username = username;
//    this.password = password;
//    this.role=role;
//    
//    
//    //removed String role from constructor. Replaced role with "ROLE_USER_2" TEST
//    List<SimpleGrantedAuthority> authorities = new ArrayList<SimpleGrantedAuthority>();
//    authorities.add(new SimpleGrantedAuthority(role));
//
//    this.authorities = authorities;
//  }
  
  public JwtUserDetails(Users user) {
	    this.username = user.getUsername();
		this.id = user.getId();
	    this.password = user.getPassword();
	    this.role=user.getRole();
	    
	    
	    
	    //removed String role from constructor. Replaced role with "ROLE_USER_2" TEST
	    List<SimpleGrantedAuthority> authorities = new ArrayList<SimpleGrantedAuthority>();
	    authorities.add(new SimpleGrantedAuthority(this.role));

	    this.authorities = authorities;
	  }
  



  
  @JsonIgnore
  public Long getId() {
    return id;
 }

@Override
  public String getUsername() {
    return username;
  }

  @JsonIgnore
  @Override
  public boolean isAccountNonExpired() {
    return true;
  }

  @JsonIgnore
  @Override
  public boolean isAccountNonLocked() {
    return true;
  }

  @JsonIgnore
  @Override
  public boolean isCredentialsNonExpired() {
    return true;
  }

  @JsonIgnore
  @Override
  public String getPassword() {
    return password;
  }

  
  public String getRole() {
	return role;
}


  
 @Override
public Collection<? extends GrantedAuthority> getAuthorities() {
    return authorities;
  }

  @Override
  public boolean isEnabled() {
    return true;
  }
}


