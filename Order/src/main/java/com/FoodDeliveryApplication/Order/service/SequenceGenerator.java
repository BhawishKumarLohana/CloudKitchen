package com.FoodDeliveryApplication.Order.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.stereotype.Service;

@Service
public class SequenceGenerator {
    Autowired
    private MongoOperations mongoOperations;

    public int generateNextOrderId(){
        mongoOperations.findAndModify(
                
        )

    }
}
