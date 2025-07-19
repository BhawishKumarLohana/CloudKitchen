package com.FoodDeliveryApplication.Order.dto;

import com.FoodDeliveryApplication.Order.entity.Order;

import java.util.List;

public class OrderFE {
    private List<FoodItem> foodItemList;
    private Integer userId;
    private Restaurant restaurant;

    public OrderFE(List<FoodItem> foodItemList, Restaurant restaurant, Integer userId) {
        this.foodItemList = foodItemList;
        this.restaurant = restaurant;
        this.userId = userId;
    }
    public OrderFE(){}


    public Restaurant getRestaurant() {
        return restaurant;
    }

    public void setRestaurant(Restaurant restaurant) {
        this.restaurant = restaurant;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public List<FoodItem> getFoodItemList() {
        return foodItemList;
    }

    public void setFoodItemList(List<FoodItem> foodItemList) {
        this.foodItemList = foodItemList;
    }




}
