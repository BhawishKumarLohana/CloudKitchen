package com.FoodDeliveryApp.RestaurantListing.dto;


public class RestaurantDto {
    private String name;
    private String address;
    private String city;
    private String description;
    private double rating;
    private String imageUrl;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public String getImageUrl(){
        return imageUrl;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setImageUrl(String url){
        this.imageUrl = url;
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



    // Manually written constructor
    public RestaurantDto(String name, String address, String city, String description, double rating,String url) {
        this.name = name;
        this.address = address;
        this.city = city;
        this.description = description;
        this.rating = rating;
        this.imageUrl = url;
    }

    // No-arg constructor (needed for Jackson or serialization)
    public RestaurantDto() {
    }
}
