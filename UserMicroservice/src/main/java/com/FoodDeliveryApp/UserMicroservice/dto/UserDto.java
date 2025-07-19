package com.FoodDeliveryApp.UserMicroservice.dto;

public class UserDto {

    private String username;
    private String password;
    private String city;
    private String address;

    public UserDto(String username, String password, String city, String address) {
        this.username = username;
        this.password = password;
        this.city = city;
        this.address = address;
    }
    public UserDto(){}



    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
