package com.FoodDeliveryApplication.OrderMS.repository;

import com.FoodDeliveryApplication.OrderMS.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order,Integer> {
}
