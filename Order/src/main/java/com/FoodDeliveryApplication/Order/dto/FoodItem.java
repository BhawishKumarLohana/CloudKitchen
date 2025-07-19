package com.FoodDeliveryApplication.Order.dto;

import java.util.List;

public class FoodItem {
    private String itemName;
    private String itemDescription;
    private List<String> Ingedrients;
    private Number price;
    private Integer restaurantId;
    private Integer quantity;
    private int id;

    public FoodItem(String itemName, int id, Integer quantity, Integer restaurantId, Number price, List<String> ingedrients, String itemDescription) {
        this.itemName = itemName;
        this.id = id;
        this.quantity = quantity;
        this.restaurantId = restaurantId;
        this.price = price;
        Ingedrients = ingedrients;
        this.itemDescription = itemDescription;
    }
    public FoodItem(){}


    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Integer getRestaurantId() {
        return restaurantId;
    }

    public void setRestaurantId(Integer restaurantId) {
        this.restaurantId = restaurantId;
    }

    public List<String> getIngedrients() {
        return Ingedrients;
    }

    public void setIngedrients(List<String> ingedrients) {
        Ingedrients = ingedrients;
    }

    public String getItemDescription() {
        return itemDescription;
    }

    public void setItemDescription(String itemDescription) {
        this.itemDescription = itemDescription;
    }

    public Number getPrice() {
        return price;
    }

    public void setPrice(Number price) {
        this.price = price;
    }



}
