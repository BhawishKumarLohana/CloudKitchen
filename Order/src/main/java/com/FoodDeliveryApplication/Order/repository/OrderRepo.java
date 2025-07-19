package com.FoodDeliveryApplication.Order.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.FoodDeliveryApplication.Order.entity.Order;
@Repository
public interface OrderRepo extends MongoRepository<Order,Integer> {


}
