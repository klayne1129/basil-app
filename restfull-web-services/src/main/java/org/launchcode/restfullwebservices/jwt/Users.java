package org.launchcode.restfullwebservices.jwt;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "Users")
public class Users {
	
	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_seq")
	@SequenceGenerator(name = "user_seq", sequenceName = "user_seq", allocationSize = 1)
	private Long id;
	
	@Column(name = "username", length = 50, unique = true)
    @NotNull(message="Username is required")
    @Size(min = 3, max = 50, message="Username must be between 3 and 50 characters long")
	private String username;
	
	@Column(name = "password", length = 100)
    @Size(min = 3, max = 50, message="Password must be between 3 and 50 characters long")
    @NotNull(message="Password is required")
	private String password;
	

    @Column(name = "role")
    @NotNull
	private String role = "ROLE_USER";
	  

	
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