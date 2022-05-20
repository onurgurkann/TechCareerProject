package com.onurgurkan.ui.rest.impl;

import com.onurgurkan.business.dto.UserDto;
import com.onurgurkan.business.services.UserServices;
import com.onurgurkan.ui.rest.UserRest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v1")
public class UserRestImpl implements UserRest {

    @Autowired
    UserServices userServices;

    // Save
    // http://localhost:8080/api/v1/users
    @Override
    @PostMapping("/users")
    public UserDto createUser(@Valid @RequestBody UserDto userDto) {
        return userServices.createUser(userDto);
    }

    // List
    // http://localhost:8080/api/v1/users
    @Override
    @GetMapping("/users")
    public List<UserDto> getAllUsers() {
        return userServices.getAllUsers();
    }

    // Find
    // http://localhost:8080/api/v1/users/1
    @Override
    @GetMapping("/users/{id}")
    public ResponseEntity<UserDto> getUserById(@PathVariable(name = "id") Long id) {
        return userServices.getUserById(id);
    }

    // Update
    // http://localhost:8080/api/v1/users/1
    @Override
    @PutMapping("/users/{id}")
    public ResponseEntity<UserDto> updateUser(@PathVariable(name = "id") Long id,@Valid @RequestBody UserDto userDto) {
        return userServices.updateUser(id, userDto);
    }

    // Delete
    // http://localhost:8080/api/v1/users/1
    @Override
    @DeleteMapping("/users/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable(name = "id") Long id) {
        return userServices.deleteUser(id);
    }
}
