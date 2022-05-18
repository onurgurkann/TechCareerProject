package com.onurgurkan.business.services;

import com.onurgurkan.payload.request.LoginRequest;
import com.onurgurkan.payload.request.SignupRequest;
import org.springframework.http.ResponseEntity;

public interface AuthServices {

    public ResponseEntity<?> authenticateUser(LoginRequest loginRequest);

    public ResponseEntity<?> registerUser(SignupRequest signUpRequest);

    public ResponseEntity<?> logoutUser();
}
