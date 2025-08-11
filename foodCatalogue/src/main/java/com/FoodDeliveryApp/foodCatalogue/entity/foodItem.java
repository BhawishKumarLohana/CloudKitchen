package com.FoodDeliveryApp.foodCatalogue.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.util.List;

@Entity
public class foodItem {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String itemName;
    private String itemDescription;
    private List<String> Ingedrients;
    private Number price;
    private Integer restaurantId;
    private Integer quantity;

    public foodItem(String itemName, String itemDescription, List<String> ingedrients, Number price, Integer restaurantId, Integer quantity) {
        this.itemName = itemName;
        this.itemDescription = itemDescription;
        Ingedrients = ingedrients;
        this.price = price;
        this.restaurantId = restaurantId;
        this.quantity = quantity;
    }
    public foodItem(){}

    public int getId(){return this.id;}

    public void setId(int id) {
        this.id = id;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public String getItemDescription() {
        return itemDescription;
    }

    public void setItemDescription(String itemDescription) {
        this.itemDescription = itemDescription;
    }

    public List<String> getIngedrients() {
        return Ingedrients;
    }

    public void setIngedrients(List<String> ingedrients) {
        Ingedrients = ingedrients;
    }

    public Number getPrice() {
        return price;
    }

    public void setPrice(Number price) {
        this.price = price;
    }

    public Integer getRestaurantId() {
        return restaurantId;
    }

    public void setRestaurantId(Integer restaurantId) {
        this.restaurantId = restaurantId;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }





}
