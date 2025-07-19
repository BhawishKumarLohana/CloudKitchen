package com.FoodDeliveryApp.UserMicroservice.controller;

import com.FoodDeliveryApp.UserMicroservice.dto.UserDto;
import com.FoodDeliveryApp.UserMicroservice.repository.UserRespository;
import com.FoodDeliveryApp.UserMicroservice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    // Get User info on Id

    @GetMapping("/{id}")
    public ResponseEntity<Optional<UserDto>> getUserById(@PathVariable int id){
        Optional<UserDto> user =  userService.getUserByid(id);
        return ResponseEntity.ok(user);
    }

    @PostMapping("/create")
    public ResponseEntity<UserDto> createUser(@RequestBody UserDto req){
        return ResponseEntity.ok(userService.createUser(req));
    }

}
