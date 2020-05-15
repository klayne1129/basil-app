package org.launchcode.restfullwebservices.jwt;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Users {
	
	@Id
    @GeneratedValue
	private Long id;
	
	private String username;
	private String password;
	private String role = "ROLE_USER";
	  
	  

//	public Users(Long id, String username, String password, String role) {
//		super();
//		this.id = id;
//		this.username = username;
//		this.password = password;
//		this.role = role;
//	}

	
	public Users() {
		super();
		// TODO Auto-generated constructor stub
	}

	//getters setters
	public Long getId() {
		return id;
	}
	

	public String getRole() {
		return role;
	}


	public void setRole(String role) {
		this.role = role;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "Users [id=" + id + ", username=" + username + ", password=" + password + ", role=" + role + "]";
	}
	 
	
 
	
}