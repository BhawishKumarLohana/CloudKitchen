package com.FoodDeliveryApp.foodCatalogue.dto;

public class Restaurant {
    private String name;
    private String address;
    private String city;
    private String description;
    private double rating;

    // Manually written constructor
    public Restaurant(String name, String address, String city, String description, double rating) {
        this.name = name;
        this.address = address;
        this.city = city;
        this.description = description;
        this.rating = rating;
    }

    // No-arg constructor (needed for Jackson or serialization)
    public Restaurant() {
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }





}
