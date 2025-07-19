package com.FoodDeliveryApplication.Order.entity;

import com.FoodDeliveryApplication.Order.dto.FoodItem;
import com.FoodDeliveryApplication.Order.dto.Restaurant;
import com.FoodDeliveryApplication.Order.dto.User;
import org.springframework.data.mongodb.core.aggregation.ArrayOperators;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.ResourceBundle;

@Document("order")
public class Order {
    private Integer orderId;
    private List<FoodItem> foodItemList;
    private Restaurant restaurant;
    private User user;

    public Order(Integer orderId, User user, Restaurant restaurant, List<FoodItem> foodItemList) {
        this.orderId = orderId;
        this.user = user;
        this.restaurant = restaurant;
        this.foodItemList = foodItemList;
    }
    public Order(){}


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

    public Integer getOrderId() {
        return orderId;
    }

    public void setOrderId(Integer orderId) {
        this.orderId = orderId;
    }



}
