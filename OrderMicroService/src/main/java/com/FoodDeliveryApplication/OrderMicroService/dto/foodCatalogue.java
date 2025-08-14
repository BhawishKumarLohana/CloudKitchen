package com.FoodDeliveryApplication.OrderMicroService.dto;

import lombok.*;

import java.util.List;
@Data
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class foodCatalogue {
    private List<FoodItemDto> foodItemList;
    private Restaurant restaurant;

}