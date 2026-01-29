package com.FoodDeliveryApp.foodCatalogue.service;


import com.FoodDeliveryApp.foodCatalogue.dto.FoodItemDto;
import com.FoodDeliveryApp.foodCatalogue.repository.FoodCatalogueRepo;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.web.client.RestTemplate;

@ExtendWith(MockitoExtension.class)
public class FoodCatalogueServiceTest {

    @Mock
    private FoodCatalogueRepo foodCatalogueRepo;

    @Mock
    private RestTemplate restTemplate;

    @InjectMocks
    void addFoodItemShouldAddFootItem(FoodItemDto request){


    }


}
