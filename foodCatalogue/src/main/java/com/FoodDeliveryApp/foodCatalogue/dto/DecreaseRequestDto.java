package com.FoodDeliveryApp.foodCatalogue.dto;

public class DecreaseRequestDto {
    private Integer Itemid;
    private Integer quantity;



    public Integer getItemid() {
        return Itemid;
    }

    public void setItemid(Integer itemid) {
        Itemid = itemid;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }



}
