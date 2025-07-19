package com.FoodDeliveryApplication.Order.service;

import com.FoodDeliveryApplication.Order.dto.OrderDto;
import com.FoodDeliveryApplication.Order.dto.OrderFE;
import com.FoodDeliveryApplication.Order.entity.Order;
import com.FoodDeliveryApplication.Order.repository.OrderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {
    @Autowired
    private OrderRepo orderRepo;

    public OrderDto saveOrderinDb(OrderFE order){
        Order savedOrder  = new Order();
    }

}
