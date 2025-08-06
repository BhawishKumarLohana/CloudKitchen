package com.FoodDeliveryApp.UserMicroservice.repository;

import com.FoodDeliveryApp.UserMicroservice.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRespository extends JpaRepository<User,Integer> {
    Optional<User> findByUsername(String reqName);
}
