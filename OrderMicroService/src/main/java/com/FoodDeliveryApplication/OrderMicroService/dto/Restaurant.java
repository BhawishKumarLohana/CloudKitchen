package com.FoodDeliveryApplication.OrderMicroService.dto;


import lombok.*;

@Data
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Restaurant {
    private int id;
    private String name;
    private String address;
    private String city;
    private String description;
    private double rating;

}

