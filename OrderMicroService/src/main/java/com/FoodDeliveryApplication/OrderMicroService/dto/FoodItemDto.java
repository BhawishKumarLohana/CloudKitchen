package com.FoodDeliveryApplication.OrderMicroService.dto;

import lombok.*;

import java.util.List;

@Data
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class FoodItemDto {
    private String itemName;
    private String itemDescription;
    private List<String> Ingedrients;
    private Number price;
    private Integer restaurantId;
    private Integer quantity;
    private int id;

}
