package com.example.mintic.bike.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

import com.example.mintic.bike.model.Bike;
import com.example.mintic.bike.service.ServiceBike;

@RestController
@RequestMapping("/api/Bike")
@CrossOrigin (origins ="*",methods ={RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE,RequestMethod.PUT})
public class ControllerBike {

    @Autowired
    private ServiceBike serviceBike;
    

    @GetMapping("/all")
    public List<Bike> getAll(){
        return serviceBike.getAll();
    }

    @GetMapping("/{id}")
    public Optional<Bike> getBike(@PathVariable("id") int id) {
        return serviceBike.getBike(id);
    }


    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Bike save(@RequestBody Bike bike) {
        return serviceBike.save(bike);
    }

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Bike update(@RequestBody Bike bike){
        return serviceBike.update(bike);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable("id") int id){
        serviceBike.deleteBike(id);
    }
}
