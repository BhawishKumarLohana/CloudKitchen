package com.FoodDeliveryApp.RestaurantListing.controller;

import com.FoodDeliveryApp.RestaurantListing.dto.RestaurantDto;
import com.FoodDeliveryApp.RestaurantListing.service.RestaurantService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

public class RestaurantControllerTest {

    @InjectMocks
    RestaurantController restaurantController;

    @Mock
    RestaurantService restaurantService;

    @BeforeEach
    public void setUp(){
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testGetAllRestaurants(){
        List<RestaurantDto> mockRestaurants  = Arrays.asList(
                new RestaurantDto(1,"Kumar Foods","Clifton","Karachi","Best",4.6,"https://picsum.photos/200/300"),
                new RestaurantDto(2,"Kumar Foods","Clifton","Karachi","Best",4.6,"https://picsum.photos/200/300")
        );
        when(restaurantService.getAllRestaurants()).thenReturn(mockRestaurants);

        ResponseEntity<List<RestaurantDto>> response = restaurantController.getAllRestaurants();

        assertEquals(HttpStatus.OK,response.getStatusCode());
        assertEquals(mockRestaurants,response.getBody());
    }
}