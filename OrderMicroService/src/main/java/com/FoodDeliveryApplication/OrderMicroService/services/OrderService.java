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
    @Autowired
    private SequenceGeneratorService seq;

    public Order create(Order incoming) {
        Order order = new Order();
        order.setId(seq.next(ORDER_SEQ));      // << generate incremental int
        order.setUserId(incoming.getUserId());
        order.setRestaurant(incoming.getRestaurant());
        order.setItems(incoming.getItems());
        order.setTotal(incoming.getTotal());
        return orderRepository.save(order);
    }


}
