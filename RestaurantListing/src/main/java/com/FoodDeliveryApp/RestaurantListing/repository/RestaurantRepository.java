package com.FoodDeliveryApp.RestaurantListing.repository;

import com.FoodDeliveryApp.RestaurantListing.entity.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RestaurantRepository extends JpaRepository<Restaurant,Integer> {

}
