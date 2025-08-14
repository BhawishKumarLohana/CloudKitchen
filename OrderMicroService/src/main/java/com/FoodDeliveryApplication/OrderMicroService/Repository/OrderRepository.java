package com.FoodDeliveryApplication.OrderMicroService.Repository;


import com.FoodDeliveryApplication.OrderMicroService.entity.Order;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface OrderRepository extends MongoRepository<Order,Integer> {
}
