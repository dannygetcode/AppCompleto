package com.example.mintic.bike.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mintic.bike.model.Bike;
import com.example.mintic.bike.repository.RepositoryBike;

@Service
public class ServiceBike {
    
    @Autowired
    private RepositoryBike repositoryBike;

    
    public List<Bike> getAll() {
        return repositoryBike.getAll();
    }

    public Optional<Bike> getBike(int id) {
        return repositoryBike.getBike(id);
    }

    public Bike save(Bike bike) {
        if (bike.getId() == null) {
            return repositoryBike.save(bike);
        } else {
            Optional<Bike> bike1 = repositoryBike.getBike(bike.getId());
            if (bike1.isEmpty()) {
                return repositoryBike.save(bike);
            } else {
                return bike;
            }
        }
    }
    public Bike update(Bike bike){
        if(bike.getId()!=null){
            Optional<Bike> e = repositoryBike.getBike(bike.getId());
            if(!e.isEmpty()){
                if(bike.getName()!=null){
                    e.get().setName(bike.getName());
                }
                if (bike.getBrand()!=null){
                    e.get().setBrand(bike.getBrand());
                }
                if (bike.getYear()!=null){
                    e.get().setYear(bike.getYear());
                }
                if (bike.getDescription()!=null){
                    e.get().setDescription(bike.getDescription());
                }
                if (bike.getCategory()!=null){
                    e.get().setCategory(bike.getCategory());
                }
                repositoryBike.save(e.get());
                return e.get();
            } else {
                return bike;
            }
        } else {
            return bike;
        }
    }

    public boolean deleteBike(int id) {
        Boolean d = getBike(id).map(bike -> {
            repositoryBike.delete(bike);
            return true;
        }).orElse(false);
        return d;
    }


}
