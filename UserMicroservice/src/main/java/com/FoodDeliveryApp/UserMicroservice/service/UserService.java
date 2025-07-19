package com.FoodDeliveryApp.UserMicroservice.service;

import com.FoodDeliveryApp.UserMicroservice.dto.UserDto;
import com.FoodDeliveryApp.UserMicroservice.entity.User;
import com.FoodDeliveryApp.UserMicroservice.repository.UserRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRespository userRespository;

    public Optional<UserDto> getUserByid(int id){

        return userRespository.findById(id).map(user -> new UserDto(
                user.getUsername(),
                user.getPassword(),
                user.getAddress(),
                user.getCity()
        ));


    }
    public UserDto createUser(UserDto req){
        User newUser = new User();
        newUser.setUsername(req.getUsername());
        newUser.setPassword(req.getPassword());
        newUser.setAddress(req.getAddress());
        newUser.setCity(req.getCity());



        User saved = userRespository.save(newUser);
        return new UserDto(
                saved.getUsername(),
                saved.getPassword(),
                saved.getAddress(),
                saved.getCity()
        );


    }

}
