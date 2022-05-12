package com.onurgurkan.audit;

import org.springframework.data.domain.AuditorAware;

import java.util.Optional;

// Audit Configuration
public class AuditorAwareImpl implements AuditorAware<String> {
    @Override
    public Optional<String> getCurrentAuditor() {
        // Database -> whoever logged in
        return Optional.of("OnurGurkan");
    }
}