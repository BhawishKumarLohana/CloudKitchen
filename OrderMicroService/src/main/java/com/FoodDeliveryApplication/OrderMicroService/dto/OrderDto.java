package com.FoodDeliveryApplication.OrderMicroService.dto;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
public class OrderDto {
    // order from frontend has
    // userId
    private int userId;
    // List of FoodItem
    private List<FoodItemDto> items;
    // total
    private Double total;


    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public Double getTotal() {
        return total;
    }

    public void setTotal(Double total) {
        this.total = total;
    }

    public List<FoodItemDto> getItems() {
        return items;
    }

    public void setItems(List<FoodItemDto> items) {
        this.items = items;
    }
}
