package com.FoodDeliveryApplication.OrderMicroService.services;

import com.FoodDeliveryApplication.OrderMicroService.Repository.OrderRepository;
import com.FoodDeliveryApplication.OrderMicroService.dto.OrderDto;
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


    public Order create(OrderDto incoming) {
        Order order = new Order();
        order.setUserId(incoming.getUserId());
        order.setItems(incoming.getItems());
        order.setTotal(incoming.getTotal());
        return orderRepository.save(order);
    }



}
