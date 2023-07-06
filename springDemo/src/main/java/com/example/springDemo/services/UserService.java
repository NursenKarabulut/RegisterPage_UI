package com.example.springDemo.services;

import com.example.springDemo.dto.UserSavedto;
import com.example.springDemo.entities.User;
import com.example.springDemo.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService implements IUserImpl {
    @Autowired
    private UserRepo userRepo;
    @Override
    public List<User> getByAllUser() {
        return userRepo.findAll();
    }
    @Override
    public Optional<User> saveUser(UserSavedto userSavedto) {
        User user=new User();
        user.setEmail(userSavedto.getEmail());
        user.setPassword(userSavedto.getPassword());
        user.setName(userSavedto.getName());
        return Optional.of(userRepo.save(user));
    }
}
