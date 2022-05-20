package com.onurgurkan.ui.rest.impl;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/dashboard")
public class DashboardRestImpl {

    @GetMapping({"","/"})
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public void dashboardAccess(){
    }
}
