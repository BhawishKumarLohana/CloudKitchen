package com.FoodDeliveryApp.foodCatalogue.service;

import com.FoodDeliveryApp.foodCatalogue.dto.FoodItemDto;
import com.FoodDeliveryApp.foodCatalogue.entity.foodItem;
import com.FoodDeliveryApp.foodCatalogue.repository.FoodCatalogueRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FoodCatalogueService {
    @Autowired
    private FoodCatalogueRepo foodCatalogueRepo;

    public FoodItemDto addFoodItem(FoodItemDto request){
        foodItem newItem = new foodItem();
        newItem.setQuantity(request.getQuantity());
        newItem.setItemDescription(request.getItemDescription());
        newItem.setItemName(request.getItemName());
        newItem.setIngedrients(request.getIngedrients());
        newItem.setPrice(request.getPrice());
        newItem.setRestaurantId(request.getRestaurantId());

        foodItem saved = foodCatalogueRepo.save(newItem);
        return new FoodItemDto(
                saved.getItemName(),
                saved.getQuantity(),
                saved.getRestaurantId(),
                saved.getPrice(),
                saved.getIngedrients(),
                saved.getItemDescription()
        );

    }
}
