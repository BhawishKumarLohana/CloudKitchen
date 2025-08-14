package com.FoodDeliveryApplication.OrderMicroService.entity;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor  @Builder
@Document(collection = "database_sequences")
public class DatabaseSequence {
    @Id
    private String id;
    private int Seq;

    public int getSeq(){return this.Seq;}

}
