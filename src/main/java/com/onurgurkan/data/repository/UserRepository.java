package com.onurgurkan.data.repository;

import com.onurgurkan.business.dto.UserDto;
import com.onurgurkan.data.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {
    Optional<UserEntity> findUserByUsername(String username);
    Boolean existsByUsername(String username);
    Boolean existsByMail(String mail);
}
