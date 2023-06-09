package codingpentagon.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import codingpentagon.service.UserService;

@RestController

public class UserController {


    private UserService userService;

    @PostMapping("/forget-password")
	public String forgotPassword(@RequestParam("email") String email) {
		System.out.println("fsfsdf");
		String response = userService.forgotPassword(email);

		if (!response.startsWith("Invalid")) {
			response = "http://localhost:8080/reset-password?token=" + response;
		}
		return response;
	}

	@PutMapping("/reset-password")
	public String resetPassword(@RequestParam String token,
			@RequestParam String password) {

		return userService.resetPassword(token, password);
	}
    
}
