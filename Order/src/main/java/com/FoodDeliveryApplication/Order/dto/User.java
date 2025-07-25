package com.FoodDeliveryApplication.Order.dto;

public class User {
    private int id;
    private String username;
    private String password;
    private String city;
    private String address;

    public int getId(){
        return id;
    }
    public void setId(int id){
        this.id=id;
    }


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

    public  User(){}

    public User(int id,String username,String password,String city,String address){
        this.id = id;
        this.username = username;
        this.password = password;
        this.city = city;
        this.address = address;
    }



}
