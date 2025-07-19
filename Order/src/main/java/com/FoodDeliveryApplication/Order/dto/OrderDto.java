package com.FoodDeliveryApplication.Order.dto;

import java.util.List;

public class OrderDto {
    private Integer orderId;
    private List<FoodItem> foodItemList;
    private Restaurant restaurant;
    private User user;

    public OrderDto(Integer orderId, User user, Restaurant restaurant, List<FoodItem> foodItemList) {
        this.orderId = orderId;
        this.user = user;
        this.restaurant = restaurant;
        this.foodItemList = foodItemList;
    }
    public OrderDto(){}

    public Integer getOrderId() {
        return orderId;
    }

    public void setOrderId(Integer orderId) {
        this.orderId = orderId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Restaurant getRestaurant() {
        return restaurant;
    }

    public void setRestaurant(Restaurant restaurant) {
        this.restaurant = restaurant;
    }

    public List<FoodItem> getFoodItemList() {
        return foodItemList;
    }

    public void setFoodItemList(List<FoodItem> foodItemList) {
        this.foodItemList = foodItemList;
    }


}
