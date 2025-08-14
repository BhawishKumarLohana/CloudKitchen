package com.FoodDeliveryApp.UserMicroservice.controller;

import com.FoodDeliveryApp.UserMicroservice.dto.LoginDto;
import com.FoodDeliveryApp.UserMicroservice.dto.UserDto;
import com.FoodDeliveryApp.UserMicroservice.entity.User;
import com.FoodDeliveryApp.UserMicroservice.repository.UserRespository;
import com.FoodDeliveryApp.UserMicroservice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins =  "http://localhost:3000")
@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    // Get User info on Id

    @GetMapping("/{id:\\d+}")
    public ResponseEntity<Optional<UserDto>> getUserById(@PathVariable int id){
        Optional<UserDto> user =  userService.getUserByid(id);
        return ResponseEntity.ok(user);
    }

    // Create User
    @PostMapping("/create")
    public ResponseEntity<UserDto> createUser(@RequestBody UserDto req){
        return ResponseEntity.ok(userService.createUser(req));
    }

    // LoginAuthorization
    @PostMapping("/login")
    public ResponseEntity<String> login (@RequestBody LoginDto req){
        if(userService.login(req)){
            return ResponseEntity.ok("SUCCESS");
        }else{
            return ResponseEntity.ok("FAIL");
        }
    }

    @GetMapping("/details")
    public ResponseEntity<User> getUserByUsername(@RequestParam String username) {
        return ResponseEntity.ok(userService.findByUsername(username));
    }



}
