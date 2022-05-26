package com.onurgurkan.business.services.impl;

import com.onurgurkan.business.services.AuthServices;
import com.onurgurkan.data.entity.ERole;
import com.onurgurkan.data.entity.RoleEntity;
import com.onurgurkan.data.entity.UserEntity;
import com.onurgurkan.data.repository.RoleRepository;
import com.onurgurkan.data.repository.UserRepository;
import com.onurgurkan.payload.request.LoginRequest;
import com.onurgurkan.payload.request.SignupRequest;
import com.onurgurkan.payload.response.MessageResponse;
import com.onurgurkan.payload.response.JwtResponse;
import com.onurgurkan.security.jwt.JwtUtils;
import com.onurgurkan.security.services.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class AuthServicesImpl implements AuthServices {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    JwtUtils jwtUtils;

    @Override
    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());

        return ResponseEntity.ok(new JwtResponse(
                jwt,
                userDetails.getId(),
                userDetails.getName(),
                userDetails.getSurname(),
                userDetails.getUsername(),
                userDetails.getMail(),
                roles));
    }

    @Override
    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
        if (userRepository.existsByUsername(signUpRequest.getUsername())) {
            return ResponseEntity.badRequest().body(new MessageResponse("Hata: Kullanıcı adı zaten alınmış!"));
        }

        if (userRepository.existsByMail(signUpRequest.getMail())) {
            return ResponseEntity.badRequest().body(new MessageResponse("Hata: E-posta adresi zaten kullanılıyor!"));
        }

        UserEntity userEntity = new UserEntity(signUpRequest.getName(),
                signUpRequest.getSurname(),
                signUpRequest.getUsername(),
                signUpRequest.getMail(),
                passwordEncoder.encode(signUpRequest.getPassword()));

        Set<String> strRoles = signUpRequest.getRole();
        Set<RoleEntity> roles = new HashSet<>();

        if (strRoles == null) {
            RoleEntity userRole = roleRepository.findRoleByName(ERole.ROLE_USER)
                    .orElseThrow(() -> new RuntimeException("Hata: Rol bulunamadı."));
            roles.add(userRole);
        } else {
            strRoles.forEach(role -> {
                switch (role) {
                    case "admin":
                        RoleEntity adminRole = roleRepository.findRoleByName(ERole.ROLE_ADMIN)
                                .orElseThrow(() -> new RuntimeException("Hata: Rol bulunamadı."));
                        roles.add(adminRole);
                        break;

                    default:
                        RoleEntity userRole = roleRepository.findRoleByName(ERole.ROLE_USER)
                                .orElseThrow(() -> new RuntimeException("Hata: Rol bulunamadı."));
                        roles.add(userRole);
                }
            });
        }

        userEntity.setRoles(roles);
        userRepository.save(userEntity);

        return ResponseEntity.ok(new MessageResponse("Kullanıcı başarı ile kaydedildi."));
    }

}
