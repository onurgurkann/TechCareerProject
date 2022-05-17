package com.onurgurkan.data.repository;

import com.onurgurkan.business.dto.RoleDto;
import com.onurgurkan.data.entity.ERole;
import com.onurgurkan.data.entity.RoleEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<RoleEntity, Long> {
    Optional<RoleEntity> findRoleByName(ERole name);
}
