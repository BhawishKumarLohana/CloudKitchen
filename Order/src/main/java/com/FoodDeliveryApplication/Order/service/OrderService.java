package com.FoodDeliveryApplication.Order.service;

import com.FoodDeliveryApplication.Order.dto.OrderDto;
import com.FoodDeliveryApplication.Order.dto.OrderFE;
import com.FoodDeliveryApplication.Order.dto.User;
import com.FoodDeliveryApplication.Order.entity.Order;
import com.FoodDeliveryApplication.Order.repository.OrderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class OrderService {
    @Autowired
    private OrderRepo orderRepo;

    @Autowired
    private SequenceGenerator sequenceGenerator;

    @Autowired
    private RestTemplate restTemplate;


    public OrderDto saveOrderinDb(OrderFE order){
        // public Order(Integer orderId, User user, Restaurant restaurant, List<FoodItem> foodItemList)
        Integer newOrderID = sequenceGenerator.generateNextOrderId();
        User user =   fetchUserDetailsFromUserId(order.getUserId());
        Order savedOrder  = new Order(newOrderID,user,order.getRestaurant(),order.getFoodItemList());
        orderRepo.save(savedOrder);

        return new OrderDto(
                savedOrder.getOrderId(),
                savedOrder.getUser(),
                savedOrder.getRestaurant(),
                savedOrder.getFoodItemList()
        );


    }
    private User fetchUserDetailsFromUserId(Integer id){

        return restTemplate.getForObject("http://UserMicroService/user/" + id,User.class);

    }


}
