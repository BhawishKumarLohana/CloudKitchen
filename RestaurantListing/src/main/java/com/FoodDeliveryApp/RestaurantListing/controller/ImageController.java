package com.FoodDeliveryApp.RestaurantListing.controller;

import com.FoodDeliveryApp.RestaurantListing.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Map;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/cloud")
public class ImageController {
    @Autowired
    private ImageService imageService;

    @PostMapping("/upload")
    public ResponseEntity<Map> uploadImage(@RequestParam("image") MultipartFile file){
        Map data =  this.imageService.upload(file);
        return new ResponseEntity<>(data, HttpStatus.OK);

    }
}
