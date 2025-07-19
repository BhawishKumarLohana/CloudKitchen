package com.FoodDeliveryApp.foodCatalogue.repository;

import com.FoodDeliveryApp.foodCatalogue.entity.foodItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FoodCatalogueRepo extends JpaRepository<foodItem,Integer> {
    List<foodItem> findByRestaurantId(Integer id);

}
