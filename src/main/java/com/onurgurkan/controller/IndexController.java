package com.onurgurkan.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexController {

    // http://localhost:8080/
    // http://localhost:8080/index
    @GetMapping({"/","/index"})
    public String getIndex(){
        return "index";
    }
}
