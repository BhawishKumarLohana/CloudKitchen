package com.FoodDeliveryApp.RestaurantListing;

import com.cloudinary.Cloudinary;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.HashMap;
import java.util.Map;

@SpringBootApplication
public class RestaurantListingApplication {

	public static void main(String[] args) {
		SpringApplication.run(RestaurantListingApplication.class, args);
	}

	@Bean
	public Cloudinary getCloudinary(){
		Map config = new HashMap();
		config.put("cloud_name","dmwkallr3");
		config.put("api_key","611284444599281");
		config.put("api_secret","_U6ItVU_FPl2jIHLeHP4ci4KbZM");
		config.put("secure",true);
		return new Cloudinary(config);
	}

}
