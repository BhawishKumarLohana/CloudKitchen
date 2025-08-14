package com.FoodDeliveryApplication.OrderMicroService.controller;

import com.FoodDeliveryApplication.OrderMicroService.entity.Order;
import com.FoodDeliveryApplication.OrderMicroService.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/order")
public class OrderController {
    @Autowired
    private OrderService orderService;
    @PostMapping("/addOrder")
    public ResponseEntity<?> addNewOrder(Order order){

        Order newOrder = orderService.create(order);
        return ResponseEntity.ok(newOrder);

    }
}
