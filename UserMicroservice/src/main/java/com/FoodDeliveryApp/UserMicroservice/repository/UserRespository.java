package com.FoodDeliveryApp.UserMicroservice.repository;

import com.FoodDeliveryApp.UserMicroservice.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRespository extends JpaRepository<User,Integer> {
}
