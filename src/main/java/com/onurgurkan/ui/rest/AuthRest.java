package com.onurgurkan.ui.rest;

import com.onurgurkan.payload.request.LoginRequest;
import com.onurgurkan.payload.request.SignupRequest;
import org.springframework.http.ResponseEntity;

public interface AuthRest {
    ResponseEntity<?> authenticateUser(LoginRequest loginRequest);

    ResponseEntity<?> registerUser(SignupRequest signUpRequest);

    ResponseEntity<?> logoutUser();
}
