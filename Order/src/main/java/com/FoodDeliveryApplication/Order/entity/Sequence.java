package com.FoodDeliveryApplication.Order.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collation = "sequence")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Sequence {


    @Id
    private int id;
    private int sequence;

    public int getSequence() {
        return sequence;
    }

    public int getId() {
        return id;
    }
}
