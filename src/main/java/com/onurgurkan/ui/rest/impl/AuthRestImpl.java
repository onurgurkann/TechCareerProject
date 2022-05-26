package com.onurgurkan.ui.rest.impl;

import com.onurgurkan.business.services.AuthServices;
import com.onurgurkan.payload.request.LoginRequest;
import com.onurgurkan.payload.request.SignupRequest;
import com.onurgurkan.ui.rest.AuthRest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/api/auth")
public class AuthRestImpl implements AuthRest {

    @Autowired
    AuthServices authServices;

    @Override
    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
        return authServices.authenticateUser(loginRequest);
    }

    @Override
    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
        return authServices.registerUser(signUpRequest);
    }
}
