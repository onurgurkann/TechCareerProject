package com.onurgurkan.ui.rest;

import com.onurgurkan.business.dto.UserDto;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Map;

public interface UserRest {
    // Save
    UserDto createUser(UserDto userDto);

    // List
    List<UserDto> getAllUsers();

    // Find
    ResponseEntity<UserDto> getUserById(Long id);

    // Update
    ResponseEntity<UserDto> updateUser(Long id, UserDto userDto);

    // Delete
    ResponseEntity<Map<String, Boolean>> deleteUser(Long id);

}
