package com.example.springDemo.controller;

import com.example.springDemo.dto.UserSavedto;
import com.example.springDemo.entities.User;
import com.example.springDemo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping("/user")
@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/add")
    public Optional<User> addUser(@RequestBody UserSavedto userSavedto){
        return userService.saveUser(userSavedto);
    }

    @GetMapping("/getUser")
    public List<User> getAllUser(){
        return userService.getByAllUser();
    }

}
