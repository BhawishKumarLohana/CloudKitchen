package com.FoodDeliveryApp.foodCatalogue.controller;

import com.FoodDeliveryApp.foodCatalogue.dto.FoodItemDto;
import com.FoodDeliveryApp.foodCatalogue.service.FoodCatalogueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/food")
public class FoodCatalogueController {
    @Autowired
    private FoodCatalogueService foodCatalogueService;

    @PostMapping("/addFoodItem")
    public ResponseEntity<FoodItemDto> addFoodItem(@RequestBody FoodItemDto request){
        return ResponseEntity.ok(foodCatalogueService.addFoodItem(request));
    }

}
