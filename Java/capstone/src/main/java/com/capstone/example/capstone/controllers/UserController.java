package com.capstone.example.capstone.controllers;

import com.capstone.example.capstone.models.User;
import com.capstone.example.capstone.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    UserRepository userRepository;

    @GetMapping(value = "/users")
    public ResponseEntity<List<User>>GetAllUsers(){
    return new ResponseEntity<>(userRepository.findAll(), HttpStatus.OK);
    }
//
//    @GetMapping(value = "/users/{id}")
//    public ResponseEntity getUserById(@PathVariable Long id){
//        return new ResponseEntity<>(userRepository.findById(id), HttpStatus.OK);
//    }

    @GetMapping(value = "/users/{uid}")
    public ResponseEntity getUserByUid(@PathVariable String uid){
        return new ResponseEntity(userRepository.findUsersByUid(uid), HttpStatus.OK);
    }

    @PostMapping(value = "/users")
    public ResponseEntity postUser(@RequestBody User user){
        userRepository.save(user);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    @DeleteMapping(value = "/users/{id}")
    public ResponseEntity deleteUser(@PathVariable Long id){
        userRepository.deleteById(id);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @PutMapping(value = "/users/{uid}")
    public ResponseEntity updateUser(@RequestBody User updatedUser, @PathVariable String uid){
        userRepository.save(updatedUser);
        return new ResponseEntity(updatedUser, HttpStatus.OK);
    }



}
