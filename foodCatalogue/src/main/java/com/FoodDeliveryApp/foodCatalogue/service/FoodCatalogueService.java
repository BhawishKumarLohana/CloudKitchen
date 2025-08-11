package com.FoodDeliveryApp.foodCatalogue.service;

import com.FoodDeliveryApp.foodCatalogue.dto.FoodItemDto;
import com.FoodDeliveryApp.foodCatalogue.dto.Restaurant;
import com.FoodDeliveryApp.foodCatalogue.dto.foodCatalogue;
import com.FoodDeliveryApp.foodCatalogue.entity.foodItem;
import com.FoodDeliveryApp.foodCatalogue.repository.FoodCatalogueRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class FoodCatalogueService {
    @Autowired
    private FoodCatalogueRepo foodCatalogueRepo;
    @Autowired
    private RestTemplate restTemplate;

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
                saved.getId(),
                saved.getItemName(),
                saved.getQuantity(),
                saved.getRestaurantId(),
                saved.getPrice(),
                saved.getIngedrients(),
                saved.getItemDescription()
        );

    }
    public foodCatalogue details(Integer id){
        // food items
        List<foodItem> foodItems = getFoodList(id);
        //restaurant
        Restaurant res = getRestaurant(id);
        return  createfoodCatalogue(foodItems,res);

    }
    public foodCatalogue createfoodCatalogue(List<foodItem> foodItems,Restaurant res){
        foodCatalogue FoodPage = new foodCatalogue();
        FoodPage.setRestaurant(res);
        FoodPage.setFoodItemList(foodItems);
        return FoodPage;

    }
    public Restaurant getRestaurant(Integer id){
        return restTemplate.getForObject("http://RESTAURANTLISTING/restaurant/"+id,Restaurant.class);
    }
    public List<foodItem> getFoodList(Integer id){
        return foodCatalogueRepo.findByRestaurantId(id);

    }
}
