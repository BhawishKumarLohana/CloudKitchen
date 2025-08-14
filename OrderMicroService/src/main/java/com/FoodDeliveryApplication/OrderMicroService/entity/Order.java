package com.FoodDeliveryApplication.OrderMicroService.entity;


import com.FoodDeliveryApplication.OrderMicroService.dto.FoodItemDto;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter @Builder
@Document(collection = "order")
public class Order {

    @Id
    private String id;  // Let Mongo auto-generate ObjectId as a String

    private Integer userId;
    private List<FoodItemDto> items;
    private Double total;

    // Setters
    public void setId(String id) {
        this.id = id;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }



    public void setItems(List<FoodItemDto> items) {
        this.items = items;
    }

    public void setTotal(Double total) {
        this.total = total;
    }

    // Getters
    public String getId() {
        return id;
    }

    public Integer getUserId() {
        return userId;
    }



    public Double getTotal() {
        return total;
    }

    public List<FoodItemDto> getItems() {
        return items;
    }
}