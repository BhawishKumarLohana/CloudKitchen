package com.FoodDeliveryApplication.OrderMicroService.services;

import com.FoodDeliveryApplication.OrderMicroService.Repository.OrderRepository;
import com.FoodDeliveryApplication.OrderMicroService.entity.Order;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class OrderService {
    private static final String ORDER_SEQ = "order_seq";

    @Autowired
    private  OrderRepository orderRepository;


    public Order create(Order incoming) {
        // Do NOT set the ID — Mongo will assign an ObjectId automatically
        return orderRepository.save(incoming);
    }



}
