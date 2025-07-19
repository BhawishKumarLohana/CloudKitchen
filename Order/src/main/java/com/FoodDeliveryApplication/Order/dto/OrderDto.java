package com.FoodDeliveryApplication.Order.dto;

import java.util.List;

public class OrderDto {
    private Integer orderId;
    private List<FoodItem> foodItemList;
    private Restaurant restaurant;
    private User user;
}
