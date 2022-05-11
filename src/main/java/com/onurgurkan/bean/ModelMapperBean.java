package com.onurgurkan.bean;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

// ModelMapper Bean (Rest)
@Configuration
public class ModelMapperBean {

    @Bean
    public ModelMapper modelMapper(){
        return new ModelMapper();
    }
}
