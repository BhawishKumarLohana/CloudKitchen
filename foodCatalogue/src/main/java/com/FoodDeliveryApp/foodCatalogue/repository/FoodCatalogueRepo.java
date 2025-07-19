package com.FoodDeliveryApp.foodCatalogue.repository;

import com.FoodDeliveryApp.foodCatalogue.entity.foodItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FoodCatalogueRepo extends JpaRepository<foodItem,Integer> {
}
