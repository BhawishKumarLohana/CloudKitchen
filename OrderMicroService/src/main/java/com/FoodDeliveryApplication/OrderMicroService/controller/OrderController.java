package com.FoodDeliveryApplication.OrderMicroService.controller;

import com.FoodDeliveryApplication.OrderMicroService.dto.OrderDto;
import com.FoodDeliveryApplication.OrderMicroService.entity.Order;
import com.FoodDeliveryApplication.OrderMicroService.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins =  "http://localhost:3000")
@RestController
@RequestMapping("/order")
public class OrderController {
    @Autowired
    private OrderService orderService;
    @PostMapping("/addorder")
    public ResponseEntity<Order> addNewOrder(@RequestBody OrderDto order) {
        Order newOrder = orderService.create(order);
        return ResponseEntity.ok(newOrder);
    }

}
