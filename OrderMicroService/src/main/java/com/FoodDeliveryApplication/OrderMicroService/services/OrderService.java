package com.FoodDeliveryApplication.OrderMicroService.services;

import com.FoodDeliveryApplication.OrderMicroService.Repository.OrderRepository;
import com.FoodDeliveryApplication.OrderMicroService.dto.FoodItemDto;
import com.FoodDeliveryApplication.OrderMicroService.dto.OrderDto;
import com.FoodDeliveryApplication.OrderMicroService.entity.Order;
import com.netflix.discovery.converters.Auto;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class OrderService {
    private static final String ORDER_SEQ = "order_seq";

    @Autowired
    private  OrderRepository orderRepository;

    @Autowired
    private RestTemplate restTemplate;



    public Order create(OrderDto incoming) {
        Order order = new Order();
        List<FoodItemDto> items = incoming.getItems();

        for (FoodItemDto item : items) {
            // Build the request body to send to /food/decrease
            Map<String, Object> request = new HashMap<>();
            request.put("itemId", item.getId());
            request.put("quantity", item.getQuantity());

            // POST to FoodCatalogue service via Eureka
            restTemplate.postForObject(
                    "http://FOODCATALOGUE/food/decrease",
                    request,
                    Void.class
            );

            System.out.println("Decreased in FoodCatalogue: " + item.getId());
        }


        order.setUserId(incoming.getUserId());
        order.setItems(incoming.getItems());
        order.setTotal(incoming.getTotal());
        return orderRepository.save(order);
    }



}
