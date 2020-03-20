package org.launchcode.restfullwebservices;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class BcryptEncoderTest {

	public static void main(String[] args) {
		
		//insert desired password as parameter in encoder.encode()
		//run class as java application and copy and paste one of the generated codes
		//into JwtMemoryUserDetailsService in appropriate spot
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		
		for(int i=1; i<=10; i++) {
			String encodedString = encoder.encode("PASSWORD");
			System.out.println(encodedString);
		}
		
		

	}

}
