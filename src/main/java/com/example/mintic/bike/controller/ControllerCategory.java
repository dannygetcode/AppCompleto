package com.example.mintic.bike.controller;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

import com.example.mintic.bike.model.Category;
import com.example.mintic.bike.service.ServiceCategory;

@RestController
@RequestMapping("/api/Category")
@CrossOrigin (origins ="*",methods ={RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE,RequestMethod.PUT})
public class ControllerCategory {
    
    @Autowired
    private ServiceCategory serviceCategory;

    @GetMapping("/all")
    public List<Category> getAll(){
        return serviceCategory.getAll();
    }

    @GetMapping("/{id}")
    public Optional<Category> getCategory(@PathVariable("id") int id) {
        return serviceCategory.getCategory(id);
    }


    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Category save(@RequestBody Category category) {
        return serviceCategory.save(category);
    }

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Category update(@RequestBody Category category){
        return serviceCategory.update(category);
    }
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable("id") int id){serviceCategory.deleteCategory(id);



    }


}
