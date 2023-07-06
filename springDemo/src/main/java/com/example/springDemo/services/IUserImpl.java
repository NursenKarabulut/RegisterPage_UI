package com.example.springDemo.services;

import com.example.springDemo.dto.UserSavedto;
import com.example.springDemo.entities.User;

import java.util.List;
import java.util.Optional;

public interface IUserImpl {
    List<User> getByAllUser();
    Optional<User> saveUser(UserSavedto userSavedto);
}
