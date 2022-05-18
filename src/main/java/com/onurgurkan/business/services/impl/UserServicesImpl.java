package com.onurgurkan.business.services.impl;

import com.onurgurkan.business.dto.UserDto;
import com.onurgurkan.business.services.UserServices;
import com.onurgurkan.data.entity.ERole;
import com.onurgurkan.data.entity.RoleEntity;
import com.onurgurkan.data.entity.UserEntity;
import com.onurgurkan.data.repository.RoleRepository;
import com.onurgurkan.data.repository.UserRepository;
import com.onurgurkan.exception.ResourceNotFoundException;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@Service
public class UserServicesImpl implements UserServices {

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    ModelMapper modelMapper;

    @Autowired
    PasswordEncoder passwordEncoder;

    // ModelMapper : Entity to Dto - Dto to Entity

    @Override
    public UserDto EntityToDto(UserEntity userEntity) {
        UserDto userDto = modelMapper.map(userEntity, UserDto.class);
        return userDto;
    }

    @Override
    public UserEntity DtoToEntity(UserDto userDto) {
        UserEntity userEntity = modelMapper.map(userDto, UserEntity.class);
        return userEntity;
    }

    // CRUD

    // Save
    // http://localhost:8080/users/save
    @Override
    @PostMapping("users/save")
    public UserDto createUser(@RequestBody UserDto userDto) {
        UserEntity entity = DtoToEntity(userDto);
        entity.setPassword(passwordEncoder.encode(userDto.getPassword()));
        userRepository.save(entity);
        return userDto;
    }

    // List
    // http://localhost:8080/users/list
    @Override
    @GetMapping("/users/list")
    public List<UserDto> getAllUsers() {
        List<UserDto> list = new ArrayList<>();
        Iterable<UserEntity> userList = userRepository.findAll();
        for(UserEntity entity : userList){
            UserDto userDto = EntityToDto(entity);
            list.add(userDto);
        }
        return list;
    }

    // Find
    // http://localhost:8080/users/find/1
    @Override
    @GetMapping("users/find/{id}")
    public ResponseEntity<UserDto> getUserById(@PathVariable(name = "id") Long id) {
        //Find
        UserEntity userEntity = userRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("User not found. User ID : "+id));
        //EntityToDto
        UserDto userDto = EntityToDto(userEntity);
        return ResponseEntity.ok(userDto);
    }

    // Update
    // http://localhost:8080/users/update/1
    @Override
    @PutMapping("/users/update/{id}")
    public ResponseEntity<UserDto> updateUser(@PathVariable(name = "id") Long id, UserDto userDto) {
        //DtoToEntity
        UserEntity userEntity = DtoToEntity(userDto);
        //Find
        UserEntity findUserEntity = userRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("User not found. User ID : "+id));
        //Set
        findUserEntity.setName(userEntity.getName());
        findUserEntity.setSurname(userEntity.getSurname());
        findUserEntity.setUsername(userEntity.getUsername());
        findUserEntity.setMail(userEntity.getMail());
        findUserEntity.setPassword(passwordEncoder.encode(userEntity.getPassword()));

        Set<String> role = userDto.getRoles();
        Set<RoleEntity> roles = new HashSet<>();

        if (role == null) {
            RoleEntity userRole = roleRepository.findRoleByName(ERole.ROLE_USER)
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            roles.add(userRole);
        } else {
            role.forEach(r -> {
                switch (r) {
                    case "admin":
                        RoleEntity adminRole = roleRepository.findRoleByName(ERole.ROLE_ADMIN)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(adminRole);
                        break;

                    default:
                        RoleEntity userRole = roleRepository.findRoleByName(ERole.ROLE_USER)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(userRole);
                }
            });
        }
        findUserEntity.setRoles(roles);

        //Save
        UserEntity saveUserEntity = userRepository.save(findUserEntity);
        //EntityToDto
        UserDto dto = EntityToDto(saveUserEntity);
        return ResponseEntity.ok(dto);
    }

    // Delete
    // http://localhost:8080/users/delete/1
    @Override
    @DeleteMapping("users/delete/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable(name = "id") Long id) {
        //Find
        UserEntity userEntity = userRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("User not found. User ID : "+id));
        //Delete
        userRepository.delete(userEntity);
        Map<String, Boolean> response = new HashMap<>();
        response.put("Deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
