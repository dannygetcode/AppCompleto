package com.example.mintic.bike.controller;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

import com.example.mintic.bike.model.Message;
import com.example.mintic.bike.service.ServiceMessage;

@RestController
@RequestMapping("/api/Message")
@CrossOrigin (origins ="*",methods ={RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE,RequestMethod.PUT})
public class ControllerMessage {
    
    @Autowired
    private ServiceMessage serviceMessage;

    
    @GetMapping("/all")
    public List<Message> getAll(){
        return serviceMessage.getAll();
    }

    @GetMapping("/{id}")
    public Optional<Message> getMessage(@PathVariable("id") int id) {
        return serviceMessage.getMessage(id);
    }


    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Message save(@RequestBody Message message) {return serviceMessage.save(message);
    }

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Message update(@RequestBody Message message){
        return serviceMessage.update(message);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable("id") int id){
        serviceMessage.deleteMessage(id);
    }
}
