package com.FoodDeliveryApp.foodCatalogue.dto;

public class Restaurant {
    private int id;
    private String name;
    private String address;
    private String city;
    private String description;
    private double rating;

    // Manually written constructor
    public Restaurant(int id, String name, String address, String city, String description, double rating) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.city = city;
        this.description = description;
        this.rating = rating;
    }

    // No-arg constructor (needed for Jackson or serialization)
    public Restaurant() {
    }

    public int getId(){return this.id;}

    public void setId(int id){this.id = id;}


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
