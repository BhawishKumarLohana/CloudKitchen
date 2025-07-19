package com.FoodDeliveryApp.foodCatalogue.dto;

import com.FoodDeliveryApp.foodCatalogue.entity.foodItem;

import java.util.List;

public class foodCatalogue {
    private List<foodItem> foodItemList;
    private Restaurant restaurant;

    public foodCatalogue(List<foodItem> foodItemList, Restaurant restaurant) {
        this.foodItemList = foodItemList;
        this.restaurant = restaurant;
    }
    public foodCatalogue(){}

    public List<foodItem> getFoodItemList() {
        return foodItemList;
    }

    public void setFoodItemList(List<foodItem> foodItemList) {
        this.foodItemList = foodItemList;
    }

    public Restaurant getRestaurant() {
        return restaurant;
    }

    public void setRestaurant(Restaurant restaurant) {
        this.restaurant = restaurant;
    }




}
