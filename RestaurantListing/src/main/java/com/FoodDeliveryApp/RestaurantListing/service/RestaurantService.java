package com.FoodDeliveryApp.RestaurantListing.service;

import com.FoodDeliveryApp.RestaurantListing.dto.RestaurantDto;
import com.FoodDeliveryApp.RestaurantListing.entity.Restaurant;
import com.FoodDeliveryApp.RestaurantListing.repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class RestaurantService {

    @Autowired
    private RestaurantRepository restaurantRepository;

    public List<RestaurantDto> getAllRestaurants() {
        // Fetch all entities
        List<Restaurant> restaurants = restaurantRepository.findAll();

        return restaurants.stream()
                .map(restaurant -> new RestaurantDto(
                        restaurant.getName(),
                        restaurant.getAddress(),
                        restaurant.getCity(),
                        restaurant.getDescription(),
                        restaurant.getRating(),
                        restaurant.getImageUrl()
                ))
                .collect(Collectors.toList());
    }
    public Optional<RestaurantDto> getRestaurantById(String id) {
        return restaurantRepository.findById(Integer.parseInt(id))
                .map(restaurant -> new RestaurantDto(
                        restaurant.getName(),
                        restaurant.getAddress(),
                        restaurant.getCity(),
                        restaurant.getDescription(),
                        restaurant.getRating(),
                        restaurant.getImageUrl()
                ));
    }
    public RestaurantDto createRestaurant(RestaurantDto request){

        Restaurant restaurant = new Restaurant();
        restaurant.setName(request.getName());
        restaurant.setAddress(request.getAddress());
        restaurant.setCity(request.getCity());
        restaurant.setRating(request.getRating());
        restaurant.setImageUrl(request.getImageUrl());

        Restaurant saved = restaurantRepository.save(restaurant);

        return new RestaurantDto(
                saved.getName(),
                saved.getAddress(),
                saved.getCity(),
                saved.getDescription(),
                saved.getRating(),
                saved.getImageUrl()
        );



    }


}
