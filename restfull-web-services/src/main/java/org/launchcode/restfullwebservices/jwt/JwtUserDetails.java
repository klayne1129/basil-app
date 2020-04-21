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


  private  final Long id;
  
  private  String username;
  private  final String password;
  private String role;
  private  Collection<? extends GrantedAuthority> authorities;

  public JwtUserDetails(Long id, String username, String password, String role) {
    this.username = "";
	this.id = id;
    this.username = username;
    this.password = password;
    this.role=role;
    
    
    //removed String role from constructor. Replaced role with "ROLE_USER_2" TEST
    List<SimpleGrantedAuthority> authorities = new ArrayList<SimpleGrantedAuthority>();
    authorities.add(new SimpleGrantedAuthority(role));

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





public void setRole(String role) {
	this.role = role;
}




  
 @Override
public Collection<? extends GrantedAuthority> getAuthorities() {
    return authorities;
  }

  @Override
  public boolean isEnabled() {
    return true;
  }


//
//  public class SecurityUser implements UserDetails{
//	    String ROLE_PREFIX = "ROLE_";
//
//	    String userName;
//	    String password;
//	    String role;
//
//	    public SecurityUser(String username, String password, String role){
//	        this.userName = username;
//	        this.password = password;
//	        this.role = role;
//	    }
//
//	    @Override
//	    public Collection<? extends GrantedAuthority> getAuthorities() {
//	        List<GrantedAuthority> list = new ArrayList<GrantedAuthority>();
//
//	        list.add(new SimpleGrantedAuthority(ROLE_PREFIX + role));
//
//	        return list;
//	    }



}



