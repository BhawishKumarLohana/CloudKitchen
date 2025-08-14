package com.FoodDeliveryApplication.OrderMicroService.entity;


import com.FoodDeliveryApplication.OrderMicroService.dto.FoodItemDto;
import com.FoodDeliveryApplication.OrderMicroService.dto.Restaurant;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter @Builder
@Document(collection = "order")
public class Order {

    public void setId(int id) {
        this.id = id;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public void setRestaurant(Restaurant restaurant) {
        this.restaurant = restaurant;
    }

    public void setItems(List<FoodItemDto> items) {
        this.items = items;
    }

    public void setTotal(Double total) {
        this.total = total;
    }

    public int getId() {
        return id;
    }

    public int getUserId() {
        return userId;
    }

    public Restaurant getRestaurant() {
        return restaurant;
    }

    public Double getTotal() {
        return total;
    }

    public List<FoodItemDto> getItems() {
        return items;
    }

    @Id
    private int id;

    private int userId;
    private Restaurant restaurant;
    private List<FoodItemDto> items;

    private Double total;
}
