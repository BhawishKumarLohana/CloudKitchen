package com.FoodDeliveryApplication.Order.controller;

import com.FoodDeliveryApplication.Order.dto.OrderDto;
import com.FoodDeliveryApplication.Order.dto.OrderFE;
import com.FoodDeliveryApplication.Order.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/order")
public class OrderController {
    @Autowired
    private OrderService orderService;

    @PostMapping("/saveOrder")
    public ResponseEntity<OrderDto> saveOrder(@RequestBody OrderFE order){
        OrderDto savedOrder = orderService.saveOrderinDb(order);
        return new ResponseEntity<>(savedOrder, HttpStatus.OK);
    }




}
