package com.onurgurkan.business.services;

import com.onurgurkan.business.dto.UserDto;
import com.onurgurkan.data.entity.UserEntity;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Map;

//Services Interface
public interface UserServices {

    // ModelMapper : Dto to Entity - Entity to Dto
    public UserDto EntityToDto(UserEntity userEntity);
    public UserEntity DtoToEntity(UserDto userDto);

    // CRUD
    // Save
    public UserDto createUser(UserDto userDto);

    // List
    public List<UserDto> getAllUsers();

    // Find
    public ResponseEntity<UserDto> getUserById(Long id);

    // Update
    public ResponseEntity<UserDto> updateUser(Long id, UserDto userDto);

    // Delete
    public ResponseEntity<Map<String, Boolean>> deleteUser(Long id);

}
